// src/components/AnalyticsCharts.js
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// --- CUSTOM TOOLTIP COMPONENT (Glass Style) ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(20, 20, 40, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "12px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        <p style={{ color: "#a5b4fc", fontSize: "0.8rem", margin: 0 }}>
          {label}
        </p>
        <p style={{ color: "#fff", fontWeight: "bold", margin: "4px 0 0" }}>
          {payload[0].value} Events
        </p>
      </div>
    );
  }
  return null;
};

// --- CHART 1: TRAFFIC HEARTBEAT ---
export const TrafficChart = ({ data, theme }) => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="rgba(255,255,255,0.05)"
        />
        <XAxis
          dataKey="name"
          stroke="rgba(255,255,255,0.3)"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="visits"
          stroke="#7C3AED"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorVisits)"
          animationDuration={2000}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

// --- CHART 2: INTEREST RADAR (AI vs Web vs Cloud) ---
export const InterestRadar = ({ data }) => (
  <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.1)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "#a5b4fc", fontSize: 11, fontWeight: "bold" }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={false}
          axisLine={false}
        />
        <Radar
          name="Interest"
          dataKey="A"
          stroke="#00ff88"
          strokeWidth={2}
          fill="#00ff88"
          fillOpacity={0.3}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

// --- COMPONENT 3: LIVE TERMINAL LOG ---
export const SystemLog = ({ logs }) => (
  <div className="system-log-container">
    <div className="log-header">
      <span className="blink-dot"></span> SYSTEM_LIVE_FEED :: PORT 8080
    </div>
    <div className="log-content">
      {logs.map((log, index) => (
        <div
          key={index}
          className="log-entry"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="log-time">[{log.time}]</span>
          <span className={`log-type ${log.type}`}>
            {log.type.toUpperCase()}
          </span>
          <span className="log-msg">{log.message}</span>
        </div>
      ))}
    </div>
  </div>
);
