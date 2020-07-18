import React, {Component, Fragment} from 'react';
import logo from '../../weatherman.png';

const Header = () => {
   return (<div id="" className="w-100 d-flex justify-content-center p-3">
     <div className="mx-2 px-2">
      <a href="/">
        <img id="weatherman-logo" alt="Weather Man" style={{width: "3rem", height: "3rem"}} src={logo} className="" />
      </a></div>
    </div>
  );
}

export default Header;
