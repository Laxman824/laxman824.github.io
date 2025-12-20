// VoiceAgentHelpers.js - ENHANCED WITH VISUAL FEEDBACK
import { getFunctions, httpsCallable } from "firebase/functions";
import {
  ProactiveSuggestionsEngine,
  TaskOrchestrator,
  IntentPredictor,
  QuestionDecomposer,
  FollowUpGenerator,
  PreferenceLearner,
} from "./AgenticHelpers";

// ============= PORTFOLIO DATA =============
export const LAXMAN_PORTFOLIO_DATA = `
K LAXMAN - SDE @ CAMS Chennai | IIT Delhi CSE 2024

CURRENT: SDE at CAMS (Jun 2024-Present)
- CamsLens GenAI: 80k+ docs/month, 95% accuracy
- Tech: Vertex AI Gemini-flash 2.0, GCP, BigQuery

TOP PROJECTS:
1. CamsLens Enterprise GenAI (2024) - 80k docs, 95% accuracy, Vertex AI
2. Financial Email AI (2025) - FastAPI, LLM, 95% PAN/ARN extraction
3. Stock Exchange (2024) - Java Spring Boot, JWT, 100+ users
4. Table Recognition (2023) - PDF ML, 90% SVM accuracy
5. RAVI Accessibility (2022) - Flask, 500+ STEM docs

EDUCATION: IIT Delhi Dual Degree CSE (2018-2024)
- TA for 300+ students
- Specialization: AI/ML, CV, NLP

SKILLS:
- Languages: Java, Python, JavaScript
- AI/ML: PyTorch, Vertex AI, OpenCV, NLP
- Cloud: GCP (Cloud Run, Vertex AI, BigQuery), AWS, Docker
- Full Stack: React, Node.js, Spring Boot, MongoDB

CONTACT:
Email: Laxmankethavath5@gmail.com
Phone: +91-9000063740
LinkedIn: linkedin.com/in/k-laxman
GitHub: github.com/Laxman824
Location: Chennai, India
`;

// ============= RESPONSE CACHE =============
const ResponseCache = {
  cache: new Map(),
  maxSize: 50,
  ttl: 1800000,

  getKey(input, route) {
    return `${input.toLowerCase().trim()}_${route}`;
  },

  get(input, route) {
    const key = this.getKey(input, route);
    const cached = this.cache.get(key);

    if (!cached) return null;

    if (Date.now() - cached.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    console.log("💾 Cache hit! Saved API call");
    return cached.response;
  },

  set(input, route, response) {
    const key = this.getKey(input, route);

    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      response,
      timestamp: Date.now(),
    });
  },

  clear() {
    this.cache.clear();
  },
};

// ============= VOICE SHORTCUTS =============
export const VoiceShortcuts = {
  commands: {
    next: () => {
      const routes = [
        "#/home",
        "#/projects",
        "#/experience",
        "#/education",
        "#/contact",
      ];
      const current = window.location.hash || "#/home";
      const index = routes.indexOf(current);
      const next = routes[(index + 1) % routes.length];
      window.location.hash = next;
      return {
        response: `Moving to ${next.replace("#/", "")} page`,
        action: "NONE",
        skipAI: true,
      };
    },

    previous: () => {
      const routes = [
        "#/home",
        "#/projects",
        "#/experience",
        "#/education",
        "#/contact",
      ];
      const current = window.location.hash || "#/home";
      const index = routes.indexOf(current);
      const prev = routes[(index - 1 + routes.length) % routes.length];
      window.location.hash = prev;
      return {
        response: `Going back to ${prev.replace("#/", "")} page`,
        action: "NONE",
        skipAI: true,
      };
    },

    back: () => {
      window.history.back();
      return {
        response: "Going back",
        action: "NONE",
        skipAI: true,
      };
    },

    home: () => ({
      response: "Taking you home",
      action: "NAVIGATE_HOME",
      skipAI: true,
    }),

    top: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return {
        response: "Scrolling to top",
        action: "NONE",
        skipAI: true,
      };
    },

    bottom: () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return {
        response: "Scrolling to bottom",
        action: "NONE",
        skipAI: true,
      };
    },

    projects: () => ({
      response: "Showing projects",
      action: "NAVIGATE_PROJECTS",
      skipAI: true,
    }),

    experience: () => ({
      response: "Showing experience",
      action: "NAVIGATE_EXPERIENCE",
      skipAI: true,
    }),

    education: () => ({
      response: "Showing education",
      action: "NAVIGATE_EDUCATION",
      skipAI: true,
    }),

    contact: () => ({
      response: "Showing contact info",
      action: "NAVIGATE_CONTACT",
      skipAI: true,
    }),

    reset: () => ({
      response: "Resetting conversation memory",
      action: "RESET_MEMORY",
      skipAI: true,
    }),

    clear: () => ({
      response: "Clearing chat history",
      action: "RESET_MEMORY",
      skipAI: true,
    }),
  },

  isShortcut(input) {
    const normalized = input.toLowerCase().trim();
    return this.commands.hasOwnProperty(normalized);
  },

  execute(input) {
    const normalized = input.toLowerCase().trim();
    const command = this.commands[normalized];
    return command ? command() : null;
  },
};

