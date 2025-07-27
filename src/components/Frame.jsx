import React from "react";

export default function YouTubeIframe() {
  return (
    <div
      className="iframe-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        paddingBottom: "30%", // Thori zyada height (between 16:9 and banner)
        border: "4px solid #333",
        borderRadius: "8px",
        overflow: "hidden"
      }}
    >
      <iframe
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        src="https://www.youtube.com/embed/-r1U4PDZKrk"
        title="VisioBoard Introduction"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
