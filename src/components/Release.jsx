import React from "react";
import release1 from "../assets/release1.png";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">South Punjab AI & Tech Expo</h2>
          <p className="description">
            Honored to participate in South Punjab's inaugural Artificial Intelligence and Technology Expo held in Multan.
          </p>
          <p className="description">
            Received an appreciation certificate for contributions to innovation at this landmark event.
          </p>
          <p className="description">
            Proud to be recognized among leading innovators in AI and technology.
          </p>
       
        </div>
        <div className="image">
          <img src={release1} alt="AI Tech Expo" />
          <div className="ellipse pink"></div>
        </div>
      </div>
     
    </div>
  );
}