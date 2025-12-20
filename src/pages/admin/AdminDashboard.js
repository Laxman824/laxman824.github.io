import React, { useState, useEffect, useRef, useMemo } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Header from "../../components/header/Header"; // Import Header
import Footer from "../../components/footer/Footer"; // Import Footer
import "./AdminDashboard.css";

// Animated Counter Hook
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };

    countRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(countRef.current);
  }, [end, duration]);

  return count;
};

// Animated Number Component
const AnimatedNumber = ({ value, suffix = "" }) => {
  const animatedValue = useAnimatedCounter(value);
  return (
    <span>
      {animatedValue.toLocaleString()}
      {suffix}
    </span>
  );
};

// Mini Sparkline Chart Component
const SparklineChart = ({ data, color, height = 40 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${points} 100,${height}`;

  return (
    <svg
      viewBox={`0 0 100 ${height}`}
      className="sparkline-chart"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`gradient-${color}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints}
        fill={`url(#gradient-${color})`}
        className="sparkline-area"
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sparkline-line"
      />
      <circle
        cx="100"
        cy={height - ((data[data.length - 1] - min) / range) * height}
        r="3"
        fill={color}
        className="sparkline-dot"
      />
    </svg>
  );
};

// Donut Chart Component
const DonutChart = ({ data, size = 200 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${
      (percentage / 100) * circumference
    } ${circumference}`;

    return {
      ...item,
      percentage,
      startAngle,
      angle,
      strokeDasharray,
      delay: index * 0.1,
    };
  });

  return (
    <div className="donut-chart-container">
      <svg viewBox="0 0 100 100" className="donut-chart">
        {segments.map((segment, index) => {
          const rotation =
            segments.slice(0, index).reduce((sum, s) => sum + s.angle, 0) - 90;
          return (
            <circle
              key={segment.label}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={segment.color}
              strokeWidth="12"
              strokeDasharray={segment.strokeDasharray}
              strokeLinecap="round"
              className="donut-segment"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "50% 50%",
                animationDelay: `${segment.delay}s`,
              }}
            />
          );
        })}
        <text x="50" y="46" textAnchor="middle" className="donut-total">
          {total}
        </text>
        <text x="50" y="58" textAnchor="middle" className="donut-label">
          Total
        </text>
      </svg>
      <div className="donut-legend">
        {segments.map((segment) => (
          <div key={segment.label} className="legend-item">
            <span
              className="legend-color"
              style={{ background: segment.color }}
            ></span>
            <span className="legend-label">{segment.label}</span>
            <span className="legend-value">{segment.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChart = ({ data, height = 200 }) => {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className="bar-chart" style={{ height }}>
      <div className="bar-chart-grid">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="grid-line">
            <span className="grid-label">
              {Math.round((max / 4) * (4 - i))}
            </span>
          </div>
        ))}
      </div>
      <div className="bar-chart-bars">
        {data.map((item, index) => (
          <div key={item.label} className="bar-wrapper">
            <div
              className="bar"
              style={{
                "--bar-height": `${(item.value / max) * 100}%`,
                "--bar-color": item.color,
                "--bar-delay": `${index * 0.1}s`,
              }}
            >
              <span className="bar-value">{item.value}</span>
            </div>
            <span className="bar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Activity Heatmap Component
const ActivityHeatmap = ({ data }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const getIntensity = (day, hour) => {
    const value = data?.[day]?.[hour] || Math.random() * 100;
    return Math.min(value / 100, 1);
  };

  return (
    <div className="heatmap-container">
      <div className="heatmap-hours">
        {hours
          .filter((_, i) => i % 4 === 0)
          .map((hour) => (
            <span key={hour}>{hour}h</span>
          ))}
      </div>
      <div className="heatmap-grid">
        {days.map((day, dayIndex) => (
          <div key={day} className="heatmap-row">
            <span className="heatmap-day">{day}</span>
            <div className="heatmap-cells">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="heatmap-cell"
                  style={{
                    "--intensity": getIntensity(dayIndex, hour),
                    "--delay": `${(dayIndex * 24 + hour) * 0.01}s`,
                  }}
                  title={`${day} ${hour}:00 - ${Math.round(
                    getIntensity(dayIndex, hour) * 100
                  )} visits`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="heatmap-legend">
        <span>Less</span>
        <div className="legend-gradient"></div>
        <span>More</span>
      </div>
    </div>
  );
};

// Live Activity Feed Component
const LiveActivityFeed = ({ visitors }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const generateActivity = () => {
      const types = [
        { type: "visit", icon: "👁️", color: "#4dabf7" },
        { type: "click", icon: "🖱️", color: "#00ff88" },
        { type: "scroll", icon: "📜", color: "#ffd43b" },
        { type: "leave", icon: "👋", color: "#ff6b6b" },
      ];

      const pages = ["Home", "Projects", "About", "Skills", "Contact"];

      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomPage = pages[Math.floor(Math.random() * pages.length)];

      return {
        id: Date.now(),
        ...randomType,
        page: randomPage,
        time: new Date().toLocaleTimeString(),
      };
    };

    // Initial activities
    setActivities(
      Array.from({ length: 5 }, () => ({
        ...generateActivity(),
        id: Math.random(),
      }))
    );

    // Add new activity every few seconds
    const interval = setInterval(() => {
      setActivities((prev) => [generateActivity(), ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-feed">
      <div className="feed-header">
        <div className="live-indicator">
          <span className="pulse-dot"></span>
          LIVE
        </div>
        <span className="feed-title">Activity Feed</span>
      </div>
      <div className="feed-content">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="feed-item"
            style={{ "--delay": `${index * 0.05}s` }}
          >
            <span className="feed-icon" style={{ color: activity.color }}>
              {activity.icon}
            </span>
            <div className="feed-details">
              <span className="feed-action">{activity.type}</span>
              <span className="feed-page">{activity.page}</span>
            </div>
            <span className="feed-time">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// System Log Component
const SystemLog = ({ visitors }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const logTypes = ["INFO", "SUCCESS", "WARNING", "DEBUG"];
    const messages = [
      "New visitor connected from United States",
      "Session started - tracking enabled",
      "Recruiter pattern detected",
      "Page view recorded: /projects",
      "Lead score updated: +15 points",
      "Engagement threshold reached",
      "Scroll depth: 80% on /about",
      'Click event: "View Resume" button',
      "Time on page exceeded 2 minutes",
      "Return visitor identified",
    ];

    const generateLog = () => ({
      id: Date.now(),
      time: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      type: logTypes[Math.floor(Math.random() * logTypes.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
    });

    setLogs(
      Array.from({ length: 8 }, () => ({
        ...generateLog(),
        id: Math.random(),
      }))
    );

    const interval = setInterval(() => {
      setLogs((prev) => [generateLog(), ...prev.slice(0, 14)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-log">
      <div className="log-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-title">system_monitor.sh</span>
      </div>
      <div className="log-content">
        {logs.map((log, index) => (
          <div
            key={log.id}
            className="log-entry"
            style={{ "--delay": `${index * 0.03}s` }}
          >
            <span className="log-time">[{log.time}]</span>
            <span className={`log-type ${log.type.toLowerCase()}`}>
              {log.type}
            </span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
        <div className="log-cursor">
          <span className="cursor-prompt">$</span>
          <span className="cursor-blink">▊</span>
        </div>
      </div>
    </div>
  );
};

// World Map Component (Simplified SVG)
const WorldMapVisualization = ({ visitors }) => {
  const locations = [
    { x: 20, y: 35, count: 45, country: "USA" },
    { x: 48, y: 30, count: 28, country: "UK" },
    { x: 52, y: 32, count: 22, country: "Germany" },
    { x: 75, y: 40, count: 35, country: "India" },
    { x: 85, y: 45, count: 18, country: "Japan" },
    { x: 88, y: 65, count: 12, country: "Australia" },
    { x: 55, y: 28, count: 15, country: "France" },
    { x: 35, y: 55, count: 8, country: "Brazil" },
  ];

  return (
    <div className="world-map">
      <svg viewBox="0 0 100 60" className="map-svg">
        {/* Simplified world outline */}
        <path
          className="map-outline"
          d="M10,20 Q20,15 30,20 L40,18 Q50,15 60,20 L70,22 Q80,18 90,25 
             L92,35 Q88,45 85,50 L75,55 Q60,58 50,55 L35,58 Q20,55 15,48 
             L10,35 Q8,28 10,20 Z"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />

        {/* Location dots with ripple effect */}
        {locations.map((loc, index) => (
          <g key={loc.country} className="map-point">
            <circle
              cx={loc.x}
              cy={loc.y}
              r="3"
              className="point-ripple"
              style={{ "--delay": `${index * 0.2}s` }}
            />
            <circle
              cx={loc.x}
              cy={loc.y}
              r="1.5"
              className="point-dot"
              style={{ "--delay": `${index * 0.1}s` }}
            />
            <text
              x={loc.x}
              y={loc.y - 5}
              className="point-label"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              {loc.count}
            </text>
          </g>
        ))}

        {/* Connection lines */}
        <g className="connection-lines">
          {locations.slice(0, -1).map((loc, i) => {
            const next = locations[i + 1];
            return (
              <line
                key={i}
                x1={loc.x}
                y1={loc.y}
                x2={next.x}
                y2={next.y}
                className="connection-line"
                style={{ "--delay": `${i * 0.1}s` }}
              />
            );
          })}
        </g>
      </svg>

      <div className="map-legend">
        {locations.slice(0, 4).map((loc) => (
          <div key={loc.country} className="map-legend-item">
            <span className="country-flag">🌍</span>
            <span className="country-name">{loc.country}</span>
            <span className="country-count">{loc.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({
  icon,
  value,
  label,
  trend,
  trendValue,
  color,
  sparkData,
  delay,
}) => {
  return (
    <div
      className="stat-card-premium"
      style={{ "--accent-color": color, "--delay": `${delay}s` }}
    >
      <div className="stat-card-bg"></div>
      <div className="stat-card-glow"></div>

      <div className="stat-header">
        <div className="stat-icon-wrapper" style={{ background: `${color}20` }}>
          {icon}
        </div>
        {trend && (
          <div className={`stat-trend ${trend}`}>
            <span className="trend-icon">{trend === "up" ? "↗" : "↘"}</span>
            <span className="trend-value">{trendValue}%</span>
          </div>
        )}
      </div>

      <div className="stat-body">
        <div className="stat-value">
          <AnimatedNumber value={value} />
        </div>
        <div className="stat-label">{label}</div>
      </div>

      {sparkData && (
        <div className="stat-sparkline">
          <SparklineChart data={sparkData} color={color} />
        </div>
      )}
    </div>
  );
};

// Main Dashboard Component
// Updated to accept theme and setTheme, matching Education.js structure
const AdminDashboard = ({ theme, setTheme }) => {
  const { user, isAdmin } = useAuth();
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedView, setSelectedView] = useState("table");
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    returning: 0,
    recruiters: 0,
    developers: 0,
  });

  // Generate mock sparkline data
  const generateSparkData = () =>
    Array.from({ length: 12 }, () => Math.random() * 100);

  const sparklineData = useMemo(
    () => ({
      total: generateSparkData(),
      new: generateSparkData(),
      returning: generateSparkData(),
      recruiters: generateSparkData(),
      developers: generateSparkData(),
    }),
    []
  );

  // Fetch visitors
  useEffect(() => {
    if (!isAdmin) return;

    const fetchVisitors = async () => {
      try {
        const visitorsRef = collection(db, "visitors");
        const q = query(visitorsRef, orderBy("lastSeen", "desc"));
        const querySnapshot = await getDocs(q);

        const visitorsData = [];
        querySnapshot.forEach((doc) => {
          visitorsData.push({ id: doc.id, ...doc.data() });
        });

        setVisitors(visitorsData);
        calculateStats(visitorsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visitors:", error);
        setLoading(false);
      }
    };

    fetchVisitors();
  }, [isAdmin]);

  const calculateStats = (data) => {
    setStats({
      total: data.length,
      new: data.filter((v) => v.totalVisits === 1).length,
      returning: data.filter((v) => v.totalVisits > 1).length,
      recruiters: data.filter((v) => v.detectedType === "recruiter").length,
      developers: data.filter((v) => v.detectedType === "developer").length,
    });
  };

  const filteredVisitors = visitors.filter((visitor) => {
    if (filter !== "all") {
      if (filter === "new" && visitor.totalVisits !== 1) return false;
      if (filter === "returning" && visitor.totalVisits <= 1) return false;
      if (filter === "recruiter" && visitor.detectedType !== "recruiter")
        return false;
      if (filter === "developer" && visitor.detectedType !== "developer")
        return false;
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        visitor.visitorId?.toLowerCase().includes(searchLower) ||
        visitor.detectedType?.toLowerCase().includes(searchLower) ||
        visitor.referralSource?.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });

  const exportToCSV = () => {
    const headers = [
      "Visitor ID",
      "Type",
      "Total Visits",
      "Time Spent",
      "First Seen",
      "Last Seen",
      "Source",
      "Lead Score",
    ];
    const rows = filteredVisitors.map((v) => [
      v.visitorId,
      v.detectedType || "unknown",
      v.totalVisits,
      v.totalTimeSpent || 0,
      v.firstSeen?.toDate?.()?.toLocaleDateString() || "N/A",
      v.lastSeen?.toDate?.()?.toLocaleDateString() || "N/A",
      v.referralSource || "direct",
      v.leadScore || 0,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `visitors_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString();
  };

  const timeAgo = (timestamp) => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  // Chart data for donut
  const donutData = [
    { label: "Recruiters", value: stats.recruiters, color: "#4dabf7" },
    { label: "Developers", value: stats.developers, color: "#ffd43b" },
    {
      label: "Others",
      value: stats.total - stats.recruiters - stats.developers,
      color: "#9ca3af",
    },
  ];

  // Bar chart data
  const barChartData = [
    {
      label: "Mon",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#4F46E5",
    },
    {
      label: "Tue",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#7C3AED",
    },
    {
      label: "Wed",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#EC4899",
    },
    {
      label: "Thu",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#4dabf7",
    },
    {
      label: "Fri",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#00ff88",
    },
    {
      label: "Sat",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#ffd43b",
    },
    {
      label: "Sun",
      value: Math.floor(Math.random() * 50) + 20,
      color: "#ff6b6b",
    },
  ];

  if (!isAdmin) {
    return (
      <div className="admin-main">
        <Header theme={theme} setTheme={setTheme} />
        <div className="admin-unauthorized">
          <div className="unauthorized-content">
            <div className="lock-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1>Access Denied</h1>
            <p>You don't have permission to view this page.</p>
            <a href="#/" className="back-btn">
              ← Back to Home
            </a>
          </div>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-main">
        <Header theme={theme} setTheme={setTheme} />
        <div className="admin-loading">
          <div className="loader-container">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-core"></div>
          </div>
          <p className="loading-text">Initializing Dashboard...</p>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  return (
    <div className="admin-dashboard-wrapper">
      <Header theme={theme} setTheme={setTheme} />

      <div
        className="admin-dashboard-premium"
        style={{ background: theme.body }}
      >
        {/* Animated Background */}
        <div className="dashboard-bg">
          <div className="bg-gradient"></div>
          <div className="bg-grid"></div>
          <div className="bg-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  "--x": `${Math.random() * 100}%`,
                  "--y": `${Math.random() * 100}%`,
                  "--duration": `${Math.random() * 20 + 10}s`,
                  "--delay": `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Dashboard Internal Header (Toolbar) */}
        <header className="dashboard-header">
          <div className="header-content">
            <div className="header-left">
              <div className="header-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <div className="header-text">
                <h1>Analytics Dashboard</h1>
                <p>Real-time visitor insights and metrics</p>
              </div>
            </div>
            <div className="header-right">
              <div className="header-stats">
                <div className="header-stat">
                  <span className="online-dot"></span>
                  <span>3 Active Now</span>
                </div>
                <div className="header-stat">
                  <span className="update-icon">↻</span>
                  <span>Updated just now</span>
                </div>
              </div>
              <button className="export-btn-premium" onClick={exportToCSV}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-section">
          <StatCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            value={stats.total}
            label="Total Visitors"
            trend="up"
            trendValue={12}
            color="#4F46E5"
            sparkData={sparklineData.total}
            delay={0}
          />
          <StatCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            }
            value={stats.new}
            label="New Visitors"
            trend="up"
            trendValue={8}
            color="#00ff88"
            sparkData={sparklineData.new}
            delay={0.1}
          />
          <StatCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23,4 23,10 17,10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            }
            value={stats.returning}
            label="Returning"
            trend="down"
            trendValue={3}
            color="#ff6b6b"
            sparkData={sparklineData.returning}
            delay={0.2}
          />
          <StatCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
            value={stats.recruiters}
            label="Recruiters"
            trend="up"
            trendValue={25}
            color="#4dabf7"
            sparkData={sparklineData.recruiters}
            delay={0.3}
          />
          <StatCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
              </svg>
            }
            value={stats.developers}
            label="Developers"
            trend="up"
            trendValue={15}
            color="#ffd43b"
            sparkData={sparklineData.developers}
            delay={0.4}
          />
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          {/* Main Chart - Traffic Overview */}
          <div className="chart-card main-chart">
            <div className="chart-header">
              <h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                Weekly Traffic
              </h3>
              <div className="chart-tabs">
                <button className="chart-tab active">Week</button>
                <button className="chart-tab">Month</button>
                <button className="chart-tab">Year</button>
              </div>
            </div>
            <div className="chart-body">
              <BarChart data={barChartData} height={200} />
            </div>
          </div>

          {/* Donut Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                Visitor Types
              </h3>
            </div>
            <div className="chart-body donut-body">
              <DonutChart data={donutData} />
            </div>
          </div>

          {/* System Log */}
          <div className="chart-card terminal-card">
            <SystemLog visitors={visitors} />
          </div>
        </section>

        {/* Secondary Charts Row */}
        <section className="charts-section secondary">
          {/* World Map */}
          <div className="chart-card map-card">
            <div className="chart-header">
              <h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Visitor Geography
              </h3>
            </div>
            <div className="chart-body">
              <WorldMapVisualization visitors={visitors} />
            </div>
          </div>

          {/* Activity Heatmap */}
          <div className="chart-card heatmap-card">
            <div className="chart-header">
              <h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Activity Heatmap
              </h3>
            </div>
            <div className="chart-body">
              <ActivityHeatmap />
            </div>
          </div>

          {/* Live Feed */}
          <div className="chart-card feed-card">
            <LiveActivityFeed visitors={visitors} />
          </div>
        </section>

        {/* Filters */}
        <section className="filters-section">
          <div className="filters-left">
            <div className="filter-buttons">
              {["all", "new", "returning", "recruiter", "developer"].map(
                (f) => (
                  <button
                    key={f}
                    className={`filter-btn-premium ${
                      filter === f ? "active" : ""
                    }`}
                    onClick={() => setFilter(f)}
                  >
                    <span className="filter-icon">
                      {f === "all" && "👥"}
                      {f === "new" && "✨"}
                      {f === "returning" && "🔄"}
                      {f === "recruiter" && "💼"}
                      {f === "developer" && "💻"}
                    </span>
                    <span>{f.charAt(0).toUpperCase() + f.slice(1)}</span>
                  </button>
                )
              )}
            </div>
          </div>

          <div className="filters-right">
            <div className="search-container">
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="search-input-premium"
                placeholder="Search visitors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="view-toggle">
              <button
                className={`view-btn ${
                  selectedView === "table" ? "active" : ""
                }`}
                onClick={() => setSelectedView("table")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              <button
                className={`view-btn ${
                  selectedView === "grid" ? "active" : ""
                }`}
                onClick={() => setSelectedView("grid")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="table-section">
          <div className="table-container">
            <table className="visitors-table-premium">
              <thead>
                <tr>
                  <th>
                    <span className="th-content">Status</span>
                  </th>
                  <th>
                    <span className="th-content">Visitor ID</span>
                  </th>
                  <th>
                    <span className="th-content">Type</span>
                  </th>
                  <th>
                    <span className="th-content">Visits</span>
                  </th>
                  <th>
                    <span className="th-content">Time Spent</span>
                  </th>
                  <th>
                    <span className="th-content">Source</span>
                  </th>
                  <th>
                    <span className="th-content">Last Seen</span>
                  </th>
                  <th>
                    <span className="th-content">Lead Score</span>
                  </th>
                  <th>
                    <span className="th-content">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredVisitors.length === 0 ? (
                  <tr className="no-data-row">
                    <td colSpan="9">
                      <div className="no-data">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p>No visitors found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredVisitors.map((visitor, index) => (
                    <tr
                      key={visitor.id}
                      className="table-row"
                      style={{ "--row-delay": `${index * 0.03}s` }}
                    >
                      <td>
                        <div
                          className={`status-indicator ${
                            visitor.totalVisits === 1 ? "new" : "returning"
                          }`}
                        >
                          <span className="status-dot"></span>
                          <span className="status-text">
                            {visitor.totalVisits === 1 ? "New" : "Return"}
                          </span>
                        </div>
                      </td>
                      <td>
                        <code className="visitor-id">
                          {visitor.visitorId?.substring(0, 12)}...
                        </code>
                      </td>
                      <td>
                        <div
                          className={`type-badge-premium ${visitor.detectedType}`}
                        >
                          <span className="type-icon">
                            {visitor.detectedType === "recruiter" && "💼"}
                            {visitor.detectedType === "developer" && "💻"}
                            {visitor.detectedType === "searcher" && "🔍"}
                            {!visitor.detectedType && "🌐"}
                          </span>
                          <span>{visitor.detectedType || "unknown"}</span>
                        </div>
                      </td>
                      <td>
                        <div className="visits-count">
                          <strong>{visitor.totalVisits || 0}</strong>
                          <div className="visits-bar">
                            <div
                              className="visits-fill"
                              style={{
                                width: `${Math.min(
                                  (visitor.totalVisits || 0) * 10,
                                  100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="time-spent">
                          {visitor.totalTimeSpent || 0}s
                        </span>
                      </td>
                      <td>
                        <span
                          className="source-badge"
                          title={visitor.referralSource}
                        >
                          {visitor.referralSource?.substring(0, 15) || "direct"}
                        </span>
                      </td>
                      <td>
                        <div className="last-seen">
                          <span className="time-ago">
                            {timeAgo(visitor.lastSeen)}
                          </span>
                          <span className="full-date">
                            {formatDate(visitor.lastSeen)}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="lead-score-premium">
                          <div className="score-ring">
                            <svg viewBox="0 0 36 36">
                              <path
                                className="score-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="score-fill"
                                strokeDasharray={`${
                                  visitor.leadScore || 0
                                }, 100`}
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <span className="score-value">
                              {visitor.leadScore || 0}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          className="action-btn"
                          onClick={() =>
                            alert(`View details for ${visitor.visitorId}`)
                          }
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dashboard Internal Footer */}
        <footer className="dashboard-footer">
          <div className="footer-left">
            <span className="footer-count">
              Showing <strong>{filteredVisitors.length}</strong> of{" "}
              <strong>{visitors.length}</strong> visitors
            </span>
          </div>
          <div className="footer-right">
            <span className="footer-update">
              Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
        </footer>
      </div>

      <Footer theme={theme} />
    </div>
  );
};

export default AdminDashboard;
