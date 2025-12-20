import React from "react";
import { useVisitor } from "../context/VisitorContext";
import { useAuth } from "../context/AuthContext";

const VisitorDebug = () => {
  const { visitorId, visitorProfile, loading } = useVisitor();
  const { user, isAdmin } = useAuth();

  // Only show to admin
  if (!isAdmin) return null;

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>🔄 Loading...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>👁️ VISITOR DEBUG</div>

      <div style={styles.section}>
        <strong>Visitor ID:</strong>
        <div style={styles.mono}>{visitorId?.substring(0, 25)}...</div>
      </div>

      <div style={styles.section}>
        <strong>Status:</strong>
        <span style={styles.badge}>
          {visitorProfile?.totalVisits > 1 ? "🔄 Returning" : "🆕 New"}
        </span>
      </div>

      <div style={styles.section}>
        <strong>Total Visits:</strong> {visitorProfile?.totalVisits || 0}
      </div>

      <div style={styles.section}>
        <strong>Time Spent:</strong> {visitorProfile?.totalTimeSpent || 0}s
      </div>

      <div style={styles.section}>
        <strong>Type:</strong>
        <span style={styles.badge}>
          {visitorProfile?.detectedType || "unknown"}
        </span>
      </div>

      <div style={styles.section}>
        <strong>Source:</strong>
        <div style={styles.small}>
          {visitorProfile?.referralSource || "direct"}
        </div>
      </div>

      {visitorProfile?.interests?.sectionsViewed?.length > 0 && (
        <div style={styles.section}>
          <strong>Sections Viewed:</strong>
          <div style={styles.list}>
            {visitorProfile.interests.sectionsViewed.map((section, i) => (
              <div key={i} style={styles.listItem}>
                • {section}
              </div>
            ))}
          </div>
        </div>
      )}

      {visitorProfile?.interests?.projectsViewed?.length > 0 && (
        <div style={styles.section}>
          <strong>Projects Viewed:</strong>
          <div style={styles.list}>
            {visitorProfile.interests.projectsViewed.map((project, i) => (
              <div key={i} style={styles.listItem}>
                🎯 {project}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={styles.section}>
        <strong>Lead Score:</strong> {visitorProfile?.leadScore || 0}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    color: "#00ff88",
    padding: "15px",
    borderRadius: "12px",
    fontFamily: "'Courier New', monospace",
    fontSize: "11px",
    maxWidth: "320px",
    maxHeight: "80vh",
    overflow: "auto",
    zIndex: 9999,
    boxShadow: "0 8px 32px rgba(0, 255, 136, 0.2)",
    border: "1px solid rgba(0, 255, 136, 0.3)",
  },
  header: {
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "12px",
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(0, 255, 136, 0.3)",
    textAlign: "center",
  },
  section: {
    marginBottom: "10px",
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(0, 255, 136, 0.1)",
  },
  mono: {
    fontFamily: "monospace",
    fontSize: "9px",
    color: "#888",
    marginTop: "4px",
    wordBreak: "break-all",
  },
  badge: {
    display: "inline-block",
    background: "rgba(0, 255, 136, 0.2)",
    padding: "2px 8px",
    borderRadius: "4px",
    marginLeft: "8px",
    fontSize: "10px",
  },
  small: {
    fontSize: "9px",
    color: "#888",
    marginTop: "4px",
    wordBreak: "break-word",
  },
  list: {
    marginTop: "6px",
  },
  listItem: {
    fontSize: "10px",
    color: "#aaa",
    marginBottom: "3px",
  },
};

export default VisitorDebug;
