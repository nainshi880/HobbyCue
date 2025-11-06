import React from "react";
import { Container } from "react-bootstrap";
import GroupCharacters from "../assets/Group 99.svg";

const CTASection = () => {
  return (
    <Container
      fluid
      style={{ background: "#F7FDFF", marginTop: "55px" }}
    >
      <div
        style={{
          width: "1440px",
          height: "662px",
          margin: "0 auto",
          padding: "60px 24px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Heading and Button */}
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontSize: "56px",
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
              marginTop: "24px",
              background: "#6A389F",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get started
          </button>
        </div>

        {/* Characters Illustration */}
        <div style={{ marginTop: "12px", flex: 1, display: "flex", alignItems: "flex-end" }}>
          <img
            src={GroupCharacters}
            alt="Characters"
            style={{ width: "100%", height: "auto", maxHeight: "420px", objectFit: "contain" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default CTASection;
