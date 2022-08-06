import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" class="contact-area gray-bg">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center pb-25">
                <h4 className="title text-primary my-5">Get In Touch</h4>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="contact-box text-center my-30">
                <div className="contact-icon">
                  <i className="lni-map-marker"></i>
                </div>
                <div className="contact-content">
                  <h6 className="contact-title">Address</h6>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="contact-box text-center mt-30">
                <div className="contact-icon">
                  <i className="lni-phone"></i>
                </div>
                <div className="contact-content">
                  <h6 className="contact-title">Phone</h6>
                  <p>+234 816 903 9142</p>
                  <p>+234 705 546 3056</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="contact-box text-center mt-30">
                <div className="contact-icon">
                  <i className="lni-envelope"></i>
                </div>
                <div className="contact-content">
                  <h6 className="contact-title">Email</h6>
                  <p>oresajofunmilola@gmail.com</p>
                  <p>fumrexlola@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
