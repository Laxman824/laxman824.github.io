import React, { useRef, useEffect } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ imagePath, theme }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      content.style.transform = `translateZ(50px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      content.style.transform = "translateZ(0)";
    };

    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const scrollPercent =
        (rect.top + rect.height) / (window.innerHeight + rect.height);
      const rotate = scrollPercent * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotate}deg)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="profile-card-container" ref={cardRef}>
      <div className="profile-card-content" ref={contentRef}>
        <div className="profile-card-image">
          <img
            src={require(`../../assests/images/${imagePath}`)}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="profile-card-glow"></div>
      </div>
    </div>
  );
};

export default ProfileCard;