// ============= ENHANCED VISUAL AGENT =============
export const VisualAgent = {
  activeGlowTimeout: null,

  initialize() {
    console.log("🎨 Initializing Enhanced Visual Agent...");

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () =>
        this.logAvailableSections()
      );
    } else {
      setTimeout(() => this.logAvailableSections(), 2000);
    }

    // Add global styles for enhanced effects
    this.injectGlobalStyles();
  },

  injectGlobalStyles() {
    if (document.getElementById("voice-agent-styles")) return;

    const style = document.createElement("style");
    style.id = "voice-agent-styles";
    style.textContent = `
      @keyframes voiceNavigationGlow {
        0%, 100% {
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.4),
            0 0 40px rgba(59, 130, 246, 0.3),
            0 0 60px rgba(59, 130, 246, 0.2),
            0 0 80px rgba(59, 130, 246, 0.1),
            inset 0 0 20px rgba(59, 130, 246, 0.1);
        }
        50% {
          box-shadow: 
            0 0 30px rgba(59, 130, 246, 0.6),
            0 0 60px rgba(59, 130, 246, 0.5),
            0 0 90px rgba(59, 130, 246, 0.4),
            0 0 120px rgba(59, 130, 246, 0.3),
            inset 0 0 30px rgba(59, 130, 246, 0.2);
        }
      }

      @keyframes voiceNavigationPulse {
        0%, 100% {
          transform: scale(1) translateZ(0);
        }
        50% {
          transform: scale(1.01) translateZ(2px);
        }
      }

      @keyframes voiceCardHighlight {
        0%, 100% {
          box-shadow: 
            0 0 15px rgba(34, 197, 94, 0.4),
            0 0 30px rgba(34, 197, 94, 0.3),
            0 0 45px rgba(34, 197, 94, 0.2);
          transform: scale(1);
        }
        50% {
          box-shadow: 
            0 0 25px rgba(34, 197, 94, 0.6),
            0 0 50px rgba(34, 197, 94, 0.5),
            0 0 75px rgba(34, 197, 94, 0.4);
          transform: scale(1.03);
        }
      }

      .voice-navigated {
        animation: voiceNavigationGlow 3s ease-in-out, 
                   voiceNavigationPulse 3s ease-in-out;
        border: 2px solid rgba(59, 130, 246, 0.3) !important;
        border-radius: 16px !important;
        position: relative;
        z-index: 10;
      }

      .voice-navigated::before {
        content: '';
        position: absolute;
        inset: -4px;
        background: linear-gradient(
          45deg,
          transparent,
          rgba(59, 130, 246, 0.1),
          transparent
        );
        border-radius: 18px;
        pointer-events: none;
        animation: shimmer 2s linear infinite;
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      .voice-card-highlighted {
        animation: voiceCardHighlight 2s ease-in-out;
        border: 2px solid rgba(34, 197, 94, 0.4) !important;
        position: relative;
        z-index: 100;
      }

      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }

      /* Navigation breadcrumb */
      .voice-navigation-indicator {
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        backdrop-filter: blur(10px);
      }

      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .voice-navigation-indicator::before {
        content: '🎤';
        margin-right: 8px;
      }
    `;
    document.head.appendChild(style);
  },

  logAvailableSections() {
    console.log("📋 Scanning current page...");
    const currentRoute = window.location.hash || "#/home";
    console.log("Current route:", currentRoute);

    const mainContainers = [
      ".greeting-main",
      ".education-main",
      ".experience-main",
      ".contact-main",
      ".projects-main",
      ".main",
    ];

    mainContainers.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        console.log(`✅ Found: ${sel}`);
      }
    });

    // Check for project cards
    const projectCards = document.querySelectorAll(
      ".project-card, .repo-card-div"
    );
    console.log(`📦 Found ${projectCards.length} project cards`);
  },

  // Show navigation indicator
  showNavigationIndicator(pageName) {
    // Remove existing indicator
    const existing = document.querySelector(".voice-navigation-indicator");
    if (existing) existing.remove();

    // Create new indicator
    const indicator = document.createElement("div");
    indicator.className = "voice-navigation-indicator";
    indicator.textContent = `Navigated to ${pageName}`;
    document.body.appendChild(indicator);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      indicator.style.animation = "slideInRight 0.5s ease-out reverse";
      setTimeout(() => indicator.remove(), 500);
    }, 2000);
  },

  // Enhanced highlighting with persistent glow
  async highlightElement(selector, duration = 4000, waitForRender = false) {
    console.log("🔍 Attempting to highlight:", selector);

    if (waitForRender) {
      await new Promise((resolve) => setTimeout(resolve, 700));
    }

    let element = document.querySelector(selector);

    if (!element) {
      console.warn(`⚠️ Element not found: ${selector}`);
      return false;
    }

    this.doEnhancedHighlight(element, duration);
    return true;
  },

  doEnhancedHighlight(element, duration) {
    console.log("✨ Enhanced highlighting:", element.className);

    // Scroll to top first for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Wait a bit then scroll to element
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 300);

    // Clear any existing glow
    if (this.activeGlowTimeout) {
      clearTimeout(this.activeGlowTimeout);
    }

    // Remove previous highlights
    document.querySelectorAll(".voice-navigated").forEach((el) => {
      el.classList.remove("voice-navigated");
    });

    // Add the glow class
    element.classList.add("voice-navigated");

    // Remove after duration
    this.activeGlowTimeout = setTimeout(() => {
      element.classList.remove("voice-navigated");
    }, duration);
  },

  // Highlight individual project card
  async highlightProjectCard(index, duration = 3000) {
    console.log("🎯 Highlighting project card:", index);

    // Wait for page to render
    await new Promise((resolve) => setTimeout(resolve, 800));

    const cards = document.querySelectorAll(".project-card, .repo-card-div");

    if (!cards || cards.length === 0) {
      console.warn("⚠️ No project cards found");
      return false;
    }

    const card = cards[index - 1]; // 1-indexed to 0-indexed

    if (!card) {
      console.warn(
        `⚠️ Project card ${index} not found (only ${cards.length} cards exist)`
      );
      return false;
    }

    // Scroll to card
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    // Remove previous highlights
    document.querySelectorAll(".voice-card-highlighted").forEach((el) => {
      el.classList.remove("voice-card-highlighted");
    });

    // Add highlight
    card.classList.add("voice-card-highlighted");

    // Remove after duration
    setTimeout(() => {
      card.classList.remove("voice-card-highlighted");
    }, duration);

    console.log("✅ Project card highlighted");
    return true;
  },

  highlightMultiple(selectors, delayBetween = 2000) {
    selectors.forEach((selector, index) => {
      setTimeout(() => {
        this.highlightElement(selector, 2500);
      }, index * delayBetween);
    });
  },
};

