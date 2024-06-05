import React from "react";
import RezaulKarim from "../../assets/images/Untitled design.png";

const Header = () => {
  const handlePopUmMenu = () => {
    const menuDiv = document.getElementById("popup_menu");
    menuDiv.classList.add("menu-open");
  };

  const handleHideMenu = () => {
    const menuDiv = document.getElementById("popup_menu");
    menuDiv.classList.remove("menu-open");
  };

  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <img className="banner_img"
                  width={70}
                  height={70}
                  src={RezaulKarim}
                  alt="Rezaul Karim Reaz"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav
                id="sideNav"
                className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
              >
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item current">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smoth-animation" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  {/* <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
                        <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link" href="#blog">blog</a></li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#contacts">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-right">
                <div className="hamberger-menu d-block d-xl-none">
                  <i
                    onClick={handlePopUmMenu}
                    id="menuBtn"
                    className="feather-menu humberger-menu"
                  ></i>
                </div>
                <div className="close-menu d-block">
                  <span className="closeTrigger">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="popup_menu"
        className="popup-mobile-menu"
        onClick={handleHideMenu}
      >
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="index.html">
                <img
                  width={70}
                  height={70}
                  src={RezaulKarim}
                  alt="Rezaul Karim Reaz"
                />
              </a>
              <div onClick={handleHideMenu} className="close-button">
                <button className="close-menu-activation close">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <p className="discription">
            Rezaul Karim Reaz <br />
              MERN Stack Developer
            </p>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills onepagenav">
              <li className="nav-item current">
                <a className="nav-link smoth-animation active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#features">
                  skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#testimonial">
                  Testimonial
                </a>
              </li>
              {/* <li className="nav-item"><a className="nav-link smoth-animation" href="#pricing">Pricing</a></li> */}
              {/* <li className="nav-item"><a className="nav-link smoth-animation" href="#blog">blog</a></li> */}
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#contacts">
                  Contact
                </a>
              </li>
            </ul>
            <div className="social-share-style-1 mt--40">
              <span className="title">find with me</span>
              <ul className="social-share d-flex liststyle">
                <li className="instagram">
                  <a
                    title="Linkedin"
                    href="https://www.linkedin.com/in/asadjulhas/"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a title="Github" href="https://github.com/asadjulhas">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a
                    title="Facebook"
                    href="https://www.facebook.com/asadjulha/"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
