import React from "react";
import asadJulhas from "../../assets/images/Untitled design.png";
import reactLogo from "../../assets/logo.svg";
import MongoDB from "../../assets/mongodb-modified.png";
import nodeJs from "../../assets/node.png";
import "./Banner.css";
// import { useQuery } from "react-query";
// import Spinner from "../../assets/Spinner";

const Banner = () => {
  //   const {data, isLoading, refetchSlider} = useQuery(['slidetext'], () => fetch('https://backend.asadjulhas.com/slide-text', {
  //     method: 'GET',



  //   })
  // .then(res => res.json())
  // )
  // console.log(isLoading);
  //   // banner intro
  //   const {data: introText, refetch} = useQuery(['intro'], () => fetch('https://backend.asadjulhas.com/intro', {
  //     method: 'GET',
  //   })
  // .then(res => res.json())
  // )

  return (
    <div id="home" className="rn-slider-area">
      <div className="slide slider-style-1">
        <div className="container">
          <div className="row row--30 align-items-center ">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="content">
                <div className="inner">
                  <span className="subtitle">Welcome to my world</span>
                  <h1 className="title banner_text">
                    Hi, I'm <span>Rezaul Karim Reaz</span>
                    <br />
                    <span className="header-caption" id="page-top">
                      <span className="cd-headline clip is-full-width">
                        <span>a </span>
                        <span className="cd-words-wrapper">
                          <b className="is-visible"> Front end Developer.</b>
                          <b className="is-hidden"> Professional Coder.</b>
                          <b className="is-hidden"> MERN Stack Developer.</b>
                          <b className="is-hidden"> Web Developer.</b>

                          {/* {data && data.map((slider, index) => <b key={slider.id} className={index === 0 ? 'is-visible' : 'is-hidden'}>{slider.title}</b>)} */}
                        </span>
                      </span>
                    </span>
                  </h1>

                  <div>
                    {/* {introText?.map((i) => (
                      <p key={i._id} className="description">
                        {i.intro}
                      </p>
                    ))} */}
                    <p className="description">
                      I love to play with codes to build a great website. I know
                      how things work. I have a diverse set of skills in HTML5,
                      CSS3, Bootstrap, Tailwind, JavaScript, React, NodeJs,
                      ExpressJs and MongoDB.
                      I love bug/error fixing. Bug fixing and website
                      optimization is my favorite task.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social-share-inner-left">
                      <span className="title">find with me</span>
                      <ul className="social-share d-flex liststyle">
                        <li className="instagram">
                          <a
                            title="Linkedin"
                            href="https://www.linkedin.com/in/rezaul-karim-reaz-445379249/"
                            target="{_blank}"
                          >
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="facebook">
                          <a
                            title="Github"
                            href="https://github.com/rkreaz"
                             target="{_blank}"
                          >
                            <i className="fa fa-github" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="facebook">
                          <a
                            title="Facebook"
                            href="https://www.facebook.com/rezaulkarimreazz"
                             target="{_blank}"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="skill-share-inner">
                      <span className="title">best skill on</span>
                      <ul className="skill-share d-flex liststyle">
                        <li>
                          <img src={reactLogo} title="ReactJS" alt="ReactJS" />
                        </li>
                        <li>
                          <img src={MongoDB} title="MongoDB" alt="MongoDB" />
                        </li>
                        <li>
                          <img src={nodeJs} title="NodeJs" alt="NodeJs" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 order-lg-2 col-lg-5">
              <div className="thumbnail">
                <div className="inner">
                  <img className="banner_img" src={asadJulhas} alt="Personal Portfolio Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