// ============= VIEWPORT TRACKER =============
export const ViewportTracker = {
  getCurrentVisibleSection() {
    const mainContainers = document.querySelectorAll('[class*="main"]');

    for (const container of mainContainers) {
      const rect = container.getBoundingClientRect();
      const inView = rect.top >= -100 && rect.top <= window.innerHeight * 0.5;

      if (inView) {
        return {
          id: container.className,
          type: "main-container",
          title: container.className.replace("-main", "").replace(/\s+/g, " "),
        };
      }
    }
    return null;
  },

  getCompactContext() {
    const visible = this.getCurrentVisibleSection();
    if (!visible || !visible.title) return "";

    return `Currently viewing: ${visible.title}`;
  },
};

// ============= MEMORY MANAGER =============
export const MemoryManager = {
  STORAGE_KEY: "laxman_ai_chat_history",
  MAX_HISTORY: 10,

  saveHistory(history) {
    try {
      const trimmed = history.slice(-this.MAX_HISTORY);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmed));
      console.log("💾 Chat history saved:", trimmed.length, "turns");
      return trimmed;
    } catch (error) {
      console.warn("⚠️ Failed to save chat history:", error);
      return history;
    }
  },

  loadHistory() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn("⚠️ Failed to load chat history:", error);
      return [];
    }
  },

  addTurn(userInput, aiResponse, action = "NONE") {
    const history = this.loadHistory();
    history.push({
      user: userInput,
      assistant: aiResponse,
      action: action,
      timestamp: Date.now(),
      route: window.location.hash || "#/home",
    });
    return this.saveHistory(history);
  },

  clearHistory() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      ResponseCache.clear();
      console.log("🗑️ Chat history cleared");
      return true;
    } catch (error) {
      console.warn("⚠️ Failed to clear chat history:", error);
      return false;
    }
  },

  getCompactContext() {
    const history = this.loadHistory();
    if (history.length === 0) return "";

    const recent = history.slice(-3);
    return recent
      .map((turn) => `User: ${turn.user}\nBot: ${turn.assistant}`)
      .join("\n");
  },

  getLastAction() {
    const history = this.loadHistory();
    if (history.length === 0) return null;
    return history[history.length - 1].action;
  },
};

