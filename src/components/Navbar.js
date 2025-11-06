import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.svg"; 
import searchIcon from "../assets/search-purple.svg";
import exploreIcon from "../assets/Explore.svg";
import hobbiesIcon from "../assets/Hobbies.svg";
import bookmarkIcon from "../assets/bookmark.svg";
import notificationIcon from "../assets/notification-icon.svg";
import productIcon from "../assets/Product.svg";
import dropdownIcon from "../assets/icons8_expand_arrow 1.svg";

const NavigationBar = () => {
  const [isSignInHover, setIsSignInHover] = useState(false);
  return (
    <Navbar bg="white" expand="lg" className="py-3" style={{ borderBottom: "1px solid #e9ecef" }}>
      <Container fluid className="px-4">
        
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="45"
            height="45"
            className="me-2"
          />
          <div>
            <span className="fw-bold fs-5" style={{ color: "#3A1D7A" }}>hobby</span>
            <span className="fw-bold fs-5" style={{ color: "#8064A2" }}>cue</span>
            <div className="text-muted small" style={{ fontSize: "0.75rem", color: "#6c757d" }}>Your Hobby, Your Community</div>
          </div>
        </Navbar.Brand>

        {/* Mobile controls: search, bell, hamburger */}
        <div className="ms-auto d-flex d-lg-none align-items-center gap-3">
          <img src={searchIcon} alt="search" width="24" height="24" className="nav-icon" />
          <img src={notificationIcon} alt="notification" width="24" height="24" className="nav-icon" />
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0 p-0 bg-transparent">
            <span style={{ display: "inline-block", width: 24, height: 2, background: "#8064A2", position: "relative" }}>
              <span style={{ position: "absolute", top: -6, left: 0, width: 24, height: 2, background: "#8064A2" }} />
              <span style={{ position: "absolute", top: 6, left: 0, width: 24, height: 2, background: "#8064A2" }} />
            </span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Search Box */}
          <Form className="d-none d-lg-flex mx-auto my-2 my-lg-0" style={{ width: "40%", maxWidth: "500px" }}>
            <FormControl
              type="search"
              placeholder="Search here..."
              aria-label="Search"
              style={{
                border: "1px solid #e0e0e0",
                borderRight: "none",
                borderRadius: "8px 0 0 8px",
                padding: "0.5rem 1rem",
                outline: "none",
              }}
            />
            <Button
              variant="secondary"
              style={{
                backgroundColor: "#8064A2",
                border: "none",
                borderRadius: "0 8px 8px 0",
                padding: "0.5rem 1rem",
              }}
            >
              <img src={searchIcon} alt="search" width="16" style={{ filter: "brightness(0) invert(1)" }} />
            </Button>
          </Form>

          {/* Mobile: icons left, sign-in right */}
          <div className="d-flex d-lg-none w-100 align-items-center justify-content-between my-3">
            <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
              <img src={bookmarkIcon} alt="bookmark" width="24" height="24" className="nav-icon" style={{ cursor: "pointer" }} />
              <img src={notificationIcon} alt="notification" width="24" height="24" className="nav-icon" style={{ cursor: "pointer" }} />
              <img src={productIcon} alt="cart" width="24" height="24" className="nav-icon" style={{ cursor: "pointer" }} />
            </div>
            <Button
              variant="outline-secondary"
              className="px-3"
              style={{ 
                borderColor: "#8064A2", 
                color: isSignInHover ? "#ffffff" : "#8064A2",
                backgroundColor: isSignInHover ? "#8064A2" : "transparent",
                borderRadius: "8px",
                borderWidth: "1px",
                fontWeight: "500",
                transition: "all 0.15s ease-in-out"
              }}
              onMouseEnter={() => setIsSignInHover(true)}
              onMouseLeave={() => setIsSignInHover(false)}
            >
              Sign In
            </Button>
          </div>

          {/* Desktop/large: full menu */}
          <Nav className="align-items-center d-none d-lg-flex" style={{ gap: "1.5rem" }}>
            <NavDropdown
              title={
                <span className="d-flex align-items-center" style={{ color: "#8064A2", fontSize: "0.95rem", fontWeight: "500" }}>
                  <img src={exploreIcon} alt="explore" width="24" height="24" className="me-1 nav-icon" />
                  Explore
                  <img src={dropdownIcon} alt="dropdown" width="24" height="24" className="ms-1 nav-icon" />
                </span>
              }
              id="explore-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href="#">People</NavDropdown.Item>
              <NavDropdown.Item href="#">Places</NavDropdown.Item>
              <NavDropdown.Item href="#">Programs</NavDropdown.Item>
              <NavDropdown.Item href="#">Products</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <span className="d-flex align-items-center" style={{ color: "#8064A2", fontSize: "0.95rem", fontWeight: "500" }}>
                  <img src={hobbiesIcon} alt="hobbies" width="24" height="24" className="me-1 nav-icon" />
                  Hobbies
                  <img src={dropdownIcon} alt="dropdown" width="24" height="24" className="ms-1 nav-icon" />
                </span>
              }
              id="hobbies-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item href="#">Music</NavDropdown.Item>
              <NavDropdown.Item href="#">Dance</NavDropdown.Item>
              <NavDropdown.Item href="#">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#">Art</NavDropdown.Item>
            </NavDropdown>

            <img 
              src={bookmarkIcon} 
              alt="bookmark" 
              width="24" 
              height="24"
              className="nav-icon"
              style={{ cursor: "pointer" }} 
            />
            <img 
              src={notificationIcon} 
              alt="notification" 
              width="24" 
              height="24"
              className="nav-icon"
              style={{ cursor: "pointer" }} 
            />
            <img 
              src={productIcon} 
              alt="cart" 
              width="24" 
              height="24"
              className="nav-icon"
              style={{ cursor: "pointer" }} 
            />

            <Button
              variant="outline-secondary"
              className="px-3"
              style={{ 
                borderColor: "#8064A2", 
                color: isSignInHover ? "#ffffff" : "#8064A2",
                backgroundColor: isSignInHover ? "#8064A2" : "transparent",
                borderRadius: "8px",
                borderWidth: "1px",
                fontWeight: "500",
                transition: "all 0.15s ease-in-out"
              }}
              onMouseEnter={() => setIsSignInHover(true)}
              onMouseLeave={() => setIsSignInHover(false)}
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;