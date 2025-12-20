// AgenticHelpers.js - Advanced Agentic Capabilities

// ============= PROACTIVE SUGGESTIONS ENGINE =============
export const ProactiveSuggestionsEngine = {
  // Track user behavior
  userContext: {
    pagesVisited: [],
    questionsAsked: [],
    timeSpent: {},
    currentFocus: null,
    inferredIntent: null,
  },

  // Suggestion rules based on context
  suggestionRules: {
    // If viewing projects for >10 seconds
    projects_viewed: {
      trigger: (context) => {
        return (
          context.currentPage === "#/projects" &&
          context.timeOnCurrentPage > 10000
        );
      },
      suggestions: [
        {
          text: "Want me to highlight the top 3 projects?",
          action: "HIGHLIGHT_TOP_PROJECTS",
          priority: 10,
        },
        {
          text: "Curious about the tech stack used?",
          action: "EXPLAIN_TECH_STACK",
          priority: 8,
        },
        {
          text: "Should I show his GitHub for live code?",
          action: "NAVIGATE_GITHUB",
          priority: 7,
        },
      ],
    },

    // If asked about skills
    skills_query: {
      trigger: (context) => {
        return context.questionsAsked.some(
          (q) =>
            q.toLowerCase().includes("skill") ||
            q.toLowerCase().includes("tech")
        );
      },
      suggestions: [
        {
          text: "Want to see projects that demonstrate these skills?",
          action: "SHOW_SKILL_PROJECTS",
          priority: 9,
        },
        {
          text: "Should I show his certifications?",
          action: "NAVIGATE_EDUCATION",
          priority: 6,
        },
      ],
    },

    // If viewing education
    education_viewed: {
      trigger: (context) => {
        return context.currentPage === "#/education";
      },
      suggestions: [
        {
          text: "Want to see his IIT Delhi projects?",
          action: "SHOW_IIT_PROJECTS",
          priority: 8,
        },
        {
          text: "Curious about his teaching experience?",
          action: "SHOW_TEACHING",
          priority: 7,
        },
      ],
    },

    // If spending lot of time (recruiter pattern)
    recruiter_pattern: {
      trigger: (context) => {
        const visitedMultiple = context.pagesVisited.length >= 3;
        const viewedProjects = context.pagesVisited.includes("#/projects");
        const viewedExperience = context.pagesVisited.includes("#/experience");
        return visitedMultiple && viewedProjects && viewedExperience;
      },
      suggestions: [
        {
          text: "Looking to hire? Let me show you his complete profile!",
          action: "RUN_HIRING_WORKFLOW",
          priority: 10,
        },
        {
          text: "Want his resume and contact info?",
          action: "SHOW_RESUME_CONTACT",
          priority: 9,
        },
      ],
    },

    // If quick bouncer (< 30 seconds total)
    quick_visitor: {
      trigger: (context) => {
        // ✅ FIX: Add safety check for timeSpent
        const totalTime = context.timeSpent
          ? Object.values(context.timeSpent).reduce((a, b) => a + b, 0)
          : 0;
        return totalTime < 30000 && context.pagesVisited.length <= 2;
        //   const totalTime = Object.values(context.timeSpent).reduce((a, b) => a + b, 0);
        //   return totalTime < 30000 && context.pagesVisited.length <= 2;
      },
      suggestions: [
        {
          text: "Want a quick 30-second overview of Laxman?",
          action: "QUICK_OVERVIEW",
          priority: 10,
        },
        {
          text: "Should I show you the highlights?",
          action: "SHOW_HIGHLIGHTS",
          priority: 8,
        },
      ],
    },
  },

  // Analyze context and get best suggestion
  getSuggestion(context) {
    let allSuggestions = [];

    // Check all rules
    for (const [ruleName, rule] of Object.entries(this.suggestionRules)) {
      if (rule.trigger(context)) {
        allSuggestions.push(
          ...rule.suggestions.map((s) => ({
            ...s,
            rule: ruleName,
          }))
        );
      }
    }

    // Sort by priority
    allSuggestions.sort((a, b) => b.priority - a.priority);

    // Return top suggestion
    return allSuggestions[0] || null;
  },

  // Update context
  updateContext(update) {
    this.userContext = { ...this.userContext, ...update };
  },
};