// ============= ENHANCED AGENT EXECUTOR =============
export const AgentExecutor = {
  getPageSelector(route) {
    const selectorMap = {
      "#/home": ".greeting-main",
      "#/projects": ".projects-main",
      "#/experience": ".experience-main",
      "#/education": ".education-main",
      "#/contact": ".contact-main",
      "#/github": ".github-main",
    };

    return selectorMap[route] || ".main";
  },

  getPageName(route) {
    const nameMap = {
      "#/home": "Home",
      "#/projects": "Projects",
      "#/experience": "Experience",
      "#/education": "Education",
      "#/contact": "Contact",
      "#/github": "GitHub Stats",
    };

    return nameMap[route] || route.replace("#/", "");
  },

  isOnCorrectPage(targetRoute) {
    const current = window.location.hash || "#/home";
    return current === targetRoute;
  },
  async executeWorkflow(workflowName, callbacks, showNotice) {
    await TaskOrchestrator.executeWorkflow(workflowName, {
      executeAction: (action) => this.execute(action, showNotice),
      speak: callbacks.speak,
    });
  },
  async execute(action, showNotice) {
    if (!action || action === "NONE") {
      return false;
    }

    console.log("🤖 Agent executing action:", action);

    // Handle HIGHLIGHT_PROJECT_[N] actions
    if (action.startsWith("HIGHLIGHT_PROJECT_")) {
      const match = action.match(/HIGHLIGHT_PROJECT_(\d+)/);
      if (match) {
        const projectIndex = parseInt(match[1]);

        // Navigate to projects if not there
        if (!this.isOnCorrectPage("#/projects")) {
          window.location.hash = "#/projects";
          VisualAgent.showNavigationIndicator("Projects");
          await new Promise((resolve) => setTimeout(resolve, 700));
        }

        // Highlight specific card
        const highlighted = await VisualAgent.highlightProjectCard(
          projectIndex
        );

        if (highlighted && showNotice) {
          showNotice(
            "info",
            "✨ Highlighting",
            `Project #${projectIndex}`,
            1500
          );
        }

        return highlighted;
      }
    }

    // Handle other HIGHLIGHT actions
    if (action.startsWith("HIGHLIGHT_")) {
      const targetRoute = this.getRouteFromHighlightAction(action);
      const needsNavigation = !this.isOnCorrectPage(targetRoute);

      if (needsNavigation) {
        console.log(`🔀 Navigating to ${targetRoute}`);
        window.location.hash = targetRoute;

        // Show navigation indicator
        const pageName = this.getPageName(targetRoute);
        VisualAgent.showNavigationIndicator(pageName);

        if (showNotice) {
          showNotice("info", "🔀 Navigating", `${pageName}...`, 1000);
        }

        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      const selector = this.getPageSelector(targetRoute);
      const highlighted = await VisualAgent.highlightElement(
        selector,
        4000,
        false
      );

      if (highlighted && showNotice) {
        const sectionName = this.getPageName(targetRoute);
        showNotice("info", "✨ Viewing", sectionName, 1500);
      }

      return highlighted;
    }

    // Handle NAVIGATE actions
    switch (action) {
      case "NAVIGATE_HOME":
        window.location.hash = "#/home";
        VisualAgent.showNavigationIndicator("Home");
        if (showNotice) showNotice("info", "🏠 Navigation", "Home", 1500);
        // Auto-highlight after navigation
        setTimeout(() => {
          VisualAgent.highlightElement(".greeting-main", 4000);
        }, 700);
        return true;

      case "NAVIGATE_PROJECTS":
        window.location.hash = "#/projects";
        VisualAgent.showNavigationIndicator("Projects");
        if (showNotice) showNotice("info", "💼 Navigation", "Projects", 1500);
        setTimeout(() => {
          VisualAgent.highlightElement(".projects-main", 4000);
        }, 700);
        return true;

      case "NAVIGATE_EXPERIENCE":
        window.location.hash = "#/experience";
        VisualAgent.showNavigationIndicator("Experience");
        if (showNotice) showNotice("info", "💼 Navigation", "Experience", 1500);
        setTimeout(() => {
          VisualAgent.highlightElement(".experience-main", 4000);
        }, 700);
        return true;

      case "NAVIGATE_EDUCATION":
        window.location.hash = "#/education";
        VisualAgent.showNavigationIndicator("Education");
        if (showNotice) showNotice("info", "🎓 Navigation", "Education", 1500);
        setTimeout(() => {
          VisualAgent.highlightElement(".education-main", 4000);
        }, 700);
        return true;

      case "NAVIGATE_CONTACT":
        window.location.hash = "#/contact";
        VisualAgent.showNavigationIndicator("Contact");
        if (showNotice) showNotice("info", "📧 Navigation", "Contact", 1500);
        setTimeout(() => {
          VisualAgent.highlightElement(".contact-main", 4000);
        }, 700);
        return true;

      case "NAVIGATE_GITHUB":
        window.location.hash = "#/github";
        VisualAgent.showNavigationIndicator("GitHub Stats");
        if (showNotice)
          showNotice("info", "💻 Navigation", "GitHub Stats", 1500);
        setTimeout(() => {
          VisualAgent.highlightElement(".github-main", 4000);
        }, 700);
        return true;

      case "SCROLL_TOP":
        window.scrollTo({ top: 0, behavior: "smooth" });
        return true;

      case "SCROLL_BOTTOM":
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        return true;

      case "RESET_MEMORY":
        MemoryManager.clearHistory();
        if (showNotice) showNotice("info", "🔄 Reset", "Memory cleared", 2000);
        setTimeout(() => window.location.reload(), 2000);
        return true;

      default:
        console.warn("⚠️ Unknown action:", action);
        return false;
    }
  },

  getRouteFromHighlightAction(action) {
    const routeMap = {
      HIGHLIGHT_HOME: "#/home",
      HIGHLIGHT_PROJECTS: "#/projects",
      HIGHLIGHT_EXPERIENCE: "#/experience",
      HIGHLIGHT_EDUCATION: "#/education",
      HIGHLIGHT_CONTACT: "#/contact",
      HIGHLIGHT_GITHUB: "#/github",
      HIGHLIGHT_SKILLS: "#/home",
    };

    return routeMap[action] || window.location.hash || "#/home";
  },

  getRouteContext(hash) {
    const route = hash.replace("#/", "").toLowerCase() || "home";
    const contexts = {
      home: "Home (overview)",
      projects: "Projects (technical work)",
      experience: "Experience (career)",
      education: "Education (IIT Delhi)",
      contact: "Contact (reach out)",
      github: "GitHub Stats",
    };
    return contexts[route] || route;
  },

  getCurrentRoute() {
    return window.location.hash || "#/home";
  },
};

// ============= PROACTIVE SUGGESTIONS =============
export const ProactiveSuggestions = {
  getSuggestionsForRoute(route) {
    const suggestions = {
      "#/home": [
        "Want to see his projects?",
        "Curious about IIT Delhi?",
        "Check his latest work at CAMS?",
      ],
      "#/projects": [
        "Details about CamsLens?",
        "Show me project 1",
        "Highlight top project",
      ],
      "#/experience": [
        "Know about CAMS role?",
        "His teaching experience?",
        "Show education?",
      ],
      "#/education": [
        "IIT Delhi achievements?",
        "See his projects?",
        "Teaching assistant work?",
      ],
      "#/contact": [
        "View LinkedIn?",
        "See GitHub projects?",
        "Back to projects?",
      ],
    };
    return suggestions[route] || suggestions["#/home"];
  },

  getRandomSuggestion(route) {
    const suggestions = this.getSuggestionsForRoute(route);
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  },
};

// ============= AI RESPONSE =============
export const getAgenticAIResponse = async (userInput, deviceInfo) => {
  try {
    if (VoiceShortcuts.isShortcut(userInput)) {
      const result = VoiceShortcuts.execute(userInput);
      console.log("⚡ Shortcut executed, skipped API call");
      return result;
    }

    const currentRoute = AgentExecutor.getCurrentRoute();
    const cached = ResponseCache.get(userInput, currentRoute);
    if (cached) {
      return cached;
    }

    const maxWords = deviceInfo?.isMobile ? 120 : 150;
    const routeContext = AgentExecutor.getRouteContext(currentRoute);
    const conversationContext = MemoryManager.getCompactContext();
    const viewportContext = ViewportTracker.getCompactContext();

    const compactPrompt = `You are Laxman's AI. Respond in ${maxWords} words max.

CONTEXT:
Page: ${routeContext}
${viewportContext ? `Viewing: ${viewportContext}` : ""}
${conversationContext ? `Recent chat:\n${conversationContext}` : ""}

ACTIONS (use ONE only):
NAVIGATE_HOME, NAVIGATE_PROJECTS, NAVIGATE_EXPERIENCE, NAVIGATE_EDUCATION, NAVIGATE_CONTACT, NAVIGATE_GITHUB,
HIGHLIGHT_HOME, HIGHLIGHT_PROJECTS, HIGHLIGHT_EXPERIENCE, HIGHLIGHT_EDUCATION, HIGHLIGHT_CONTACT, HIGHLIGHT_SKILLS,
HIGHLIGHT_PROJECT_1, HIGHLIGHT_PROJECT_2, HIGHLIGHT_PROJECT_3, HIGHLIGHT_PROJECT_4, HIGHLIGHT_PROJECT_5,
SCROLL_TOP, SCROLL_BOTTOM, RESET_MEMORY, NONE

RULES:
- If asking to see/show/view a page → use NAVIGATE_[PAGE]
- If asking "show project 1" or "top project" → use HIGHLIGHT_PROJECT_1
- If asking "highlight" on current page → use HIGHLIGHT_[CURRENT_PAGE]
- Navigation auto-scrolls and glows the section
- Be brief, enthusiastic, helpful

PORTFOLIO:
${LAXMAN_PORTFOLIO_DATA}

USER: "${userInput}"

RESPOND (JSON only):
{"response":"[answer in ${maxWords} words]","action":"[ONE action or NONE]"}`;

    console.log("🤖 Sending request...");

    const functions = getFunctions();
    const callGemini = httpsCallable(functions, "callGemini");

    const result = await callGemini({
      prompt: compactPrompt,
      maxTokens: 256,
    });

    const data = result.data;
    const candidate = data.candidates?.[0];

    if (!candidate) {
      throw new Error("No candidates returned");
    }

    const rawText = candidate.content?.parts?.[0]?.text;

    if (!rawText?.trim()) {
      throw new Error("Empty response");
    }

    let parsedResponse;
    try {
      const cleanedText = rawText
        .replace(/```json\s*/gi, "")
        .replace(/```\s*/g, "")
        .trim();

      parsedResponse = JSON.parse(cleanedText);
    } catch (parseError) {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found");
      }
    }

    if (!parsedResponse.response) {
      throw new Error("Invalid JSON format");
    }

    parsedResponse.action = parsedResponse.action || "NONE";

    ResponseCache.set(userInput, currentRoute, parsedResponse);

    console.log("✅ Parsed response:", parsedResponse);
    return parsedResponse;
  } catch (error) {
    console.error("🤖 AI Error (using fallback):", error.message);

    console.log("🔄 Falling back to enhanced knowledge base...");
    const fallback = getFallbackResponse(userInput, deviceInfo);
    console.log("✅ Fallback response ready:", fallback);
    return fallback;
  }
};
// ============= ENHANCED FALLBACK SYSTEM =============
const EnhancedFallbackSystem = {
  // Comprehensive knowledge base
  knowledgeBase: {
    // PROJECTS
    projects: {
      keywords: [
        "project",
        "work",
        "built",
        "created",
        "developed",
        "camslens",
        "portfolio",
        "build",
        "made",
        "coding",
      ],
      responses: [
        "He's built 35+ impressive projects! His flagship CamsLens processes 80,000+ documents monthly with 95% accuracy using RAG based Vector Search! and worked on mutliple AI/ML, Full Stack, and Cloud projects!",
        "Amazing portfolio! Top projects: CamsLens AI Platform, Financial Email Automation, Stock Exchange Platform, and RAVI Accessibility Tool! ",
        "His projects span AI/ML, Full Stack, and Cloud! CamsLens, NexGen Gaming, and RoomFlow are highlights!",
      ],
      action: "NAVIGATE_PROJECTS",
    },

    camslens: {
      keywords: ["camslens", "cams lens", "enterprise ai", "genai", "flagship"],
      responses: [
        "CamsLens is his flagship project! Enterprise GenAI platform processing 80,000+ documents monthly with 95% accuracy using Vertex AI Gemini-flash 2.0!",
        "CamsLens: Real-time RSS ingestion, AI-powered queries, 60% faster responses, CMEK-compliant storage. Built with Google Cloud Run and BigQuery!",
      ],
      action: "HIGHLIGHT_PROJECT_1",
    },

    topProject: {
      keywords: [
        "top project",
        "best project",
        "main project",
        "first project",
        "number one",
        "primary project",
      ],
      responses: [
        "His #1 project is CamsLens - an Enterprise GenAI platform with 95% accuracy, processing 80,000+ docs monthly!",
        "Top project: CamsLens! Uses Vertex AI Gemini-flash 2.0, handles massive document processing with real-time capabilities!",
      ],
      action: "HIGHLIGHT_PROJECT_1",
    },

    // EXPERIENCE
    experience: {
      keywords: [
        "experience",
        "job",
        "career",
        "work history",
        "employment",
        "working",
        "company",
        "employer",
      ],
      responses: [
        "He's currently SDE at CAMS Chennai (June 2024-Present) building enterprise AI platforms! Previously taught 300+ students at IIT Delhi!",
        "Software Development Engineer at CAMS! Built CamsLens GenAI platform, automated RSS feeds, optimized Vertex AI datastores!",
        "Current: SDE at CAMS Chennai. Past: Software Engineer at RAVI IIT Delhi, Teaching Assistant for 300+ students, Eamvey Technologies intern!",
      ],
      action: "NAVIGATE_EXPERIENCE",
    },

    cams: {
      keywords: [
        "cams",
        "current job",
        "current work",
        "current role",
        "where work",
        "employer",
      ],
      responses: [
        "At CAMS since June 2024! Developed CamsLens GenAI platform, real-time RSS ingestion, AI query APIs - all with 95% accuracy!",
        "Software Development Engineer at CAMS Chennai! Building enterprise AI solutions using Vertex AI, Google Cloud Run, and BigQuery!",
      ],
      action: "NAVIGATE_EXPERIENCE",
    },

    // EDUCATION
    education: {
      keywords: [
        "education",
        "study",
        "studied",
        "college",
        "university",
        "iit",
        "delhi",
        "degree",
        "qualification",
        "academic",
      ],
      responses: [
        "IIT Delhi Alumni! Dual Degree (B.Tech + M.Tech) in Computer Science, graduated 2024. Specialized in AI/ML, Computer Vision, NLP!",
        "Completed dual degree from prestigious IIT Delhi (2018-2024)! Computer Science & Engineering with AI/ML specialization!",
        "IIT Delhi graduate 2024! Also served as Teaching Assistant mentoring 300+ students in Data Structures and Programming!",
      ],
      action: "NAVIGATE_EDUCATION",
    },

    iit: {
      keywords: ["iit delhi", "indian institute", "iit"],
      responses: [
        "IIT Delhi - one of India's top engineering institutes! He completed his dual degree in CSE there (2018-2024), specializing in AI/ML!",
        "From IIT Delhi! Not just studied but also mentored 300+ students as Teaching Assistant. Graduated with dual degree in Computer Science!",
      ],
      action: "NAVIGATE_EDUCATION",
    },

    // SKILLS
    skills: {
      keywords: [
        "skill",
        "technology",
        "tech",
        "programming",
        "language",
        "stack",
        "know",
        "proficient",
        "expert",
      ],
      responses: [
        "Master of Java, Python, JavaScript! Expert in AI/ML (PyTorch, Vertex AI, OpenCV), Full Stack (MERN, Spring Boot), Cloud (GCP, AWS, Docker)!",
        "Tech stack: Languages (Java, Python, JS), AI/ML (Vertex AI, TensorFlow, NLP), Cloud (GCP, Docker), Full Stack (React, Node, Spring Boot)!",
        "Impressive skills! Programming: Java/Python/JS. AI: Vertex AI/PyTorch/OpenCV. Cloud: GCP/AWS/Docker. Full Stack: MERN/Spring Boot!",
      ],
      action: "HIGHLIGHT_SKILLS",
    },

    ai: {
      keywords: [
        "ai",
        "ml",
        "machine learning",
        "artificial intelligence",
        "deep learning",
        "computer vision",
        "nlp",
      ],
      responses: [
        "AI/ML Expert! PyTorch, TensorFlow, Vertex AI Gen AI, Computer Vision (OpenCV), NLP (spaCy, LLMs), Document Processing, Image Recognition!",
        "Strong in AI/ML! Built enterprise GenAI platforms, email automation with LLMs, table recognition systems, driver drowsiness detection!",
      ],
      action: "HIGHLIGHT_SKILLS",
    },

    cloud: {
      keywords: ["cloud", "gcp", "aws", "azure", "google cloud", "devops"],
      responses: [
        "Cloud Pro! Google Cloud (Cloud Run, Vertex AI, BigQuery, GCS), AWS basics, Docker, Kubernetes, CI/CD with GitHub Actions!",
        "Cloud expertise: GCP primary (Cloud Run, Vertex AI), Docker containerization, basic AWS & Azure. DevOps with Jenkins and Git!",
      ],
      action: "HIGHLIGHT_SKILLS",
    },

    // CONTACT
    contact: {
      keywords: [
        "contact",
        "email",
        "phone",
        "reach",
        "linkedin",
        "github",
        "connect",
        "hire",
        "talk",
      ],
      responses: [
        "Reach him at Laxmankethavath5@gmail.com or +91-9000063740! Also on LinkedIn (linkedin.com/in/k-laxman) and GitHub (github.com/Laxman824)!",
        "Contact: Email laxmankethavath5@gmail.com, Phone +91-9000063740, LinkedIn /in/k-laxman, GitHub @Laxman824. Based in Chennai, India!",
        "He's very approachable! Email: laxmankethavath5@gmail.com, LinkedIn: linkedin.com/in/k-laxman. Currently in Chennai!",
      ],
      action: "NAVIGATE_CONTACT",
    },

    location: {
      keywords: ["where", "location", "live", "based", "city", "place"],
      responses: [
        "Based in Chennai, Tamil Nadu, India! Working at CAMS building innovative tech solutions!",
        "Currently in Chennai, India - working on cutting-edge AI platforms at CAMS!",
      ],
      action: "NONE",
    },

    // TEACHING
    teaching: {
      keywords: ["teaching", "mentor", "ta", "assistant", "students", "taught"],
      responses: [
        "Teaching Assistant at IIT Delhi (2019-2021)! Mentored 300+ undergraduate students in Data Structures and Introduction to Programming!",
        "Passionate educator! Taught 300+ students at IIT Delhi covering Data Structures, Programming, and advanced CS concepts!",
      ],
      action: "NAVIGATE_EXPERIENCE",
    },

    // ACHIEVEMENTS
    achievements: {
      keywords: [
        "achievement",
        "accomplishment",
        "success",
        "impressive",
        "highlight",
      ],
      responses: [
        "Major achievements: IIT Delhi dual degree, 25+ projects, CamsLens with 95% accuracy, taught 300+ students, multiple virtual internships!",
        "Highlights: Enterprise AI platform (80K docs/month), IIT Delhi graduate, Full Stack expert, mentored 300+ students, 25+ technical projects!",
      ],
      action: "NAVIGATE_HOME",
    },
  },

  // Smart pattern matching with scoring
  findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const [category, data] of Object.entries(this.knowledgeBase)) {
      let score = 0;

      // Check keyword matches
      for (const keyword of data.keywords) {
        if (input.includes(keyword)) {
          score += keyword.split(" ").length; // Multi-word keywords score higher
        }
      }

      // Bonus for exact phrase matches
      if (data.keywords.some((k) => input === k)) {
        score += 10;
      }

      // Bonus for question patterns
      if (
        input.startsWith("what") ||
        input.startsWith("tell") ||
        input.startsWith("show")
      ) {
        score += 1;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = { category, data };
      }
    }

    return bestScore > 0 ? bestMatch : null;
  },

  // Get contextual response
  getResponse(userInput) {
    const match = this.findBestMatch(userInput);

    if (!match) {
      return null; // Will use generic fallback
    }

    // Pick a random response from available responses
    const responses = match.data.responses;
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    return {
      response: randomResponse,
      action: match.data.action,
      category: match.category,
    };
  },
};
// ============= FALLBACK =============
// ============= ENHANCED FALLBACK (Never Disappoints Users) =============
export const getFallbackResponse = (userInput, deviceInfo) => {
  console.log("🔍 Enhanced fallback analyzing:", userInput);

  // Try enhanced fallback first
  const enhancedMatch = EnhancedFallbackSystem.getResponse(userInput);

  if (enhancedMatch) {
    console.log(
      "✅ Enhanced fallback match:",
      enhancedMatch.category,
      "(NO API CALL)"
    );
    return {
      response: enhancedMatch.response,
      action: enhancedMatch.action,
    };
  }

  // Greeting detection
  const greetings = [
    "hello",
    "hi",
    "hey",
    "greetings",
    "namaste",
    "hola",
    "good morning",
    "good evening",
  ];
  if (greetings.some((g) => userInput.toLowerCase().includes(g))) {
    return {
      response: deviceInfo?.isMobile
        ? "Hey! I'm Laxman's AI. Ask about his projects, skills, or experience!"
        : "Hey there! I'm Laxman's AI assistant. Ask me about his impressive projects, IIT Delhi background, or technical skills!",
      action: "NONE",
    };
  }

  // Help/capability questions
  const helpKeywords = ["help", "what can", "how to", "what do", "can you"];
  if (helpKeywords.some((k) => userInput.toLowerCase().includes(k))) {
    return {
      response:
        "I can tell you about Laxman's projects, work experience, education, skills, and contact info! I can also navigate and highlight sections. Try asking!",
      action: "NONE",
    };
  }

  // Navigation commands (even if not recognized)
  const input = userInput.toLowerCase();
  if (
    input.includes("go to") ||
    input.includes("take me") ||
    input.includes("navigate")
  ) {
    if (input.includes("project")) {
      return {
        response: "Taking you to projects section!",
        action: "NAVIGATE_PROJECTS",
      };
    }
    if (input.includes("experience") || input.includes("work")) {
      return {
        response: "Showing work experience!",
        action: "NAVIGATE_EXPERIENCE",
      };
    }
    if (input.includes("education") || input.includes("study")) {
      return {
        response: "Navigating to education section!",
        action: "NAVIGATE_EDUCATION",
      };
    }
    if (input.includes("contact") || input.includes("reach")) {
      return {
        response: "Here's contact information!",
        action: "NAVIGATE_CONTACT",
      };
    }
    if (input.includes("home")) {
      return {
        response: "Going to home page!",
        action: "NAVIGATE_HOME",
      };
    }
  }

  // Specific question patterns
  if (input.includes("how many") || input.includes("number of")) {
    if (input.includes("project")) {
      return {
        response:
          "He's built 25+ technical projects! From enterprise AI platforms to full-stack applications. Want to see them?",
        action: "NAVIGATE_PROJECTS",
      };
    }
    if (input.includes("year") || input.includes("experience")) {
      return {
        response:
          "2+ years since starting at IIT Delhi (2018), currently SDE at CAMS since June 2024!",
        action: "NAVIGATE_EXPERIENCE",
      };
    }
  }

  // "Tell me about" patterns
  if (
    input.startsWith("tell") ||
    input.startsWith("explain") ||
    input.startsWith("describe")
  ) {
    return {
      response:
        "I'd love to share! He's an IIT Delhi graduate, SDE at CAMS, building enterprise AI platforms. 25+ projects, expert in Java/Python/AI/ML!",
      action: "NAVIGATE_HOME",
    };
  }

  // "Show me" patterns
  if (input.startsWith("show") || input.startsWith("display")) {
    return {
      response:
        "Let me show you! He has impressive projects, IIT Delhi education, and current work at CAMS. What interests you?",
      action: "NAVIGATE_PROJECTS",
    };
  }

  // When/Where questions
  if (input.startsWith("when") || input.includes("when did")) {
    if (input.includes("graduate") || input.includes("finish")) {
      return {
        response:
          "Graduated from IIT Delhi in 2024 with dual degree in Computer Science!",
        action: "NAVIGATE_EDUCATION",
      };
    }
    if (input.includes("start") || input.includes("join")) {
      return {
        response:
          "Started at CAMS in June 2024 as Software Development Engineer!",
        action: "NAVIGATE_EXPERIENCE",
      };
    }
  }

  // Why questions
  if (input.startsWith("why") || input.includes("why")) {
    return {
      response:
        "Great question! He chose AI/ML at IIT Delhi, passionate about building impactful solutions. His CamsLens platform processes 80K+ docs monthly!",
      action: "NAVIGATE_PROJECTS",
    };
  }

  // Comparison questions
  if (
    input.includes("best") ||
    input.includes("favorite") ||
    input.includes("most")
  ) {
    return {
      response:
        "His best work is CamsLens - Enterprise GenAI platform with 95% accuracy! Also loves full-stack development and teaching!",
      action: "HIGHLIGHT_PROJECT_1",
    };
  }

  // Generic but intelligent fallback
  const keywords = [
    "project",
    "experience",
    "education",
    "skill",
    "contact",
    "work",
    "iit",
    "cams",
  ];
  const foundKeyword = keywords.find((k) => input.includes(k));

  if (foundKeyword) {
    const responses = {
      project: {
        response:
          "He's built amazing projects like CamsLens (80K docs/month), Financial Email AI, Stock Exchange Platform, and more!",
        action: "NAVIGATE_PROJECTS",
      },
      experience: {
        response:
          "Currently SDE at CAMS Chennai! Previously Software Engineer at RAVI IIT Delhi and Teaching Assistant for 300+ students!",
        action: "NAVIGATE_EXPERIENCE",
      },
      work: {
        response:
          "Working at CAMS since June 2024, building enterprise AI platforms with Vertex AI and Google Cloud!",
        action: "NAVIGATE_EXPERIENCE",
      },
      education: {
        response:
          "IIT Delhi Alumni 2024! Dual degree in Computer Science, specialized in AI/ML, Computer Vision, and NLP!",
        action: "NAVIGATE_EDUCATION",
      },
      skill: {
        response:
          "Expert in Java, Python, JavaScript, AI/ML (Vertex AI, PyTorch), Cloud (GCP), Full Stack (MERN, Spring Boot)!",
        action: "HIGHLIGHT_SKILLS",
      },
      contact: {
        response:
          "Email: laxmankethavath5@gmail.com, Phone: +91-9000063740, LinkedIn: /in/k-laxman, GitHub: @Laxman824!",
        action: "NAVIGATE_CONTACT",
      },
      iit: {
        response:
          "IIT Delhi graduate 2024! Completed dual degree in Computer Science, also taught 300+ students!",
        action: "NAVIGATE_EDUCATION",
      },
      cams: {
        response:
          "Software Development Engineer at CAMS Chennai! Built CamsLens GenAI platform processing 80,000+ documents monthly!",
        action: "NAVIGATE_EXPERIENCE",
      },
    };

    const match = responses[foundKeyword];
    if (match) {
      console.log("🎯 Keyword-based fallback:", foundKeyword, "(NO API CALL)");
      return match;
    }
  }

  // Ultimate fallback - still helpful
  console.log("📝 Using generic fallback with suggestion");
  return {
    response: deviceInfo?.isMobile
      ? "I can help with projects, skills, experience, education, or contact info. What interests you?"
      : "I have comprehensive knowledge about Laxman! Ask me about his impressive projects, IIT Delhi education, work at CAMS, technical skills, or how to reach him!",
    action: "NAVIGATE_HOME",
  };
};

