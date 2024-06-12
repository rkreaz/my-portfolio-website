import React from 'react';

const MyResume = () => {
    return (
        <div className="container">
            <div className="rn-resume-area rn-section-gap section-separator" id="resume">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">2+ Years of Experience</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                    Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                            </li>
                            <li className="nav-item">
                                <a target={"_blank"} className="nav-link" href="https://drive.google.com/file/d/1rHo7lc-nQShf_vNyXnw_XXtC-U9ROfZE/view" aria-selected="false">Download resume</a>
                            </li>
                        </ul>

                        <div className="rn-nav-content tab-content" id="myTabContents">

                            <div className="tab-pane fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2011 - 2019</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4 className='education_title'>Bachelor of Science - Chemistry</h4>
                                                                    <span>National university of Bangladesh (2013 - 2019)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>3.01/4</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            I completed 4 years of B.Sc degree. My CGPA is 3.01 out of 4. & Masters of Science in Chemistry. My CGPA is 2.87 out of 4. in Chemistry from the National University of Bangladesh. 
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Higher School certificate - Science</h4>
                                                                    <span>Amtali Degree Collage (2011 - 2013)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.20/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                                The Higher Secondary Certificate (HSC) is a public examination credential in Bangladesh, India, and Pakistan. HSC is equivalent to GCE A Level in England and 3rd and 4th year of high school in the United States.
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2022 - 2024</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Software Developer</h4>
                                                                    <span>Programming Hero</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>MERN Stack</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            Developed modern web applications for clients with JavaScript, ReactJS, NodeJS, Express, and MongoDB. Built RESTful APIs that served data to the JavaScript front-end based on dynamically.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Web Designer and Developer</h4>
                                                                    <span>Upwork® Global Inc. (2022 - 2024)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>Top Rated</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            I have worked as a full-time freelance web Developer On UpWork since 2022. I have been working remotely on projects for clients all over the world since 2022. I completed 50+ projects on Programming Hero. and I'm also a  Freelancer on Upwork.
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row row--40">

                                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Development Skill</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">85%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">React js</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ExpressJs</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">NodeJS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">MongoDB</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">75%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Firebase</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".7s" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">85%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PHP</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".7s" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">75%</span></div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Laravel</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".7s" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                        </div>
                                                    </div> */}

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Design Skill</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">HTML</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">95%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">CSS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Bootstrap</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '80%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">TailWind CSS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">95%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PHOTOSHOT</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: '70%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">FIGMA</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: '95%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">95%</span></div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ADOBE XD</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">60%</span></div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: '70%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span
                                                                className="percent-label">70%</span></div>
                                                        </div>
                                                    </div> */}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <span className="subtitle">2014 - 2023</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Software Developer</h4>
                                                                    <span>Programming Hero</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>MERN Stack</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            Developed modern web applications for clients with JavaScript, ReactJS, NodeJS, Express, and MongoDB. Built RESTful APIs that served data to the JavaScript front-end based on dynamically.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Web Designer and Developer</h4>
                                                                    <span>Upwork® Global Inc. (2022 - 2024)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>Top Rated</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            I have worked as a full-time freelance web Developer On UpWork since 2022. I have been working remotely on projects for clients all over the world since 2022. I completed 50+ projects on Programming Hero. and I'm also a  Freelancer on Upwork.
                                                            </p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2013 - 2019</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4 className='education_title'>Bachelor of Science - Chemistry</h4>
                                                                    <span>National university of Bangladesh (2013 - 2019)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>3.01/4</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            I completed 4 years of B.Sc degree. My CGPA is 3.01 out of 4. & Masters of Science in Chemistry. My CGPA is 2.87 out of 4. in Chemistry from the National University of Bangladesh. 
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Higher School certificate - Science</h4>
                                                                    <span>Amtali Degree Collage (2011 - 2013)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.20/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">
                                                            The Higher Secondary Certificate (HSC) is a public examination credential in Bangladesh, India, and Pakistan. HSC is equivalent to GCE A Level in England and 3rd and 4th year of high school in the United States.
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyResume;