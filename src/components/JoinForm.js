import React, { useState } from "react";
import GoogleIcon from "../assets/Google.svg";
import FacebookIcon from "../assets/Facebook.svg";
import PasswordIcon from "../assets/Password.svg";

export default function JoinForm() {
  const [activeTab, setActiveTab] = useState("signIn");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="w-100 join-card"
      style={{
        background: "transparent",
        borderRadius: "12px",
        padding: "0px",
        boxShadow: "none",
        border: "none",
        margin: "0 auto",
        maxWidth: "420px"
      }}
    >
      {/* Tabs */}
      <div
        className="d-flex gap-4 mb-4 justify-content-start"
        style={{
          borderBottom: "1px solid #e9e9f2",
          paddingBottom: "8px",
          marginBottom: "20px"
        }}
      >
        <button
          onClick={() => setActiveTab("signIn")}
          className="btn p-0 border-0 bg-transparent"
          style={{
            fontSize: "18px",
            fontWeight: activeTab === "signIn" ? "700" : "500",
            color: activeTab === "signIn" ? "#6A389F" : "#A7A7A7",
            borderBottom: activeTab === "signIn" ? "2px solid #6A389F" : "none",
            paddingBottom: "4px",
            borderRadius: "0"
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => setActiveTab("joinIn")}
          className="btn p-0 border-0 bg-transparent"
          style={{
            fontSize: "18px",
            fontWeight: activeTab === "joinIn" ? "700" : "500",
            color: activeTab === "joinIn" ? "#6A389F" : "#A7A7A7",
            borderBottom: activeTab === "joinIn" ? "2px solid #6A389F" : "none",
            paddingBottom: "4px",
            borderRadius: "0"
          }}
        >
          Join In
        </button>
      </div>

      {/* Social Login Buttons */}
      <div className="mb-3">
        <button
          className="btn w-100 d-flex align-items-center justify-content-center"
          style={{
            background: "#ffffff",
            border: "1px solid #8064A2",
            borderRadius: "8px",
            padding: "10px 14px",
            color: "#1f2340",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "12px",
            height: "44px",
            lineHeight: 1.2
          }}
        >
          <img src={GoogleIcon} alt="Google" width="20" height="20" style={{ marginRight: "10px" }} />
          Continue with Google
        </button>
        <button
          className="btn w-100 d-flex align-items-center justify-content-center"
          style={{
            background: "#ffffff",
            border: "1px solid #8064A2",
            borderRadius: "8px",
            padding: "10px 14px",
            color: "#1f2340",
            fontSize: "14px",
            fontWeight: 600,
            height: "44px",
            lineHeight: 1.2
          }}
        >
          <img src={FacebookIcon} alt="Facebook" width="20" height="20" style={{ marginRight: "10px" }} />
          Continue with Facebook
        </button>
      </div>

      {/* Separator */}
      <div className="d-flex align-items-center justify-content-between my-3">
        <div style={{ height: "1px", background: "#cfcfe6", width: "40%", borderRadius: "2px" }}></div>
        <small className="mx-2" style={{ color: "#000000", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>Or connect with</small>
        <div style={{ height: "1px", background: "#cfcfe6", width: "40%", borderRadius: "2px" }}></div>
      </div>

      {/* Form */}
      <form>
        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            style={{
              border: "1px solid rgba(127,86,217,0.12)",
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "14px",
              color: "#1f2340"
            }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-3 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            style={{
              border: "1px solid rgba(127,86,217,0.12)",
              borderRadius: "8px",
              padding: "10px 14px",
              paddingRight: "44px",
              fontSize: "14px",
              color: "#1f2340"
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn p-0 border-0 bg-transparent"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            <img src={PasswordIcon} alt="Toggle password" width="20" height="20" />
          </button>
        </div>

        {/* Remember me and Forgot password - Only for Sign In */}
        {activeTab === "signIn" && (
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="remember"
                className="me-2"
                style={{ cursor: "pointer" }}
              />
              <label htmlFor="remember" style={{ fontSize: "14px", color: "#1f2340", cursor: "pointer", margin: 0 }}>
                Remember me
              </label>
            </div>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: "#6b6b80",
                textDecoration: "none"
              }}
            >
              Forgot password?
            </a>
          </div>
        )}

        {/* Terms and Conditions - Only for Join In */}
        {activeTab === "joinIn" && (
          <div className="mb-3" style={{ fontSize: "12px", color: "#6b6b80", lineHeight: "1.2" }}>
            By continuing, you agree to our{" "}
            <a href="#" style={{ color: "#8064A2", textDecoration: "none" }}>Terms of Service</a>
            {" "}and{" "}
            <a href="#" style={{ color: "#8064A2", textDecoration: "none" }}>Privacy Policy</a>.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-100"
          style={{
            background: "transparent",
            border: "1px solid #8064A2",
            borderRadius: "8px",
            padding: "12px",
            color: "#1f2340",
            fontSize: "14px",
            fontWeight: "600"
          }}
        >
          {activeTab === "joinIn" ? "Agree and Continue" : "Continue"}
        </button>
      </form>
    </div>
  );
}