// ============= MULTI-STEP TASK ORCHESTRATOR =============
export const TaskOrchestrator = {
  // Predefined workflows
  workflows: {
    HIRING_WORKFLOW: {
      name: "Complete Hiring Profile",
      steps: [
        {
          action: "NAVIGATE_PROJECTS",
          speak: "Let me show you his best projects first.",
          delay: 0,
        },
        {
          action: "HIGHLIGHT_PROJECT_1",
          speak: "Here's CamsLens - his flagship enterprise AI platform.",
          delay: 3000,
        },
        {
          action: "NAVIGATE_EXPERIENCE",
          speak: "Now, let's look at his professional experience.",
          delay: 6000,
        },
        {
          action: "HIGHLIGHT_EXPERIENCE_CAMS",
          speak: "Currently working as SDE at CAMS Chennai.",
          delay: 9000,
        },
        {
          action: "NAVIGATE_EDUCATION",
          speak: "He's an IIT Delhi graduate with dual degree.",
          delay: 12000,
        },
        {
          action: "NAVIGATE_CONTACT",
          speak: "Here's how you can reach him for opportunities.",
          delay: 15000,
        },
      ],
    },

    QUICK_OVERVIEW: {
      name: "30-Second Overview",
      steps: [
        {
          action: "NAVIGATE_HOME",
          speak:
            "Laxman is a Software Engineer at CAMS, specializing in AI and Full Stack.",
          delay: 0,
        },
        {
          action: "HIGHLIGHT_SKILLS",
          speak: "Expert in Java, Python, JavaScript, and AI technologies.",
          delay: 4000,
        },
        {
          action: "NAVIGATE_PROJECTS",
          speak: "Built 35+ projects including enterprise GenAI platforms.",
          delay: 8000,
        },
        {
          action: "NAVIGATE_CONTACT",
          speak: "Want to connect? Here's his contact information.",
          delay: 12000,
        },
      ],
    },

    SKILL_DEEP_DIVE: {
      name: "Technical Skills Deep Dive",
      steps: [
        {
          action: "NAVIGATE_HOME",
          speak: "Let me show you his technical expertise.",
          delay: 0,
        },
        {
          action: "HIGHLIGHT_SKILLS",
          speak:
            "He's proficient in multiple domains - Full Stack, AI/ML, and Cloud.",
          delay: 3000,
        },
        {
          action: "NAVIGATE_PROJECTS",
          speak: "Here are real-world applications of these skills.",
          delay: 6000,
        },
        {
          action: "HIGHLIGHT_PROJECT_1",
          speak:
            "CamsLens uses Vertex AI, GCP, and Python - enterprise-grade tech.",
          delay: 9000,
        },
      ],
    },

    PROJECT_SHOWCASE: {
      name: "Project Portfolio Showcase",
      steps: [
        {
          action: "NAVIGATE_PROJECTS",
          speak: "Let me walk you through his impressive project portfolio.",
          delay: 0,
        },
        {
          action: "HIGHLIGHT_PROJECT_1",
          speak:
            "First, CamsLens - processing 80,000 documents monthly with 95% accuracy.",
          delay: 4000,
        },
        {
          action: "HIGHLIGHT_PROJECT_2",
          speak: "NexGen Gaming - a full-stack e-commerce platform.",
          delay: 8000,
        },
        {
          action: "HIGHLIGHT_PROJECT_3",
          speak: "RoomFlow - AI-assisted workspace booking system.",
          delay: 12000,
        },
      ],
    },

    AI_EXPERTISE_TOUR: {
      name: "AI/ML Expertise Tour",
      steps: [
        {
          action: "NAVIGATE_PROJECTS",
          speak: "Let me show you his AI and Machine Learning expertise.",
          delay: 0,
        },
        {
          action: "HIGHLIGHT_PROJECT_1",
          speak: "CamsLens - Enterprise GenAI with Vertex AI and LLMs.",
          delay: 3000,
        },
        {
          action: "SCROLL_DOWN",
          speak: "Financial Email Automation using LLMs with 95% accuracy.",
          delay: 6000,
        },
        {
          action: "NAVIGATE_EDUCATION",
          speak:
            "His AI foundation from IIT Delhi - specialized in Computer Vision and NLP.",
          delay: 9000,
        },
      ],
    },
  },

  // Execute a workflow
  async executeWorkflow(workflowName, callbacks) {
    const workflow = this.workflows[workflowName];
    if (!workflow) {
      console.error("Workflow not found:", workflowName);
      return;
    }

    console.log("🎬 Starting workflow:", workflow.name);

    for (const step of workflow.steps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay));

      // Execute action
      if (callbacks.executeAction) {
        callbacks.executeAction(step.action);
      }

      // Speak
      if (callbacks.speak && step.speak) {
        setTimeout(() => {
          callbacks.speak(step.speak);
        }, 500);
      }
    }

    console.log("✅ Workflow completed:", workflow.name);
  },
};

