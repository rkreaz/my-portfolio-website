import React from 'react';
// import { useQuery } from 'react-query';
// import Spinner from '../../assets/Spinner';
// import parse from 'html-react-parser';

const Features = () => {
    //   const {data, isLoading, refetch} = useQuery(['skills'], () => fetch('https://backend.asadjulhas.com/skills', {
    //     method: 'GET',
    //   })
    // .then(res => res.json())
    // )
    // console.log(data)
    // if(isLoading) {
    //   return <div className='mainSpinner'><Spinner spinnerClass=''/></div>
    // }
    return (
        <div className="rn-service-area rn-section-gap section-separator" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">Programming</span>
                            <h2 className="title">and other skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">

                    {/* {isLoading ? <Spinner spinnerClass='skills_spinner'/> : ''}

                    {data?.map(s => <div key={s._id} data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather ${s.class}`}> {parse(s.icon)}</svg>
                                </div>
                                <div className="content"> 
                                    <h4 className="title">{s.title}</h4>
                                    <p className="description">{s.skills} {s.tools ? <><br /> <b>Tools:</b> {s.tools}</> : ''}</p>
                                    <span className="read-more-button"><i className="feather-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>)} */}

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-book-open`}><path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path><path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Expertise</h4>
                                    <p className="description">JavaScript, ES6, React, Node's, Express's, React Hook, React Router, Rest API, Firebase, Tailwind, Bootstrap5,</p>
                                    <span className="read-more-button"><i className="feather-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-menu`}><line x1='3' y1='12' x2='21' y2='12'></line><line x1='3' y1='6' x2='21' y2='6'></line><line x1='3' y1='18' x2='21' y2='18'></line></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Comfortable</h4>
                                    <p className="description">MongoDB, JWT,<br /> <b>Tools:</b> Github, Figma, Photoshop, npm</p>
                                    <span className="read-more-button"><i className="feather-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-slack`}><path d='M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z'></path><path d='M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'></path><path d='M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z'></path><path d='M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z'></path><path d='M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z'></path><path d='M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'></path><path d='M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z'></path><path d='M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z'></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Familiar</h4>
                                    <p className="description">TypeScript<br /> <b>Tools:</b> Netlify, VS Code</p>
                                    <span className="read-more-button"><i className="feather-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;