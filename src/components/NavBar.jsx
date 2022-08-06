import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top bg-light navbar-light">
        <div className="container-xxl">
          <a href="#Hero" class="navbar-brand ms-5">
            <span class="fw-bold text-primary">
              <i class="bi bi-book-half"></i>
              AjumahDev
            </span>
          </a>
          {/* <!-- toggle button for mobile nav --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* <!-- navbar links --> */}
          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item active">
                <a href="#Hero" className="nav-link text-primary fw-bold me-4">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#About" className="nav-link text-primary fw-bold me-4">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#Experience"
                  className="nav-link text-primary fw-bold me-4"
                >
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#Contact"
                  className="nav-link text-primary fw-bold me-4"
                >
                  Contact
                </a>
              </li>

              <li className="nav-item d-md-none">
                <a href="#Resume" className="nav-link">
                  Resume
                </a>
              </li>

              <li className="nav-item ms-2 d-none d-md-inline text-primary fw-bold me-5">
                <a href="#Resume" className="nav-link">
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