// ============= INTENT PREDICTION ENGINE =============
export const IntentPredictor = {
  // Common intent patterns
  intentPatterns: {
    WANT_TO_HIRE: {
      keywords: [
        "hire",
        "recruit",
        "position",
        "job",
        "available",
        "contact",
        "opportunity",
      ],
      confidence: 0.8,
      predictedWorkflow: "HIRING_WORKFLOW",
    },

    LEARN_SKILLS: {
      keywords: [
        "skill",
        "technology",
        "tech stack",
        "programming",
        "languages",
        "framework",
      ],
      confidence: 0.7,
      predictedWorkflow: "SKILL_DEEP_DIVE",
    },

    SEE_PROJECTS: {
      keywords: ["project", "work", "portfolio", "built", "created", "github"],
      confidence: 0.8,
      predictedWorkflow: "PROJECT_SHOWCASE",
    },

    QUICK_OVERVIEW: {
      keywords: ["quick", "summary", "overview", "brief", "tldr", "short"],
      confidence: 0.9,
      predictedWorkflow: "QUICK_OVERVIEW",
    },

    AI_FOCUS: {
      keywords: [
        "ai",
        "machine learning",
        "ml",
        "artificial intelligence",
        "genai",
        "llm",
      ],
      confidence: 0.8,
      predictedWorkflow: "AI_EXPERTISE_TOUR",
    },
  },

  // Predict user intent
  predictIntent(userInput, context = {}) {
    const input = userInput.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const [intentName, pattern] of Object.entries(this.intentPatterns)) {
      let score = 0;

      // Count keyword matches
      for (const keyword of pattern.keywords) {
        if (input.includes(keyword)) {
          score += pattern.confidence;
        }
      }

      // Context boost
      if (context.previousIntent === intentName) {
        score += 0.2; // Continuity bonus
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = {
          intent: intentName,
          workflow: pattern.predictedWorkflow,
          confidence: Math.min(score, 1.0),
        };
      }
    }

    return bestMatch;
  },
};

// ============= SMART QUESTION DECOMPOSER =============
export const QuestionDecomposer = {
  // Break complex questions into simpler sub-questions
  decompose(question) {
    const complexPatterns = {
      // "Tell me everything about him"
      everything: {
        pattern: /everything|all about|complete|full/i,
        subQuestions: [
          "Who is Laxman?",
          "What are his skills?",
          "What projects has he built?",
          "Where did he study?",
          "What's his work experience?",
        ],
      },

      // "Compare his skills and projects"
      comparison: {
        pattern: /compare|difference|versus|vs|between/i,
        subQuestions: [
          "What are his technical skills?",
          "What projects demonstrate these skills?",
          "How do the projects relate to his expertise?",
        ],
      },

      // "Is he good for AI/ML role?"
      evaluation: {
        pattern: /is he|would he|can he|suitable|good for|fit for/i,
        subQuestions: [
          "What are his AI/ML skills?",
          "What AI projects has he built?",
          "What's his AI education background?",
          "What's his professional AI experience?",
        ],
      },

      // "How and when did he learn these skills?"
      how_when: {
        pattern: /how (and|&) when|when (and|&) how/i,
        subQuestions: [
          "When did he study at IIT Delhi?",
          "How did he learn these technologies?",
          "What projects did he build while learning?",
        ],
      },
    };

    for (const [type, config] of Object.entries(complexPatterns)) {
      if (config.pattern.test(question)) {
        return {
          isComplex: true,
          type: type,
          subQuestions: config.subQuestions,
          strategy: "sequential", // Answer one by one
        };
      }
    }

    return {
      isComplex: false,
      subQuestions: [question],
    };
  },
};

