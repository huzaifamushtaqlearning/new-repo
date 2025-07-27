import React from "react";

export default function SignUp() {
  return (
    <div className="signup">
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          padding: "2rem 1rem",
        }}
      >
        {/* LEFT TEXT SECTION */}
        <div className="content" style={{ flex: "1", minWidth: "300px" }}>
          <p
            className="sub-title"
            style={{ color: "#888", fontSize: "1.2rem" }}
          >
            Our Proud
          </p>
          <h1
            className="title"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              margin: "0.5rem 0",
            }}
          >
            Our Successful Product
          </h1>
          <p
            className="description"
            style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}
          >
            <strong>Visioboard</strong> is an intelligent visual canvas app that
            allows you to brainstorm, map ideas, and collaborate in real time.
            Built to bring structure to your creativity — fast, flexible, and
            beautiful.
          </p>
          <a
            href="https://visioboard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#444")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
          >
            Check Visioboard
          </a>
        </div>

        {/* RIGHT VIDEO SECTION */}
        <div
          className="video-container"
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "600px",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/rxuUEJkCXes"
            title="Visioboard Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "12px",
              border: "3px solid #ccc",
              width: "100%",
              height: "315px",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
