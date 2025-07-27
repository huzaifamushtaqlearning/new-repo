import React from "react";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        {/* VisioBoard Project */}
        <div className="content">
          <div className="video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_SAxwdKuZHE"
              title="VisioBoard - Canvas Collaboration App"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="title">VisioBoard – The Digital Canvas</h2>
          <p className="description">
            VisioBoard is a collaborative canvas platform designed for teams to sketch, plan, and innovate visually in real time.
          </p>
          <p className="description">
            Lightweight and intuitive — perfect for brainstorming, teaching, or creative sessions. Built for productivity.
          </p>
        </div>

        {/* CloudWatch Project */}
        <div className="content">
          <div className="video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/rxuUEJkCXes"
              title="CloudWatch - Cloud Storage Management"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="title">CloudWatch – Smart Cloud Storage</h2>
          <p className="description">
            CloudWatch is a robust file management system that helps users upload, organize, and manage data securely in the cloud.
          </p>
          <p className="description">
            Built with modern cloud tech to ensure speed, reliability, and full control over your digital assets.
          </p>
        </div>
      </div>
    </div>
  );
}
