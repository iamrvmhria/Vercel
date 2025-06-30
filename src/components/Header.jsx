// src/components/Header.jsx
import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header
                style={{
                    paddingLeft: '5rem',
                    paddingRight: '5rem',
                    padding: "1rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#ffffffee",
                    position: "sticky",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: 'orange' }}>ScrollImage</div>

                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        cursor: "pointer",
                        display: "none",
                    }}
                    className="hamburger"
                >
                    ☰
                </div>

                <nav className="nav-links" style={{ width: '40%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <a href="/" style={linkStyle}>Home</a>
                    <a href="about" style={linkStyle}>About</a>
                    <a href="contact" style={linkStyle}>Contact</a>
                </nav>
            </header>

            {menuOpen && (
                <div className="dropdown">
                    <a href="/" style={dropdownLinkStyle}>Home</a>
                    <a href="about" style={dropdownLinkStyle}>About</a>
                    <a href="contact" style={dropdownLinkStyle}>Contact</a>
                </div>
            )}

            <style>
                {`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: block !important;
            font-size: 1.5rem;
          }
          .dropdown {
            display: flex;
            flex-direction: column;
            background: white;
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            z-index: 998;
          }
        }
      `}
            </style>
        </>
    );
};

const linkStyle = {
    marginLeft: "1.5rem",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
};

const dropdownLinkStyle = {
    padding: "1rem",
    textDecoration: "none",
    color: "#333",
    borderBottom: "1px solid #ddd",
};

export default Header;
