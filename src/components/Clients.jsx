import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];

  return (
    <div className="clients">
      {/* Styled Heading */}
      <h4
        className="sub-title"
        style={{
          backgroundColor: "",   // black background
          color: "#fff",             // white text
          padding: "0.5rem 1.5rem",
          borderRadius: "8px",
          textAlign: "center",
          margin: "0 auto",
          width: "fit-content",
          fontSize: "1.5rem",
          gap:"px"
        }}
      >
        Our partners
      </h4>

      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
