import React from "react";
import { Container } from "react-bootstrap";
import AddIcon from "../assets/Add (Landing Page).svg";

const AddOwnSection = () => {
  return (
    <Container fluid className="add-own-section" style={{ padding: "80px" }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center mb-4" style={{ gap: "16px" }}>
          {/* Circular Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#E3F2FD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}
          >
            <img 
              src={AddIcon} 
              alt="Add" 
              style={{ 
                width: "28px", 
                height: "28px",
                filter: "brightness(0) saturate(100%) invert(49%) sepia(98%) saturate(2476%) hue-rotate(181deg) brightness(95%) contrast(101%)"
              }} 
            />
          </div>

          {/* Title */}
          <h2 
            style={{ 
              fontSize: "28px", 
              fontWeight: "700", 
              color: "#1f2340",
              margin: 0
            }}
          >
            Add your own
          </h2>
        </div>

        {/* Body Text */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#1f2340",
            marginBottom: "32px"
          }}
        >
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and{" "}
          <span style={{ fontWeight: "700", color: "#1f2340" }}>Add your Own page</span>
        </p>

        {/* Button */}
        <button
          style={{
            background: "#fff",
            border: "1px solid #8064A2",
            borderRadius: "8px",
            padding: "12px 24px",
            color: "#8064A2",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#8064A2";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#8064A2";
          }}
        >
          Add new
        </button>
      </div>
    </Container>
  );
};

export default AddOwnSection;
