import React, { Fragment } from "react";
import "./Loader.scss";

const Loader = ({ color, message }) => {
  // TODO: refactor to add param & enhance text styling
  return (
    <Fragment>
      <div className="spinner">
        <div className="puff-one"> </div>
        <div className="puff-two"></div>
      </div>
      {message ? (
        <div className="loader-message text-center my-1">{message}</div>
      ) : null}
    </Fragment>
  );
};

export default Loader;
