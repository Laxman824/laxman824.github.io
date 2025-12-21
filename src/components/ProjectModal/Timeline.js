// import React, { useState } from "react";
// import "./Timeline.css";

// const Timeline = ({ milestones }) => {
//   const [activeMilestone, setActiveMilestone] = useState(null);

//   const defaultMilestones = [
//     {
//       id: 1,
//       date: "Week 1-2",
//       title: "Research & Planning",
//       description: "Analyzed requirements, studied existing solutions, and designed system architecture.",
//       icon: "🔍",
//       status: "completed",
//     },
//     {
//       id: 2,
//       date: "Week 3-4",
//       title: "Core Development",
//       description: "Built the foundation - API endpoints, database schema, and basic UI components.",
//       icon: "⚙️",
//       status: "completed",
//     },
//     {
//       id: 3,
//       date: "Week 5-6",
//       title: "AI Integration",
//       description: "Integrated LLM APIs, implemented RAG pipeline, and optimized vector search.",
//       icon: "🧠",
//       status: "completed",
//     },
//     {
//       id: 4,
//       date: "Week 7-8",
//       title: "Testing & Optimization",
//       description: "Performance tuning, bug fixes, and comprehensive testing across edge cases.",
//       icon: "🧪",
//       status: "completed",
//     },
//     {
//       id: 5,
//       date: "Week 9+",
//       title: "Deployment & Monitoring",
//       description: "Deployed to production, set up monitoring dashboards, and gathered user feedback.",
//       icon: "🚀",
//       status: "current",
//     },
//   ];

//   const data = milestones || defaultMilestones;

//   return (
//     <div className="timeline-container">
//       <h3 className="timeline-title">
//         <span className="title-icon">📅</span>
//         Project Timeline
//       </h3>

//       <div className="timeline">
//         {/* Progress Line */}
//         <div className="timeline-progress-bg"></div>
//         <div
//           className="timeline-progress-fill"
//           style={{
//             width: `${(data.filter(m => m.status === 'completed').length / data.length) * 100}%`
//           }}
//         ></div>

//         {/* Milestones */}
//         {data.map((milestone, index) => (
//           <div
//             key={milestone.id}
//             className={`timeline-milestone ${milestone.status} ${activeMilestone === milestone.id ? 'active' : ''}`}
//             style={{ left: `${(index / (data.length - 1)) * 100}%` }}
//             onMouseEnter={() => setActiveMilestone(milestone.id)}
//             onMouseLeave={() => setActiveMilestone(null)}
//             onClick={() => setActiveMilestone(activeMilestone === milestone.id ? null : milestone.id)}
//           >
//             {/* Node */}
//             <div className="milestone-node">
//               <span className="milestone-icon">{milestone.icon}</span>
//               {milestone.status === 'current' && (
//                 <span className="pulse-ring"></span>
//               )}
//             </div>

//             {/* Date */}
//             <div className="milestone-date">{milestone.date}</div>

//             {/* Tooltip Card */}
//             <div className={`milestone-card glassmorphism ${index > data.length / 2 ? 'left' : 'right'}`}>
//               <div className="card-header">
//                 <span className="card-icon">{milestone.icon}</span>
//                 <h4>{milestone.title}</h4>
//               </div>
//               <p>{milestone.description}</p>
//               <div className={`card-status ${milestone.status}`}>
//                 {milestone.status === 'completed' ? '✓ Completed' : '◉ In Progress'}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="timeline-legend">
//         <div className="legend-item">
//           <span className="legend-dot completed"></span>
//           <span>Completed</span>
//         </div>
//         <div className="legend-item">
//           <span className="legend-dot current"></span>
//           <span>In Progress</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
import React, { useState, memo } from "react";
import "./Timeline.css";

const Timeline = ({ milestones }) => {
  const [activeMilestone, setActiveMilestone] = useState(null);

  const defaultMilestones = [
    {
      id: 1,
      date: "Week 1-2",
      title: "Research & Planning",
      description:
        "Analyzed requirements, studied existing solutions, and designed system architecture.",
      icon: "🔍",
      status: "completed",
    },
    {
      id: 2,
      date: "Week 3-4",
      title: "Core Development",
      description:
        "Built the foundation - API endpoints, database schema, and basic UI components.",
      icon: "⚙️",
      status: "completed",
    },
    {
      id: 3,
      date: "Week 5-6",
      title: "AI Integration",
      description:
        "Integrated LLM APIs, implemented RAG pipeline, and optimized vector search.",
      icon: "🧠",
      status: "completed",
    },
    {
      id: 4,
      date: "Week 7-8",
      title: "Testing & Optimization",
      description:
        "Performance tuning, bug fixes, and comprehensive testing across edge cases.",
      icon: "🧪",
      status: "completed",
    },
    {
      id: 5,
      date: "Week 9+",
      title: "Deployment & Monitoring",
      description:
        "Deployed to production, set up monitoring dashboards, and gathered user feedback.",
      icon: "🚀",
      status: "current",
    },
  ];

  // ✅ SAFETY CHECK: Ensure data is an array.
  // If milestones is null/undefined or not an array, fall back to defaultMilestones.
  const data =
    Array.isArray(milestones) && milestones.length > 0
      ? milestones
      : defaultMilestones;

  // ✅ CALCULATION SAFETY: Prevent division by zero
  const totalItems = data.length;
  const completedItems = data.filter((m) => m.status === "completed").length;
  const progressPercentage =
    totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <div className="timeline-container">
      <h3 className="timeline-title">
        <span className="title-icon">📅</span>
        Project Timeline
      </h3>

      <div className="timeline">
        {/* Progress Line */}
        <div className="timeline-progress-bg"></div>
        <div
          className="timeline-progress-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>

        {/* Milestones */}
        {data.map((milestone, index) => {
          // Calculate position carefully to avoid dividing by zero if only 1 item exists
          const leftPosition =
            totalItems > 1 ? (index / (totalItems - 1)) * 100 : 50; // Center if only 1 item

          return (
            <div
              key={milestone.id || index}
              className={`timeline-milestone ${milestone.status} ${
                activeMilestone === milestone.id ? "active" : ""
              }`}
              style={{ left: `${leftPosition}%` }}
              onMouseEnter={() => setActiveMilestone(milestone.id)}
              onMouseLeave={() => setActiveMilestone(null)}
              onClick={() =>
                setActiveMilestone(
                  activeMilestone === milestone.id ? null : milestone.id
                )
              }
            >
              {/* Node */}
              <div className="milestone-node">
                <span className="milestone-icon">{milestone.icon}</span>
                {milestone.status === "current" && (
                  <span className="pulse-ring"></span>
                )}
              </div>

              {/* Date */}
              <div className="milestone-date">{milestone.date}</div>

              {/* Tooltip Card */}
              <div
                className={`milestone-card glassmorphism ${
                  index > totalItems / 2 ? "left" : "right"
                }`}
              >
                <div className="card-header">
                  <span className="card-icon">{milestone.icon}</span>
                  <h4>{milestone.title}</h4>
                </div>
                <p>{milestone.description}</p>
                <div className={`card-status ${milestone.status}`}>
                  {milestone.status === "completed"
                    ? "✓ Completed"
                    : "◉ In Progress"}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="timeline-legend">
        <div className="legend-item">
          <span className="legend-dot completed"></span>
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot current"></span>
          <span>In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Timeline);
