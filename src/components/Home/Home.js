import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import MyResume from '../MyResume/MyResume';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <Banner/>
       <Features/>
       <Portfolio/>
       <MyResume/>
       <Testimonial/>
       {/* <Blog/> */}
       <Contact/>
    </>
  );
};

export default Home;