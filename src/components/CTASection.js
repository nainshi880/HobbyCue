import React from "react";
import { Container } from "react-bootstrap";
import GroupCharacters from "../assets/Group 99.svg";

const CTASection = () => {
  return (
    <Container fluid style={{ background: "#F7FDFF", marginTop: "55px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          minHeight: "clamp(260px, 35vh, 520px)",
          margin: "0 auto",
          padding: "clamp(16px, 3vw, 48px) clamp(12px, 3vw, 24px)",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        {/* Heading and Button */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 56px)",
              lineHeight: 1.25,
              fontWeight: 500,
              color: "#1f2340",
              margin: 0,
            }}
          >
            Your <span style={{ color: "#3A1D7A", fontStyle: "italic" }}>Hobby</span>, Your {" "}
            <span style={{ color: "#6A389F", fontStyle: "italic" }}>Community</span>...
          </h2>

          <button
            style={{
              marginTop: "clamp(12px, 2vw, 24px)",
              background: "#6A389F",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "clamp(8px, 1.5vw, 12px) clamp(14px, 2vw, 24px)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get started
          </button>
        </div>

        {/* Characters Illustration */}
        <div style={{ marginTop: "12px", flex: 1, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <img
            src={GroupCharacters}
            alt="Characters"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "clamp(110px, 22vh, 300px)",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default CTASection;
