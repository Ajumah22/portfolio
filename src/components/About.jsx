import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container mt-5">
          <div className="text-center text-primary pt-5">
            <h4>About Me</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <p className="text-dark p-3">
                Driven, with a dynamic vision on simple to complex algorithms. I
                have a solid understanding of frontend (Javascript, React) and
                backend (Python, .Net and C#) tools including version control
                tools such as git and github; to handle everything from small to
                large projects with speed and efficiency.
              </p>
              <button
                className="btn border-primary text-primary mb-5"
                data-bs-toggle="modal"
                data-bs-target="#reg-modal"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
