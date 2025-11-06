import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JoinForm from "./JoinForm";
import heroIllustration from "../assets/Group 27.svg";

const HeroSection = () => {
  return (
    <div style={{ background: "#F7F5F9", width: "100%" }}>
      <Container fluid style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Row 
          className="align-items-start" 
          style={{ 
            padding: "clamp(32px, 8vw, 80px) clamp(16px, 4vw, 40px)"
          }}
        >
          {/* Mobile Layout: Stacked vertically */}
          {/* Desktop Layout: Side by side */}
          
          {/* Left Section - Hero Content */}
          <Col xs={12} lg={7} xl={8} className="mb-4 mb-lg-0">
            <div className="pe-lg-5">
              {/* Headline */}
              <h1 
                className="fw-bold mb-3 mb-md-4"
                style={{ 
                  fontSize: "clamp(24px, 5vw, 48px)",
                  lineHeight: "1.3",
                  color: "#000",
                  fontWeight: "700",
                  fontStyle: "italic",
                  textAlign: "left"
                }}
              >
                Explore your{" "}
                <span style={{ color: "#0096C8", fontStyle: "italic" }}>hobby</span>{" "}
                or{" "}
                <span style={{ color: "#6A389F", fontStyle: "italic" }}>passion</span>
              </h1>

              {/* Paragraph 1 - Only show first paragraph on mobile */}
              <p 
                className="mb-3 d-md-none"
                style={{ 
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#000",
                  textAlign: "left"
                }}
              >
                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
              </p>

              {/* Desktop: Full paragraphs */}
              <div className="d-none d-md-block">
                <p 
                  className="mb-3"
                  style={{ 
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    lineHeight: "1.9",
                    color: "#5c5c6d",
                    marginBottom: "16px"
                  }}
                >
                  Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
                </p>

                <p 
                  className="mb-4"
                  style={{ 
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    lineHeight: "1.9",
                    color: "#5c5c6d",
                    marginBottom: "24px"
                  }}
                >
                  If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
              </div>

              {/* Hero Illustration - Only show on desktop */}
              <div className="hero-characters d-none d-lg-block" style={{ marginTop: "40px" }}>
                <img 
                  src={heroIllustration} 
                  alt="Hero illustration" 
                  style={{ 
                    maxHeight: "260px", 
                    width: "100%", 
                    objectFit: "contain" 
                  }} 
                />
              </div>
            </div>
          </Col>

          {/* Right Section - Sign In Form */}
          <Col xs={12} lg={5} xl={4}>
            <div style={{ 
              paddingLeft: "clamp(0px, 3vw, 40px)",
              paddingTop: "0px"
            }}>
              <JoinForm />
            </div>
          </Col>

          {/* Mobile: Characters at bottom */}
          <Col xs={12} className="d-lg-none" style={{ marginTop: "40px" }}>
            <div className="hero-characters">
              <img 
                src={heroIllustration} 
                alt="Hero illustration" 
                style={{ 
                  maxHeight: "120px", 
                  width: "100%", 
                  objectFit: "contain" 
                }} 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

