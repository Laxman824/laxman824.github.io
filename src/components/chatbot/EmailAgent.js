// components/EmailAgent.js

// ============= EMAIL AGENT (Free Tier - EmailJS) =============
export const EmailAgent = {
  // EmailJS Configuration
  config: {
    serviceId: "service_xe6alve", // Replace
    templateId: "template_k2u1z0k", // Replace
    publicKey: "ANZYSfODJvj2-066t", // Replace
  },

  // Initialize EmailJS
  init() {
    if (typeof window !== "undefined" && !window.emailjs) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.onload = () => {
        window.emailjs.init(this.config.publicKey);
        console.log("📧 EmailJS initialized");
      };
      document.head.appendChild(script);
    }
  },

  // Conversation state for collecting info
  conversationState: {
    isCollecting: false,
    inquiryType: null,
    data: {},
    currentStep: 0,
  },

  // Email collection flows
  inquiryFlows: {
    HIRE: {
      steps: ["name", "email", "company", "phone", "message"],
      prompts: {
        name: "What's your name?",
        email: "What's your email address?",
        company: "Which company are you from?",
        phone: "Your phone number? (or say 'skip')",
        message: "Tell me about the opportunity or role.",
      },
      confirmMessage: (data) =>
        `Perfect! I'll send this to Laxman: ${data.name} from ${data.company} regarding a job opportunity. Correct?`,
    },

    COLLABORATE: {
      steps: ["name", "email", "project", "message"],
      prompts: {
        name: "What's your name?",
        email: "Your email?",
        project: "What's the project about?",
        message: "Any additional details?",
      },
      confirmMessage: (data) =>
        `Got it! Sending collaboration request from ${data.name} about ${data.project}. Confirm?`,
    },

    QUESTION: {
      steps: ["name", "email", "message"],
      prompts: {
        name: "Your name?",
        email: "Your email?",
        message: "What's your question?",
      },
      confirmMessage: (data) =>
        `Okay! Sending your question from ${data.name}. Ready to send?`,
    },
  },

  // ✅ FIXED: Detect if user wants to send email
  detectIntent(userInput) {
    const input = userInput.toLowerCase();

    // 🔥 DIRECT EMAIL PATTERNS (Highest Priority)
    const directEmailPatterns = [
      "send email",
      "send an email",
      "send a email",
      "email to",
      "email laxman",
      "email lakshman",
      "email him",
      "contact laxman",
      "contact lakshman",
      "reach out to laxman",
      "reach out to lakshman",
      "message laxman",
      "message lakshman",
      "write to laxman",
      "write to lakshman",
      "get in touch with laxman",
      "get in touch with lakshman",
    ];

    // Check direct patterns first
    if (directEmailPatterns.some((pattern) => input.includes(pattern))) {
      console.log("📧 Email intent detected: QUESTION (direct email request)");
      return "QUESTION"; // Default to QUESTION, can be refined later
    }

    // Check for stronger intent patterns (multi-word phrases)
    const strongIntents = {
      HIRE: [
        "i want to send an email to laxman about hiring",
        "i want to send an email about hiring",
        "i want to send email",
        "i want to hire",
        "looking to hire",
        "hire him",
        "hire laxman",
        "hire lakshman",
        "recruit him",
        "recruit laxman",
        "recruit lakshman",
        "job opportunity",
        "job opening",
        "position available",
        "we are hiring",
        "interested in hiring",
        "hiring laxman",
        "hiring lakshman",
        "employment opportunity",
        "work opportunity",
      ],
      COLLABORATE: [
        "want to collaborate",
        "collaborate with",
        "collaborate with laxman",
        "collaborate with lakshman",
        "work together",
        "partnership opportunity",
        "collaborate on project",
        "joint project",
        "partner with",
        "team up",
      ],
    };

    // Check strong patterns
    for (const [type, phrases] of Object.entries(strongIntents)) {
      if (phrases.some((phrase) => input.includes(phrase))) {
        console.log("📧 Email intent detected:", type, "(strong match)");
        return type;
      }
    }

    // Only check single keywords if they appear with action words
    const actionWords = [
      "want",
      "need",
      "looking",
      "interested",
      "can you",
      "could you",
      "would like",
      "i'd like",
    ];
    const hasActionWord = actionWords.some((word) => input.includes(word));

    if (hasActionWord) {
      const weakIntents = {
        HIRE: ["hire", "recruit", "email", "position", "job"],
        COLLABORATE: ["collaborate", "partnership"],
        QUESTION: ["contact", "message", "reach", "touch"],
      };

      for (const [type, keywords] of Object.entries(weakIntents)) {
        if (keywords.some((kw) => input.includes(kw))) {
          console.log(
            "📧 Email intent detected:",
            type,
            "(weak match with action)"
          );
          return type;
        }
      }
    }

    console.log("📧 No email intent detected");
    return null;
  },

  // Start email collection
  startCollection(inquiryType) {
    const flow = this.inquiryFlows[inquiryType];
    if (!flow) return null;

    this.conversationState = {
      isCollecting: true,
      inquiryType: inquiryType,
      data: {},
      currentStep: 0,
      flow: flow,
      useForm: true,
    };

    return {
      response: `I'll open a secure form for your email. We can discuss the rest via voice.`,
      action: "OPEN_EMAIL_FORM",
      inquiryType: inquiryType,
    };
  },

  // ✅ Handover from Form to Voice
  ingestFormData(formData) {
    const { flow, data } = this.conversationState;

    // 1. Extract Name from Email (Laxman Logic)
    let extractedName = "Guest";
    if (formData.email) {
      const rawName = formData.email.split("@")[0];
      // Remove numbers and capitalize
      const nameText = rawName.replace(/[0-9]/g, "");
      extractedName = nameText.charAt(0).toUpperCase() + nameText.slice(1);
    }

    // 2. Save Data
    this.conversationState.data = {
      ...data,
      email: formData.email,
      name: extractedName,
      message: formData.message || data.message || "Details to follow...",
    };

    console.log("📝 Form data ingested:", this.conversationState.data);

    // 3. Update Step Pointer
    // We assume Name and Email are now done. We need to find the next missing step.
    let nextStepIndex = 0;
    // Fast forward through steps we already have
    while (nextStepIndex < flow.steps.length) {
      const fieldName = flow.steps[nextStepIndex];
      if (this.conversationState.data[fieldName]) {
        nextStepIndex++;
      } else {
        break; // Found a missing field
      }
    }

    this.conversationState.currentStep = nextStepIndex;

    // 4. Generate Response
    if (nextStepIndex >= flow.steps.length) {
      return this.confirmAndSend();
    }

    const nextField = flow.steps[nextStepIndex];
    const nextPrompt = flow.prompts[nextField];

    return {
      response: `Thanks ${extractedName}. I have your email. ${nextPrompt}`,
      action: "CONTINUE_COLLECTION",
    };
  },

  // Process user's voice answer
  processAnswer(userAnswer) {
    const { flow, currentStep, data } = this.conversationState;
    const currentField = flow.steps[currentStep];

    // If we are at email step (unlikely in hybrid, but possible), validate it
    if (currentField === "email" && !this.validateEmail(userAnswer)) {
      return {
        response: "Invalid email. Please say it again.",
        action: "RETRY",
      };
    }

    // Store data
    data[currentField] =
      userAnswer.includes("skip") || userAnswer.includes("no")
        ? "Not provided"
        : userAnswer;

    // Move to next
    this.conversationState.currentStep++;

    // Check if done
    if (this.conversationState.currentStep >= flow.steps.length) {
      return this.confirmAndSend();
    }

    // Ask next
    const nextField = flow.steps[this.conversationState.currentStep];
    return {
      response: flow.prompts[nextField],
      action: "CONTINUE_COLLECTION",
    };
  },

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  confirmAndSend() {
    const { flow, data, inquiryType } = this.conversationState;
    return {
      response: flow.confirmMessage(data),
      action: "CONFIRM_EMAIL",
      onConfirm: () => this.sendEmail(inquiryType, data),
    };
  },

  cancel() {
    this.conversationState = {
      isCollecting: false,
      inquiryType: null,
      data: {},
      currentStep: 0,
    };
    return {
      response: "Cancelled. What else can I help with?",
      action: "CANCELLED",
    };
  },

  async sendEmail(inquiryType, data) {
    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone: data.phone || "N/A",
        company: data.company || "N/A",
        project: data.project || "N/A",
        message: data.message,
        inquiry_type: inquiryType,
        timestamp: new Date().toLocaleString(),
      };

      await window.emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      this.conversationState = {
        isCollecting: false,
        inquiryType: null,
        data: {},
        currentStep: 0,
      };

      return {
        success: true,
        response:
          "Sent! Laxman will contact you at " +
          data.email +
          ". Anything else I can help with?",
        action: "EMAIL_SENT",
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        response: "Failed to send. Please try again later.",
        action: "EMAIL_FAILED",
      };
    }
  },
};

export default EmailAgent;
