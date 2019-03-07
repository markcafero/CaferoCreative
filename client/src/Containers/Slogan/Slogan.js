import React from "react";
import "./Slogan.scss";
import Arrow from "../Buttons/Arrow.js";

const Slogan = () => {
  return (
    <div className="Slogan">
      <div className="Stars">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" />
      </div>
      <div className="Words">
        <h1>We Design Visual Experiences</h1>
      </div>
      <div className="SeeOurWork">
        <h2>See Our Work</h2>
        <Arrow />
      </div>
    </div>
  );
};

export default Slogan;
