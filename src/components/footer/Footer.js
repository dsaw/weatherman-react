import React, {Component, Fragment} from 'react';
import {FaHeart, FaReact} from "react-icons/fa";

const Footer = () => {
  return (<div id="footer" className="p-4 d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center align-items-center text-dark w-100" style={{backgroundColor: '#fafafa'}}>
      <div className="footer-component text-center d-flex  w-100 w-md-25 my-2 my-md-0 justify-content-center">
        <a href="https://github.com/dsaw/weatherman-react">Github</a>
      </div>
      <div className="footer-component text-center d-flex  w-100 w-md-50 my-2 my-md-0 justify-content-center">
      Made with&nbsp;
        <span title="Heart" role="img" aria-label="Love" > <FaHeart color={'#e31b23'} size={18}/> </span>
        &nbsp;using&nbsp;
        <span title="React" role="img" aria-label="React"> <FaReact color={'#2acef7'} size={18}/> </span>
        &nbsp;by&nbsp; <a href="/"> Devesh</a>
      </div>
      <div className="footer-component text-center d-flex w-100 w-md-25 my-2 my-md-0 justify-content-center">
        <a href="https://github.com/dsaw/weatherman-react/blob/master/PRIVACY-POLICY.html">Privacy Policy </a>
      </div>
    </div>);
};

export default Footer;
