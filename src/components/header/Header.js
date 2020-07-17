import React, {Component, Fragment} from 'react';
import logo from '../../weatherman.png';

const Header = () => {
   return (<div id="header" className="d-flex justify-content-between p-3">
     <div className="ml-2 px-2">
      <a href="/">
        <img id="weatherman-logo" style={{width: "3rem", height: "3rem"}} src={logo} className="" />
      </a></div>
    </div>
  );
}

export default Header;
