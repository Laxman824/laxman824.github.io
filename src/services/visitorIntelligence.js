/**
 * 🧠 VISITOR INTELLIGENCE SERVICE
 *
 * Tracks, analyzes, and predicts visitor behavior
 * Powers the predictive features of the portfolio
 */

import { db } from "../firebase/config";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  increment,
  arrayUnion,
} from "firebase/firestore";

// Generate or retrieve visitor ID
const getVisitorId = () => {
  let visitorId = localStorage.getItem("portfolio_visitor_id");
  if (!visitorId) {
    visitorId =
      "visitor_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("portfolio_visitor_id", visitorId);
  }
  return visitorId;
};

// Detect visitor type based on referral source
const detectVisitorType = () => {
  const referrer = document.referrer.toLowerCase();
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source")?.toLowerCase() || "";
  const utmMedium = urlParams.get("utm_medium")?.toLowerCase() || "";

  // Detection rules
  if (referrer.includes("linkedin") || utmSource.includes("linkedin")) {
    return { type: "recruiter", confidence: 0.85, source: "linkedin" };
  }
  if (referrer.includes("github") || utmSource.includes("github")) {
    return { type: "developer", confidence: 0.9, source: "github" };
  }
  if (referrer.includes("google") || referrer.includes("bing")) {
    return { type: "searcher", confidence: 0.7, source: "search" };
  }
  if (referrer.includes("twitter") || referrer.includes("x.com")) {
    return { type: "social", confidence: 0.75, source: "twitter" };
  }
  if (referrer.includes("producthunt") || referrer.includes("hackernews")) {
    return { type: "techie", confidence: 0.85, source: "tech-community" };
  }
  if (!referrer) {
    return { type: "direct", confidence: 0.6, source: "direct" };
  }

  return { type: "unknown", confidence: 0.5, source: referrer };
};

// Calculate lead score based on behavior
const calculateLeadScore = (visitorData) => {
  let score = 0;

  // Visit frequency (max 25 points)
  score += Math.min(visitorData.totalVisits * 5, 25);

  // Time spent (max 25 points)
  const minutesSpent = (visitorData.totalTimeSpent || 0) / 60;
  score += Math.min(minutesSpent * 2, 25);

  // Sections viewed (max 20 points)
  const sectionsViewed = visitorData.sectionsViewed?.length || 0;
  score += Math.min(sectionsViewed * 4, 20);

  // Key actions (max 30 points)
  if (visitorData.viewedProjects) score += 10;
  if (visitorData.viewedContact) score += 10;
  if (visitorData.interactedWithAI) score += 10;

  // Visitor type bonus
  if (visitorData.detectedType === "recruiter") score += 15;
  if (visitorData.detectedType === "developer") score += 10;

  return Math.min(score, 100);
};

// Main Intelligence Class
class VisitorIntelligenceService {
  constructor() {
    this.visitorId = getVisitorId();
    this.sessionStart = Date.now();
    this.currentSection = "home";
    this.hoverData = {};
    this.clickData = [];
    this.scrollDepth = 0;
    this.isReturning = false;
    this.visitorProfile = null;
    this.behaviorPatterns = [];
    this.predictions = [];
  }

