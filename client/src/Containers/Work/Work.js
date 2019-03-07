import React from "react";
import raw_elements from "./RAWElements_1.jpg";
import hydroflask from "./Hydroflask_6.jpg";
import "./Work.css";

const Work = () => {
  return (
    <div id="work" className="Work">
      <h1>REEL</h1>
      <div className="Reel">
        <iframe
          src="https://player.vimeo.com/video/317622250"
          width="80%"
          height="auto"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
      <div className="Videos">
        <img src={raw_elements} width="50%" alt="Project" />
        <img src={hydroflask} width="50%" alt="Project" />
        <img src={hydroflask} width="50%" alt="Project" />
        <img src={raw_elements} width="50%" alt="Project" />
      </div>
    </div>
  );
};
export default Work;
