import React from 'react';
import './Spinner.css'
import loaderImage from '../assets/images/loader.gif'

const Spinner = ({spinnerClass}) => {
  return (
    <img className='loader_image' width={210} src={loaderImage} alt="" />
  );
};

export default Spinner;