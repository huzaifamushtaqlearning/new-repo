import React from "react";
import home from "../assets/home.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Huzaifa Mushtaq</p>
          <h1 className="title">MERN Stack Developer</h1>
          <p className="description">
            Expert MERN Developer from Multan, Pakistan, crafting scalable web apps with React, Node.js, Express, and MongoDB for modern, seamless UI/UX.
          </p>
          <button>Hire Me</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="Huzaifa Mushtaq Portfolio" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse primary"></div>
            <div className="ellipse secondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}