// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   doc,
//   setDoc,
//   getDoc,
//   updateDoc,
//   increment,
//   serverTimestamp,
// } from "firebase/firestore";
// import { db } from "../firebase/config";

// // Create context
// const VisitorContext = createContext(null);

// // Custom hook with safe fallback (same pattern as your AuthContext)
// export const useVisitor = () => {
//   const context = useContext(VisitorContext);

//   if (!context) {
//     console.warn("useVisitor used outside VisitorProvider - returning defaults");
//     return {
//       visitorId: null,
//       visitorProfile: null,
//       loading: true,
//       trackSection: () => {},
//       trackProject: () => {},
//     };
//   }

//   return context;
// };

// // Visitor Provider Component
// export const VisitorProvider = ({ children }) => {
//   const [visitorId, setVisitorId] = useState(null);
//   const [visitorProfile, setVisitorProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Get or create visitor ID
//   const getVisitorId = () => {
//     let id = localStorage.getItem("portfolio_visitor_id");

//     if (!id) {
//       id = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//       localStorage.setItem("portfolio_visitor_id", id);
//     }

//     return id;
//   };

//   // Detect visitor type from referrer
//   const detectVisitorType = () => {
//     const referrer = document.referrer.toLowerCase();

//     if (referrer.includes("linkedin.com")) return "recruiter";
//     if (referrer.includes("github.com")) return "developer";
//     if (referrer.includes("google.com")) return "searcher";
//     return "direct";
//   };

//   // Initialize visitor profile in Firestore
//   const initVisitorProfile = async (id) => {
//     const visitorRef = doc(db, "visitors", id);

//     try {
//       const visitorDoc = await getDoc(visitorRef);
//       const visitorType = detectVisitorType();

//       if (!visitorDoc.exists()) {
//         // New visitor - create profile
//         const newProfile = {
//           visitorId: id,
//           firstSeen: serverTimestamp(),
//           lastSeen: serverTimestamp(),
//           totalVisits: 1,
//           totalTimeSpent: 0,
//           detectedType: visitorType,
//           referralSource: document.referrer || "direct",
//           device: {
//             userAgent: navigator.userAgent,
//             platform: navigator.platform,
//             language: navigator.language,
//           },
//           interests: {
//             sectionsViewed: [],
//             projectsViewed: [],
//             timePerSection: {},
//           },
//           leadScore: 0,
//           createdAt: serverTimestamp(),
//         };

//         await setDoc(visitorRef, newProfile);
//         console.log("✅ New visitor profile created:", id);
//         setVisitorProfile(newProfile);
//       } else {
//         // Returning visitor - update
//         const existingProfile = visitorDoc.data();

//         await updateDoc(visitorRef, {
//           lastSeen: serverTimestamp(),
//           totalVisits: increment(1),
//         });

//         console.log("👋 Welcome back, visitor!", id);
//         setVisitorProfile({
//           ...existingProfile,
//           totalVisits: (existingProfile.totalVisits || 0) + 1,
//         });
//       }
//     } catch (error) {
//       console.error("❌ Error initializing visitor:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Track section view
//   const trackSection = async (sectionName, timeSpent = 0) => {
//     if (!visitorId) return;

//     const visitorRef = doc(db, "visitors", visitorId);

//     try {
//       const visitorDoc = await getDoc(visitorRef);

//       if (visitorDoc.exists()) {
//         const interests = visitorDoc.data().interests || {};
//         const sectionsViewed = interests.sectionsViewed || [];
//         const timePerSection = interests.timePerSection || {};

//         // Add section if not already viewed
//         if (!sectionsViewed.includes(sectionName)) {
//           sectionsViewed.push(sectionName);
//         }

//         // Update time spent
//         timePerSection[sectionName] = (timePerSection[sectionName] || 0) + timeSpent;

//         await updateDoc(visitorRef, {
//           "interests.sectionsViewed": sectionsViewed,
//           "interests.timePerSection": timePerSection,
//           totalTimeSpent: increment(timeSpent),
//         });

//         console.log(`📍 Tracked: ${sectionName} (${timeSpent}s)`);
//       }
//     } catch (error) {
//       console.error("❌ Error tracking section:", error);
//     }
//   };

//   // Track project view
//   const trackProject = async (projectName) => {
//     if (!visitorId) return;

//     const visitorRef = doc(db, "visitors", visitorId);

//     try {
//       const visitorDoc = await getDoc(visitorRef);

//       if (visitorDoc.exists()) {
//         const interests = visitorDoc.data().interests || {};
//         const projectsViewed = interests.projectsViewed || [];