  // Initialize and load visitor data
  async initialize() {
    try {
      const visitorRef = doc(db, "visitors", this.visitorId);
      const visitorSnap = await getDoc(visitorRef);

      const detectedInfo = detectVisitorType();

      if (visitorSnap.exists()) {
        // Returning visitor
        this.isReturning = true;
        this.visitorProfile = visitorSnap.data();

        // Update visit count
        await updateDoc(visitorRef, {
          totalVisits: increment(1),
          lastSeen: serverTimestamp(),
          sessions: arrayUnion({
            start: new Date().toISOString(),
            referrer: document.referrer,
            userAgent: navigator.userAgent,
          }),
        });

        console.log("🔄 Returning visitor detected:", this.visitorId);
        return {
          isReturning: true,
          profile: this.visitorProfile,
          lastVisit: this.visitorProfile.lastSeen?.toDate?.() || null,
          interests: this.visitorProfile.interests || [],
          previousQuestions: this.visitorProfile.aiQuestions || [],
        };
      } else {
        // New visitor
        this.isReturning = false;

        const newProfile = {
          visitorId: this.visitorId,
          firstSeen: serverTimestamp(),
          lastSeen: serverTimestamp(),
          totalVisits: 1,
          totalTimeSpent: 0,
          detectedType: detectedInfo.type,
          typeConfidence: detectedInfo.confidence,
          referralSource: detectedInfo.source,
          fullReferrer: document.referrer,
          userAgent: navigator.userAgent,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          sectionsViewed: [],
          projectsViewed: [],
          aiQuestions: [],
          interests: [],
          leadScore: 0,
          sessions: [
            {
              start: new Date().toISOString(),
              referrer: document.referrer,
              userAgent: navigator.userAgent,
            },
          ],
        };

        await setDoc(visitorRef, newProfile);
        this.visitorProfile = newProfile;

        console.log(
          "🆕 New visitor tracked:",
          this.visitorId,
          "Type:",
          detectedInfo.type
        );
        return {
          isReturning: false,
          profile: newProfile,
          detectedType: detectedInfo,
        };
      }
    } catch (error) {
      console.error("❌ Visitor intelligence error:", error);
      return { isReturning: false, profile: null, error };
    }
  }

  // Track section view
  async trackSectionView(sectionName) {
    this.currentSection = sectionName;

    try {
      const visitorRef = doc(db, "visitors", this.visitorId);
      await updateDoc(visitorRef, {
        sectionsViewed: arrayUnion(sectionName),
        lastSection: sectionName,
        [`sectionTime.${sectionName}`]: increment(1),
      });

      // Update predictions based on section
      this.updatePredictions(sectionName);
    } catch (error) {
      console.warn("Section tracking error:", error);
    }
  }

  // Track hover behavior
  trackHover(elementId, duration) {
    if (!this.hoverData[elementId]) {
      this.hoverData[elementId] = { count: 0, totalDuration: 0 };
    }
    this.hoverData[elementId].count++;
    this.hoverData[elementId].totalDuration += duration;

    // If hovering for more than 3 seconds, it's significant interest
    if (duration > 3000) {
      this.behaviorPatterns.push({
        type: "extended_hover",
        element: elementId,
        duration,
        timestamp: Date.now(),
      });
    }
  }

  // Track scroll depth
  trackScroll(depth) {
    if (depth > this.scrollDepth) {
      this.scrollDepth = depth;

      // Track significant scroll milestones
      if (
        depth >= 75 &&
        !this.behaviorPatterns.find((p) => p.type === "deep_scroll")
      ) {
        this.behaviorPatterns.push({
          type: "deep_scroll",
          depth,
          timestamp: Date.now(),
        });
      }
    }
  }

  // Track AI interaction
  async trackAIInteraction(question, response) {
    try {
      const visitorRef = doc(db, "visitors", this.visitorId);
      await updateDoc(visitorRef, {
        interactedWithAI: true,
        aiQuestions: arrayUnion({
          question,
          timestamp: new Date().toISOString(),
        }),
        lastAIInteraction: serverTimestamp(),
      });

      // Analyze question for interests
      const interests = this.extractInterests(question);
      if (interests.length > 0) {
        await updateDoc(visitorRef, {
          interests: arrayUnion(...interests),
        });
      }
    } catch (error) {
      console.warn("AI interaction tracking error:", error);
    }
  }

  // Extract interests from question
  extractInterests(question) {
    const interests = [];
    const q = question.toLowerCase();

    if (
      q.includes("python") ||
      q.includes("java") ||
      q.includes("javascript")
    ) {
      interests.push("programming");
    }
    if (
      q.includes("ai") ||
      q.includes("ml") ||
      q.includes("machine learning")
    ) {
      interests.push("ai_ml");
    }
    if (q.includes("project") || q.includes("work") || q.includes("built")) {
      interests.push("projects");
    }
    if (q.includes("hire") || q.includes("available") || q.includes("rate")) {
      interests.push("hiring");
    }
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      interests.push("contact");
    }
    if (q.includes("experience") || q.includes("background")) {
      interests.push("experience");
    }

