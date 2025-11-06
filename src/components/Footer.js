import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "#fff", padding: "60px 0 0 0" }}>
      <Container fluid style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <Row>
          {/* Column 1: Hobbycue */}
          <Col xs={12} sm={6} md={3} style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px"
              }}
            >
              Hobbycue
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "About Us",
                "Our Services",
                "Work with Us",
                "FAQ",
                "Contact Us"
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "block"
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 2: How Do I */}
          <Col xs={12} sm={6} md={3} style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px"
              }}
            >
              How Do I
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Sign Up",
                "Add a Listing",
                "Claim Listing",
                "Post a Query",
                "Add a Blog Post",
                "Other Queries"
              ].map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "block"
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Quick Links */}
          <Col xs={12} sm={6} md={3} style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px"
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Listings", "Blog Posts", "Shop / Store", "Community"].map(
                (link, index) => (
                  <li key={index} style={{ marginBottom: "12px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#000",
                        textDecoration: "none",
                        fontSize: "14px",
                        display: "block"
                      }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          {/* Column 4: Social Media & Invite Friends */}
          <Col xs={12} sm={6} md={3} style={{ marginBottom: "40px" }}>
            {/* Social Media */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px"
              }}
            >
              Social Media
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "12px",
                marginBottom: "40px"
              }}
            >
              {/* Facebook */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "#8F8F9B"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "#8F8F9B",
                  fontSize: "16px",
                  fontWeight: "bold"
                }}
              >
                P
              </a>

              {/* Google+ */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "#8F8F9B",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                G+
              </a>

              {/* YouTube */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="#"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#EDECF3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.178 1.897-.947 6.507-1.338 8.625-.171.972-.508 1.295-.834 1.326-.712.062-1.25-.47-1.938-.923-1.073-.698-1.68-1.133-2.72-1.816-1.204-.831-.424-1.289.263-2.033.18-.193 3.241-2.975 3.304-3.228.007-.031.014-.147-.055-.212-.069-.065-.17-.039-.244-.023-.106.023-1.79 1.138-5.06 3.345-.479.329-.913.489-1.303.481-.428-.009-1.252-.242-1.865-.441-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.118.095.151.223.167.312.016.09.036.297.02.459z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="#"
                style={{
                  width: "40px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#F1EFF7",
                  border: "1px solid #D7D2E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#8F8F9B">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>

            {/* Invite Friends */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px"
              }}
            >
              Invite Friends
            </h3>
            <div style={{ display: "flex", gap: 0, border: "1px solid #8064A2", borderRadius: "8px", overflow: "hidden" }}>
              <input
                type="email"
                placeholder="Email ID"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  border: "none",
                  fontSize: "14px",
                  outline: "none"
                }}
              />
              <button
                style={{
                  padding: "10px 20px",
                  background: "#6A389F",
                  color: "#fff",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                Invite
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div
        style={{
          background: "#F5F5F5",
          padding: "20px 0",
          marginTop: "40px",
          borderTop: "1px solid #E5E5E5"
        }}
      >
        <Container fluid style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <p
            style={{
              textAlign: "center",
              color: "#000",
              fontSize: "14px",
              margin: 0
            }}
          >
            © Purple Cues Private Limited
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

