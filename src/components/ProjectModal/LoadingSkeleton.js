import React from "react";
import "./LoadingSkeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      {/* Header Skeleton */}
      <div className="skeleton-header">
        <div className="skeleton-line title shimmer"></div>
        <div className="skeleton-line subtitle shimmer"></div>
      </div>

      {/* Badges Skeleton */}
      <div className="skeleton-badges">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-badge shimmer"></div>
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="skeleton-content">
        <div className="skeleton-line heading shimmer"></div>
        <div className="skeleton-line text shimmer"></div>
        <div className="skeleton-line text shimmer"></div>
        <div className="skeleton-line text short shimmer"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="skeleton-cards">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-card shimmer"></div>
        ))}
      </div>

      {/* Code Block Skeleton */}
      <div className="skeleton-code">
        <div className="skeleton-code-header shimmer"></div>
        <div className="skeleton-code-body">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="skeleton-line code shimmer"
              style={{ width: `${60 + Math.random() * 30}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