// ============= ROUTE TRACKING =============
export const setupRouteTracking = (onRouteChange) => {
  const handleHashChange = () => {
    const newHash = window.location.hash || "#/home";
    console.log("🔀 Route:", newHash);
    if (onRouteChange) {
      onRouteChange(newHash);
    }
  };

  window.addEventListener("hashchange", handleHashChange);
  return () => window.removeEventListener("hashchange", handleHashChange);
};

// ============= API USAGE TRACKER =============
export const APIUsageTracker = {
  STORAGE_KEY: "laxman_api_usage",

  logCall() {
    try {
      const usage = this.getUsage();
      const today = new Date().toDateString();

      if (usage.date !== today) {
        usage.date = today;
        usage.calls = 1;
      } else {
        usage.calls += 1;
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usage));
      console.log(`📊 API calls today: ${usage.calls}`);

      if (usage.calls > 80) {
        console.warn("⚠️ High API usage! Use shortcuts.");
      }

      return usage;
    } catch (error) {
      console.warn("Failed to track usage:", error);
    }
  },

  getUsage() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored
        ? JSON.parse(stored)
        : { date: new Date().toDateString(), calls: 0 };
    } catch {
      return { date: new Date().toDateString(), calls: 0 };
    }
  },
};

// ============= EXPORTS =============
export default {
  MemoryManager,
  AgentExecutor,
  getAgenticAIResponse,
  getFallbackResponse,
  setupRouteTracking,
  VoiceShortcuts,
  VisualAgent,
  ViewportTracker,
  ProactiveSuggestions,
  ResponseCache,
  APIUsageTracker,
  LAXMAN_PORTFOLIO_DATA,
};