    return interests;
  }

  // Update predictions based on behavior
  updatePredictions(currentSection) {
    this.predictions = [];

    // Based on section patterns
    if (
      currentSection === "projects" &&
      this.visitorProfile?.detectedType === "recruiter"
    ) {
      this.predictions.push({
        action: "show_contact_cta",
        confidence: 0.8,
        message: "Interested in Laxman's work? Let's schedule a call!",
      });
    }

    if (currentSection === "experience" && this.scrollDepth > 50) {
      this.predictions.push({
        action: "offer_resume",
        confidence: 0.75,
        message: "Want a detailed resume? I can send it to your email!",
      });
    }

    if (this.hoverData["ai-projects"]?.totalDuration > 5000) {
      this.predictions.push({
        action: "ai_demo",
        confidence: 0.85,
        message:
          "I see you're interested in AI! Want me to walk you through Laxman's RAG system?",
      });
    }

    return this.predictions;
  }

  // Get prediction for proactive popup
  getPrediction() {
    if (this.predictions.length === 0) return null;

    // Return highest confidence prediction
    return this.predictions.sort((a, b) => b.confidence - a.confidence)[0];
  }

  // Check if should show exit intent popup
  shouldShowExitIntent() {
    // Don't show if already shown in this session
    if (sessionStorage.getItem("exit_intent_shown")) return false;

    // Don't show for very short visits
    const timeOnSite = (Date.now() - this.sessionStart) / 1000;
    if (timeOnSite < 10) return false;

    // Show for engaged visitors
    return this.scrollDepth > 25 || this.behaviorPatterns.length > 0;
  }

  // Get personalized greeting for returning visitor
  getPersonalizedGreeting() {
    if (!this.isReturning || !this.visitorProfile) {
      return null;
    }

    const lastVisit = this.visitorProfile.lastSeen?.toDate?.();
    const interests = this.visitorProfile.interests || [];
    const previousQuestions = this.visitorProfile.aiQuestions || [];

    let greeting = "Welcome back! ";

    if (lastVisit) {
      const daysSince = Math.floor(
        (Date.now() - lastVisit.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysSince === 0) {
        greeting += "Good to see you again today! ";
      } else if (daysSince === 1) {
        greeting += "Nice to see you again! ";
      } else {
        greeting += `It's been ${daysSince} days since your last visit! `;
      }
    }

    if (interests.includes("projects")) {
      greeting += "I have some new project updates for you!";
    } else if (interests.includes("hiring")) {
      greeting += "Ready to discuss opportunities?";
    } else if (previousQuestions.length > 0) {
      greeting += "Shall we continue where we left off?";
    } else {
      greeting += "How can I help you today?";
    }

    return greeting;
  }

  // Save session data before leaving
  async saveSessionData() {
    const sessionDuration = Math.floor((Date.now() - this.sessionStart) / 1000);

    try {
      const visitorRef = doc(db, "visitors", this.visitorId);
      const newLeadScore = calculateLeadScore({
        ...this.visitorProfile,
        totalTimeSpent:
          (this.visitorProfile?.totalTimeSpent || 0) + sessionDuration,
      });

      await updateDoc(visitorRef, {
        totalTimeSpent: increment(sessionDuration),
        lastScrollDepth: this.scrollDepth,
        hoverPatterns: this.hoverData,
        behaviorPatterns: arrayUnion(...this.behaviorPatterns),
        leadScore: newLeadScore,
        lastSeen: serverTimestamp(),
      });

      console.log(
        "💾 Session data saved. Duration:",
        sessionDuration,
        "seconds"
      );
    } catch (error) {
      console.warn("Session save error:", error);
    }
  }
}

// Singleton instance
let intelligenceInstance = null;

export const getVisitorIntelligence = () => {
  if (!intelligenceInstance) {
    intelligenceInstance = new VisitorIntelligenceService();
  }
  return intelligenceInstance;
};

export default VisitorIntelligenceService;
