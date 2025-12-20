// Add these imports at the top
import { getFunctions, httpsCallable } from "firebase/functions";
// UserSpace.js - Enhanced AI Experience Center with RAG & Multi-Agent Orchestration
import * as pdfjsLib from "pdfjs-dist";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Header from "../../components/header/Header";
import "./UserSpace.css";
import LoginButton from "../../components/auth/LoginButton"; // 👈 Ensure path is correct
// Configure PDF.js worker AFTER all imports
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

/**
 * 🚀 USER SPACE - AI Experience Center
 * Features:
 * - Real RAG System with Vector Embeddings
 * - Multi-Agent Orchestration (6 Specialized Agents)
 * - Interactive AI Demos
 * - Knowledge Graph Visualization
 */

// ===== VECTOR STORE IMPLEMENTATION =====
class VectorStore {
  constructor() {
    this.documents = [];
    this.embeddings = [];
  }

  // Simple embedding using character-level hashing (in production, use real embeddings)
  async generateEmbedding(text) {
    const normalized = text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
    const words = normalized.split(/\s+/);
    const embedding = new Array(128).fill(0);

    words.forEach((word, idx) => {
      for (let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i);
        const position = (charCode * (idx + 1) * (i + 1)) % 128;
        embedding[position] += 1 / (i + 1);
      }
    });

    // Normalize
    const magnitude =
      Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0)) || 1;
    return embedding.map((val) => val / magnitude);
  }

  async addDocuments(documents) {
    for (const doc of documents) {
      const embedding = await this.generateEmbedding(doc.content);
      this.documents.push(doc);
      this.embeddings.push(embedding);
    }
    console.log(`✅ Added ${documents.length} documents to vector store`);
  }

  cosineSimilarity(a, b) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
  }

  async similaritySearch(query, topK = 5) {
    const queryEmbedding = await this.generateEmbedding(query);

    const scored = this.documents.map((doc, idx) => ({
      ...doc,
      score: this.cosineSimilarity(queryEmbedding, this.embeddings[idx]),
    }));

    return scored.sort((a, b) => b.score - a.score).slice(0, topK);
  }
}

// ===== RAG ENGINE IMPLEMENTATION =====
class RAGEngine {
  constructor(vectorStore, apiKey) {
    this.vectorStore = vectorStore;
    this.apiKey = apiKey;
  }

  async rerank(query, documents) {
    // Simple reranking based on keyword matching
    const queryWords = query.toLowerCase().split(/\s+/);

    return documents
      .map((doc) => {
        const content = doc.content.toLowerCase();
        let keywordScore = 0;
        queryWords.forEach((word) => {
          if (content.includes(word)) keywordScore += 1;
        });
        return {
          ...doc,
          rerankScore:
            doc.score * 0.7 + (keywordScore / queryWords.length) * 0.3,
        };
      })
      .sort((a, b) => b.rerankScore - a.rerankScore);
  }

  async generateWithContext(query, documents, callAPI) {
    const context = documents.map((d) => d.content).join("\n\n");

    const prompt = `You are Laxman's AI Portfolio Assistant with deep knowledge about his work.

RETRIEVED CONTEXT:
${context}

USER QUESTION: ${query}

INSTRUCTIONS:
- Answer based on the retrieved context
- Be specific about projects, technologies, and achievements
- If the context doesn't contain relevant info, say so
- Be conversational and helpful
- Highlight relevant skills and experience

RESPONSE:`;

    const startTime = Date.now();
    const response = await callAPI(prompt);
    const latency = Date.now() - startTime;

    return {
      text: response,
      tokens: Math.ceil(response.length / 4),
      cost: 0.0001,
      confidence: documents[0]?.score || 0,
      latency,
    };
  }
}

// ===== AGENT DEFINITIONS =====
const AGENT_DEFINITIONS = {
  portfolio: {
    id: "portfolio",
    name: "Portfolio Expert",
    icon: "📁",
    color: "#4CAF50",
    systemPrompt: `You are a Portfolio Expert Agent. Your role is to:
- Provide detailed information about Laxman's projects
- Highlight technical achievements and impact metrics
- Suggest relevant projects for specific queries`,
    expertise: ["projects", "achievements", "technical-details"],
  },
  researcher: {
    id: "researcher",
    name: "Research Analyst",
    icon: "🔬",
    color: "#2196F3",
    systemPrompt: `You are a Research Analyst Agent. Your role is to:
- Analyze technical requirements and match with skills
- Research industry trends and relate to portfolio
- Provide data-driven insights`,
    expertise: ["analysis", "trends", "comparisons"],
  },
  skills: {
    id: "skills",
    name: "Skills Assessor",
    icon: "⚡",
    color: "#FF9800",
    systemPrompt: `You are a Skills Assessment Agent. Your role is to:
- Evaluate technical skill levels
- Match skills to job requirements
- Identify skill gaps and learning paths`,
    expertise: ["skills", "requirements", "learning"],
  },
  communicator: {
    id: "communicator",
    name: "Communication Specialist",
    icon: "💬",
    color: "#9C27B0",
    systemPrompt: `You are a Communication Specialist Agent. Your role is to:
- Craft clear, engaging responses
- Tailor communication style to audience
- Summarize complex technical concepts`,
    expertise: ["communication", "summarization", "presentation"],
  },
  strategist: {
    id: "strategist",
    name: "Career Strategist",
    icon: "🎯",
    color: "#E91E63",
    systemPrompt: `You are a Career Strategy Agent. Your role is to:
- Provide career advancement advice
- Identify opportunities based on skills
- Suggest strategic positioning`,
    expertise: ["career", "strategy", "opportunities"],
  },
  technical: {
    id: "technical",
    name: "Technical Architect",
    icon: "🏗️",
    color: "#00BCD4",
    systemPrompt: `You are a Technical Architecture Agent. Your role is to:
- Explain system designs and architectures
- Discuss technical trade-offs
- Provide implementation insights`,
    expertise: ["architecture", "design", "implementation"],
  },
};

// ===== AGENT ORCHESTRATOR =====
class AgentOrchestrator {
  constructor(config) {
    this.portfolioKnowledge = config.portfolioKnowledge;
    this.vectorStore = config.vectorStore;
    this.callAPI = config.callAPI;
    this.agents = AGENT_DEFINITIONS;
  }

