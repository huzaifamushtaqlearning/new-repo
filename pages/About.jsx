import React from "react";

export default function AboutPage() {
  return (
    <div
      className="about-page"
      style={{
        display: "flex",
        flexDirection: "column", // Mobile first
        gap: "2rem",
        padding: "2rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      {/* TEXT SECTION */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          About Huzaifa Mushtaq
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Huzaifa Mushtaq is a passionate modern tech learner from Multan, Pakistan.
          He specializes in MERN stack development and enjoys building creative, real-world applications.
          Always eager to explore new technologies and AI trends, he’s on a mission to become a top-tier developer.
        </p>
      </div>

      {/* YOUTUBE SHORTS SECTION */}
      <div
        className="iframe-container"
        style={{
          position: "relative",
          paddingBottom: "177%", // Vertical video ratio for Shorts
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
          border: "3px solid #333",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/OJ_hoBRFQy0"
          title="YouTube Shorts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Responsive adjustment for desktop */}
      <style>
        {`
          @media (min-width: 768px) {
            .about-page {
              flex-direction: row;
              align-items: flex-start;
            }
            .about-page > div {
              flex: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
