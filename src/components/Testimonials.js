import React from "react";
import { Container } from "react-bootstrap";
import vector from "../assets/Vector.svg";
// For files with spaces in names, use require
const playIcon = require("../assets/play_arrow_black_24dp 1.png").default || require("../assets/play_arrow_black_24dp 1.png");
const micIcon = require("../assets/mic_black_24dp 1.png").default || require("../assets/mic_black_24dp 1.png");
const profileImage = require("../assets/Ellipse 12.png").default || require("../assets/Ellipse 12.png");

const Testimonials = () => {
  return (
    <>
    <Container fluid className="testimonials-section" style={{ padding: "clamp(24px,4vw,80px)", background: "#fff" }}>
      <div
        style={{
          background: "#F7F5F9",
          borderRadius: "12px",
          padding: "clamp(16px,4vw,48px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          maxWidth: "clamp(320px, 90vw, 1200px)",
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center mb-4" style={{ gap: "16px" }}>
          <img 
            src={vector} 
            alt="Quote" 
            style={{ 
              width: "40px", 
              height: "40px",
              filter: "brightness(0) saturate(100%) invert(35%) sepia(93%) saturate(1352%) hue-rotate(249deg) brightness(95%) contrast(85%)"
            }} 
          />
          <h2 
            style={{ 
              fontSize: "28px", 
              fontWeight: "700", 
              color: "#6A389F",
              margin: 0
            }}
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonial Content */}
        <p
          style={{
            fontSize: "clamp(12px,2.8vw,16px)",
            lineHeight: "1.8",
            color: "#4A4A4A",
            marginBottom: "32px"
          }}
        >
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>

        {/* Bottom Section - Audio Player and User Profile */}
        <div className="d-flex align-items-center justify-content-between flex-md-nowrap" style={{ gap: "clamp(12px, 2.5vw, 32px)", flexWrap: "wrap" }}>
          {/* Mobile stacked profile above audio */}
          <div className="d-flex d-md-none align-items-center mb-3" style={{ gap: "10px", width: "100%" }}>
            <img 
              src={profileImage} 
              alt="Shubha Nagarajan" 
              style={{ width: "clamp(36px, 7vw, 48px)", height: "clamp(36px, 7vw, 48px)", borderRadius: "50%", objectFit: "cover" }}
            />
            <div className="d-flex flex-column" style={{ minWidth: 0 }}>
              <span style={{ fontSize: "clamp(12px, 2.8vw, 16px)", color: "#6A389F", fontWeight: 600, lineHeight: 1.2 }}>
                Shubha Nagarajan
              </span>
              <span style={{ fontSize: "clamp(10px, 2.4vw, 13px)", color: "#5C6F9F", lineHeight: 1.2 }}>
                Classical Dancer
              </span>
            </div>
          </div>
          {/* Audio Player */}
          <div
            style={{
              background: "#D8C9E8",
              borderRadius: "12px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flex: "1 1 100%",
              minWidth: "clamp(220px, 100%, 600px)"
            }}
          >
            {/* Play Button */}
            <button
              style={{
                width: "clamp(24px, 5vw, 48px)",
                height: "clamp(24px, 5vw, 48px)",
                borderRadius: "50%",
                background: "#fff",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                padding: 0
              }}
            >
              <img 
                src={playIcon} 
                alt="Play" 
                style={{ 
                  width: "clamp(10px, 2vw, 18px)", 
                  height: "clamp(10px, 2vw, 18px)",
                  filter: "brightness(0) saturate(100%) invert(35%) sepia(93%) saturate(1352%) hue-rotate(249deg) brightness(95%) contrast(85%)"
                }} 
              />
            </button>

            {/* Progress Bar */}
            <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "2px",
                  background: "#fff",
                  borderRadius: "2px",
                  position: "relative",
                  width: "100%"
                }}
              >
                {/* Thumb/Handle */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                  width: "clamp(6px, 1.2vw, 12px)",
                  height: "clamp(6px, 1.2vw, 12px)",
                    borderRadius: "50%",
                    background: "#6A389F",
                    cursor: "pointer"
                  }}
                />
              </div>
            </div>

            {/* Time Display */}
              <span
              style={{
                fontSize: "clamp(9px, 1.4vw, 14px)",
                color: "#8064A2",
                fontWeight: 500,
                flexShrink: 0
              }}
            >
              0:00
            </span>

            {/* Profile Picture - right, with white ring and mic overlay */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: "clamp(34px, 6vw, 64px)",
                  height: "clamp(34px, 6vw, 64px)",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 0 4px #fff",
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Shubha Nagarajan" 
                  style={{ 
                    width: "clamp(30px, 5.4vw, 58px)", 
                    height: "clamp(30px, 5.4vw, 58px)",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }} 
                />
              </div>
              <img 
                src={micIcon} 
                alt="mic" 
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "-6px",
                  width: "clamp(12px, 2vw, 20px)",
                  height: "clamp(12px, 2vw, 20px)",
                  filter: "brightness(0) saturate(100%) invert(100%)",
                }}
              />
            </div>

          </div>


          {/* User Profile */}
          <div className="d-none d-md-flex align-items-center" style={{ gap: "12px", flexShrink: 0 }}>
            {/* Left profile image */}
            <img 
              src={profileImage} 
              alt="Profile" 
              style={{ 
                width: "clamp(36px, 7vw, 72px)", 
                height: "clamp(36px, 7vw, 72px)",
                borderRadius: "50%",
                objectFit: "cover"
              }} 
            />

            {/* User Info */}
            <div>
              <h3
                style={{
                  fontSize: "clamp(12px, 1.8vw, 25px)",
                  fontWeight: "800",
                  color: "#6A389F",
                  margin: 0,
                  marginBottom: "4px"
                }}
              >
                Shubha Nagarajan
              </h3>
              <p
                style={{
                  fontSize: "clamp(11px, 1.6vw, 14px)",
                  color: "#5C6F9F",
                  margin: 0
                }}
              >
                Classical Dancer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Testimonials;

