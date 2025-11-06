import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import locationIcon from "../assets/location_on_black_24dp 1.svg";
import productIcon from "../assets/Product.svg";
import eventIcon from "../assets/event_available_black_24dp 2.svg";
import GroupIcon from "../assets/Group.svg";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: GroupIcon,
      iconColor: "#8064A2",
      hoverBackground: "#8064A2",
      title: "People",
      description: "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
      buttonText: "Connect"
    },
    {
      icon: locationIcon,
      iconColor: "#4CAF50",
      hoverBackground: "#77933C",
      title: "Place",
      description: "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
      buttonText: "Meet up"
    },
    {
      icon: productIcon,
      iconColor: "#F44336",
      hoverBackground: "#C0504D",
      title: "Product",
      description: "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
      buttonText: "Get it"
    },
    {
      icon: eventIcon,
      iconColor: "#2196F3",
      hoverBackground: "#0096C8",
      title: "Program",
      description: "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
      buttonText: "Attend"
    }
  ];

  return (
    <Container fluid className="features-section" style={{ padding: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row className="g-4">
        {features.map((feature, index) => (
          <Col key={index} lg={6} md={6} sm={12}>
            <div
              className="feature-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? feature.hoverBackground 
                  : "#fff",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: hoveredCard === index 
                  ? "0 4px 16px rgba(0,0,0,0.12)" 
                  : "0 2px 8px rgba(0,0,0,0.08)",
                border: hoveredCard === index 
                  ? "none" 
                  : `1px solid ${feature.iconColor}`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: hoveredCard === index || hoveredCard === null 
                  ? "all 0.3s ease" 
                  : "none",
                cursor: "pointer",
                transform: hoveredCard === index ? "translateY(-4px)" : "translateY(0)",
                willChange: hoveredCard === index ? "transform" : "auto"
              }}
            >
              {/* Icon and Title Row */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                {/* Icon */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "12px",
                    background: hoveredCard === index 
                      ? "transparent" 
                      : `${feature.iconColor}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s ease"
                  }}
                >
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    style={{ 
                      width: "32px", 
                      height: "32px",
                      filter: hoveredCard === index 
                        ? "brightness(0) saturate(100%) invert(100%)" // White on hover
                        : feature.iconColor === "#8064A2" 
                        ? "brightness(0) saturate(100%) invert(45%) sepia(93%) saturate(1352%) hue-rotate(249deg) brightness(95%) contrast(85%)" // Purple
                        : feature.iconColor === "#4CAF50"
                        ? "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)" // Green
                        : feature.iconColor === "#F44336"
                        ? "brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(4858%) hue-rotate(346deg) brightness(97%) contrast(92%)" // Red
                        : "brightness(0) saturate(100%) invert(49%) sepia(98%) saturate(2476%) hue-rotate(181deg) brightness(95%) contrast(101%)", // Blue
                      transition: "filter 0.3s ease"
                    }}
                  />
                </div>

                {/* Title - Right side of icon */}
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: hoveredCard === index 
                      ? "#fff" 
                      : "#1f2340", // Black text on white cards
                    margin: 0,
                    transition: "color 0.3s ease"
                  }}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: hoveredCard === index 
                    ? "rgba(255,255,255,0.9)" 
                    : "#1f2340", // Black text on white cards
                  marginBottom: "24px",
                  flex: 1,
                  transition: "color 0.3s ease"
                }}
              >
                {feature.description}
              </p>

              {/* Button */}
              <button
                style={{
                  background: "#fff",
                  border: `1px solid ${feature.iconColor}`,
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: feature.iconColor,
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  width: "fit-content",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = feature.iconColor;
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.color = feature.iconColor;
                }}
              >
                {feature.buttonText}
              </button>
            </div>
          </Col>
        ))}
      </Row>
      </div>
    </Container>
  );
};

export default Features;

