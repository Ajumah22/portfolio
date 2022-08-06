import React from "react";
import Photo from "./images/profile-photo.png";
import "../App.css";

const Header = () => {
  return (
    <div>
      <section id="intro">
        <div className="containers-lg">
          <div className="row justify-content-center m-5 p-5 align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="header-content-right">
                  <h4 className="sub-title text-muted">
                    Hi there! <span>&#128075;</span> I'm
                  </h4>
                </div>
                <div className="title text-dark">Funmilola Oresajo</div>
                <p className="lead my-3 text-muted">Software Engineer.</p>
              </h1>
              <a href="#resume" className="btn border-primary me-4">
                Download CV
              </a>

              <a href="#Contact" className="btn border-primary">
                Contact
              </a>
            </div>

            <div className="col-md-5 text-center d-none d-md-block">
              {/* <!-- tooltip --> */}
              <span
                className="tt"
                data-bs-placement="bottom"
                title="Funmilola Oresajo"
              >
                <img
                  className="img-fluid w-40 h-40"
                  src={Photo}
                  alt="profile"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