//         if (!projectsViewed.includes(projectName)) {
//           projectsViewed.push(projectName);

//           await updateDoc(visitorRef, {
//             "interests.projectsViewed": projectsViewed,
//           });

//           console.log(`🎯 Tracked project: ${projectName}`);
//         }
//       }
//     } catch (error) {
//       console.error("❌ Error tracking project:", error);
//     }
//   };

//   // Initialize on mount
//   useEffect(() => {
//     const id = getVisitorId();
//     setVisitorId(id);
//     initVisitorProfile(id);

//     // Track page unload time
//     const pageLoadTime = Date.now();

//     const handleBeforeUnload = () => {
//       const timeSpent = Math.floor((Date.now() - pageLoadTime) / 1000);
//       if (timeSpent > 5) {
//         trackSection("overall", timeSpent);
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   const value = {
//     visitorId,
//     visitorProfile,
//     loading,
//     trackSection,
//     trackProject,
//   };

//   return (
//     <VisitorContext.Provider value={value}>
//       {children}
//     </VisitorContext.Provider>
//   );
// };

// export default VisitorContext;

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getVisitorIntelligence } from "../services/visitorIntelligence";

const VisitorContext = createContext(null);

export const useVisitor = () => {
  const context = useContext(VisitorContext);
  if (!context) {
    console.warn("useVisitor must be used within VisitorProvider");
    return {
      isReturning: false,
      visitorType: "unknown",
      predictions: [],
      greeting: null,
      trackSection: () => {},
      trackHover: () => {},
      trackAIInteraction: () => {},
      checkExitIntent: () => false,
      getBestPrediction: () => null,
      dismissGreeting: () => {},
    };
  }
  return context;
};

export const VisitorProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [visitorType, setVisitorType] = useState("unknown");
  const [visitorProfile, setVisitorProfile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [personalizedGreeting, setPersonalizedGreeting] = useState(null);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const intelligence = getVisitorIntelligence();

  // Initialize on mount
  useEffect(() => {
    // ✅ Delay initialization to not block first render
    const timer = setTimeout(async () => {
      try {
        const result = await intelligence.initialize();
        setIsReturning(result.isReturning);
        setVisitorProfile(result.profile);
        setVisitorType(result.profile?.detectedType || "unknown");

        if (result.isReturning) {
          const greeting = intelligence.getPersonalizedGreeting();
          setPersonalizedGreeting(greeting);
        }

        setIsInitialized(true);
      } catch (error) {
        console.error("Visitor context init error:", error);
        setIsInitialized(true);
      }
    }, 10000); // ✅ Wait 2 seconds before tracking

    return () => clearTimeout(timer);
  }, []);

  // Track section view
  const trackSection = useCallback(
    (sectionName) => {
      setCurrentSection(sectionName);
      intelligence.trackSectionView(sectionName);

      // Update predictions
      const newPredictions = intelligence.updatePredictions(sectionName);
      setPredictions(newPredictions);
    },
    [intelligence]
  );

  // Track hover
  const trackHover = useCallback(
    (elementId, duration) => {
      intelligence.trackHover(elementId, duration);

      // Check for new predictions
      const newPredictions = intelligence.updatePredictions(currentSection);
      setPredictions(newPredictions);
    },
    [intelligence, currentSection]
  );

  // Track scroll
  const trackScroll = useCallback(
    (depth) => {
      intelligence.trackScroll(depth);
    },
    [intelligence]
  );

  // Track AI interaction
  const trackAIInteraction = useCallback(
    (question, response) => {
      intelligence.trackAIInteraction(question, response);
    },
    [intelligence]
  );

  // Check exit intent
  const checkExitIntent = useCallback(() => {
    return intelligence.shouldShowExitIntent();
  }, [intelligence]);

  // Get best prediction
  const getBestPrediction = useCallback(() => {
    return intelligence.getPrediction();
  }, [intelligence]);

  // Dismiss greeting
  const dismissGreeting = useCallback(() => {
    setPersonalizedGreeting(null);
  }, []);

  const value = {
    isInitialized,
    isReturning,
    visitorType,
    visitorProfile,
    predictions,
    personalizedGreeting,
    currentSection,
    showExitIntent,
    setShowExitIntent,
    trackSection,
    trackHover,
    trackScroll,
    trackAIInteraction,
    checkExitIntent,
    getBestPrediction,
    dismissGreeting,
  };

  return (
    <VisitorContext.Provider value={value}>{children}</VisitorContext.Provider>
  );
};

export default VisitorContext;