  async executeTask({ task, agents, onMessage, onAgentStateChange }) {
    const results = [];
    const selectedAgents = agents.map((id) => this.agents[id]).filter(Boolean);

    // Phase 1: Task Understanding
    onMessage({
      type: "orchestrator",
      content: `🎯 Analyzing task: "${task}"\n\n📋 Assigning to ${selectedAgents.length} specialized agents...`,
      timestamp: Date.now(),
    });

    await this.delay(500);

    // Phase 2: Agent Execution
    for (const agent of selectedAgents) {
      onAgentStateChange({
        id: agent.id,
        name: agent.name,
        icon: agent.icon,
        status: "thinking",
        color: agent.color,
      });

      onMessage({
        type: "agent-start",
        agentId: agent.id,
        agentName: agent.name,
        icon: agent.icon,
        content: `${agent.icon} ${agent.name} is analyzing...`,
        timestamp: Date.now(),
      });

      await this.delay(800);

      try {
        // Get relevant context from vector store
        const context = this.vectorStore
          ? await this.vectorStore.similaritySearch(task, 3)
          : [];

        const contextStr = context.map((c) => c.content).join("\n");

        const prompt = `${agent.systemPrompt}

PORTFOLIO CONTEXT:
${contextStr}

TASK: ${task}

Provide a focused, helpful response from your perspective as ${agent.name}. Be specific and actionable. Keep response concise (2-3 paragraphs max).`;

        const response = await this.callAPI(prompt, 512);

        results.push({
          agentId: agent.id,
          agentName: agent.name,
          response,
        });

        onAgentStateChange({
          id: agent.id,
          name: agent.name,
          icon: agent.icon,
          status: "complete",
          color: agent.color,
        });

        onMessage({
          type: "agent-response",
          agentId: agent.id,
          agentName: agent.name,
          icon: agent.icon,
          color: agent.color,
          content: response,
          timestamp: Date.now(),
        });
      } catch (error) {
        onAgentStateChange({
          id: agent.id,
          name: agent.name,
          icon: agent.icon,
          status: "error",
          color: agent.color,
        });

        onMessage({
          type: "agent-error",
          agentId: agent.id,
          content: `${agent.icon} ${agent.name} encountered an error`,
          timestamp: Date.now(),
        });
      }

      await this.delay(300);
    }

    // Phase 3: Synthesis
    onMessage({
      type: "orchestrator",
      content: "🔄 Synthesizing agent responses...",
      timestamp: Date.now(),
    });

    await this.delay(500);

    const synthesisPrompt = `You are an AI orchestrator synthesizing responses from multiple agents.

TASK: ${task}

AGENT RESPONSES:
${results.map((r) => `${r.agentName}: ${r.response}`).join("\n\n---\n\n")}

Create a cohesive summary that:
1. Combines key insights from all agents
2. Provides clear, actionable recommendations
3. Highlights the most important points

Keep it concise and well-structured.`;

    const summary = await this.callAPI(synthesisPrompt, 512);

    return { summary, agentResults: results };
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// ===== MAIN COMPONENT =====
const UserSpace = ({ theme, setTheme }) => {
  const { user } = useAuth();

  // Core State
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("brain");
  const [isLoading, setIsLoading] = useState(true);
  const [firestoreError, setFirestoreError] = useState(null);

  // RAG System State
  const [ragEngine, setRAGEngine] = useState(null);
  const [vectorStore, setVectorStore] = useState(null);
  const [ragInitialized, setRagInitialized] = useState(false);
  const [showRetrievalSteps, setShowRetrievalSteps] = useState(true);
  const [retrievedDocs, setRetrievedDocs] = useState([]);

  // AI Brain State (RAG-powered)
  const [brainInput, setBrainInput] = useState("");
  const [brainMessages, setBrainMessages] = useState([]);
  const [brainLoading, setBrainLoading] = useState(false);

  // Skill Match State
  const [jobDescription, setJobDescription] = useState("");
  const [skillAnalysis, setSkillAnalysis] = useState(null);
  const [skillLoading, setSkillLoading] = useState(false);

  // Interview State
  const [interviewRole, setInterviewRole] = useState("");
  const [interviewMessages, setInterviewMessages] = useState([]);
  const [interviewInput, setInterviewInput] = useState("");
  const [interviewLoading, setInterviewLoading] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  // AI Lab State
  const [labExperiment, setLabExperiment] = useState("vision");
  const [labInput, setLabInput] = useState("");
  const [labOutput, setLabOutput] = useState(null);
  const [labLoading, setLabLoading] = useState(false);

  // Multi-Agent Orchestration State
  const [orchestrator, setOrchestrator] = useState(null);
  const [agentTask, setAgentTask] = useState("");
  const [agentConversation, setAgentConversation] = useState([]);
  const [activeAgents, setActiveAgents] = useState([]);
  const [agentRunning, setAgentRunning] = useState(false);
  const [selectedAgents, setSelectedAgents] = useState([
    "portfolio",
    "researcher",
    "skills",
  ]);

  // Project Generator State
  const [projectPrefs, setProjectPrefs] = useState({
    domain: "",
    difficulty: "intermediate",
    tech: "",
  });
  const [generatedProjects, setGeneratedProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);

  // Knowledge Graph State
  const [knowledgeGraph, setKnowledgeGraph] = useState(null);
  // const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [graphTransform, setGraphTransform] = useState({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  // const animationRef = useRef(null);
  const nodePositionsRef = useRef([]);
  // AI Metrics State
  const [metrics, setMetrics] = useState({
    totalTokens: 0,
    totalCost: 0,
    avgLatency: 0,
    successRate: 100,
    requestCount: 0,
  });

  // Saved Items & Notes
  const [savedItems, setSavedItems] = useState([]);
  const [notes, setNotes] = useState("");

  // Refs
  const chatEndRef = useRef(null);
  const interviewEndRef = useRef(null);
  const agentChatEndRef = useRef(null);
  const graphCanvasRef = useRef(null);
  const animationRef = useRef(null); // To store the animation loop
  const [hoveredNodeId, setHoveredNodeId] = useState(null); // Track mouse hover
  // ===== STRUCTURED PORTFOLIO KNOWLEDGE BASE =====
  // ===== COMPREHENSIVE PORTFOLIO KNOWLEDGE BASE =====
  const portfolioKnowledge = useMemo(
    () => ({
      profile: {
        name: "K Laxman",
        title: "Software Development Engineer & AI Specialist",
        currentRole: "Software Development Engineer at CAMS",
        company: "Computer Age Management Services (CAMS)",
        location: "Chennai, Tamil Nadu, India",
        yearsOfExperience: 3,
        education:
          "IIT Delhi - Dual Degree (B.Tech + M.Tech) in Computer Science & Engineering",
        graduationYear: "2024",
        expertise: [
          "Enterprise AI/ML Solutions",
          "Financial Technology",
          "Full Stack Development",
          "Computer Vision",
          "Natural Language Processing",
          "Cloud Architecture (GCP)",
          "Document Intelligence",
        ],
        passion:
          "Building enterprise-grade AI systems that solve real-world problems at scale",
        studentsMentored: "300+",
        profileSummary:
          "IIT Delhi Alumni specializing in AI/ML and FinTech. Currently developing enterprise GenAI platforms at CAMS processing 80,000+ documents monthly. Proven track record in building scalable AI solutions with real business impact.",
      },

      workExperience: [
        {
          id: "cams-sde",
          company: "Computer Age Management Services (CAMS)",
          role: "Software Development Engineer",
          duration: "June 2024 - Present",
          location: "Chennai, Tamil Nadu",
          type: "Full-time",
          description:
            "Leading development of enterprise GenAI platforms for financial document processing and automation",
          responsibilities: [
            "Developed CamsLens Enterprise GenAI platform processing 80,000+ documents monthly with 95% accuracy",
            "Implemented real-time RSS feed ingestion system reducing manual monitoring efforts by 80%",
            "Designed and deployed AI-powered query APIs achieving 60% response time improvement",
            "Built proprietary Ranking Chunks Algorithm for Vertex AI datastore optimization",
            "Developed SEBI Debarred PAN Extraction System reducing manual processing time by 90%",
            "Architected event-driven workflows using GCP Pub/Sub for scalable document processing",
          ],
          technologies: [
            "Vertex AI Gemini-flash 2.0",
            "Google Cloud Platform (GCP)",
            "Agent Builder",
            "Cloud Run",
            "BigQuery",
            "Cloud Storage",
            "Firestore",
            "Pub/Sub",
            "Python",
            "FastAPI",
            "Docker",
          ],
          achievements: [
            "95% accuracy in document processing at enterprise scale",
            "80,000+ documents processed monthly",
            "80% reduction in manual monitoring efforts",
            "60% improvement in API response times",
            "90% reduction in manual PAN extraction processing time",
          ],
          impact: {
            documentsProcessed: "80,000+ monthly",
            accuracy: "95%",
            automationGain: "80%",
            performanceImprovement: "60%",
          },
        },
        {
          id: "eamvey-intern",
          company: "Eamvey Technologies",
          role: "Full Stack Development Intern",
          duration: "2022",
          type: "Internship",
          description:
            "Developed Enhanced Learning Management System for 1,000+ users",
          responsibilities: [
            "Built full-stack LMS supporting 1,000+ concurrent users",
            "Integrated secure payment gateway handling 500+ monthly transactions",
            "Optimized application performance achieving 40% improvement",
            "Implemented role-based access control and user management",
          ],
          technologies: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "MERN Stack",
          ],
          achievements: [
            "1,000+ active users",
            "500+ monthly transactions",
            "40% performance improvement",
          ],
        },
        {
          id: "iit-delhi-ta",
          company: "Indian Institute of Technology Delhi",
          role: "Teaching Assistant",
          duration: "Fall 2019 - Spring 2021",
          location: "New Delhi, India",
          type: "Part-time Academic Role",
          description:
            "Mentored 300+ undergraduate students in Computer Science fundamentals",
          responsibilities: [
            "Conducted tutorial sessions for Data Structures and Algorithms",
            "Mentored 300+ students in Introduction to Programming courses",
            "Evaluated assignments and provided detailed feedback",
            "Assisted in course material development and lab sessions",
          ],
          technologies: [
            "C",
            "C++",
            "Python",
            "Java",
            "Data Structures",
            "Algorithms",
          ],
          achievements: ["Mentored 300+ students successfully"],
        },
      ],

      education: {
        institution: "Indian Institute of Technology Delhi (IIT Delhi)",
        degree: "Dual Degree (B.Tech + M.Tech)",
        major: "Computer Science & Engineering",
        duration: "July 2018 - May 2024",
        location: "New Delhi, India",
        type: "Premier Technical Institute",
        specializations: [
          "Artificial Intelligence & Machine Learning",
          "Computer Vision",
          "Natural Language Processing",
          "Advanced Algorithms",
          "Distributed Systems",
        ],
        relevantCourses: [
          "Data Structures and Algorithms",
          "Introduction to Programming",
          "Machine Learning",
          "Computer Vision",
          "Natural Language Processing",
          "Cloud Computing",
          "Database Management Systems",
          "Software Engineering",
        ],
        achievements: [
          "Teaching Assistant for 300+ students",
          "Specialized in AI/ML during Master's program",
          "Multiple research projects in Computer Vision and NLP",
        ],
      },

      projects: [
        {
          id: "camslens-enterprise-genai",
          name: "CamsLens Enterprise GenAI Platform",
          category: "Enterprise AI",
          timeline: "2024 - Present",
          status: "Production",
          company: "CAMS",
          description:
            "Enterprise-grade GenAI platform for intelligent financial document processing, analysis, and retrieval. Handles massive scale with CMEK-compliant security and real-time capabilities.",
          detailedDescription:
            "Built a comprehensive AI platform that processes and analyzes financial documents at enterprise scale. Implements advanced RAG (Retrieval Augmented Generation) with custom ranking algorithms, real-time RSS feed monitoring, and intelligent query APIs. The platform ensures regulatory compliance with CMEK encryption while maintaining high accuracy and performance.",
          techStack: [
            "Vertex AI Gemini-flash 2.0",
            "Google Agent Builder",
            "Google Cloud Run",
            "BigQuery",
            "Cloud Storage",
            "Python",
            "FastAPI",
            "Docker",
          ],
          features: [
            "Document ingestion and processing pipeline handling 80,000+ documents monthly",
            "Real-time RSS feed monitoring and ingestion system",
            "AI-powered query APIs with semantic search",
            "Custom Ranking Chunks Algorithm for optimal retrieval",
            "CMEK-compliant storage and encryption",
            "Advanced RAG implementation with context-aware responses",
            "Automated document classification and tagging",
            "Real-time analytics dashboard with BigQuery integration",
          ],
          impact: {
            documentsProcessed: "80,000+ monthly",
            accuracy: "95%",
            manualWorkReduction: "80%",
            responseTimeImprovement: "60%",
            usersSupported: "Enterprise-wide",
          },
          achievements: [
            "Achieved 95% accuracy in document processing and classification",
            "Processes 80,000+ documents monthly with sub-second query responses",
            "Reduced manual monitoring efforts by 80% through automation",
            "Improved API response times by 60% through optimization",
            "Implemented production-grade RAG system with custom ranking",
          ],
          challenges:
            "Balancing accuracy with performance at enterprise scale while maintaining regulatory compliance and data security",
          learnings:
            "Deep expertise in GenAI, RAG systems, GCP services, enterprise security, and scalable architecture patterns",
          businessValue:
            "Significant cost savings through automation, improved decision-making with AI insights, and enhanced compliance monitoring",
        },
        {
          id: "sebi-pan-extraction",
          name: "SEBI Debarred PAN Extraction System",
          category: "AI Automation",
          timeline: "2024",
          status: "Production",
          company: "CAMS",
          description:
            "Automated backend system extracting debarred PAN details from SEBI regulatory orders using AI and cloud-native architecture",
          detailedDescription:
            "Developed an intelligent automation system that monitors SEBI regulatory orders, extracts debarred PAN card details using AI-powered document understanding, and stores them in a scalable cloud infrastructure with event-driven processing.",
          techStack: [
            "Python",
            "Google Cloud Storage",
            "Firestore",
            "Pub/Sub",
            "Vertex AI",
            "Docker",
            "BeautifulSoup",
          ],
          features: [
            "Automated scraping of SEBI regulatory orders",
            "AI-powered PAN number extraction from PDFs",
            "Event-driven workflow using Pub/Sub",
            "Scalable storage with Firestore and Cloud Storage",
            "Real-time processing and notifications",
            "Data validation and deduplication",
          ],
          impact: {
            timeReduction: "90%",
            accuracy: "High accuracy in PAN extraction",
            automation: "Fully automated pipeline",
          },
          achievements: [
            "Reduced manual processing time by ~90%",
            "Implemented cloud-native event-driven architecture",
            "Automated end-to-end regulatory compliance workflow",
          ],
          challenges:
            "Handling varying PDF formats and extracting structured data from unstructured regulatory documents",
          learnings:
            "Event-driven architecture, GCP services integration, intelligent document processing",
          businessValue:
            "Massive time savings in compliance monitoring and regulatory tracking",
        },
        {
          id: "financial-email-automation",
          name: "AI-Powered Financial Email Automation System",
          category: "NLP & Automation",
          timeline: "2025",
          status: "Production",
          company: "CAMS",
          description:
            "FastAPI microservice using Large Language Models for intelligent email classification and data extraction",
          detailedDescription:
            "Built a high-performance microservice that uses LLMs with zero-shot learning to automatically classify financial emails and extract critical information like PAN numbers, ARN codes, and dates without requiring training data.",
          techStack: [
            "Python",
            "FastAPI",
            "vLLM",
            "Docker",
            "Large Language Models",
            "Prompt Engineering",
          ],
          features: [
            "Zero-shot learning for email classification",
            "Automatic PAN number extraction with validation",
            "ARN (AMFI Registration Number) extraction",
            "Date extraction and normalization",
            "Batch processing capabilities",
            "Real-time API endpoints",
            "Confidence scoring for extractions",
          ],
          impact: {
            emailsProcessed: "1,000+ daily",
            accuracy: "95%",
            manualProcessingReduction: "80%",
            processingSpeed: "Real-time",
          },
          achievements: [
            "Achieved 95% accuracy in zero-shot classification",
            "Processes 1,000+ emails daily automatically",
            "Reduced manual email processing by 80%",
            "Implemented production-grade LLM microservice",
          ],
          challenges:
            "Achieving high accuracy without labeled training data using zero-shot learning",
          learnings:
            "LLM prompt engineering, zero-shot learning, microservices architecture, vLLM optimization",
          businessValue:
            "Significant operational efficiency gains and faster customer response times",
        },
        {
          id: "stock-exchange-platform",
          name: "Stock Exchange Trading Platform",
          category: "Full-Stack FinTech",
          timeline: "2024",
          status: "Completed",
          description:
            "Full-stack real-time trading simulation platform with enterprise-grade security and performance",
          detailedDescription:
            "Developed a comprehensive stock trading platform supporting concurrent users with real-time order matching, portfolio management, JWT authentication, and role-based access control.",
          techStack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "H2 Database",
            "JWT",
            "REST APIs",
            "Maven",
          ],
          features: [
            "Real-time stock trading simulation",
            "Order matching engine with sub-second latency",
            "Portfolio management and tracking",
            "JWT-based authentication",
            "Role-based access control (Admin/User)",
            "Real-time price updates",
            "Transaction history and analytics",
            "Admin dashboard for monitoring",
          ],
          impact: {
            concurrentUsers: "100+",
            responseTime: "Sub-second",
            uptime: "High availability",
          },
          achievements: [
            "Supports 100+ concurrent users with stable performance",
            "Sub-second response times for critical trading operations",
            "Implemented enterprise-grade security with JWT and RBAC",
            "Built scalable order matching engine",
          ],
          challenges:
            "Maintaining sub-second latency under high concurrent load",
          learnings:
            "Spring Boot ecosystem, JWT security, real-time systems, database optimization",
          technicalHighlights:
            "Optimized database queries, connection pooling, caching strategies for high performance",
        },
        {
          id: "borderless-table-recognition",
          name: "Borderless Table Recognition & Accessibility",
          category: "Computer Vision",
          timeline: "2023",
          status: "Completed",
          description:
            "Advanced PDF table detection system achieving 30% accuracy improvement over baseline models",
          detailedDescription:
            "Developed an intelligent table detection and extraction system for PDFs, especially borderless tables, using Layout Parser and MTL-TabNet with SVM classification for improved accessibility.",
          techStack: [
            "Python",
            "Layout Parser",
            "MTL-TabNet",
            "OpenCV",
            "SVM (Support Vector Machines)",
            "Docker",
            "RAVI Framework",
          ],
          features: [
            "Borderless table detection in PDFs",
            "Table cell classification with 90% accuracy",
            "Layout analysis and structure preservation",
            "Integration with RAVI accessibility framework",
            "Docker containerized deployment",
            "Batch processing capabilities",
          ],
          impact: {
            accuracyImprovement: "30% over CascadeTabNet",
            cellClassificationAccuracy: "90%",
            documentsProcessed: "500+",
          },
          achievements: [
            "30% accuracy improvement over CascadeTabNet baseline",
            "90% accuracy in table cell classification using SVM",
            "Successfully containerized for RAVI framework integration",
            "Improved accessibility for visually impaired users",
          ],
          challenges:
            "Detecting tables without clear borders in complex PDF layouts",
          learnings:
            "Computer vision techniques, SVM classification, layout analysis, Docker containerization",
          researchContribution:
            "Advanced state-of-the-art in borderless table detection",
        },
        {
          id: "ravi-accessibility",
          name: "RAVI - Reading Assistant for Visually Impaired",
          category: "Accessibility AI",
          timeline: "2022",
          status: "Completed",
          description:
            "Comprehensive STEM document accessibility platform converting PDFs and EPUBs to accessible formats",
          detailedDescription:
            "Built a complete toolchain and web application for converting STEM documents into accessible formats with crowdsourced ALT TEXT generation, enabling visually impaired students to access technical education materials.",
          techStack: [
            "Python",
            "Flask",
            "HTML/CSS",
            "JavaScript",
            "OCR",
            "Document Processing",
          ],
          features: [
            "PDF to accessible format conversion",
            "EPUB processing and conversion",
            "Flask web application for crowdsourcing",
            "ALT TEXT generation for images and diagrams",
            "STEM equation handling",
            "Multi-format output support",
            "Collaborative annotation platform",
          ],
          impact: {
            documentsConverted: "500+",
            socialImpact:
              "Improved accessibility for visually impaired students",
            volunteers: "Active crowdsourcing community",
          },
          achievements: [
            "Converted 500+ STEM documents to accessible formats",
            "Built crowdsourcing platform for ALT TEXT generation",
            "Enabled education access for visually impaired students",
            "Created reusable document processing pipeline",
          ],
          challenges:
            "Handling complex STEM equations and diagrams in accessible formats",
          learnings:
            "Accessibility standards, OCR, document processing, Flask web development",
          socialImpact: "Significant contribution to inclusive education",
          recognition:
            "Helped visually impaired students access technical education materials",
        },
        {
          id: "driver-drowsiness-detection",
          name: "Driver Drowsiness Detection System",
          category: "Computer Vision",
          timeline: "2021",
          status: "Completed",
          description:
            "Real-time computer vision system detecting driver fatigue with 90%+ accuracy at 30 FPS",
          detailedDescription:
            "Developed a real-time drowsiness detection system using facial landmark detection and eye aspect ratio calculation, optimized for embedded systems and edge deployment.",
          techStack: [
            "Python",
            "OpenCV",
            "Dlib",
            "Facial Landmark Detection",
            "Computer Vision",
          ],
          features: [
            "Real-time facial landmark detection",
            "Eye aspect ratio (EAR) calculation",
            "Drowsiness alert system",
            "30 FPS performance on standard hardware",
            "Optimized for embedded systems",
            "Adjustable sensitivity thresholds",
          ],
          impact: {
            detectionAccuracy: "90%+",
            fps: "30 FPS",
            deployment: "Embedded systems ready",
          },
          achievements: [
            "90%+ detection accuracy in real-time",
            "Maintained 30 FPS on resource-constrained devices",
            "Optimized for embedded and edge deployment",
            "Reliable drowsiness alert mechanism",
          ],
          challenges:
            "Achieving real-time performance on low-power embedded hardware",
          learnings:
            "Real-time computer vision, facial landmark detection, embedded optimization",
          potentialImpact: "Road safety and accident prevention",
        },
        {
          id: "enhanced-lms",
          name: "Enhanced Learning Management System",
          category: "Full-Stack EdTech",
          timeline: "2022",
          status: "Completed",
          company: "Eamvey Technologies",
          description:
            "Full-stack LMS supporting 1,000+ users with integrated payment gateway",
          detailedDescription:
            "Developed during internship at Eamvey Technologies, this comprehensive learning management system handles course management, user enrollment, payment processing, and content delivery at scale.",
          techStack: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "MERN Stack",
            "Payment Gateway Integration",
          ],
          features: [
            "User enrollment and management",
            "Course creation and delivery",
            "Secure payment gateway integration",
            "Progress tracking and analytics",
            "Video content delivery",
            "Quiz and assessment system",
            "Certificate generation",
            "Admin dashboard",
          ],
          impact: {
            users: "1,000+",
            monthlyTransactions: "500+",
            performanceImprovement: "40%",
          },
          achievements: [
            "Supported 1,000+ concurrent users",
            "Handled 500+ monthly transactions securely",
            "Achieved 40% performance improvement through optimization",
            "Built scalable full-stack application",
          ],
          challenges:
            "Scaling to handle 1,000+ users while maintaining performance",
          learnings:
            "MERN stack, payment gateway integration, scalability, performance optimization",
        },
        {
          id: "nexgen-gaming-ecommerce",
          name: "NexGen Gaming E-Commerce Platform",
          category: "Full-Stack E-Commerce",
          timeline: "2024",
          status: "Completed",
          description:
            "Modern e-commerce platform for gaming consoles and accessories with seamless UX",
          detailedDescription:
            "Full-stack gaming e-commerce platform featuring product catalog, shopping cart, order management, delivery tracking, and secure payments with modern responsive design.",
          techStack: [
            "React",
            "Node.js",
            "MongoDB Atlas",
            "Express.js",
            "TailwindCSS",
            "Firebase",
            "Vercel",
          ],
          features: [
            "Product catalog with filtering and search",
            "Shopping cart and wishlist",
            "Secure checkout process",
            "Order management system",
            "Delivery tracking",
            "User authentication with Firebase",
            "Responsive design with TailwindCSS",
            "Admin panel for inventory management",
          ],
          achievements: [
            "Smooth and intuitive user experience",
            "Responsive design across all devices",
            "Deployed on Vercel with CI/CD",
            "Integrated Firebase authentication",
          ],
          learnings:
            "E-commerce patterns, Firebase, TailwindCSS, Vercel deployment",
          businessValue: "Complete end-to-end e-commerce solution",
        },
        {
          id: "ipo-monitoring-notifier",
          name: "IPO Monitoring & Notifier",
          category: "Financial Automation",
          timeline: "2023",
          status: "Completed",
          description:
            "Real-time IPO Grey Market Premium monitoring with automated notifications",
          detailedDescription:
            "Automated system tracking IPO Grey Market Premiums in real-time, processing market data, and sending instant notifications for investment opportunities.",
          techStack: [
            "Python",
            "OpenCV",
            "OCR",
            "PDF Processing",
            "Excel Automation",
            "Web Scraping",
          ],
          features: [
            "Real-time IPO data scraping",
            "Grey Market Premium tracking",
            "Automated notifications system",
            "Excel report generation",
            "Historical data tracking",
            "Trend analysis",
          ],
          impact: {
            automation: "Fully automated tracking",
            realTime: "Instant notifications",
          },
          achievements: [
            "Automated end-to-end IPO monitoring",
            "Real-time notifications for opportunities",
            "Structured data extraction and reporting",
          ],
          learnings: "Web scraping, OCR, data extraction, automation",
        },
        {
          id: "rss-feed-downloader",
          name: "RSS Feed Document Downloader",
          category: "Automation",
          timeline: "2023",
          status: "Completed",
          description:
            "Automated RSS feed monitoring with document downloading and PDF conversion",
          detailedDescription:
            "System that monitors RSS feeds, automatically downloads documents, converts them to structured PDFs, and generates Excel outputs for tracking.",
          techStack: [
            "Python",
            "OpenCV",
            "OCR",
            "PDF Processing",
            "Excel Automation",
          ],
          features: [
            "RSS feed monitoring",
            "Automated document downloading",
            "PDF conversion",
            "Excel report generation",
            "Scheduling and automation",
          ],
          achievements: [
            "Automated document collection from multiple RSS feeds",
            "Structured output generation",
            "Reliable scheduled execution",
          ],
          learnings: "RSS parsing, document automation, scheduled tasks",
        },
        {
          id: "msg-to-pdf-converter",
          name: "MSG-to-PDF Converter for Financial Emails",
          category: "Document Processing",
          timeline: "2023",
          status: "Completed",
          description:
            "High-volume email converter processing 20,000+ .MSG files to structured PDFs",
          detailedDescription:
            "Streamlit application converting thousands of financial emails from .MSG format to organized PDFs, preserving formatting and attachments.",
          techStack: ["Python", "WeasyPrint", "Streamlit", "Email Processing"],
          features: [
            "Batch .MSG to PDF conversion",
            "Preserves email formatting",
            "Handles attachments",
            "Streamlit web interface",
            "Progress tracking",
          ],
          impact: {
            filesProcessed: "20,000+",
            workflowImprovement: "Streamlined email archiving",
          },
          achievements: [
            "Processed 20,000+ financial emails",
            "Automated email archiving workflow",
            "Built user-friendly Streamlit interface",
          ],
          learnings: "Email processing, PDF generation, Streamlit",
        },
        {
          id: "pdf-footnotes-processor",
          name: "PDF Footnotes Processor",
          category: "Document Intelligence",
          timeline: "2023",
          status: "Completed",
          description:
            "Intelligent footnote and reference extraction from large financial PDFs",
          detailedDescription:
            "System that maps footnotes and references from PDFs (1,000+ pages) into structured Excel sheets for easy reference and analysis.",
          techStack: [
            "Python",
            "OpenCV",
            "OCR",
            "PDF Processing",
            "Excel Automation",
          ],
          features: [
            "Footnote detection and extraction",
            "Reference mapping",
            "Excel structured output",
            "Handles large documents (1,000+ pages)",
            "Page number preservation",
          ],
          impact: {
            documentSize: "1,000+ pages",
            accuracy: "High extraction accuracy",
          },
          achievements: [
            "Successfully processed large financial documents",
            "Accurate footnote-to-reference mapping",
            "Structured Excel output for analysis",
          ],
          learnings: "Document structure analysis, OCR, large file processing",
        },
        {
          id: "field-extraction-ocr",
          name: "Field Extraction OCR from Images",
          category: "Computer Vision",
          timeline: "2023",
          status: "Completed",
          description:
            "Automated field extraction system for PAN, Folio numbers from images",
          detailedDescription:
            "OCR-based system using DocTR to automatically extract specific fields like PAN and Folio numbers from financial documents and images.",
          techStack: ["Python", "OpenCV", "DocTR", "Streamlit", "OCR"],
          features: [
            "Automatic field detection",
            "PAN number extraction with validation",
            "Folio number extraction",
            "Streamlit web interface",
            "Batch processing support",
          ],
          achievements: [
            "Accurate field extraction from images",
            "User-friendly Streamlit interface",
            "Automated data entry workflow",
          ],
          learnings: "DocTR, OCR, field detection algorithms",
        },
        {
          id: "live-snapshot-restore-vm",
          name: "Live Snapshot & Restore for VMs",
          category: "Systems Programming",
          timeline: "2022",
          status: "Completed",
          description:
            "KVM-based snapshot and restore service for running virtual machines",
          detailedDescription:
            "System-level tool built in Rust for taking live snapshots of running VMs and restoring them without downtime.",
          techStack: [
            "Rust",
            "HTML/CSS",
            "VMware",
            "KVM",
            "Systems Programming",
          ],
          features: [
            "Live VM snapshot without downtime",
            "Snapshot restoration",
            "Web interface for management",
            "KVM integration",
          ],
          achievements: [
            "Successfully implemented live snapshot mechanism",
            "Built in Rust for performance and safety",
            "Web interface for VM management",
          ],
          learnings: "Rust, systems programming, KVM, virtualization",
        },
        {
          id: "airline-dbms",
          name: "Airline DBMS Prototype",
          category: "Database Systems",
          timeline: "2022",
          status: "Completed",
          description:
            "Airline booking system simulation with Flask and PostgreSQL",
          detailedDescription:
            "Full database-driven airline booking system prototype with flight search, booking, and management features.",
          techStack: ["Flask", "PostgreSQL", "HTML/CSS", "Kaggle Datasets"],
          features: [
            "Flight search and filtering",
            "Booking management",
            "Passenger information system",
            "Admin panel",
            "Database-driven operations",
          ],
          achievements: [
            "Complete DBMS implementation",
            "Normalized database schema",
            "Functional booking system",
          ],
          learnings: "PostgreSQL, database design, Flask, SQL queries",
        },
        {
          id: "large-file-download",
          name: "Large File Download - Socket Programming",
          category: "Networking",
          timeline: "2021",
          status: "Completed",
          description:
            "BitTorrent-style file transfer using TCP/IP socket programming",
          detailedDescription:
            "Implemented peer-to-peer file transfer system similar to BitTorrent using Python socket programming with TCP/IP protocol.",
          techStack: [
            "Python",
            "Socket Programming",
            "TCP/IP",
            "Wireshark",
            "Networking",
          ],
          features: [
            "Peer-to-peer file transfer",
            "Chunked data transfer",
            "TCP/IP implementation",
            "Network monitoring with Wireshark",
            "Error handling and recovery",
          ],
          achievements: [
            "Implemented BitTorrent-style transfer",
            "Efficient TCP/IP data handling",
            "Network analysis with Wireshark",
          ],
          learnings: "Socket programming, TCP/IP, network protocols, Wireshark",
        },
        {
          id: "pacman-multiagent",
          name: "Multi-Agent Search Modeling in Pacman",
          category: "AI/ML",
          timeline: "2021",
          status: "Completed",
          description:
            "AI decision-making implementation for Pacman game agents",
          detailedDescription:
            "Implemented various search algorithms and decision-making strategies for multi-agent Pacman game with AI opponents.",
          techStack: ["Python", "Search Algorithms", "ReactJS", "AI/ML"],
          features: [
            "Minimax algorithm implementation",
            "Alpha-beta pruning",
            "Multi-agent decision making",
            "Game state evaluation",
            "AI opponent behavior",
          ],
          achievements: [
            "Implemented multiple AI search algorithms",
            "Functional multi-agent game system",
            "ReactJS frontend visualization",
          ],
          learnings: "Search algorithms, game AI, minimax, alpha-beta pruning",
        },
        {
          id: "lift-controller",
          name: "Simulation of Lift Controller System",
          category: "Embedded Systems",
          timeline: "2021",
          status: "Completed",
          description:
            "VHDL-based three-floor lift operation logic and simulation",
          detailedDescription:
            "Hardware description language implementation of lift control logic for three floors with state machine design.",
          techStack: ["VHDL", "Vivado", "API", "Integrated Circuits"],
          features: [
            "Three-floor lift logic",
            "State machine design",
            "Hardware simulation",
            "API integration",
          ],
          achievements: [
            "Complete lift controller logic",
            "Successful hardware simulation",
            "State machine implementation",
          ],
          learnings: "VHDL, hardware design, state machines, Vivado",
        },
        {
          id: "big-number-arithmetic",
          name: "Big Number Arithmetic Operations",
          category: "Algorithms",
          timeline: "2021",
          status: "Completed",
          description:
            "Arithmetic operations for extremely large numbers beyond native types",
          detailedDescription:
            "Implementation of arithmetic operations for numbers exceeding standard integer sizes using custom algorithms.",
          techStack: ["C", "Node.js", "Algorithms"],
          features: [
            "Large number addition",
            "Large number multiplication",
            "Custom data structures",
            "Efficient algorithms",
          ],
          achievements: [
            "Handled extremely large numbers",
            "Efficient algorithm implementation",
          ],
          learnings: "Algorithm design, C programming, number theory",
        },
      ],

      virtualInternships: [
        {
          id: "goldmansachs-vi",
          company: "Goldman Sachs",
          program: "Virtual Internship",
          year: "2022",
          focus: "Finance & Technology",
          technologies: ["Java", "GraphQL", "React", "Apollo Client"],
          projects: [
            "Financial application development",
            "GraphQL API integration",
          ],
        },
        {
          id: "walmart-vi",
          company: "Walmart",
          program: "Advanced Software Engineering Virtual Experience",
          year: "2022",
          technologies: ["Flutter", "Dart", "React", "Node.js", "PostgreSQL"],
          projects: ["Mobile app development", "Full-stack features"],
        },
        {
          id: "jpmorgan-vi",
          company: "JPMorgan Chase",
          program: "Virtual Internship",
          year: "2022",
          technologies: ["React", "Node.js", "MongoDB"],
          projects: ["Metamask integration", "Twitter API integration"],
        },
        {
          id: "hp-vi",
          company: "HP",
          program: "Virtual Internship",
          year: "2022",
          technologies: [
            "Next.js",
            "Node.js",
            "Supabase",
            "Razorpay",
            "Vercel",
          ],
          projects: [
            "Next.js application development",
            "Payment gateway integration",
          ],
        },
      ],

      skills: {
        languages: {
          expert: ["Python", "JavaScript", "Java"],
          proficient: ["TypeScript", "C", "C++", "Rust", "VHDL"],
          learning: ["Go", "Dart"],
        },

        aiml: {
          frameworks: [
            "Vertex AI",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "Hugging Face Transformers",
          ],
          specializations: [
            "Generative AI (GenAI)",
            "Retrieval Augmented Generation (RAG)",
            "Large Language Models (LLMs)",
            "Computer Vision",
            "Natural Language Processing (NLP)",
            "Document Intelligence",
            "Few-shot Learning",
            "Zero-shot Learning",
          ],
          tools: [
            "vLLM",
            "OpenCV",
            "Dlib",
            "Layout Parser",
            "MTL-TabNet",
            "DocTR",
            "spaCy",
            "NLTK",
          ],
          techniques: [
            "Prompt Engineering",
            "Fine-tuning",
            "Transfer Learning",
            "Model Optimization",
            "OCR",
            "Image Processing",
            "Facial Recognition",
          ],
        },

        fullStack: {
          frontend: [
            "React.js",
            "Next.js",
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "TailwindCSS",
            "Bootstrap",
          ],
          backend: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "Flask",
            "Java Spring Boot",
            "Spring Security",
            "REST APIs",
            "GraphQL",
          ],
          databases: [
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Google BigQuery",
            "Firestore",
            "H2 Database",
            "Redis",
          ],
        },

        cloudDevOps: {
          platforms: [
            "Google Cloud Platform (GCP)",
            "AWS",
            "Azure",
            "Firebase",
            "Vercel",
          ],
          gcpServices: [
            "Vertex AI",
            "Agent Builder",
            "Cloud Run",
            "Cloud Storage",
            "BigQuery",
            "Firestore",
            "Pub/Sub",
            "GCP SDK",
          ],
          tools: [
            "Docker",
            "Kubernetes",
            "Git",
            "GitHub Actions",
            "Jenkins",
            "Maven",
            "npm",
            "Postman",
          ],
        },

        specializedSkills: [
          "Enterprise AI Platform Development",
          "Document Processing & Intelligence",
          "Real-time Systems",
          "Microservices Architecture",
          "Event-Driven Architecture",
          "Financial Technology (FinTech)",
          "Payment Gateway Integration",
          "Web Scraping & Automation",
          "OCR & Document Extraction",
          "Socket Programming",
          "Database Design & Optimization",
        ],
      },

      achievements: [
        "Developed enterprise GenAI platform processing 80,000+ documents monthly with 95% accuracy",
        "Reduced manual processing time by 90% through AI automation at CAMS",
        "Achieved 30% improvement over state-of-the-art in borderless table detection",
        "Mentored 300+ undergraduate students as Teaching Assistant at IIT Delhi",
        "Built production systems handling 1,000+ daily operations",
        "Completed dual degree (B.Tech + M.Tech) from IIT Delhi in Computer Science",
        "Contributed to accessibility by converting 500+ STEM documents for visually impaired",
        "Developed 25+ diverse projects spanning AI, Full-Stack, Systems, and Automation",
        "Achieved 95% accuracy in zero-shot email classification using LLMs",
        "Completed virtual internships with Goldman Sachs, Walmart, JPMorgan, and HP",
      ],

      researchInterests: [
        "Generative AI and Large Language Models",
        "Retrieval Augmented Generation (RAG) systems",
        "Enterprise AI platform architecture",
        "Document Intelligence and processing at scale",
        "Zero-shot and few-shot learning",
        "Computer Vision for accessibility",
        "Financial Technology and AI automation",
        "Real-time AI systems",
        "Model optimization and deployment",
        "Event-driven AI architectures",
      ],

      certifications: [
        "Google Cloud Platform fundamentals",
        "AWS Cloud basics",
        "Virtual Internship - Goldman Sachs",
        "Virtual Internship - Walmart",
        "Virtual Internship - JPMorgan Chase",
        "Virtual Internship - HP",
      ],

      contact: {
        email: "Laxmankethavath5@gmail.com",
        phone: "+91-9000063740",
        linkedin: "https://linkedin.com/in/k-laxman",
        github: "https://github.com/Laxman824",
        portfolio: "https://k-laxman-portfolio.com",
        location: "Chennai, Tamil Nadu, India",
        availability: "Currently employed at CAMS, open to opportunities",
      },

      careerObjective:
        "Passionate about building enterprise-grade AI systems that solve real-world problems at scale. Seeking opportunities to leverage expertise in GenAI, RAG systems, and cloud architecture to drive innovation in AI-powered products and platforms.",

      strengths: [
        "Strong foundation in AI/ML from IIT Delhi",
        "Proven ability to deliver production-grade AI systems",
        "Full-stack development expertise",
        "Cloud-native architecture experience",
        "Teaching and mentoring capabilities",
        "Problem-solving and optimization skills",
        "Fast learner with diverse technical exposure",
      ],
    }),
    []
  );

  // ===== HELPER: CLEAN & PARSE AI JSON =====
  const cleanAndParseJSON = (responseString) => {
    try {
      // 1. Remove Markdown code blocks (e.g., ```json ... ```)
      let cleaned = responseString.replace(/```json/g, "").replace(/```/g, "");

      // 2. Locate the outermost JSON object
      const firstOpen = cleaned.indexOf("{");
      const lastClose = cleaned.lastIndexOf("}");

      if (firstOpen !== -1 && lastClose !== -1) {
        cleaned = cleaned.substring(firstOpen, lastClose + 1);
      }

      // 3. Remove trailing commas (common AI error: ["item",] -> ["item"])
      // Regex explanation: Look for a comma followed immediately by whitespace and a closing brace/bracket
      cleaned = cleaned.replace(/,(\s*[}\]])/g, "$1");

      return JSON.parse(cleaned);
    } catch (error) {
      console.error("JSON Parsing failed. Raw string:", responseString);
      throw new Error("Failed to parse AI response into JSON");
    }
  };

  // ===== PARSE JOB DESCRIPTION =====
  const parseJobDescription = async (jdText) => {
    if (!jdText.trim()) return null;

    const prompt = `You are an expert job description analyzer. Parse this JD and extract structured information.

JOB DESCRIPTION:
${jdText}

Return ONLY valid JSON. Do not include markdown formatting or comments.
Ensure there are NO trailing commas.
Format:
{
  "companyName": "Company name or 'Unknown'",
  "roleTitle": "Exact job title",
  "seniorityLevel": "Entry/Mid/Senior/Lead/Principal/Staff",
  "roleType": "Full-time/Part-time/Contract",
  "location": "Location or Remote",
  "teamDomain": "e.g., Backend, AI/ML, Full-stack, DevOps",
  
  "mustHaveSkills": [
    {"skill": "Python", "yearsRequired": "3+", "priority": "critical"}
  ],
  "niceToHaveSkills": [
    {"skill": "Kubernetes", "priority": "medium"}
  ],
  
  "keyResponsibilities": [
    "Build and deploy ML models"
  ],
  
  "techStack": {
    "languages": ["Python"],
    "frameworks": ["FastAPI"],
    "databases": ["PostgreSQL"],
    "cloud": ["AWS"],
    "tools": ["Docker"]
  },
  
  "keywords": ["machine learning"],
  "cultureSignals": ["fast-paced"],
  
  "estimatedSalaryRange": {
    "min": 0,
    "max": 0,
    "currency": "USD",
    "confidence": "low"
  },
  
  "redFlags": [],
  "greenFlags": []
}`;

    try {
      const response = await callGeminiAPI(prompt, 8192);
      // Use the helper function instead of raw JSON.parse
      return cleanAndParseJSON(response);
    } catch (error) {
      console.error("JD parsing error:", error);
      // Return a dummy object so the UI doesn't crash completely
      return {
        companyName: "Unknown Company",
        roleTitle: "Software Engineer",
        roleType: "Full-time",
        mustHaveSkills: [],
        techStack: {},
      };
    }
  };

  // ===== ANALYZE SKILL MATCH =====
  const analyzeMatch = async (parsedJD) => {
    if (!parsedJD) return null;

    const prompt = `You are a career advisor analyzing skill match between a candidate and a job.

CANDIDATE PROFILE:
${JSON.stringify(LAXMAN_PROFILE, null, 2)}

JOB REQUIREMENTS:
${JSON.stringify(parsedJD, null, 2)}

Analyze the match and return ONLY valid JSON:
{
  "overallMatchScore": 85,
  "matchLevel": "Strong Match",
  "summary": "2-3 sentence summary of the match",
  
  "skillMatches": [
    {
      "jdSkill": "Python",
      "candidateEvidence": "Used in FastAPI, Flask, ML projects",
      "matchStrength": "strong",
      "relevantProjects": ["CamsLens", "Email Automation"]
    }
  ],
  
  "skillGaps": [
    {
      "jdSkill": "Kubernetes",
      "importance": "medium",
      "candidateLevel": "basic",
      "recommendation": "Highlight Docker experience, mention K8s learning"
    }
  ],
  
  "strongPoints": [
    {
      "area": "Gen AI & LLMs",
      "why": "Direct experience with Vertex AI, Gemini at CAMS",
      "emphasizeInResume": true
    }
  ],
  
  "projectRelevance": [
    {
      "project": "CamsLens",
      "relevanceScore": 95,
      "matchingAspects": ["Gen AI", "Enterprise scale", "GCP"],
      "shouldHighlight": true,
      "suggestedPosition": 1
    }
  ],
  
  "experienceMatch": {
    "yearsRequired": "3-5",
    "yearsCandidate": "1+ industry, 6 years total (incl. education)",
    "assessment": "Meets through combined experience"
  },
  
  "uniqueAdvantages": [
    "IIT Delhi dual degree adds credibility",
    "Production Gen AI experience (rare)"
  ],
  
  "areasToImprove": [
    "Could emphasize specific metrics more"
  ],
  
  "fitScore": {
    "technical": 88,
    "experience": 75,
    "domain": 90,
    "culture": 80
  }
}`;

    try {
      const response = await callGeminiAPI(prompt, 8192);
      // const jsonMatch = response.match(/\{[\s\S]*\}/);
      // if (jsonMatch) {
      //   return JSON.parse(jsonMatch[0]);
      // }
      return cleanAndParseJSON(response);
    } catch (error) {
      console.error("Match analysis error:", error);
    }
    return null;
  };

  // ===== TAILOR RESUME =====
  const tailorResume = async (parsedJD, matchAnalysis, intensity) => {
    if (!parsedJD || !matchAnalysis) return originalLatex;

    const intensityGuide = {
      conservative: `
      - Only reorder sections/bullets to prioritize relevant content
      - Add 2-3 JD keywords naturally where they fit
      - Do NOT rewrite bullet points substantially
      - Keep all existing content
    `,
      moderate: `
      - Reorder projects and experience bullets by relevance
      - Enhance 3-5 bullet points with JD keywords
      - Slightly rephrase to match JD language
      - Can add brief mentions of matching skills
    `,
      aggressive: `
      - Significantly reorder all sections by JD relevance
      - Rewrite bullet points to directly address JD requirements
      - Add all relevant keywords throughout
      - Restructure to emphasize matching experience
      - Can combine or split bullet points for better impact
    `,
    };

    const prompt = `You are an expert resume tailoring specialist. Modify this LaTeX resume to better match the job description.

ORIGINAL LATEX RESUME:
${originalLatex}

JOB DESCRIPTION PARSED:
${JSON.stringify(parsedJD, null, 2)}

SKILL MATCH ANALYSIS:
${JSON.stringify(matchAnalysis, null, 2)}

TAILORING INTENSITY: ${intensity.toUpperCase()}
${intensityGuide[intensity]}

RULES:
1. Return ONLY the complete modified LaTeX code - no explanations
2. Keep the exact same LaTeX structure and commands
3. Do NOT break any LaTeX syntax
4. Preserve all links, formatting commands, and special characters
5. For ${intensity} intensity: ${intensityGuide[intensity]}
6. Reorder projects to put most relevant first (based on projectRelevance scores)
7. Inject keywords from: ${parsedJD.keywords?.join(", ")}
8. Add a tailored summary/objective if appropriate for the role
9. Ensure all \\ and special LaTeX chars are properly escaped

MODIFIED LATEX:`;

    try {
      const response = await callGeminiAPI(prompt, 8192);

      // Clean up the response - remove markdown code blocks if present
      let latex = response;
      if (latex.includes("```latex")) {
        latex = latex.replace(/```latex\n?/g, "").replace(/```\n?/g, "");
      } else if (latex.includes("```")) {
        latex = latex.replace(/```\n?/g, "");
      }

      return latex.trim();
    } catch (error) {
      console.error("Resume tailoring error:", error);
      return originalLatex;
    }
  };

  // ===== GENERATE INTERVIEW QUESTIONS =====
  const generateInterviewPrep = async (parsedJD, matchAnalysis) => {
    if (!parsedJD) return [];

    const prompt = `You are a senior technical interviewer. Generate interview questions for this candidate and role.

ROLE: ${parsedJD.roleTitle} at ${parsedJD.companyName}
DOMAIN: ${parsedJD.teamDomain}
TECH STACK: ${JSON.stringify(parsedJD.techStack)}

CANDIDATE PROFILE:
${JSON.stringify(LAXMAN_PROFILE, null, 2)}

SKILL GAPS TO PROBE:
${JSON.stringify(matchAnalysis?.skillGaps || [], null, 2)}

Generate questions in JSON format:
{
  "technicalQuestions": [
    {
      "question": "Explain how you implemented...",
      "category": "System Design",
      "difficulty": "medium",
      "whyAsked": "Tests distributed systems knowledge",
      "suggestedAnswer": "Brief answer approach",
      "followUp": "How would you scale this?"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a time...",
      "category": "Leadership",
      "starFormat": {
        "situation": "Hint for situation",
        "task": "What to focus on",
        "action": "Key actions to mention",
        "result": "Metrics to highlight"
      }
    }
  ],
  "projectDeepDive": [
    {
      "project": "CamsLens",
      "questions": [
        "Walk me through the architecture...",
        "How did you handle..."
      ],
      "gotchas": ["Be ready to explain vector search choices"]
    }
  ],
  "questionsToAsk": [
    {
      "question": "How does the team approach...",
      "why": "Shows interest in engineering culture"
    }
  ]
}`;

    try {
      const response = await callGeminiAPI(prompt, 3000);
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (error) {
      console.error("Interview prep error:", error);
    }
    return null;
  };

  // ===== MAIN ANALYSIS ORCHESTRATOR =====
  const runFullAnalysis = async () => {
    if (!jdInput.trim()) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setJdParsed(null);
    setInterviewQuestions([]);
    setTailoredLatex("");

    try {
      // Step 1: Parse JD
      console.log("📋 Parsing Job Description...");
      const parsed = await parseJobDescription(jdInput);
      setJdParsed(parsed);

      if (!parsed) {
        throw new Error("Failed to parse JD");
      }

      // Step 2: Analyze Match
      console.log("🎯 Analyzing Skill Match...");
      const match = await analyzeMatch(parsed);
      setAnalysisResult(match);

      // Step 3: Generate Interview Prep (parallel with resume tailoring)
      console.log("📝 Generating Interview Prep...");
      const interviewPrepPromise = generateInterviewPrep(parsed, match);

      // Step 4: Tailor Resume
      console.log("✨ Tailoring Resume...");
      setIsTailoring(true);
      const tailored = await tailorResume(parsed, match, tailorIntensity);
      setTailoredLatex(tailored);
      setIsTailoring(false);

      // Wait for interview prep
      const interviewPrep = await interviewPrepPromise;
      setInterviewQuestions(interviewPrep);

      // Save version
      const newVersion = {
        id: Date.now(),
        company: parsed.companyName,
        role: parsed.roleTitle,
        matchScore: match?.overallMatchScore || 0,
        latex: tailored,
        timestamp: new Date().toISOString(),
      };
      setResumeVersions((prev) => [newVersion, ...prev].slice(0, 10));

      console.log("✅ Analysis Complete!");
    } catch (error) {
      console.error("Analysis error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ===== PDF COMPILATION SERVICES =====
  const compileLaTeXToPDF = async (latexCode) => {
    if (!latexCode?.trim()) return null;

    setPdfLoading(true);
    setPdfError(null);
    setCompileProgress("Initializing...");

    // Try multiple services in order
    const services = [
      { name: "LaTeX.Online", fn: compileWithLatexOnline },
      { name: "TeXLive.net", fn: compileWithTexLive },
      { name: "LaTeX-on-HTTP", fn: compileWithLatexHTTP },
    ];

    for (const service of services) {
      try {
        setCompileProgress(`Trying ${service.name}...`);
        console.log(`📄 Attempting compilation with ${service.name}...`);

        const pdfBlob = await service.fn(latexCode);

        if (pdfBlob && pdfBlob.size > 0) {
          setPdfBlob(pdfBlob);
          setLastCompiled(new Date());
          setCompileProgress(`✅ Compiled with ${service.name}`);
          console.log(`✅ Successfully compiled with ${service.name}`);

          // Render the PDF
          await renderPDF(pdfBlob);

          setPdfLoading(false);
          return pdfBlob;
        }
      } catch (error) {
        console.warn(`❌ ${service.name} failed:`, error.message);
        continue;
      }
    }

    // All services failed
    setPdfError(
      "All compilation services failed. Please try again or use Overleaf."
    );
    setPdfLoading(false);
    return null;
  };
  // ===== SERVICE 1: YtoTech API (ACTUALLY WORKS - replaces LaTeX.Online) =====
  const compileWithLatexOnline = async (latexCode) => {
    const response = await fetch("https://latex.ytotech.com/builds/sync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        compiler: "pdflatex",
        resources: [
          {
            main: true,
            content: latexCode,
            file: "main.tex",
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const blob = await response.blob();

    // Verify it's a valid PDF
    if (blob.size > 1000) {
      return blob;
    }

    throw new Error("Invalid PDF response");
  };

  // ===== SERVICE 2: LaTeX.Online with POST (fixes URI too large) =====
  const compileWithTexLive = async (latexCode) => {
    // Use POST instead of GET to avoid 414 error
    const formData = new FormData();
    const texBlob = new Blob([latexCode], { type: "text/plain" });
    formData.append("filecontents[]", texBlob, "main.tex");
    formData.append("filename[]", "main.tex");

    const response = await fetch("https://latexonline.cc/compile", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.blob();
  };

  // ===== SERVICE 3: Arachnoid LaTeX Compiler (CORS-friendly) =====
  const compileWithLatexHTTP = async (latexCode) => {
    const response = await fetch(
      "https://arachnoid.com/latex/cgi-bin/latex_compiler.rb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          data: latexCode,
          output_format: "pdf",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.blob();
  };

  // ===== RENDER PDF USING PDF.js =====
  const renderPDF = async (blob) => {
    try {
      const arrayBuffer = await blob.arrayBuffer();

      // Load PDF document
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      pdfDocRef.current = pdf;
      setPdfTotalPages(pdf.numPages);
      setPdfCurrentPage(1);

      // Render all pages
      const pages = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        pages.push(page);
      }
      setPdfPages(pages);

      // Render first page
      await renderPage(1);
    } catch (error) {
      console.error("PDF rendering error:", error);
      setPdfError("Failed to render PDF: " + error.message);
    }
  };

  const [pdfZoom, setPdfZoom] = useState(1.0);
  const [tailoredLatex, setTailoredLatex] = useState("");
  // ===== STATE FOR PDF PREVIEW =====
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfPages, setPdfPages] = useState([]);
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);
  const [pdfTotalPages, setPdfTotalPages] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState(null);
  const [pdfCompileMethod, setPdfCompileMethod] = useState("auto");
  const [autoCompile, setAutoCompile] = useState(false);
  const [lastCompiled, setLastCompiled] = useState(null);
  const [compileProgress, setCompileProgress] = useState("");
  const [pdfFullscreen, setPdfFullscreen] = useState(false);

  const pdfCanvasRef = useRef(null);
  const pdfContainerRef = useRef(null);
  const compileTimeoutRef = useRef(null);
  const pdfDocRef = useRef(null);
  // ===== RENDER SINGLE PAGE =====
  const renderPage = async (pageNum) => {
    if (!pdfDocRef.current || !pdfCanvasRef.current) return;

    try {
      const page = await pdfDocRef.current.getPage(pageNum);
      const canvas = pdfCanvasRef.current;
      const context = canvas.getContext("2d");

      // Calculate scale based on container width
      const containerWidth = pdfContainerRef.current?.clientWidth || 600;
      const viewport = page.getViewport({ scale: 1 });
      const scale = (containerWidth / viewport.width) * pdfZoom * 0.95;
      const scaledViewport = page.getViewport({ scale });

      // Set canvas dimensions
      canvas.height = scaledViewport.height;
      canvas.width = scaledViewport.width;

      // Render page
      await page.render({
        canvasContext: context,
        viewport: scaledViewport,
      }).promise;

      setPdfCurrentPage(pageNum);
    } catch (error) {
      console.error("Page render error:", error);
    }
  };

  // ===== RE-RENDER ON ZOOM CHANGE =====
  useEffect(() => {
    if (pdfDocRef.current && pdfCurrentPage) {
      renderPage(pdfCurrentPage);
    }
  }, [pdfZoom]);

  // ===== AUTO-RESET GRAPH VIEW (FIXED FOR INITIAL LOAD) =====
  useEffect(() => {
    // Check if we are on the brain tab and data is loaded
    if (activeTab === "brain" && knowledgeGraph) {
      // We add a small delay (100ms) to allow the DOM/Canvas to fully render
      // and calculate its width/height before we reset the view.
      const timer = setTimeout(() => {
        setGraphTransform({ scale: 1, offsetX: 0, offsetY: 0 });
        setSelectedNode(null);
      }, 50);

      // Cleanup timeout if component unmounts
      return () => clearTimeout(timer);
    }
  }, [activeTab, knowledgeGraph]);
  // ===== AUTO-COMPILE WITH DEBOUNCE =====
  useEffect(() => {
    if (!autoCompile) return;

    if (compileTimeoutRef.current) {
      clearTimeout(compileTimeoutRef.current);
    }

    compileTimeoutRef.current = setTimeout(() => {
      const latex = tailoredLatex || originalLatex;
      if (latex) {
        compileLaTeXToPDF(latex);
      }
    }, 3000); // 3 second debounce

    return () => {
      if (compileTimeoutRef.current) {
        clearTimeout(compileTimeoutRef.current);
      }
    };
  }, [tailoredLatex, autoCompile]);

  // ===== NAVIGATION FUNCTIONS =====
  const goToPrevPage = () => {
    if (pdfCurrentPage > 1) {
      renderPage(pdfCurrentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (pdfCurrentPage < pdfTotalPages) {
      renderPage(pdfCurrentPage + 1);
    }
  };

  const zoomIn = () => {
    setPdfZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setPdfZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setPdfZoom(1.0);
  };

  // ===== DOWNLOAD PDF =====
  const downloadPDF = () => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resume_${
      jdParsed?.companyName?.replace(/\s+/g, "_") || "tailored"
    }_${Date.now()}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ===== OPEN IN NEW TAB =====
  const openPDFInNewTab = () => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  // ===== OPEN IN OVERLEAF =====
  const openInOverleaf = () => {
    const latex = tailoredLatex || originalLatex;

    // Create a form and submit to Overleaf
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://www.overleaf.com/docs";
    form.target = "_blank";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "snip";
    input.value = latex;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  // ===== PRINT PDF =====
  const printPDF = () => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);
    const printWindow = window.open(url, "_blank");
    printWindow.addEventListener("load", () => {
      printWindow.print();
    });
  };

  // ===== DOWNLOAD LATEX =====
  const downloadLatex = () => {
    const blob = new Blob([tailoredLatex || originalLatex], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resume_${
      jdParsed?.companyName || "tailored"
    }_${Date.now()}.tex`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ===== COPY LATEX TO CLIPBOARD =====
  const copyLatexToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tailoredLatex || originalLatex);
      // Show toast notification (implement as needed)
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  // ===== LAXMAN'S BASE RESUME LATEX =====
  const LAXMAN_RESUME_LATEX = `\\documentclass[10pt,a4paper]{article}

% Required packages
\\usepackage[margin=0.7in]{geometry}
\\usepackage{hyperref}
\\usepackage{helvet}
\\usepackage{fontawesome5}
\\usepackage[english]{babel}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath, amssymb}
\\usepackage{titlesec}
\\usepackage{xcolor}
\\usepackage{enumitem}
\\usepackage{multicol}
\\usepackage{url}

% Define colors
\\definecolor{linkcolor}{HTML}{1a73e8}
\\definecolor{headercolor}{HTML}{333333}

% Hyperlink setup
\\hypersetup{
    colorlinks=true,
    linkcolor=linkcolor,
    filecolor=linkcolor,
    urlcolor=linkcolor,
    pdftitle={K Laxman - Resume},
    pdfauthor={K Laxman},
    pdfsubject={Software Development Engineer Resume}
}

% Section formatting
\\titleformat{\\section}
    {\\large\\bfseries\\color{headercolor}\\uppercase}
    {}
    {0em}
    {}
    [\\titlerule]
\\titlespacing{\\section}
    {0pt}
    {12pt}
    {6pt}

% Custom commands
\\newcommand{\\resumeSubheading}[4]{
  \\item
    \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\small{#2} \\\\
      \\small\\itshape{#3} & \\small\\itshape{#4} \\\\
    \\end{tabular*}
    \\vspace{3pt}
}

\\newcommand{\\resumeItem}[1]{\\item[$\\bullet$] \\footnotesize{#1}}

\\setlist[itemize]{
    leftmargin=*,
    itemsep=3pt,
    parsep=1pt,
    topsep=4pt,
    partopsep=0pt
}

\\pagestyle{empty}

\\begin{document}

% Header
\\begin{center}
    {\\LARGE\\bfseries K LAXMAN} \\\\[5pt]
    {\\large Software Development Engineer}
\\end{center}
\\vspace{3pt}

% Contact Information
\\begin{center}
    \\small
    \\href{tel:+919000063740}{\\faPhone\\ +91-9000063740} $\\cdot$
    \\href{mailto:Laxmankethavath5@gmail.com}{\\faEnvelope\\ Laxmankethavath5@gmail.com} $\\cdot$
    \\href{https://www.linkedin.com/in/k-laxman-44913a156/}{\\faLinkedin\\ LinkedIn} $\\cdot$
    \\href{https://github.com/laxman824}{\\faGithub\\ GitHub} $\\cdot$
    \\href{https://laxman824.github.io/#/home}{\\faGlobe\\ Portfolio}
\\end{center}
\\vspace{5pt}
\\hrule
\\vspace{8pt}

\\section{Education}
\\begin{itemize}
    \\resumeSubheading
        {Indian Institute of Technology Delhi}{Jul 2018 -- May 2024}
        {B.Tech and M.Tech in Computer Science \\& Engineering}{New Delhi, India}
\\end{itemize}

\\section{Work Experience}
\\begin{itemize}
    \\resumeSubheading
        {COMPUTER AGE MANAGEMENT SERVICES(CAMS)}{Jun 2024 -- Present}
        {Senior AI Engineer}{Chennai, India}
    \\resumeItem{Developed \\textbf{CamsLens}, a Enterprise generative AI platform for financial insights, using Vertex AI (Gemini-flash 2.5),Agent Builder, Vector Search, Google Cloud Run, and BigQuery, processing 80,000+ documents monthly with 95\\% accuracy with 7sec response time.}
    \\resumeItem{Implemented real-time RSS feed ingestion to deliver financial news and update SEBI regulatory updates, reducing manual monitoring and document ingestion for AI query search by 80\\%.}
    \\resumeItem{Designed AI-powered query and summarization APIs with domain-specific prompts, improving response time by 60\\% and ensuring CMEK-compliant storage.}
    \\resumeItem{Designed and implemented a Ranking Chunks Algorithm for CamsLens, enhancing response relevance by ranking Vertex AI datastore chunks, significantly improving user query quality.}
    
    \\resumeSubheading
        {Eamvey Technologies}{May 2022 -- Aug 2022}
        {Web Development Intern}{Remote}
    \\resumeItem{Enhanced Learning Management System (LMS) frontend and backend for 1,000+ users using the MERN stack (MongoDB, Express.js, React, Node.js).}
    \\resumeItem{Integrated a secure payment gateway, successfully handling 500+ monthly transactions.}
    \\resumeItem{Improved application performance by 40\\% through code optimization, bundle splitting, and lazy loading techniques.}
\\end{itemize}

\\section{Projects}
\\begin{itemize}
    \\resumeSubheading
        {AI-Powered Financial Email Automation System}{\\href{https://github.com/Laxman824}{\\faGithub}}
        {Python, FastAPI, vLLM, Docker, Large Language Models}{2025}
    \\resumeItem{Developed a FastAPI-based email classification microservice using Large Language Models to automatically categorize financial email requests and extract key entities like PAN numbers, ARN codes, and dates with 95\\% accuracy.}
    \\resumeItem{Implemented zero-shot learning with engineered prompts and few-shot examples, enabling high-accuracy classification without training datasets.}
    \\resumeItem{Built a robust pipeline with input sanitization middleware, preprocessing layers for text cleaning, and structured response parsing to handle 1,000+ emails daily.}
    \\resumeItem{Deployed the solution in Docker with full logging and monitoring, reducing manual email processing time by 80\\% and improving operational efficiency.}

    \\resumeSubheading
        {SEBI Debarred AI PAN Extraction \\& Compliance System}{\\href{https://github.com/Laxman824}{\\faGithub}}
        {Python, Vertex AI, GCP, Pub/Sub, Docker, BeautifulSoup}{2025}
    \\resumeItem{Designed and built an automated compliance system that monitors SEBI regulatory orders, processes PDFs, and extracts debarred PAN details using Vertex AI (Gemini) for accurate document understanding.}
    \\resumeItem{Architected a dual-pipeline backend integrating real-time web scraping with AI-driven PDF parsing, cutting manual compliance verification effort by nearly 90\\%.}
    \\resumeItem{Implemented validation workflows for PAN and entity extraction with structured storage in Firestore, supporting audit-ready compliance reporting.}
    \\resumeItem{Developed a Next.js dashboard with real-time updates, search filters, and secure authentication for compliance teams.}
    \\resumeItem{Deployed event-driven Dockerized services on GCP using Pub/Sub, Cloud Run, and Cloud Storage, ensuring scalable and fault-tolerant processing of multiple regulatory documents.}

    \\resumeSubheading
        {Stock Exchange Platform}{\\href{https://github.com/Laxman824/CAMS-StockEx}{\\faGithub}}
        {Java Spring Boot, H2 DB, Spring Security, JWT}{2024}
    \\resumeItem{Developed a full-stack stock trading simulation platform featuring user registration, role-based access control (Admin/User), and real-time order processing.}
    \\resumeItem{Implemented robust security using Spring Security and JWT for authentication and authorization.}
    \\resumeItem{Designed a scalable architecture capable of handling 100+ concurrent users with sub-second response times for critical trading operations.}

    \\resumeSubheading
        {Borderless Table Recognition and Accessibility in PDF Files}{\\href{https://github.com/Laxman824/MTP2-work}{\\faGithub}}
        {Python, Layout Parser, MTL-TabNet, OpenCV, SVM}{2023}
    \\resumeItem{Engineered a system for detecting borderless tables in PDF documents using Layout Parser and fine-tuned MTL-TabNet, achieving a 30\\% accuracy improvement over CascadeTabNet for the RAVI project.}
    \\resumeItem{Trained an SVM classifier for table cell classification based on geometric features (size, position) and color, reaching 90\\% accuracy.}
    \\resumeItem{Integrated the solution as a Docker container into the RAVI framework (under Prof. M. BalaKrishnan) to enhance PDF accessibility for visually impaired users.}

    \\resumeSubheading
        {Reading Assistant for Visually Impaired (RAVI)}{\\href{https://github.com/Laxman824/RAVI-2022-2023-}{\\faGithub}}
        {Python, Flask, HTML/CSS, JavaScript}{2022}
    \\resumeItem{Contributed to an automated toolchain converting STEM documents (PDFs, EPUBs) into accessible formats using various RAVI processing modules.}
    \\resumeItem{Developed a Flask-based web application enabling crowdsourcing of ALT TEXT for images within documents, significantly automating the image description process.}
    \\resumeItem{Improved the accessibility of over 500+ STEM documents, making them usable for visually impaired students and researchers.}

    \\resumeSubheading
        {Driver Drowsiness Detection System}{\\href{https://github.com/Laxman824/Projects-Assignments/tree/main/Realtime\\%20driver\\%20drowsiness\\%20detection}{\\faGithub}}
        {Python, OpenCV, Dlib}{2021}
    \\resumeItem{Designed a real-time driver drowsiness detection system using computer vision techniques (facial landmark detection, eye aspect ratio calculation).}
    \\resumeItem{Implemented and optimized the algorithm for potential deployment on embedded systems, achieving over 90\\% detection accuracy at 30 frames per second (FPS) on test videos.}
\\end{itemize}

\\section{Technical Skills}
\\begin{multicols}{2}
\\begin{itemize}
    \\item \\footnotesize \\textbf{Languages:} Java (Spring Boot, Spring Security), Python (Flask, FastAPI, OpenCV, Scikit-learn, Pandas, NumPy), JavaScript (Node.js, React)
    \\item \\footnotesize \\textbf{Databases:} MySQL, Alloydb, Firestore, PostgreSQL, MongoDB, H2, Google BigQuery
    \\item \\footnotesize \\textbf{Web Tech:} HTML5, CSS3, REST APIs, GraphQL, WebSockets, TailwindCSS
    \\item \\footnotesize \\textbf{AI/ML:} PyTorch, TensorFlow, Dialogflow CX, Vertex AI (Gen AI), Layout Parser, MTL-TabNet, spaCy
    \\item \\footnotesize \\textbf{Cloud \\& DevOps:} Google Cloud (Cloud Run, GCS, Vertex AI), Docker, Kubernetes, AWS (Basic), Azure (Basic), CI/CD (GitHub Actions, Jenkins), Git
    \\item \\footnotesize \\textbf{Tools:} Maven, npm, Postman, GCP SDK, Feedparser, APScheduler, Dlib
\\end{itemize}
\\end{multicols}

\\section{Leadership \\& Activities}
\\begin{itemize}
    \\resumeSubheading
        {Teaching Assistant}{Fall 2019 -- Spring 2021}
        {IIT Delhi}{New Delhi, India}
    \\resumeItem{Mentored and assisted over 300 undergraduate students in foundational Computer Science courses (e.g., Data Structures, Introduction to Programming).}
    \\resumeItem{Conducted lab sessions, graded assignments, and held office hours to clarify concepts.}
\\end{itemize}

\\end{document}`;

  // ===== STATE FOR COMPETITIVE INTELLIGENCE HUB =====
  const [jdInput, setJdInput] = useState("");
  const [jdParsed, setJdParsed] = useState(null);
  const [originalLatex, setOriginalLatex] = useState(LAXMAN_RESUME_LATEX);
  const [tailorIntensity, setTailorIntensity] = useState("moderate"); // conservative, moderate, aggressive
  const [analysisResult, setAnalysisResult] = useState(null);
  const [companyIntel, setCompanyIntel] = useState(null);
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [salaryInsights, setSalaryInsights] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isTailoring, setIsTailoring] = useState(false);
  const [activeIntelTab, setActiveIntelTab] = useState("match"); // match, interview, company, salary
  const [showDiff, setShowDiff] = useState(false);
  const [resumeVersions, setResumeVersions] = useState([]);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const latexEditorRef = useRef(null);

  // ===== LAXMAN'S STRUCTURED PROFILE (for matching) =====
  const LAXMAN_PROFILE = {
    name: "K Laxman",
    title: "Senior AI Engineer",
    education: {
      institution: "IIT Delhi",
      degree: "B.Tech and M.Tech in Computer Science & Engineering",
      period: "2018-2024",
    },
    currentRole: {
      company: "CAMS",
      title: "Senior AI Engineer",
      duration: "Jun 2024 - Present",
      highlights: [
        "CamsLens - Enterprise Gen AI platform",
        "80,000+ documents monthly",
        "Vertex AI, Gemini, BigQuery",
        "95% accuracy, 7sec response",
      ],
    },
    skills: {
      languages: [
        "Java",
        "Python",
        "JavaScript",
        "Spring Boot",
        "FastAPI",
        "React",
        "Node.js",
      ],
      databases: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firestore",
        "BigQuery",
        "AlloyDB",
      ],
      aiml: [
        "PyTorch",
        "TensorFlow",
        "Vertex AI",
        "LLMs",
        "Gemini",
        "OpenCV",
        "spaCy",
        "Dialogflow",
      ],
      cloud: [
        "GCP",
        "Docker",
        "Kubernetes",
        "Cloud Run",
        "Pub/Sub",
        "AWS",
        "Azure",
      ],
      web: ["REST APIs", "GraphQL", "WebSockets", "HTML/CSS", "TailwindCSS"],
      tools: ["Git", "CI/CD", "Jenkins", "GitHub Actions", "Postman"],
    },
    projects: [
      {
        name: "CamsLens",
        tech: ["Vertex AI", "Gemini", "BigQuery", "Cloud Run"],
        domain: "FinTech AI",
      },
      {
        name: "Email Automation System",
        tech: ["FastAPI", "LLMs", "Docker", "vLLM"],
        domain: "NLP",
      },
      {
        name: "SEBI Compliance System",
        tech: ["Vertex AI", "GCP", "Pub/Sub", "Next.js"],
        domain: "RegTech",
      },
      {
        name: "Stock Exchange Platform",
        tech: ["Spring Boot", "Spring Security", "JWT"],
        domain: "FinTech",
      },
      {
        name: "Table Recognition (MTP)",
        tech: ["Layout Parser", "MTL-TabNet", "OpenCV"],
        domain: "Computer Vision",
      },
      { name: "RAVI", tech: ["Flask", "Python"], domain: "Accessibility" },
      {
        name: "Driver Drowsiness",
        tech: ["OpenCV", "Dlib"],
        domain: "Computer Vision",
      },
    ],
    strengths: [
      "Enterprise AI/Gen AI platforms",
      "Full-stack development",
      "Document processing & NLP",
      "GCP & Cloud architecture",
      "Real-time systems",
    ],
  };

  // ===== GEMINI API CALL HELPER (SECURE VERSION) =====
  const callGeminiAPI = useCallback(async (prompt, maxTokens = 1024) => {
    const startTime = Date.now();

    try {
      // Initialize Firebase Functions
      const functions = getFunctions();
      const callGeminiFunction = httpsCallable(functions, "callGemini");

      // Call the Cloud Function
      const result = await callGeminiFunction({
        prompt: prompt,
        maxTokens: maxTokens,
      });

      // Parse the response (structure matches what Gemini returns)
      const data = result.data;
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Update metrics
      const latency = Date.now() - startTime;
      const tokens = Math.ceil(text.length / 4);

      setMetrics((prev) => ({
        totalTokens: prev.totalTokens + tokens,
        totalCost: prev.totalCost + tokens * 0.00001,
        avgLatency:
          (prev.avgLatency * prev.requestCount + latency) /
          (prev.requestCount + 1),
        successRate: prev.successRate,
        requestCount: prev.requestCount + 1,
      }));

      return text;
    } catch (error) {
      console.error("AI Generation failed:", error);
      // Update metrics for failure
      setMetrics((prev) => ({
        ...prev,
        successRate:
          (prev.successRate * prev.requestCount) / (prev.requestCount + 1),
        requestCount: prev.requestCount + 1,
      }));
      throw error;
    }
  }, []);
  // ===== CHUNK KNOWLEDGE BASE FOR RAG =====
  const chunkKnowledgeBase = useCallback((knowledge) => {
    const chunks = [];

    try {
      // Profile chunks
      if (knowledge.profile) {
        const expertiseStr = Array.isArray(knowledge.profile.expertise)
          ? knowledge.profile.expertise.join(", ")
          : String(knowledge.profile.expertise || "");

        chunks.push({
          id: "profile-main",
          content: `${knowledge.profile.name || "Developer"} is a ${
            knowledge.profile.title || "Engineer"
          } with ${
            knowledge.profile.yearsOfExperience || 0
          } years of experience. Expertise: ${expertiseStr}. ${
            knowledge.profile.passion || ""
          }`,
          metadata: { type: "profile", category: "overview" },
        });
      }

      // Project chunks
      if (Array.isArray(knowledge.projects)) {
        knowledge.projects.forEach((project) => {
          if (!project) return;

          const techStack = Array.isArray(project.techStack)
            ? project.techStack.join(", ")
            : "";
          const features = Array.isArray(project.features)
            ? project.features.join("; ")
            : "";
          const impact = project.impact
            ? Object.entries(project.impact)
                .map(([k, v]) => `${k}: ${v}`)
                .join(", ")
            : "";

          chunks.push({
            id: `project-${project.id}`,
            content: `Project: ${project.name}. Category: ${
              project.category || "general"
            }. Description: ${
              project.description || ""
            }. Technologies: ${techStack}. Key features: ${features}. Impact: ${impact}`,
            metadata: {
              type: "project",
              category: project.category || "general",
              projectId: project.id,
            },
          });

          // Achievements chunk
          if (
            Array.isArray(project.achievements) &&
            project.achievements.length > 0
          ) {
            chunks.push({
              id: `project-${project.id}-achievements`,
              content: `Achievements in ${
                project.name
              }: ${project.achievements.join("; ")}`,
              metadata: { type: "achievement", projectId: project.id },
            });
          }
        });
      }

      // Skills chunks
      if (knowledge.skills?.aiml) {
        Object.entries(knowledge.skills.aiml).forEach(([key, value]) => {
          if (!value) return;
          const valueStr = Array.isArray(value)
            ? value.join(", ")
            : String(value);
          chunks.push({
            id: `skill-aiml-${key}`,
            content: `AI/ML ${key}: ${valueStr}`,
            metadata: { type: "skill", category: "aiml", subcategory: key },
          });
        });
      }

      // Other skill categories
      ["frontend", "backend", "databases", "cloud", "tools"].forEach(
        (category) => {
          if (Array.isArray(knowledge.skills?.[category])) {
            chunks.push({
              id: `skill-${category}`,
              content: `${
                category.charAt(0).toUpperCase() + category.slice(1)
              } skills: ${knowledge.skills[category].join(", ")}`,
              metadata: { type: "skill", category },
            });
          }
        }
      );

      // Languages
      if (knowledge.skills?.languages) {
        Object.entries(knowledge.skills.languages).forEach(([level, langs]) => {
          if (Array.isArray(langs) && langs.length > 0) {
            chunks.push({
              id: `skill-languages-${level}`,
              content: `Programming languages (${level}): ${langs.join(", ")}`,
              metadata: { type: "skill", category: "languages", level },
            });
          }
        });
      }

      // Achievements
      if (Array.isArray(knowledge.achievements)) {
        chunks.push({
          id: "achievements-main",
          content: `Key achievements: ${knowledge.achievements.join("; ")}`,
          metadata: { type: "achievement", category: "general" },
        });
      }

      // Research Interests
      if (Array.isArray(knowledge.researchInterests)) {
        chunks.push({
          id: "research-interests",
          content: `Research interests: ${knowledge.researchInterests.join(
            "; "
          )}`,
          metadata: { type: "research", category: "interests" },
        });
      }
    } catch (error) {
      console.error("Error chunking knowledge base:", error);
    }

    return chunks;
  }, []);

  // ===== BUILD KNOWLEDGE GRAPH =====
  const buildKnowledgeGraph = useCallback((knowledge) => {
    const nodes = [];
    const edges = [];

    try {
      // Center node
      nodes.push({
        id: "center",
        label: knowledge.profile?.name || "Portfolio",
        type: "profile",
        x: 0,
        y: 0,
        color: "#4CAF50",
      });

      // Project nodes
      if (Array.isArray(knowledge.projects)) {
        knowledge.projects.forEach((project, i) => {
          if (!project) return;

          const angle = (i / knowledge.projects.length) * 2 * Math.PI;
          const radius = 150;

          const colors = {
            "Computer Vision": "#2196F3",
            NLP: "#9C27B0",
            "ML + Full-Stack": "#FF9800",
            "Full-Stack": "#00BCD4",
            "Accessibility AI": "#E91E63",
          };

          nodes.push({
            id: project.id,
            label: project.name || `Project ${i + 1}`,
            type: "project",
            category: project.category || "general",
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            color: colors[project.category] || "#757575",
          });

          edges.push({ from: "center", to: project.id, type: "has-project" });

          // Tech nodes
          if (Array.isArray(project.techStack)) {
            project.techStack.slice(0, 3).forEach((tech, j) => {
              const techId = `${project.id}-tech-${j}`;
              const techAngle = angle + (j - 1) * 0.25;
              const techRadius = radius + 80;

              // Check if tech node already exists
              const existingNode = nodes.find(
                (n) => n.label === tech && n.type === "technology"
              );

              if (!existingNode) {
                nodes.push({
                  id: techId,
                  label: tech,
                  type: "technology",
                  x: Math.cos(techAngle) * techRadius,
                  y: Math.sin(techAngle) * techRadius,
                  color: "#607D8B",
                });
              }

              edges.push({
                from: project.id,
                to: existingNode?.id || techId,
                type: "uses-tech",
              });
            });
          }
        });
      }

      // Skill category nodes
      const skillCategories = ["aiml", "frontend", "backend", "cloud"];
      skillCategories.forEach((cat, i) => {
        const angle = Math.PI + (i / skillCategories.length) * Math.PI;
        const radius = 180;

        nodes.push({
          id: `skill-cat-${cat}`,
          label: cat.toUpperCase(),
          type: "skill-category",
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          color: "#FFC107",
        });

        edges.push({
          from: "center",
          to: `skill-cat-${cat}`,
          type: "has-skills",
        });
      });
    } catch (error) {
      console.error("Error building knowledge graph:", error);
    }

    return { nodes, edges };
  }, []);

  // ===== INITIALIZE RAG SYSTEM =====
  useEffect(() => {
    const initializeRAG = async () => {
      try {
        console.log("🚀 Initializing RAG system...");

        // Initialize vector store
        const vectorDb = new VectorStore();
        console.log("✅ Vector store created");

        // Chunk and embed knowledge base
        const chunks = chunkKnowledgeBase(portfolioKnowledge);
        console.log(`✅ Created ${chunks.length} knowledge chunks`);

        await vectorDb.addDocuments(chunks);
        console.log("✅ Documents embedded and added to vector store");

        // Initialize RAG engine
        const rag = new RAGEngine(vectorDb);
        console.log("✅ RAG engine initialized");

        setVectorStore(vectorDb);
        setRAGEngine(rag);
        setRagInitialized(true);

        // Build knowledge graph
        const graph = buildKnowledgeGraph(portfolioKnowledge);
        console.log(
          `✅ Knowledge graph built: ${graph.nodes.length} nodes, ${graph.edges.length} edges`
        );
        setKnowledgeGraph(graph);

        console.log("🎉 RAG system fully initialized!");
      } catch (error) {
        console.error("❌ RAG initialization error:", error);
        setRagInitialized(false);
      }
    };

    initializeRAG();
  }, [portfolioKnowledge, chunkKnowledgeBase, buildKnowledgeGraph]);

  // ===== INITIALIZE AGENT ORCHESTRATOR =====
  useEffect(() => {
    if (vectorStore && ragInitialized) {
      const agentOrch = new AgentOrchestrator({
        portfolioKnowledge,
        vectorStore,
        callAPI: callGeminiAPI,
      });
      setOrchestrator(agentOrch);
      console.log("✅ Agent Orchestrator initialized");
    }
  }, [vectorStore, ragInitialized, portfolioKnowledge, callGeminiAPI]);

  // ===== FETCH USER DATA =====
  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData(data);
          setSavedItems(data.savedItems || []);
          setNotes(data.notes || "");
          setBrainMessages(data.brainHistory || []);
        } else {
          const newUserData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: new Date().toISOString(),
            savedItems: [],
            notes: "",
            brainHistory: [],
          };
          await setDoc(userRef, newUserData);
          setUserData(newUserData);
        }
      } catch (error) {
        console.error("Error:", error);
        setFirestoreError(error.message);
        const local = localStorage.getItem(`userspace_${user.uid}`);
        if (local) {
          const parsed = JSON.parse(local);
          setSavedItems(parsed.savedItems || []);
          setNotes(parsed.notes || "");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  // ===== RAG-POWERED AI BRAIN QUERY =====
  const handleBrainQuery = async () => {
    if (!brainInput.trim()) return;

    const userMessage = {
      role: "user",
      content: brainInput,
      timestamp: Date.now(),
    };
    setBrainMessages((prev) => [...prev, userMessage]);
    setBrainInput("");
    setBrainLoading(true);
    setRetrievedDocs([]);

    try {
      let response;

      if (ragInitialized && vectorStore && ragEngine) {
        // RAG-powered response
        console.log("🔍 Using RAG for query...");

        // Step 1: Retrieve relevant documents
        const docs = await vectorStore.similaritySearch(brainInput, 5);
        console.log(`📄 Retrieved ${docs.length} documents`);

        // Step 2: Rerank documents
        const rerankedDocs = await ragEngine.rerank(brainInput, docs);
        setRetrievedDocs(rerankedDocs.slice(0, 3));

        // Step 3: Generate response with context
        const result = await ragEngine.generateWithContext(
          brainInput,
          rerankedDocs,
          callGeminiAPI
        );
        response = result.text;

        console.log(`✅ RAG response generated (${result.latency}ms)`);
      } else {
        // Fallback to direct API call
        console.log("⚠️ RAG not ready, using fallback...");

        const portfolioStr = JSON.stringify(portfolioKnowledge, null, 2);
        const prompt = `You are Laxman's AI Portfolio Assistant.

KNOWLEDGE BASE:
${portfolioStr}

USER QUESTION: ${brainInput}

Provide a helpful, specific response about Laxman's work, skills, or experience.`;

        response = await callGeminiAPI(prompt);
      }

      const assistantMessage = {
        role: "assistant",
        content: response,
        timestamp: Date.now(),
        retrievedDocs: retrievedDocs.length > 0 ? retrievedDocs : null,
      };
      setBrainMessages((prev) => [...prev, assistantMessage]);

      // Save to storage
      saveToStorage({
        brainHistory: [...brainMessages, userMessage, assistantMessage],
      });
    } catch (error) {
      console.error("Brain query error:", error);
      setBrainMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Sorry, I encountered an error. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setBrainLoading(false);
    }
  };

  // ===== MULTI-AGENT ORCHESTRATION =====
  const runMultiAgentTask = async () => {
    if (!agentTask.trim() || !orchestrator || agentRunning) return;

    setAgentRunning(true);
    setAgentConversation([]);
    setActiveAgents([]);

    try {
      const result = await orchestrator.executeTask({
        task: agentTask,
        agents: selectedAgents,
        onMessage: (message) => {
          setAgentConversation((prev) => [...prev, message]);
        },
        onAgentStateChange: (agentState) => {
          setActiveAgents((prev) => {
            const index = prev.findIndex((a) => a.id === agentState.id);
            if (index >= 0) {
              const newAgents = [...prev];
              newAgents[index] = agentState;
              return newAgents;
            }
            return [...prev, agentState];
          });
        },
      });

      // Final summary
      setAgentConversation((prev) => [
        ...prev,
        {
          type: "orchestrator",
          content: `✅ **Task Completed!**\n\n${result.summary}`,
          timestamp: Date.now(),
          isFinal: true,
        },
      ]);
    } catch (error) {
      console.error("Agent orchestration error:", error);
      setAgentConversation((prev) => [
        ...prev,
        {
          type: "error",
          content: "❌ Task execution failed. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setAgentRunning(false);
    }
  };

  // ===== SKILL MATCH ANALYZER =====
  const analyzeSkillMatch = async () => {
    if (!jobDescription.trim()) return;

    setSkillLoading(true);
    setSkillAnalysis(null);

    try {
      const portfolioStr = JSON.stringify(portfolioKnowledge, null, 2);

      const prompt = `You are an AI career advisor. Analyze how well this candidate's skills match the job description.

CANDIDATE PROFILE:
${portfolioStr}

JOB DESCRIPTION:
${jobDescription}

Provide a detailed analysis in this JSON format (return ONLY valid JSON):
{
  "overallMatch": 85,
  "matchLevel": "Strong Match",
  "summary": "Brief 2-sentence summary",
  "matchedSkills": [
    {"skill": "Python", "relevance": "high", "evidence": "Used in 4 projects"},
    {"skill": "React", "relevance": "high", "evidence": "Primary frontend framework"}
  ],
  "missingSkills": [
    {"skill": "Kubernetes", "importance": "medium", "suggestion": "Can learn quickly"}
  ],
  "relevantProjects": [
    {"name": "CamsLens AI", "relevance": "Directly applicable", "highlight": "Computer vision expertise"}
  ],
  "recommendations": [
    "Highlight your CamsLens project in the interview",
    "Emphasize your LLM experience"
  ],
  "interviewTips": [
    "Prepare to discuss your ML pipeline experience",
    "Have metrics ready for your projects"
  ]
}`;

      const response = await callGeminiAPI(prompt, 2048);

      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const analysis = JSON.parse(jsonMatch[0]);
        setSkillAnalysis(analysis);

        const savedAnalysis = {
          type: "skill-match",
          jobDescription: jobDescription.substring(0, 200),
          matchScore: analysis.overallMatch,
          timestamp: Date.now(),
        };
        setSavedItems((prev) => [savedAnalysis, ...prev].slice(0, 20));
      }
    } catch (error) {
      console.error("Skill analysis error:", error);
      setSkillAnalysis({ error: "Failed to analyze. Please try again." });
    } finally {
      setSkillLoading(false);
    }
  };

  // ===== STATE FOR THOUGHT VISUALIZER =====
  const [thoughtQuery, setThoughtQuery] = useState("");
  const [thoughtSteps, setThoughtSteps] = useState([]);
  const [currentThoughtStep, setCurrentThoughtStep] = useState(0);
  const [thoughtLoading, setThoughtLoading] = useState(false);
  const [thoughtComplete, setThoughtComplete] = useState(false);

  // ===== VISUALIZE AI THINKING =====
  const visualizeThinking = async () => {
    if (!thoughtQuery.trim()) return;

    setThoughtLoading(true);
    setThoughtSteps([]);
    setCurrentThoughtStep(0);
    setThoughtComplete(false);

    // Simulated thinking steps that appear progressively
    const thinkingStages = [
      { icon: "🔍", title: "Query Analysis", status: "processing" },
      { icon: "🧩", title: "Context Retrieval", status: "waiting" },
      { icon: "🔗", title: "Knowledge Linking", status: "waiting" },
      { icon: "⚡", title: "Inference Engine", status: "waiting" },
      { icon: "✨", title: "Response Synthesis", status: "waiting" },
      { icon: "✅", title: "Quality Check", status: "waiting" },
    ];

    setThoughtSteps(thinkingStages);

    try {
      const portfolioStr = JSON.stringify(portfolioKnowledge, null, 2);

      const prompt = `You are an AI assistant showing your reasoning process. For this query, show step-by-step thinking.

QUERY: "${thoughtQuery}"

KNOWLEDGE BASE: ${portfolioStr}

Respond in this JSON format ONLY:
{
  "steps": [
    {
      "stage": "Query Analysis",
      "thought": "What the AI is thinking at this stage",
      "details": ["Key point 1", "Key point 2"],
      "confidence": 0.95
    },
    {
      "stage": "Context Retrieval",
      "thought": "Searching relevant information...",
      "details": ["Found info about X", "Related to Y"],
      "confidence": 0.88
    },
    {
      "stage": "Knowledge Linking",
      "thought": "Connecting related concepts...",
      "details": ["Connection 1", "Connection 2"],
      "confidence": 0.92
    },
    {
      "stage": "Inference Engine",
      "thought": "Drawing conclusions...",
      "details": ["Inference 1", "Inference 2"],
      "confidence": 0.90
    },
    {
      "stage": "Response Synthesis",
      "thought": "Formulating response...",
      "details": ["Key message", "Supporting detail"],
      "confidence": 0.94
    },
    {
      "stage": "Quality Check",
      "thought": "Verifying accuracy...",
      "details": ["Fact checked", "Coherence verified"],
      "confidence": 0.96
    }
  ],
  "finalAnswer": "The complete response to the query",
  "overallConfidence": 0.92,
  "reasoningPath": "Brief summary of the reasoning path taken"
}`;

      // Progressive step animation
      for (let i = 0; i < thinkingStages.length - 1; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setCurrentThoughtStep(i + 1);
        setThoughtSteps((prev) =>
          prev.map((step, idx) => ({
            ...step,
            status:
              idx < i + 1
                ? "complete"
                : idx === i + 1
                ? "processing"
                : "waiting",
          }))
        );
      }

      const response = await callGeminiAPI(prompt, 2048);
      const jsonMatch = response.match(/\{[\s\S]*\}/);

      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);

        // Update with actual AI thoughts
        setThoughtSteps(
          data.steps.map((step, idx) => ({
            icon: thinkingStages[idx]?.icon || "🧠",
            title: step.stage,
            thought: step.thought,
            details: step.details,
            confidence: step.confidence,
            status: "complete",
          }))
        );

        setThoughtComplete(true);
        setThoughtSteps((prev) => [
          ...prev,
          {
            icon: "💡",
            title: "Final Answer",
            thought: data.finalAnswer,
            details: [
              `Overall Confidence: ${(data.overallConfidence * 100).toFixed(
                0
              )}%`,
            ],
            confidence: data.overallConfidence,
            status: "final",
            reasoningPath: data.reasoningPath,
          },
        ]);
      }
    } catch (error) {
      console.error("Thought visualization error:", error);
    } finally {
      setThoughtLoading(false);
    }
  };

  // ===== AI MOCK INTERVIEW =====
  const startInterview = async () => {
    if (!interviewRole.trim()) return;

    setInterviewLoading(true);
    setInterviewStarted(true);
    setInterviewMessages([]);

    try {
      const portfolioStr = JSON.stringify(portfolioKnowledge, null, 2);

      const prompt = `You are an expert technical interviewer conducting a job interview for the role: ${interviewRole}

CANDIDATE INFO:
${portfolioStr}

Start the interview with:
1. A brief, warm introduction
2. Ask your first technical question relevant to the role and the candidate's background

Keep responses concise. This is an interactive interview.

BEGIN:`;

      const response = await callGeminiAPI(prompt);
      setInterviewMessages([
        {
          role: "interviewer",
          content: response,
          timestamp: Date.now(),
        },
      ]);
    } catch (error) {
      setInterviewMessages([
        {
          role: "interviewer",
          content:
            "Sorry, there was an error starting the interview. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setInterviewLoading(false);
    }
  };

  const sendInterviewResponse = async () => {
    if (!interviewInput.trim() || interviewLoading) return;

    const userMessage = {
      role: "candidate",
      content: interviewInput,
      timestamp: Date.now(),
    };
    setInterviewMessages((prev) => [...prev, userMessage]);
    setInterviewInput("");
    setInterviewLoading(true);

    try {
      const conversationHistory = [...interviewMessages, userMessage]
        .map(
          (m) =>
            `${m.role === "interviewer" ? "Interviewer" : "Candidate"}: ${
              m.content
            }`
        )
        .join("\n\n");

      const portfolioStr = JSON.stringify(portfolioKnowledge, null, 2);

      const prompt = `You are conducting a technical interview for: ${interviewRole}

CANDIDATE BACKGROUND:
${portfolioStr}

INTERVIEW SO FAR:
${conversationHistory}

As the interviewer:
1. Briefly acknowledge their response (what was good/could be improved)
2. Ask a relevant follow-up question OR move to a new topic
3. After 5-6 exchanges, provide final feedback and end the interview

Keep responses concise and professional.

INTERVIEWER RESPONSE:`;

      const response = await callGeminiAPI(prompt);
      setInterviewMessages((prev) => [
        ...prev,
        {
          role: "interviewer",
          content: response,
          timestamp: Date.now(),
        },
      ]);
    } catch (error) {
      console.error("Interview error:", error);
    } finally {
      setInterviewLoading(false);
    }
  };

  // ===== AI LAB EXPERIMENTS =====
  const experiments = [
    {
      id: "vision",
      name: "👁️ Vision Analysis",
      desc: "Analyze images with AI",
      placeholder: "Describe an image or paste an image URL...",
    },
    {
      id: "code-review",
      name: "🔍 Code Review",
      desc: "Get AI code review",
      placeholder: "Paste code to review...",
    },
    {
      id: "architecture",
      name: "🏗️ System Design",
      desc: "Get architecture suggestions",
      placeholder: "Describe your system requirements...",
    },
    {
      id: "debug",
      name: "🐛 Debug Assistant",
      desc: "Debug code issues",
      placeholder: "Paste error message and code...",
    },
    {
      id: "optimize",
      name: "⚡ Performance Optimizer",
      desc: "Optimize your code",
      placeholder: "Paste code to optimize...",
    },
    {
      id: "explain",
      name: "📚 Concept Explainer",
      desc: "Explain complex topics",
      placeholder: "What concept would you like explained?",
    },
  ];

  const runExperiment = async () => {
    if (!labInput.trim()) return;

    setLabLoading(true);
    setLabOutput(null);

    const prompts = {
      vision: `You are a computer vision AI. Analyze this image description or URL and provide:
1. Object Detection: What objects/people are likely present
2. Scene Understanding: The context and setting
3. Potential Actions: What's happening
4. Technical Analysis: Lighting, composition, quality

Input: ${labInput}

Provide a detailed, professional analysis as if you're running through a vision model pipeline.`,

      "code-review": `You are a senior code reviewer. Review this code thoroughly:

${labInput}

Provide:
1. **Overall Assessment** (Good/Needs Work/Major Issues)
2. **Code Quality Score**: X/10
3. **Strengths**: What's done well
4. **Issues Found**: Bugs, anti-patterns, security concerns
5. **Suggestions**: Specific improvements with code examples
6. **Best Practices**: Industry standards to follow`,

      architecture: `You are a senior system architect. Design a system for:

${labInput}

Provide:
1. **High-Level Architecture**: Components and their interactions
2. **Technology Stack**: Recommended technologies
3. **Database Design**: Data models and storage
4. **API Design**: Key endpoints
5. **Scalability Considerations**: How to scale
6. **Security Measures**: Security best practices
7. **ASCII Diagram**: Simple architecture diagram`,

      debug: `You are an expert debugger. Analyze this error/code:

${labInput}

Provide:
1. **Root Cause**: What's causing the issue
2. **Explanation**: Why this happens
3. **Solution**: Step-by-step fix
4. **Fixed Code**: Corrected version
5. **Prevention**: How to avoid this in future`,

      optimize: `You are a performance optimization expert. Optimize this code:

${labInput}

Provide:
1. **Current Issues**: Performance problems identified
2. **Time Complexity**: Current vs optimized
3. **Space Complexity**: Current vs optimized
4. **Optimized Code**: Improved version
5. **Benchmarks**: Expected improvements
6. **Explanation**: Why these changes help`,

      explain: `You are a world-class teacher. Explain this concept:

${labInput}

Provide:
1. **Simple Explanation**: ELI5 version
2. **Technical Deep Dive**: Detailed explanation
3. **Real-World Analogy**: Relatable comparison
4. **Code Example**: If applicable
5. **Common Misconceptions**: What people get wrong
6. **Further Learning**: Resources to explore`,
    };

    try {
      const response = await callGeminiAPI(prompts[labExperiment], 2048);
      setLabOutput({
        experiment: labExperiment,
        input: labInput,
        output: response,
        timestamp: Date.now(),
      });
    } catch (error) {
      setLabOutput({ error: "Experiment failed. Please try again." });
    } finally {
      setLabLoading(false);
    }
  };

  // ===== PROJECT GENERATOR =====
  const generateProjects = async () => {
    setProjectLoading(true);
    setGeneratedProjects([]);

    try {
      const prompt = `Generate 4 unique, impressive project ideas for an AI/ML engineer portfolio.

PREFERENCES:
- Domain: ${projectPrefs.domain || "Any"}
- Difficulty: ${projectPrefs.difficulty}
- Technologies: ${projectPrefs.tech || "Open to suggestions"}

For each project, provide (in JSON format):
{
  "projects": [
    {
      "name": "Project Name",
      "tagline": "One-line description",
      "description": "2-3 sentence detailed description",
      "techStack": ["Tech1", "Tech2", "Tech3"],
      "difficulty": "Intermediate",
      "timeline": "2-3 weeks",
      "uniqueness": "What makes it stand out",
      "learnings": ["Skill 1", "Skill 2"],
      "icon": "emoji"
    }
  ]
}

Make projects creative, technically impressive, and portfolio-worthy.`;

      const response = await callGeminiAPI(prompt, 2048);
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        setGeneratedProjects(data.projects || []);
      }
    } catch (error) {
      console.error("Project generation error:", error);
    } finally {
      setProjectLoading(false);
    }
  };

  // ===== SAVE TO STORAGE =====
  const saveToStorage = useCallback(
    async (data) => {
      const merged = { savedItems, notes, ...data };
      localStorage.setItem(`userspace_${user?.uid}`, JSON.stringify(merged));

      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, data);
        } catch (error) {
          console.warn("Firestore save failed:", error.message);
        }
      }
    },
    [user, savedItems, notes]
  );

  // ===== TOGGLE AGENT SELECTION =====
  const toggleAgentSelection = (agentId) => {
    setSelectedAgents((prev) => {
      if (prev.includes(agentId)) {
        return prev.filter((id) => id !== agentId);
      }
      return [...prev, agentId];
    });
  };

  // ===== AUTO-SCROLL EFFECTS =====
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [brainMessages]);

  useEffect(() => {
    interviewEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [interviewMessages]);

  useEffect(() => {
    agentChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [agentConversation]);

  // // ===== RENDER KNOWLEDGE GRAPH =====
  // useEffect(() => {
  //   if (!graphCanvasRef.current || !knowledgeGraph || activeTab !== 'brain') return;

  //   const canvas = graphCanvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const rect = canvas.getBoundingClientRect();

  //   canvas.width = rect.width * 2;
  //   canvas.height = rect.height * 2;
  //   ctx.scale(2, 2);

  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;

  //   ctx.clearRect(0, 0, rect.width, rect.height);

  //   // Draw edges
  //   ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
  //   ctx.lineWidth = 1;
  //   knowledgeGraph.edges.forEach(edge => {
  //     const fromNode = knowledgeGraph.nodes.find(n => n.id === edge.from);
  //     const toNode = knowledgeGraph.nodes.find(n => n.id === edge.to);
  //     if (fromNode && toNode) {
  //       ctx.beginPath();
  //       ctx.moveTo(centerX + fromNode.x * 0.8, centerY + fromNode.y * 0.8);
  //       ctx.lineTo(centerX + toNode.x * 0.8, centerY + toNode.y * 0.8);
  //       ctx.stroke();
  //     }
  //   });

  //   // Draw nodes
  //   knowledgeGraph.nodes.forEach(node => {
  //     const x = centerX + node.x * 0.8;
  //     const y = centerY + node.y * 0.8;
  //     const radius = node.type === 'profile' ? 25 : node.type === 'project' ? 18 : 12;

  //     ctx.beginPath();
  //     ctx.arc(x, y, radius, 0, Math.PI * 2);
  //     ctx.fillStyle = node.color || '#4CAF50';
  //     ctx.fill();

  //     ctx.fillStyle = '#fff';
  //     ctx.font = node.type === 'profile' ? 'bold 10px Arial' : '8px Arial';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';

  //     const label = node.label.length > 12 ? node.label.substring(0, 10) + '...' : node.label;
  //     ctx.fillText(label, x, y);
  //   });

  // }, [knowledgeGraph, activeTab]);
  // ===== RENDER KNOWLEDGE GRAPH =====
  // ===== RENDER KNOWLEDGE GRAPH =====
  useEffect(() => {
    if (!graphCanvasRef.current || !knowledgeGraph || activeTab !== "brain")
      return;

    const canvas = graphCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const centerX = rect.width / 2 + graphTransform.offsetX;
    const centerY = rect.height / 2 + graphTransform.offsetY;
    const scale = graphTransform.scale;

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw background gradient
      const bgGradient = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        0,
        rect.width / 2,
        rect.height / 2,
        rect.width / 2
      );
      bgGradient.addColorStop(0, "rgba(30, 30, 50, 0.3)");
      bgGradient.addColorStop(1, "rgba(10, 10, 20, 0.1)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Store node positions for hit detection
      nodePositionsRef.current = [];

      // Draw edges with glow effect
      knowledgeGraph.edges.forEach((edge) => {
        const fromNode = knowledgeGraph.nodes.find((n) => n.id === edge.from);
        const toNode = knowledgeGraph.nodes.find((n) => n.id === edge.to);
        if (fromNode && toNode) {
          const fromX = centerX + fromNode.x * 0.8 * scale;
          const fromY = centerY + fromNode.y * 0.8 * scale;
          const toX = centerX + toNode.x * 0.8 * scale;
          const toY = centerY + toNode.y * 0.8 * scale;

          const isHighlighted =
            hoveredNode === fromNode.id ||
            hoveredNode === toNode.id ||
            selectedNode === fromNode.id ||
            selectedNode === toNode.id;

          // Draw edge glow
          if (isHighlighted) {
            ctx.strokeStyle = "rgba(100, 200, 255, 0.4)";
            ctx.lineWidth = 4 * scale;
            ctx.beginPath();

            // Curved edge
            const midX = (fromX + toX) / 2;
            const midY = (fromY + toY) / 2 - 20 * scale;
            ctx.moveTo(fromX, fromY);
            ctx.quadraticCurveTo(midX, midY, toX, toY);
            ctx.stroke();
          }

          // Draw main edge
          const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
          gradient.addColorStop(0, fromNode.color || "#4CAF50");
          gradient.addColorStop(1, toNode.color || "#2196F3");

          ctx.strokeStyle = isHighlighted
            ? gradient
            : "rgba(100, 120, 150, 0.25)";
          ctx.lineWidth = isHighlighted ? 2.5 * scale : 1.5 * scale;
          ctx.lineCap = "round";

          ctx.beginPath();
          const midX = (fromX + toX) / 2;
          const midY = (fromY + toY) / 2 - 15 * scale;
          ctx.moveTo(fromX, fromY);
          ctx.quadraticCurveTo(midX, midY, toX, toY);
          ctx.stroke();

          // Draw arrow
          const angle = Math.atan2(toY - midY, toX - midX);
          const arrowSize = 6 * scale;
          ctx.fillStyle = isHighlighted ? gradient : "rgba(100, 120, 150, 0.4)";
          ctx.beginPath();
          ctx.moveTo(toX, toY);
          ctx.lineTo(
            toX - arrowSize * Math.cos(angle - Math.PI / 6),
            toY - arrowSize * Math.sin(angle - Math.PI / 6)
          );
          ctx.lineTo(
            toX - arrowSize * Math.cos(angle + Math.PI / 6),
            toY - arrowSize * Math.sin(angle + Math.PI / 6)
          );
          ctx.closePath();
          ctx.fill();
        }
      });

      // Draw nodes with effects
      knowledgeGraph.nodes.forEach((node, index) => {
        const x = centerX + node.x * 0.8 * scale;
        const y = centerY + node.y * 0.8 * scale;
        const baseRadius =
          node.type === "profile" ? 28 : node.type === "project" ? 20 : 14;
        const radius = baseRadius * scale;

        const isHovered = hoveredNode === node.id;
        const isSelected = selectedNode === node.id;
        const pulseRadius = isHovered || isSelected ? radius * 1.15 : radius;

        // Store position for hit detection
        nodePositionsRef.current.push({
          id: node.id,
          x,
          y,
          radius: pulseRadius,
          node,
        });

        // Draw outer glow
        if (isHovered || isSelected) {
          const glowGradient = ctx.createRadialGradient(
            x,
            y,
            radius * 0.5,
            x,
            y,
            radius * 2.5
          );
          glowGradient.addColorStop(0, (node.color || "#4CAF50") + "60");
          glowGradient.addColorStop(0.5, (node.color || "#4CAF50") + "20");
          glowGradient.addColorStop(1, "transparent");
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw pulse ring for selected
        if (isSelected) {
          ctx.strokeStyle = (node.color || "#4CAF50") + "80";
          ctx.lineWidth = 2 * scale;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.arc(x, y, radius * 1.8, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Draw node shadow
        ctx.shadowColor = node.color || "#4CAF50";
        ctx.shadowBlur = isHovered || isSelected ? 20 : 8;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;

        // Draw main node with gradient
        const nodeGradient = ctx.createRadialGradient(
          x - radius * 0.3,
          y - radius * 0.3,
          0,
          x,
          y,
          radius
        );
        const baseColor = node.color || "#4CAF50";
        nodeGradient.addColorStop(0, lightenColor(baseColor, 40));
        nodeGradient.addColorStop(0.7, baseColor);
        nodeGradient.addColorStop(1, darkenColor(baseColor, 20));

        ctx.beginPath();
        ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Draw border
        ctx.shadowBlur = 0;
        ctx.strokeStyle =
          isHovered || isSelected ? "#fff" : "rgba(255,255,255,0.3)";
        ctx.lineWidth = isHovered || isSelected ? 2.5 * scale : 1.5 * scale;
        ctx.stroke();

        // Draw icon based on type
        ctx.fillStyle = "#fff";
        const icon =
          node.type === "profile"
            ? "👤"
            : node.type === "project"
            ? "📁"
            : "💡";
        ctx.font = `${radius * 0.6}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(icon, x, y - radius * 0.15);

        // Draw label
        ctx.fillStyle = "#fff";
        ctx.font = `${isHovered || isSelected ? "bold " : ""}${Math.max(
          8,
          radius * 0.35
        )}px 'Segoe UI', Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const label =
          node.label.length > 15
            ? node.label.substring(0, 13) + "..."
            : node.label;
        ctx.fillText(label, x, y + radius * 0.45);

        // Draw badge for connection count
        const connections = knowledgeGraph.edges.filter(
          (e) => e.from === node.id || e.to === node.id
        ).length;
        if (connections > 0) {
          const badgeX = x + radius * 0.7;
          const badgeY = y - radius * 0.7;
          const badgeRadius = Math.max(8, radius * 0.35);

          ctx.beginPath();
          ctx.arc(badgeX, badgeY, badgeRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#ff6b6b";
          ctx.fill();
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.fillStyle = "#fff";
          ctx.font = `bold ${badgeRadius}px Arial`;
          ctx.fillText(connections.toString(), badgeX, badgeY);
        }
      });

      // Draw tooltip for hovered node
      if (hoveredNode) {
        const nodeData = nodePositionsRef.current.find(
          (n) => n.id === hoveredNode
        );
        if (nodeData) {
          const tooltipX = nodeData.x + nodeData.radius + 10;
          const tooltipY = nodeData.y - 30;
          const tooltipWidth = 150;
          const tooltipHeight = 60;

          // Tooltip background
          ctx.fillStyle = "rgba(20, 20, 35, 0.95)";
          ctx.strokeStyle = nodeData.node.color || "#4CAF50";
          ctx.lineWidth = 2;
          roundRect(ctx, tooltipX, tooltipY, tooltipWidth, tooltipHeight, 8);
          ctx.fill();
          ctx.stroke();

          // Tooltip content
          ctx.fillStyle = "#fff";
          ctx.font = "bold 11px Segoe UI";
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.fillText(nodeData.node.label, tooltipX + 10, tooltipY + 10);

          ctx.fillStyle = "rgba(255,255,255,0.7)";
          ctx.font = "10px Segoe UI";
          ctx.fillText(
            `Type: ${nodeData.node.type}`,
            tooltipX + 10,
            tooltipY + 28
          );

          const connections = knowledgeGraph.edges.filter(
            (e) => e.from === nodeData.id || e.to === nodeData.id
          ).length;
          ctx.fillText(
            `Connections: ${connections}`,
            tooltipX + 10,
            tooltipY + 42
          );
        }
      }
    };

    // Helper functions
    function lightenColor(color, percent) {
      const num = parseInt(color.replace("#", ""), 16);
      const amt = Math.round(2.55 * percent);
      const R = Math.min(255, (num >> 16) + amt);
      const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
      const B = Math.min(255, (num & 0x0000ff) + amt);
      return `rgb(${R},${G},${B})`;
    }

    function darkenColor(color, percent) {
      const num = parseInt(color.replace("#", ""), 16);
      const amt = Math.round(2.55 * percent);
      const R = Math.max(0, (num >> 16) - amt);
      const G = Math.max(0, ((num >> 8) & 0x00ff) - amt);
      const B = Math.max(0, (num & 0x0000ff) - amt);
      return `rgb(${R},${G},${B})`;
    }

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    animate();
  }, [knowledgeGraph, activeTab, hoveredNode, selectedNode, graphTransform]);

  // ===== GRAPH MOUSE HANDLERS =====
  const handleGraphMouseMove = (e) => {
    if (!graphCanvasRef.current || !nodePositionsRef.current) return;

    const canvas = graphCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging) {
      setGraphTransform((prev) => ({
        ...prev,
        offsetX: prev.offsetX + (e.clientX - dragStart.x),
        offsetY: prev.offsetY + (e.clientY - dragStart.y),
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
      return;
    }

    let foundNode = null;
    for (const nodePos of nodePositionsRef.current) {
      const distance = Math.sqrt((x - nodePos.x) ** 2 + (y - nodePos.y) ** 2);
      if (distance <= nodePos.radius) {
        foundNode = nodePos.id;
        break;
      }
    }

    setHoveredNode(foundNode);
    canvas.style.cursor = foundNode
      ? "pointer"
      : isDragging
      ? "grabbing"
      : "grab";
  };

  const handleGraphClick = (e) => {
    if (hoveredNode) {
      setSelectedNode((prev) => (prev === hoveredNode ? null : hoveredNode));
    }
  };

  const handleGraphMouseDown = (e) => {
    if (!hoveredNode) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleGraphMouseUp = () => {
    setIsDragging(false);
  };

  const handleGraphWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setGraphTransform((prev) => ({
      ...prev,
      scale: Math.min(3, Math.max(0.3, prev.scale * delta)),
    }));
  };

  const resetGraphView = () => {
    setGraphTransform({ scale: 1, offsetX: 0, offsetY: 0 });
    setSelectedNode(null);
  }; // ===== GREETING =====
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };
  // ===== NOT LOGGED IN =====
  // ... other imports

  // Inside your component...

  // ===== NOT LOGGED IN =====
  // import LoginButton from "../../components/auth/LoginButton";
  // ... imports

  // Inside your component function...

  // ===== NOT LOGGED IN (Professional View) =====
  if (!user) {
    return (
      <div className="userspace-wrapper">
        <Header theme={theme} setTheme={setTheme} />

        <div className="userspace-backdrop" style={{ background: theme.body }}>
          {/* Technical Grid Background */}
          <div className="tech-grid-overlay"></div>

          <div className="access-card">
            {/* Header Section */}
            <div className="card-header">
              <div className="lock-icon-container">
                <div className="lock-ring"></div>
                <span className="lock-emoji">🔒</span>
              </div>
              <h2 className="access-title">Authentication Required</h2>
              <p className="access-subtitle">
                Please sign in to access your personalized
                <span className="highlight-text"> AI Workspace</span>.
              </p>
            </div>

            {/* Features List - Professional List Style */}
            <div className="features-container">
              <div className="feature-row">
                <div className="feature-icon">🧠</div>
                <div className="feature-text">
                  <span className="f-title">RAG Neural Engine</span>
                  <span className="f-desc">
                    Context-aware knowledge base interaction
                  </span>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <span className="f-title">Multi-Agent Systems</span>
                  <span className="f-desc">
                    Autonomous task orchestration & analysis
                  </span>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-icon">📊</div>
                <div className="feature-text">
                  <span className="f-title">Skill Analytics</span>
                  <span className="f-desc">
                    Real-time professional growth tracking
                  </span>
                </div>
              </div>
            </div>

            {/* Footer / Action */}
            <div className="card-footer">
              <div className="login-wrapper">
                <LoginButton theme={theme} />
              </div>
              <p className="security-note">
                <span className="secure-dot"></span> Secure SSL Connection
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // ===== LOADING =====
  if (isLoading) {
    return (
      <div>
        <Header theme={theme} setTheme={setTheme} />
        <div
          className="userspace-container"
          data-theme={
            theme?.text !== "#ffffff" && theme?.text !== "#fff"
              ? "light"
              : "dark"
          }
        >
          <div className="userspace-loading">
            <div className="loading-spinner"></div>
            <p style={{ color: theme?.text }}>
              Initializing AI Experience Center...
            </p>
            <p className="loading-substatus">
              Setting up RAG system & Agents...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ===== TAB DEFINITIONS =====
  const tabs = [
    {
      id: "brain",
      label: "AI Brain",
      icon: "🧠",
      desc: "RAG-powered assistant",
    },
    {
      id: "agents",
      label: "Multi-Agent",
      icon: "🤖",
      desc: "6 specialized agents",
    },
    {
      id: "Intelligent",
      label: "Resume-Agent",
      icon: "🚀",
      desc: "Resume wrapper Agent",
    },
    {
      id: "skills",
      label: "Skill Match",
      icon: "🎯",
      desc: "Match skills to jobs",
    },
    {
      id: "interview",
      label: "Mock Interview",
      icon: "💼",
      desc: "Practice with AI",
    },
    { id: "lab", label: "AI Lab", icon: "🔬", desc: "Experiments" },
    {
      id: "projects",
      label: "Idea Generator",
      icon: "💡",
      desc: "Project ideas",
    },
  ];
  // 👇 REPLACE YOUR EXISTING isLightMode FUNCTION WITH THIS
  const isLightMode = () => {
    if (!theme) return false;

    // Method 1: Check the explicit name property (Best/Safest)
    if (theme.name === "light") return true;
    if (theme.name === "dark") return false;

    // Method 2: Check if theme itself is a string
    if (typeof theme === "string") return theme === "light";

    // Method 3: Fallback - Check specific light background colors
    // (Added #fff5ee based on your logs)
    const bg = theme.body?.toLowerCase() || "";
    const lightBackgrounds = [
      "#ffffff",
      "#fff",
      "#f5f5f5",
      "#fafafa",
      "#f0f0f0",
      "#fff5ee",
      "#f7faff",
    ];

    return lightBackgrounds.includes(bg);
  };

  const themeMode = isLightMode() ? "light" : "dark";
  console.log("Current Theme Prop:", theme);
  console.log("Calculated Mode:", themeMode);
  // ===== MAIN RENDER =====
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />

      <div className="userspace-container" data-theme={themeMode}>
        {firestoreError && (
          <div className="firestore-error-banner">
            <span>⚠️</span>
            <span>Cloud sync unavailable. Data saved locally.</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="userspace-hero enhanced">
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
          <div className="hero-content">
            <div className="user-info-hero">
              <h1>
                {getGreeting()}, {user.displayName?.split(" ")[0]}!
                <span className="wave">👋</span>
              </h1>
              <p>
                Welcome to the{" "}
                <span className="highlight">AI Experience Center</span>
              </p>

              {/* RAG Status Indicator */}
              <div className="rag-status">
                <span
                  className={`status-dot ${
                    ragInitialized ? "online" : "offline"
                  }`}
                ></span>
                <span className="status-text">
                  {ragInitialized ? "RAG System Active" : "RAG Initializing..."}
                </span>
                {ragInitialized && (
                  <span className="status-stats">
                    {metrics.requestCount} queries |{" "}
                    {metrics.totalTokens.toLocaleString()} tokens
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="userspace-tabs enhanced">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <div className="tab-text">
                <span className="tab-label">{tab.label}</span>
                <span className="tab-desc">{tab.desc}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="userspace-content">
          {/* ===== AI BRAIN TAB (RAG-Powered) ===== */}
          {activeTab === "brain" && (
            <div className="tab-content brain">
              <div className="section-header">
                <h2>
                  🧠 AI Portfolio Brain{" "}
                  <span className="badge">RAG-Powered</span>
                </h2>
                <p>
                  Ask anything about Laxman's projects, skills, or experience
                </p>
              </div>

              <div className="brain-layout">
                {/* Knowledge Graph Visualization */}

                <div className="knowledge-graph-section">
                  <div className="section-mini-header">
                    <h3>Knowledge Graph</h3>
                    <div className="graph-controls">
                      <span className="node-count">
                        <span className="count-badge">
                          {knowledgeGraph?.nodes.length || 0}
                        </span>{" "}
                        nodes
                        <span className="separator">•</span>
                        <span className="count-badge">
                          {knowledgeGraph?.edges.length || 0}
                        </span>{" "}
                        edges
                      </span>
                      <div className="graph-actions">
                        <button
                          className="graph-control-btn"
                          onClick={() =>
                            setGraphTransform((prev) => ({
                              ...prev,
                              scale: Math.min(3, prev.scale * 1.2),
                            }))
                          }
                          title="Zoom In"
                        >
                          <span>+</span>
                        </button>
                        <button
                          className="graph-control-btn"
                          onClick={() =>
                            setGraphTransform((prev) => ({
                              ...prev,
                              scale: Math.max(0.3, prev.scale * 0.8),
                            }))
                          }
                          title="Zoom Out"
                        >
                          <span>−</span>
                        </button>
                        <button
                          className="graph-control-btn reset"
                          onClick={resetGraphView}
                          title="Reset View"
                        >
                          <span>⟲</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="graph-canvas-wrapper">
                    <canvas
                      ref={graphCanvasRef}
                      className="knowledge-graph-canvas"
                      onMouseMove={handleGraphMouseMove}
                      onClick={handleGraphClick}
                      onMouseDown={handleGraphMouseDown}
                      onMouseUp={handleGraphMouseUp}
                      onMouseLeave={() => {
                        setHoveredNode(null);
                        setIsDragging(false);
                      }}
                      onWheel={handleGraphWheel}
                    />

                    {selectedNode && (
                      <div className="selected-node-panel">
                        <div className="panel-header">
                          <span className="panel-icon">
                            {knowledgeGraph?.nodes.find(
                              (n) => n.id === selectedNode
                            )?.type === "profile"
                              ? "👤"
                              : knowledgeGraph?.nodes.find(
                                  (n) => n.id === selectedNode
                                )?.type === "project"
                              ? "📁"
                              : "💡"}
                          </span>
                          <span className="panel-title">
                            {
                              knowledgeGraph?.nodes.find(
                                (n) => n.id === selectedNode
                              )?.label
                            }
                          </span>
                          <button
                            className="panel-close"
                            onClick={() => setSelectedNode(null)}
                          >
                            ×
                          </button>
                        </div>
                        <div className="panel-content">
                          <div className="panel-stat">
                            <span className="stat-label">Type</span>
                            <span className="stat-value">
                              {
                                knowledgeGraph?.nodes.find(
                                  (n) => n.id === selectedNode
                                )?.type
                              }
                            </span>
                          </div>
                          <div className="panel-stat">
                            <span className="stat-label">Connections</span>
                            <span className="stat-value">
                              {
                                knowledgeGraph?.edges.filter(
                                  (e) =>
                                    e.from === selectedNode ||
                                    e.to === selectedNode
                                ).length
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="graph-legend">
                      <div className="legend-item">
                        <span className="legend-dot profile"></span> Profile
                      </div>
                      <div className="legend-item">
                        <span className="legend-dot project"></span> Project
                      </div>
                      <div className="legend-item">
                        <span className="legend-dot skill"></span> Skill
                      </div>
                    </div>

                    <div className="graph-hint">
                      {isDragging
                        ? "🖐️ Dragging..."
                        : hoveredNode
                        ? "👆 Click to select"
                        : "🖱️ Drag to pan • Scroll to zoom"}
                    </div>
                  </div>
                </div>
                <div className="brain-container">
                  <div className="brain-suggestions">
                    <p>Try asking:</p>
                    <div className="suggestions-grid">
                      {[
                        "What AI projects has Laxman worked on?",
                        "Tell me about the CamsLens project",
                        "What's Laxman's experience with LLMs?",
                        "What makes Laxman stand out as a developer?",
                      ].map((suggestion, i) => (
                        <button
                          key={i}
                          className="suggestion-chip"
                          onClick={() => setBrainInput(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Retrieval Steps Toggle */}
                  <div className="retrieval-toggle">
                    <label>
                      <input
                        type="checkbox"
                        checked={showRetrievalSteps}
                        onChange={() =>
                          setShowRetrievalSteps(!showRetrievalSteps)
                        }
                      />
                      <span>Show Retrieval Steps</span>
                    </label>
                  </div>

                  <div className="brain-chat">
                    <div className="chat-messages">
                      {brainMessages.length === 0 && (
                        <div className="chat-welcome">
                          <span className="welcome-icon">🧠</span>
                          <h3>Hi! I'm Laxman's RAG-Powered AI Assistant</h3>
                          <p>
                            I use vector embeddings to retrieve relevant
                            information from his portfolio. Ask me anything!
                          </p>
                          <div className="rag-features">
                            <span>🔍 Semantic Search</span>
                            <span>📄 Document Retrieval</span>
                            <span>🎯 Context-Aware</span>
                          </div>
                        </div>
                      )}

                      {brainMessages.map((msg, i) => (
                        <div key={i} className={`chat-message ${msg.role}`}>
                          <div className="message-avatar">
                            {msg.role === "user" ? "👤" : "🧠"}
                          </div>
                          <div className="message-content">
                            {msg.content}

                            {/* Show retrieved docs for assistant messages */}
                            {msg.role === "assistant" &&
                              showRetrievalSteps &&
                              retrievedDocs.length > 0 &&
                              i === brainMessages.length - 1 && (
                                <div className="retrieved-docs">
                                  <h4>📄 Retrieved Context:</h4>
                                  {retrievedDocs.map((doc, j) => (
                                    <div key={j} className="retrieved-doc">
                                      <span className="doc-score">
                                        {(doc.score * 100).toFixed(1)}% match
                                      </span>
                                      <span className="doc-type">
                                        {doc.metadata?.type}
                                      </span>
                                      <p className="doc-content">
                                        {doc.content.substring(0, 150)}...
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        </div>
                      ))}

                      {brainLoading && (
                        <div className="chat-message assistant">
                          <div className="message-avatar">🧠</div>
                          <div className="message-content loading">
                            <div className="rag-loading">
                              <span className="loading-step active">
                                🔍 Searching vectors...
                              </span>
                              <span className="loading-step">
                                📄 Retrieving docs...
                              </span>
                              <span className="loading-step">
                                🎯 Generating response...
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>

                    <div className="chat-input-container">
                      <input
                        type="text"
                        value={brainInput}
                        onChange={(e) => setBrainInput(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleBrainQuery()
                        }
                        placeholder="Ask about projects, skills, experience..."
                        disabled={brainLoading}
                      />
                      <button
                        onClick={handleBrainQuery}
                        disabled={brainLoading || !brainInput.trim()}
                        className="send-btn"
                      >
                        {brainLoading ? "..." : "→"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== MULTI-AGENT ORCHESTRATION TAB ===== */}
          {activeTab === "agents" && (
            <div className="tab-content agents">
              <div className="section-header">
                <h2>
                  🤖 Multi-Agent Orchestration{" "}
                  <span className="badge">6 Agents</span>
                </h2>
                <p>
                  Watch specialized AI agents collaborate to solve complex tasks
                </p>
              </div>

              <div className="agents-container">
                {/* Agent Selection */}
                <div className="agent-selector">
                  <h3>Select Agents:</h3>
                  <div className="agent-grid">
                    {Object.values(AGENT_DEFINITIONS).map((agent) => (
                      <button
                        key={agent.id}
                        className={`agent-select-btn ${
                          selectedAgents.includes(agent.id) ? "selected" : ""
                        }`}
                        onClick={() => toggleAgentSelection(agent.id)}
                        style={{
                          borderColor: selectedAgents.includes(agent.id)
                            ? agent.color
                            : "transparent",
                          background: selectedAgents.includes(agent.id)
                            ? `${agent.color}15`
                            : "transparent",
                        }}
                      >
                        <span className="agent-icon">{agent.icon}</span>
                        <span className="agent-name">{agent.name}</span>
                        <span className="agent-expertise">
                          {agent.expertise.slice(0, 2).join(", ")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Agents Status */}
                {activeAgents.length > 0 && (
                  <div className="active-agents-bar">
                    {activeAgents.map((agent) => (
                      <div
                        key={agent.id}
                        className={`agent-status-chip ${agent.status}`}
                        style={{ borderColor: agent.color }}
                      >
                        <span className="agent-chip-icon">{agent.icon}</span>
                        <span className="agent-chip-name">{agent.name}</span>
                        <span className={`agent-chip-status ${agent.status}`}>
                          {agent.status === "thinking" && "⏳"}
                          {agent.status === "complete" && "✅"}
                          {agent.status === "error" && "❌"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Task Input */}
                <div className="agent-task-input">
                  <h3>Give the agents a task:</h3>
                  <textarea
                    value={agentTask}
                    onChange={(e) => setAgentTask(e.target.value)}
                    placeholder="Example tasks:
• Analyze my portfolio and suggest improvements
• How should I prepare for a senior ML engineer interview?
• Create a strategy for transitioning to AI research
• Compare my skills against FAANG requirements"
                    rows={4}
                  />
                  <button
                    onClick={runMultiAgentTask}
                    disabled={
                      agentRunning ||
                      !agentTask.trim() ||
                      selectedAgents.length === 0
                    }
                    className="run-agents-btn"
                  >
                    {agentRunning ? (
                      <>
                        <span className="btn-spinner"></span>
                        Agents Working...
                      </>
                    ) : (
                      <>
                        🚀 Run {selectedAgents.length} Agent
                        {selectedAgents.length > 1 ? "s" : ""}
                      </>
                    )}
                  </button>
                </div>

                {/* Agent Conversation */}
                {agentConversation.length > 0 && (
                  <div className="agent-conversation">
                    {agentConversation.map((msg, i) => (
                      <div
                        key={i}
                        className={`agent-message ${msg.type}`}
                        style={msg.color ? { borderLeftColor: msg.color } : {}}
                      >
                        {msg.type === "orchestrator" && (
                          <div className="message-header orchestrator">
                            <span className="msg-icon">🎯</span>
                            <span className="msg-sender">Orchestrator</span>
                          </div>
                        )}
                        {msg.type === "agent-start" && (
                          <div className="message-header agent-start">
                            <span className="msg-icon">{msg.icon}</span>
                            <span className="msg-sender">{msg.agentName}</span>
                            <span className="msg-status">analyzing...</span>
                          </div>
                        )}
                        {msg.type === "agent-response" && (
                          <div
                            className="message-header agent-response"
                            style={{ color: msg.color }}
                          >
                            <span className="msg-icon">{msg.icon}</span>
                            <span className="msg-sender">{msg.agentName}</span>
                          </div>
                        )}
                        {msg.type === "error" && (
                          <div className="message-header error">
                            <span className="msg-icon">❌</span>
                            <span className="msg-sender">Error</span>
                          </div>
                        )}
                        <div
                          className={`message-body ${
                            msg.isFinal ? "final" : ""
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    <div ref={agentChatEndRef} />
                  </div>
                )}

                {/* Placeholder when no conversation */}
                {!agentRunning && agentConversation.length === 0 && (
                  <div className="agents-placeholder">
                    <div className="agents-animation">
                      {Object.values(AGENT_DEFINITIONS)
                        .slice(0, 3)
                        .map((agent, i) => (
                          <span
                            key={agent.id}
                            className="floating-agent"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            {agent.icon}
                          </span>
                        ))}
                    </div>
                    <h3>Multi-Agent System Ready</h3>
                    <p>
                      Select agents and enter a task to see AI collaboration in
                      action
                    </p>
                    <div className="agent-capabilities">
                      <span>📁 Portfolio Analysis</span>
                      <span>🔬 Research</span>
                      <span>⚡ Skills Assessment</span>
                      <span>🎯 Strategy</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ===== SKILL MATCH TAB ===== */}
          {activeTab === "skills" && (
            <div className="tab-content skills">
              <div className="section-header">
                <h2>🎯 Skill Match Analyzer</h2>
                <p>Paste a job description to see how Laxman's skills match</p>
              </div>

              <div className="skills-container">
                <div className="skills-input-section">
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here...

Example:
We're looking for a Senior AI Engineer with experience in:
- Python, TensorFlow, PyTorch
- LLMs and NLP
- React/Node.js
- Cloud platforms (AWS/GCP)"
                    rows={12}
                  />
                  <button
                    onClick={analyzeSkillMatch}
                    disabled={skillLoading || !jobDescription.trim()}
                    className="analyze-btn"
                  >
                    {skillLoading ? (
                      <>
                        <span className="btn-spinner"></span>
                        Analyzing...
                      </>
                    ) : (
                      <>🔍 Analyze Match</>
                    )}
                  </button>
                </div>

                {skillAnalysis && !skillAnalysis.error && (
                  <div className="skills-analysis">
                    <div className="match-score-card">
                      <div
                        className="score-circle"
                        style={{
                          "--score": skillAnalysis.overallMatch,
                        }}
                      >
                        <span className="score-value">
                          {skillAnalysis.overallMatch}%
                        </span>
                      </div>
                      <div className="score-info">
                        <h3>{skillAnalysis.matchLevel}</h3>
                        <p>{skillAnalysis.summary}</p>
                      </div>
                    </div>

                    <div className="analysis-grid">
                      <div className="analysis-card matched">
                        <h4>✅ Matched Skills</h4>
                        <div className="skill-tags">
                          {skillAnalysis.matchedSkills?.map((skill, i) => (
                            <div
                              key={i}
                              className={`skill-tag ${skill.relevance}`}
                            >
                              <span className="skill-name">{skill.skill}</span>
                              <span className="skill-evidence">
                                {skill.evidence}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="analysis-card missing">
                        <h4>📚 Growth Areas</h4>
                        <div className="skill-tags">
                          {skillAnalysis.missingSkills?.map((skill, i) => (
                            <div
                              key={i}
                              className={`skill-tag ${skill.importance}`}
                            >
                              <span className="skill-name">{skill.skill}</span>
                              <span className="skill-evidence">
                                {skill.suggestion}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="analysis-card projects">
                        <h4>🚀 Relevant Projects</h4>
                        {skillAnalysis.relevantProjects?.map((project, i) => (
                          <div key={i} className="relevant-project">
                            <strong>{project.name}</strong>
                            <p>{project.relevance}</p>
                            <span className="highlight-text">
                              {project.highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="analysis-card tips">
                        <h4>💡 Interview Tips</h4>
                        <ul>
                          {skillAnalysis.interviewTips?.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {skillAnalysis?.error && (
                  <div className="error-message">{skillAnalysis.error}</div>
                )}
              </div>
            </div>
          )}

          {/* ===== MOCK INTERVIEW TAB ===== */}
          {activeTab === "interview" && (
            <div className="tab-content interview">
              <div className="section-header">
                <h2>💼 AI Mock Interview</h2>
                <p>Practice technical interviews with an AI interviewer</p>
              </div>

              {!interviewStarted ? (
                <div className="interview-setup">
                  <div className="interview-roles">
                    <h3>Select a role to practice for:</h3>
                    <div className="role-grid">
                      {[
                        { id: "sde", label: "Software Engineer", icon: "💻" },
                        { id: "ml", label: "ML Engineer", icon: "🤖" },
                        {
                          id: "fullstack",
                          label: "Full-Stack Developer",
                          icon: "🌐",
                        },
                        { id: "ai", label: "AI Engineer", icon: "🧠" },
                        { id: "data", label: "Data Scientist", icon: "📊" },
                        { id: "custom", label: "Custom Role", icon: "✨" },
                      ].map((role) => (
                        <button
                          key={role.id}
                          className={`role-card ${
                            interviewRole === role.label ? "selected" : ""
                          }`}
                          onClick={() =>
                            setInterviewRole(
                              role.id === "custom" ? "" : role.label
                            )
                          }
                        >
                          <span className="role-icon">{role.icon}</span>
                          <span className="role-label">{role.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="custom-role">
                      <input
                        type="text"
                        value={interviewRole}
                        onChange={(e) => setInterviewRole(e.target.value)}
                        placeholder="Or type a custom role (e.g., 'Senior React Developer at Google')"
                      />
                    </div>

                    <button
                      onClick={startInterview}
                      disabled={!interviewRole.trim() || interviewLoading}
                      className="start-interview-btn"
                    >
                      {interviewLoading ? "Starting..." : "🎤 Start Interview"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="interview-session">
                  <div className="interview-header">
                    <span className="interview-role-badge">
                      💼 Interviewing for: {interviewRole}
                    </span>
                    <button
                      className="end-interview-btn"
                      onClick={() => {
                        setInterviewStarted(false);
                        setInterviewMessages([]);
                        setInterviewRole("");
                      }}
                    >
                      End Interview
                    </button>
                  </div>

                  <div className="interview-chat">
                    {interviewMessages.map((msg, i) => (
                      <div key={i} className={`interview-message ${msg.role}`}>
                        <div className="message-avatar">
                          {msg.role === "interviewer" ? "👔" : "👤"}
                        </div>
                        <div className="message-bubble">
                          <span className="message-role">
                            {msg.role === "interviewer" ? "Interviewer" : "You"}
                          </span>
                          <p>{msg.content}</p>
                        </div>
                      </div>
                    ))}
                    {interviewLoading && (
                      <div className="interview-message interviewer">
                        <div className="message-avatar">👔</div>
                        <div className="message-bubble loading">
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                        </div>
                      </div>
                    )}
                    <div ref={interviewEndRef} />
                  </div>

                  <div className="interview-input-container">
                    <textarea
                      value={interviewInput}
                      onChange={(e) => setInterviewInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendInterviewResponse();
                        }
                      }}
                      placeholder="Type your response... (Press Enter to send)"
                      disabled={interviewLoading}
                      rows={3}
                    />
                    <button
                      onClick={sendInterviewResponse}
                      disabled={interviewLoading || !interviewInput.trim()}
                      className="send-response-btn"
                    >
                      Send →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===== AI LAB TAB ===== */}
          {activeTab === "lab" && (
            <div className="tab-content lab">
              <div className="section-header">
                <h2>🔬 AI Experiments Lab</h2>
                <p>Interactive demonstrations of AI capabilities</p>
              </div>

              <div className="lab-experiments">
                <div className="experiment-selector">
                  {experiments.map((exp) => (
                    <button
                      key={exp.id}
                      className={`experiment-card ${
                        labExperiment === exp.id ? "selected" : ""
                      }`}
                      onClick={() => {
                        setLabExperiment(exp.id);
                        setLabOutput(null);
                      }}
                    >
                      <span className="exp-icon">{exp.name.split(" ")[0]}</span>
                      <div className="exp-info">
                        <span className="exp-name">
                          {exp.name.replace(/^[^\s]+\s/, "")}
                        </span>
                        <span className="exp-desc">{exp.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="experiment-workspace">
                  <div className="exp-input">
                    <label>📝 Input</label>
                    <textarea
                      value={labInput}
                      onChange={(e) => setLabInput(e.target.value)}
                      placeholder={
                        experiments.find((e) => e.id === labExperiment)
                          ?.placeholder
                      }
                      rows={8}
                    />
                    <button
                      onClick={runExperiment}
                      disabled={labLoading || !labInput.trim()}
                      className="run-experiment-btn"
                    >
                      {labLoading ? (
                        <>
                          <span className="btn-spinner"></span>
                          Running Experiment...
                        </>
                      ) : (
                        <>🚀 Run Experiment</>
                      )}
                    </button>
                  </div>

                  <div className="exp-output">
                    <label>🔬 Output</label>
                    <div className="output-container">
                      {labLoading ? (
                        <div className="experiment-loading">
                          <div className="dna-loader">
                            <div className="dna-strand"></div>
                            <div className="dna-strand"></div>
                          </div>
                          <p>AI is analyzing...</p>
                        </div>
                      ) : labOutput?.output ? (
                        <div className="experiment-result">
                          <pre>{labOutput.output}</pre>
                        </div>
                      ) : labOutput?.error ? (
                        <div className="experiment-error">
                          {labOutput.error}
                        </div>
                      ) : (
                        <div className="experiment-placeholder">
                          <span>🧪</span>
                          <p>Run an experiment to see results</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== PROJECT GENERATOR TAB ===== */}
          {activeTab === "projects" && (
            <div className="tab-content projects-gen">
              <div className="section-header">
                <h2>💡 AI Project Idea Generator</h2>
                <p>Get personalized project ideas to build your portfolio</p>
              </div>

              <div className="project-gen-container">
                <div className="gen-preferences">
                  <div className="pref-group">
                    <label>🎯 Domain Interest</label>
                    <select
                      value={projectPrefs.domain}
                      onChange={(e) =>
                        setProjectPrefs({
                          ...projectPrefs,
                          domain: e.target.value,
                        })
                      }
                    >
                      <option value="">Any Domain</option>
                      <option value="AI/ML">AI/ML</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Computer Vision">Computer Vision</option>
                      <option value="NLP">Natural Language Processing</option>
                      <option value="Automation">Automation</option>
                      <option value="Gaming">Gaming</option>
                    </select>
                  </div>

                  <div className="pref-group">
                    <label>📊 Difficulty Level</label>
                    <div className="difficulty-buttons">
                      {["beginner", "intermediate", "advanced"].map((level) => (
                        <button
                          key={level}
                          className={`diff-btn ${
                            projectPrefs.difficulty === level ? "active" : ""
                          }`}
                          onClick={() =>
                            setProjectPrefs({
                              ...projectPrefs,
                              difficulty: level,
                            })
                          }
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pref-group">
                    <label>🛠️ Preferred Technologies</label>
                    <input
                      type="text"
                      value={projectPrefs.tech}
                      onChange={(e) =>
                        setProjectPrefs({
                          ...projectPrefs,
                          tech: e.target.value,
                        })
                      }
                      placeholder="e.g., React, Python, TensorFlow"
                    />
                  </div>

                  <button
                    onClick={generateProjects}
                    disabled={projectLoading}
                    className="generate-btn"
                  >
                    {projectLoading ? (
                      <>
                        <span className="btn-spinner"></span>
                        Generating Ideas...
                      </>
                    ) : (
                      <>✨ Generate Project Ideas</>
                    )}
                  </button>
                </div>

                {generatedProjects.length > 0 && (
                  <div className="generated-projects">
                    {generatedProjects.map((project, i) => (
                      <div key={i} className="gen-project-card">
                        <div className="project-header">
                          <span className="project-icon">
                            {project.icon || "💡"}
                          </span>
                          <div>
                            <h3>{project.name}</h3>
                            <span className="project-tagline">
                              {project.tagline}
                            </span>
                          </div>
                        </div>

                        <p className="project-description">
                          {project.description}
                        </p>

                        <div className="project-meta-badges">
                          <span
                            className={`difficulty-badge ${project.difficulty?.toLowerCase()}`}
                          >
                            {project.difficulty}
                          </span>
                          <span className="timeline-badge">
                            ⏱️ {project.timeline}
                          </span>
                        </div>

                        <div className="project-tech-stack">
                          {project.techStack?.map((tech, tIndex) => (
                            <span key={tIndex} className="tech-pill">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-deep-dive">
                          <div className="deep-dive-item">
                            <strong>✨ Uniqueness:</strong>
                            <p>{project.uniqueness}</p>
                          </div>
                          <div className="deep-dive-item">
                            <strong>🧠 Key Learnings:</strong>
                            <ul>
                              {project.learnings?.map((learn, lIndex) => (
                                <li key={lIndex}>{learn}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {generatedProjects.length === 0 && !projectLoading && (
                  <div className="projects-placeholder">
                    <div className="placeholder-icon">🚀</div>
                    <h3>Ready to Build Something New?</h3>
                    <p>
                      Select your preferences above and let AI generate unique
                      portfolio project ideas for you.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "Intelligent" && (
            <div className="Intelligent-tab">
              {/* ===== COMPETITIVE INTELLIGENCE HUB UI ===== */}
              <div className="intel-hub-section">
                {/* Header */}
                <div className="intel-hub-header">
                  <div className="header-title">
                    <h2>🔥 Quick Resume Tailor </h2>
                    <span className="header-subtitle">
                      AI-Powered Resume Tailoring & Interview Prep
                    </span>
                  </div>
                  <div className="header-badges">
                    <span className="mode-badge laxman-mode">
                      👨‍💻 Laxman Mode
                    </span>
                    {analysisResult && (
                      <span
                        className="match-badge"
                        style={{
                          background:
                            analysisResult.overallMatchScore >= 80
                              ? "linear-gradient(135deg, #4CAF50, #8BC34A)"
                              : analysisResult.overallMatchScore >= 60
                              ? "linear-gradient(135deg, #FF9800, #FFC107)"
                              : "linear-gradient(135deg, #f44336, #E91E63)",
                        }}
                      >
                        {analysisResult.overallMatchScore}% Match
                      </span>
                    )}
                  </div>
                </div>

                {/* JD Input Section */}
                <div className="jd-input-section">
                  <div className="jd-input-header">
                    <h3>📋 Job Description</h3>
                    <div className="intensity-selector">
                      <span className="intensity-label">
                        Tailoring Intensity:
                      </span>
                      <div className="intensity-options">
                        {["conservative", "moderate", "aggressive"].map(
                          (level) => (
                            <button
                              key={level}
                              className={`intensity-btn ${
                                tailorIntensity === level ? "active" : ""
                              }`}
                              onClick={() => setTailorIntensity(level)}
                            >
                              {level === "conservative" && "🎯"}
                              {level === "moderate" && "⚡"}
                              {level === "aggressive" && "🔥"}
                              {level.charAt(0).toUpperCase() + level.slice(1)}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <textarea
                    className="jd-textarea"
                    value={jdInput}
                    onChange={(e) => setJdInput(e.target.value)}
                    placeholder="Paste the full job description here...

          Example:
          We are looking for a Senior Software Engineer to join our AI Platform team. 
          You will design and build scalable ML infrastructure...

          Requirements:
          - 5+ years of experience with Python
          - Experience with cloud platforms (AWS/GCP)
          - Strong knowledge of distributed systems..."
                    rows={8}
                  />

                  <div className="jd-actions">
                    <button
                      className="analyze-btn"
                      onClick={runFullAnalysis}
                      disabled={isAnalyzing || !jdInput.trim()}
                    >
                      {isAnalyzing ? (
                        <>
                          <span className="spinner"></span>
                          Analyzing...
                        </>
                      ) : (
                        <>🔍 Analyze & Tailor Resume</>
                      )}
                    </button>

                    {jdParsed && (
                      <div className="parsed-preview">
                        <span className="company-tag">
                          {jdParsed.companyName}
                        </span>
                        <span className="role-tag">{jdParsed.roleTitle}</span>
                        <span className="level-tag">
                          {jdParsed.seniorityLevel}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Analysis Progress */}
                {isAnalyzing && (
                  <div className="analysis-progress">
                    <div className="progress-steps">
                      <div
                        className={`step ${jdParsed ? "complete" : "active"}`}
                      >
                        <span className="step-icon">
                          {jdParsed ? "✓" : "⟳"}
                        </span>
                        <span className="step-label">Parsing JD</span>
                      </div>
                      <div className="step-connector"></div>
                      <div
                        className={`step ${
                          analysisResult
                            ? "complete"
                            : jdParsed
                            ? "active"
                            : "pending"
                        }`}
                      >
                        <span className="step-icon">
                          {analysisResult ? "✓" : jdParsed ? "⟳" : "○"}
                        </span>
                        <span className="step-label">Skill Matching</span>
                      </div>
                      <div className="step-connector"></div>
                      <div
                        className={`step ${
                          tailoredLatex
                            ? "complete"
                            : isTailoring
                            ? "active"
                            : "pending"
                        }`}
                      >
                        <span className="step-icon">
                          {tailoredLatex ? "✓" : isTailoring ? "⟳" : "○"}
                        </span>
                        <span className="step-label">Tailoring Resume</span>
                      </div>
                      <div className="step-connector"></div>
                      <div
                        className={`step ${
                          interviewQuestions ? "complete" : "pending"
                        }`}
                      >
                        <span className="step-icon">
                          {interviewQuestions ? "✓" : "○"}
                        </span>
                        <span className="step-label">Interview Prep</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Main Content - Two Panels */}
                {analysisResult && (
                  <div className="intel-main-content">
                    {/* Left Panel - Intelligence Tabs */}
                    <div className="intel-panel">
                      <div className="intel-tabs">
                        {[
                          { id: "match", icon: "🎯", label: "Skill Match" },
                          {
                            id: "interview",
                            icon: "🎤",
                            label: "Interview Prep",
                          },
                          { id: "company", icon: "🏢", label: "Company Intel" },
                          { id: "versions", icon: "📚", label: "Versions" },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            className={`intel-tab ${
                              activeIntelTab === tab.id ? "active" : ""
                            }`}
                            onClick={() => setActiveIntelTab(tab.id)}
                          >
                            <span className="tab-icon">{tab.icon}</span>
                            <span className="tab-label">{tab.label}</span>
                          </button>
                        ))}
                      </div>

                      <div className="intel-tab-content">
                        {/* Skill Match Tab */}
                        {activeIntelTab === "match" && analysisResult && (
                          <div className="match-content">
                            {/* Score Overview */}
                            <div className="score-overview">
                              <div className="main-score">
                                <svg
                                  viewBox="0 0 120 120"
                                  className="score-ring"
                                >
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="10"
                                  />
                                  <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    fill="none"
                                    stroke={
                                      analysisResult.overallMatchScore >= 80
                                        ? "#4CAF50"
                                        : analysisResult.overallMatchScore >= 60
                                        ? "#FF9800"
                                        : "#f44336"
                                    }
                                    strokeWidth="10"
                                    strokeDasharray={`${
                                      analysisResult.overallMatchScore * 3.14
                                    } 314`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 60 60)"
                                  />
                                  <text
                                    x="60"
                                    y="55"
                                    textAnchor="middle"
                                    className="score-text"
                                  >
                                    {analysisResult.overallMatchScore}%
                                  </text>
                                  <text
                                    x="60"
                                    y="75"
                                    textAnchor="middle"
                                    className="score-label"
                                  >
                                    {analysisResult.matchLevel}
                                  </text>
                                </svg>
                              </div>

                              <div className="fit-scores">
                                {Object.entries(
                                  analysisResult.fitScore || {}
                                ).map(([key, value]) => (
                                  <div key={key} className="fit-item">
                                    <span className="fit-label">{key}</span>
                                    <div className="fit-bar">
                                      <div
                                        className="fit-fill"
                                        style={{
                                          width: `${value}%`,
                                          background:
                                            value >= 80
                                              ? "#4CAF50"
                                              : value >= 60
                                              ? "#FF9800"
                                              : "#f44336",
                                        }}
                                      ></div>
                                    </div>
                                    <span className="fit-value">{value}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Skill Matches */}
                            <div className="skills-section">
                              <h4>✅ Matched Skills</h4>
                              <div className="skill-cards">
                                {analysisResult.skillMatches
                                  ?.slice(0, 6)
                                  .map((skill, i) => (
                                    <div
                                      key={i}
                                      className={`skill-card match-${skill.matchStrength}`}
                                    >
                                      <span className="skill-name">
                                        {skill.jdSkill}
                                      </span>
                                      <span className="skill-evidence">
                                        {skill.candidateEvidence}
                                      </span>
                                      <div className="skill-projects">
                                        {skill.relevantProjects?.map((p, j) => (
                                          <span
                                            key={j}
                                            className="project-chip"
                                          >
                                            {p}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            {/* Skill Gaps */}
                            {analysisResult.skillGaps?.length > 0 && (
                              <div className="skills-section gaps">
                                <h4>⚠️ Gaps to Address</h4>
                                <div className="gap-cards">
                                  {analysisResult.skillGaps.map((gap, i) => (
                                    <div
                                      key={i}
                                      className={`gap-card importance-${gap.importance}`}
                                    >
                                      <div className="gap-header">
                                        <span className="gap-skill">
                                          {gap.jdSkill}
                                        </span>
                                        <span
                                          className={`importance-badge ${gap.importance}`}
                                        >
                                          {gap.importance}
                                        </span>
                                      </div>
                                      <p className="gap-recommendation">
                                        {gap.recommendation}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Strong Points */}
                            <div className="strong-points">
                              <h4>💪 Your Unique Advantages</h4>
                              <ul>
                                {analysisResult.uniqueAdvantages?.map(
                                  (adv, i) => (
                                    <li key={i}>{adv}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Interview Prep Tab */}
                        {activeIntelTab === "interview" && interviewQuestions && (
                          <div className="interview-content">
                            {/* Technical Questions */}
                            <div className="question-section">
                              <h4>💻 Technical Questions</h4>
                              {interviewQuestions.technicalQuestions?.map(
                                (q, i) => (
                                  <div key={i} className="question-card">
                                    <div className="question-header">
                                      <span className="q-number">Q{i + 1}</span>
                                      <span
                                        className={`difficulty ${q.difficulty}`}
                                      >
                                        {q.difficulty}
                                      </span>
                                      <span className="category">
                                        {q.category}
                                      </span>
                                    </div>
                                    <p className="question-text">
                                      {q.question}
                                    </p>
                                    <details className="answer-hint">
                                      <summary>💡 Suggested Approach</summary>
                                      <p>{q.suggestedAnswer}</p>
                                      {q.followUp && (
                                        <p className="follow-up">
                                          🔄 Follow-up: {q.followUp}
                                        </p>
                                      )}
                                    </details>
                                  </div>
                                )
                              )}
                            </div>

                            {/* Behavioral Questions */}
                            <div className="question-section">
                              <h4>🗣️ Behavioral Questions</h4>
                              {interviewQuestions.behavioralQuestions?.map(
                                (q, i) => (
                                  <div
                                    key={i}
                                    className="question-card behavioral"
                                  >
                                    <p className="question-text">
                                      {q.question}
                                    </p>
                                    <div className="star-format">
                                      <span className="star-label">
                                        STAR Format:
                                      </span>
                                      <div className="star-items">
                                        <div className="star-item">
                                          <span className="star-key">S</span>
                                          <span>{q.starFormat?.situation}</span>
                                        </div>
                                        <div className="star-item">
                                          <span className="star-key">T</span>
                                          <span>{q.starFormat?.task}</span>
                                        </div>
                                        <div className="star-item">
                                          <span className="star-key">A</span>
                                          <span>{q.starFormat?.action}</span>
                                        </div>
                                        <div className="star-item">
                                          <span className="star-key">R</span>
                                          <span>{q.starFormat?.result}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>

                            {/* Questions to Ask */}
                            <div className="question-section">
                              <h4>❓ Questions to Ask Them</h4>
                              <div className="questions-to-ask">
                                {interviewQuestions.questionsToAsk?.map(
                                  (q, i) => (
                                    <div key={i} className="ask-card">
                                      <p className="question">{q.question}</p>
                                      <span className="why">{q.why}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Versions Tab */}
                        {activeIntelTab === "versions" && (
                          <div className="versions-content">
                            <h4>📚 Resume Versions</h4>
                            {resumeVersions.length === 0 ? (
                              <p className="no-versions">
                                No versions yet. Analyze a JD to create one.
                              </p>
                            ) : (
                              <div className="version-list">
                                {resumeVersions.map((version, i) => (
                                  <div
                                    key={version.id}
                                    className="version-card"
                                    onClick={() =>
                                      setTailoredLatex(version.latex)
                                    }
                                  >
                                    <div className="version-header">
                                      <span className="version-company">
                                        {version.company}
                                      </span>
                                      <span className="version-score">
                                        {version.matchScore}%
                                      </span>
                                    </div>
                                    <span className="version-role">
                                      {version.role}
                                    </span>
                                    <span className="version-date">
                                      {new Date(
                                        version.timestamp
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Company Intel Tab */}
                        {activeIntelTab === "company" && jdParsed && (
                          <div className="company-content">
                            <div className="company-header-card">
                              <h3>{jdParsed.companyName}</h3>
                              <span className="role-title">
                                {jdParsed.roleTitle}
                              </span>
                            </div>

                            <div className="tech-stack-section">
                              <h4>🛠️ Tech Stack</h4>
                              <div className="tech-categories">
                                {Object.entries(jdParsed.techStack || {}).map(
                                  ([category, techs]) => (
                                    <div
                                      key={category}
                                      className="tech-category"
                                    >
                                      <span className="category-name">
                                        {category}
                                      </span>
                                      <div className="tech-chips">
                                        {techs.map((tech, i) => (
                                          <span
                                            key={i}
                                            className={`tech-chip ${
                                              LAXMAN_PROFILE.skills[
                                                category
                                              ]?.some(
                                                (s) =>
                                                  s
                                                    .toLowerCase()
                                                    .includes(
                                                      tech.toLowerCase()
                                                    ) ||
                                                  tech
                                                    .toLowerCase()
                                                    .includes(s.toLowerCase())
                                              )
                                                ? "matched"
                                                : ""
                                            }`}
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            <div className="culture-section">
                              <h4>🎭 Culture Signals</h4>
                              <div className="culture-chips">
                                {jdParsed.cultureSignals?.map((signal, i) => (
                                  <span key={i} className="culture-chip">
                                    {signal}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flags-section">
                              {jdParsed.greenFlags?.length > 0 && (
                                <div className="green-flags">
                                  <h4>🟢 Green Flags</h4>
                                  <ul>
                                    {jdParsed.greenFlags.map((flag, i) => (
                                      <li key={i}>{flag}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {jdParsed.redFlags?.length > 0 && (
                                <div className="red-flags">
                                  <h4>🔴 Red Flags</h4>
                                  <ul>
                                    {jdParsed.redFlags.map((flag, i) => (
                                      <li key={i}>{flag}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* old one above */}

                    {/* ===== RESUME PANEL WITH LIVE PDF PREVIEW ===== */}
                    {/* ===== RESUME PANEL - MINIMAL VERSION ===== */}
                    <div className="resume-panel">
                      {/* Panel Header */}
                      <div className="resume-panel-header">
                        <div className="panel-tabs">
                          <button
                            className={`panel-tab ${!showDiff ? "active" : ""}`}
                            onClick={() => setShowDiff(false)}
                          >
                            <span className="tab-icon">📝</span>
                            <span>Editor</span>
                          </button>
                          <button
                            className={`panel-tab ${showDiff ? "active" : ""}`}
                            onClick={() => setShowDiff(true)}
                          >
                            <span className="tab-icon">🔄</span>
                            <span>Diff</span>
                          </button>
                        </div>

                        <div className="header-actions">
                          <button
                            className="header-action-btn"
                            onClick={copyLatexToClipboard}
                            title="Copy LaTeX Code"
                          >
                            📋 Copy
                          </button>
                          <button
                            className="header-action-btn"
                            onClick={downloadLatex}
                            title="Download .tex file"
                          >
                            ⬇️ Download .tex
                          </button>
                          <button
                            className="header-action-btn primary"
                            onClick={openInOverleaf}
                            title="Compile in Overleaf"
                          >
                            🍃 Overleaf
                          </button>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="editor-container">
                        {!showDiff ? (
                          <div className="latex-editor-wrapper">
                            <div className="editor-header">
                              <div className="file-info">
                                <span className="file-icon">📄</span>
                                <span className="file-name">
                                  resume_
                                  {jdParsed?.companyName?.replace(
                                    /\s+/g,
                                    "_"
                                  ) || "document"}
                                  .tex
                                </span>
                              </div>
                              <div className="editor-controls">
                                <select
                                  value={editorTheme}
                                  onChange={(e) =>
                                    setEditorTheme(e.target.value)
                                  }
                                  className="theme-selector"
                                >
                                  <option value="vs-dark">🌙 Dark</option>
                                  <option value="light">☀️ Light</option>
                                  <option value="monokai">🎨 Monokai</option>
                                </select>
                              </div>
                            </div>

                            <div className="editor-body">
                              <div className="line-numbers">
                                {(tailoredLatex || originalLatex)
                                  .split("\n")
                                  .map((_, i) => (
                                    <span key={i}>{i + 1}</span>
                                  ))}
                              </div>
                              <textarea
                                className={`latex-code-editor ${editorTheme}`}
                                value={tailoredLatex || originalLatex}
                                onChange={(e) =>
                                  setTailoredLatex(e.target.value)
                                }
                                spellCheck={false}
                                wrap="off"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="diff-viewer">
                            <div className="diff-pane original">
                              <div className="diff-pane-header">
                                <span>📄 Original</span>
                                <span className="diff-stats">
                                  {originalLatex.length.toLocaleString()} chars
                                </span>
                              </div>
                              <pre className="diff-content">
                                {originalLatex}
                              </pre>
                            </div>
                            <div className="diff-pane modified">
                              <div className="diff-pane-header">
                                <span>✨ Tailored</span>
                                <span className="diff-stats">
                                  {(
                                    tailoredLatex || ""
                                  ).length.toLocaleString()}{" "}
                                  chars
                                </span>
                              </div>
                              <pre className="diff-content">
                                {tailoredLatex ||
                                  "Run analysis to generate tailored version"}
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Stats Bar */}
                      <div className="panel-stats-bar">
                        <div className="stat-item">
                          <span className="stat-icon">🔑</span>
                          <span className="stat-label">Keywords Matched</span>
                          <span className="stat-value">
                            {jdParsed?.keywords?.filter((k) =>
                              (tailoredLatex || originalLatex)
                                ?.toLowerCase()
                                .includes(k.toLowerCase())
                            ).length || 0}{" "}
                            / {jdParsed?.keywords?.length || 0}
                          </span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">
                            {tailorIntensity === "conservative"
                              ? "🎯"
                              : tailorIntensity === "moderate"
                              ? "⚡"
                              : "🔥"}
                          </span>
                          <span className="stat-label">Intensity</span>
                          <span
                            className={`stat-value intensity-${tailorIntensity}`}
                          >
                            {tailorIntensity.charAt(0).toUpperCase() +
                              tailorIntensity.slice(1)}
                          </span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">📏</span>
                          <span className="stat-label">Size</span>
                          <span className="stat-value">
                            {(
                              (tailoredLatex || originalLatex).length / 1024
                            ).toFixed(1)}{" "}
                            KB
                          </span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">📝</span>
                          <span className="stat-label">Lines</span>
                          <span className="stat-value">
                            {
                              (tailoredLatex || originalLatex).split("\n")
                                .length
                            }
                          </span>
                        </div>
                      </div>

                      {/* Compile Instructions */}
                      <div className="compile-instructions">
                        <div className="instruction-card">
                          <span className="instruction-icon">🍃</span>
                          <div className="instruction-content">
                            <strong>Recommended:</strong> Click "Overleaf" to
                            compile and view your PDF online
                          </div>
                        </div>
                        <div className="instruction-card">
                          <span className="instruction-icon">💻</span>
                          <div className="instruction-content">
                            <strong>Local Compile:</strong> Download .tex file
                            and compile with your LaTeX editor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSpace;
