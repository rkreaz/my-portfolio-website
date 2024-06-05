import React from "react";
import RezaulKarim from "../../assets/images/Untitled design.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div onClick={scrollToTop} className="backto-top">
        <div className="arrow_up_icon">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>

      <div className="rn-footer-area rn-section-gap section-separator">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a>
                    <img className="banner_img" src={RezaulKarim} alt="logo" />
                  </a>
                </div>

                <p className="description mt--30">
                  © {currentYear}. All rights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
