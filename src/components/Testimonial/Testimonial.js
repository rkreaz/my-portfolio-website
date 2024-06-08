import React from 'react';
import ratingIcon from '../../assets/images/icons/rating.png';
import dianaAdams from '../../assets/images/client/cat-1.jpg';


const Testimonial = () => {
    return (

        <div className="rn-testimonial-area rn-section-gap section-separator" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">What Clients Say</span>
                            <h2 className="title">Testimonial</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial-activation testimonial-pb mb--30">
                            <button className="slide-arrow prev-arrow slick-arrow"><i className="feather-arrow-left"></i></button>
                            <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src={dianaAdams} alt="Jenny Huynh" />
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt--10">Robert Half International</span>
                                            <h3 className="title">Jenny Huynh</h3>
                                            <span className="designation">Chief Marketing Officer</span>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">Web Development</h3>
                                            </div>
                                            <div className="rating">
                                                <img src={ratingIcon} alt="rating-image" />&nbsp;
                                                <img src={ratingIcon} alt="rating-image" />&nbsp;
                                                <img src={ratingIcon} alt="rating-image" />&nbsp;
                                                <img src={ratingIcon} alt="rating-image" />&nbsp;
                                                <img src={ratingIcon} alt="rating-image" />
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="discription">
                                        Great customer service! I had to make a change to my order and the customer service was extremely helpful and responded quickly. They adjusted my order without issue. ⭐️⭐️⭐️⭐️⭐️
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                                <div className="inner">
                                    <div className="card-info">
                                        <div className="card-thumbnail">
                                            <img src="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png" alt="Testimonial-image"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="subtitle mt--10">Bound - Trolola</span>
                                            <h3 className="title">Jone Duone Joe</h3>
                                            <span className="designation">Operating Officer</span>
                                        </div>
                                    </div>
                                    <div className="card-description">
                                        <div className="title-area">
                                            <div className="title-info">
                                                <h3 className="title">Web App Development</h3>
                                                <span className="date">Upwork - Mar 4, 2016 - Aug 30, 2021</span>
                                            </div>
                                            <div className="rating">
                                                <img src={ratingIcon} alt="rating-image"/>&nbsp;
                                                <img src={ratingIcon} alt="rating-image"/>&nbsp;
                                                <img src={ratingIcon} alt="rating-image"/>&nbsp;
                                                <img src={ratingIcon} alt="rating-image"/>&nbsp;
                                                <img src={ratingIcon} alt="rating-image"/>
                                            </div>
                                        </div>
                                        <div className="seperator"></div>
                                        <p className="discription">
                                            Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <button className="slide-arrow next-arrow slick-arrow"><i className="feather-arrow-right"></i></button>
                            <ul className="slick-dots" role="tablist">
                                <li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 5" tabIndex="0" aria-selected="true">5</button></li>
                                <li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 5" tabIndex="-1">4</button></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;