import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-secondary shadow mb-3 py-3 fw-bold">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://github.com/sreventsjulepalle-create/media/blob/main/WhatsApp%20Image%202025-08-03%20at%2021.13.40_6350f6b6.jpg?raw=true"
              alt="SR Events Logo"
              className="logo img-fluid"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />
            <span className="brand-text">
              <span className="brand-title">SR Events</span>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/eventMembers">
                  Event Members
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