// ============= CONTEXT-AWARE FOLLOW-UP GENERATOR =============
export const FollowUpGenerator = {
  // Generate relevant follow-up questions based on context
  generateFollowUps(lastQuestion, lastAnswer, context) {
    const followUps = [];

    // If talked about projects
    if (lastAnswer.includes("project") || lastAnswer.includes("CamsLens")) {
      followUps.push({
        question: "Want to see the live demo or GitHub code?",
        action: "SHOW_GITHUB",
      });
      followUps.push({
        question: "Curious about the tech stack used?",
        action: "EXPLAIN_TECH",
      });
    }

    // If talked about skills
    if (
      lastAnswer.includes("skill") ||
      lastAnswer.includes("Java") ||
      lastAnswer.includes("Python")
    ) {
      followUps.push({
        question: "Want to see projects using these skills?",
        action: "NAVIGATE_PROJECTS",
      });
      followUps.push({
        question: "Should I show his certifications?",
        action: "SHOW_CERTIFICATIONS",
      });
    }

    // If talked about education
    if (lastAnswer.includes("IIT") || lastAnswer.includes("education")) {
      followUps.push({
        question: "Want to know about his teaching experience?",
        action: "SHOW_TEACHING",
      });
      followUps.push({
        question: "Curious about his academic projects?",
        action: "SHOW_ACADEMIC_PROJECTS",
      });
    }

    // If talked about work
    if (lastAnswer.includes("CAMS") || lastAnswer.includes("experience")) {
      followUps.push({
        question: "Want to see his professional projects?",
        action: "SHOW_PROFESSIONAL_PROJECTS",
      });
      followUps.push({
        question: "Should I show his contact information?",
        action: "NAVIGATE_CONTACT",
      });
    }

    // General follow-ups
    followUps.push({
      question: "What else would you like to know?",
      action: "CONTINUE_CHAT",
    });

    return followUps.slice(0, 3); // Return top 3
  },
};

// ============= USER PREFERENCE LEARNER =============
export const PreferenceLearner = {
  STORAGE_KEY: "jarvis_user_preferences",

  // Track user preferences
  preferences: {
    preferredTopics: {},
    responseStyle: "balanced", // 'brief', 'balanced', 'detailed'
    interactionPattern: "explorer", // 'explorer', 'goal-oriented', 'quick'
    favoriteFeatures: [],
    timeOfDayPreference: {},
  },

  // Learn from interaction
  learn(interaction) {
    const prefs = this.loadPreferences();

    // Track topics
    const topic = this.extractTopic(interaction.question);
    if (topic) {
      prefs.preferredTopics[topic] = (prefs.preferredTopics[topic] || 0) + 1;
    }

    // Track response style preference
    if (interaction.feedback === "too_long") {
      prefs.responseStyle = "brief";
    } else if (interaction.feedback === "too_short") {
      prefs.responseStyle = "detailed";
    }

    // Track time of day
    const hour = new Date().getHours();
    const timeSlot =
      hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
    prefs.timeOfDayPreference[timeSlot] =
      (prefs.timeOfDayPreference[timeSlot] || 0) + 1;

    this.savePreferences(prefs);
  },

  extractTopic(question) {
    const topics = {
      projects: ["project", "work", "built", "github"],
      skills: ["skill", "tech", "programming", "language"],
      education: ["education", "iit", "study", "degree"],
      experience: ["experience", "job", "cams", "work"],
      contact: ["contact", "email", "reach", "hire"],
    };

    const lowerQuestion = question.toLowerCase();
    for (const [topic, keywords] of Object.entries(topics)) {
      if (keywords.some((kw) => lowerQuestion.includes(kw))) {
        return topic;
      }
    }
    return null;
  },

  loadPreferences() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : this.preferences;
    } catch {
      return this.preferences;
    }
  },

  savePreferences(prefs) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(prefs));
    } catch (error) {
      console.warn("Failed to save preferences:", error);
    }
  },

  getPreferences() {
    return this.loadPreferences();
  },
};

// ============= EXPORTS =============
export default {
  ProactiveSuggestionsEngine,
  TaskOrchestrator,
  IntentPredictor,
  QuestionDecomposer,
  FollowUpGenerator,
  PreferenceLearner,
};
