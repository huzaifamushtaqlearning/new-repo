import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const links = [
    {
      title: "For further contact",
      data: [
        <a
          key="linkedin"
          href="https://www.linkedin.com/in/huzaifamushtaqofficial"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0d6efd", textDecoration: "none" }}
        >
          Reach out on LinkedIn
        </a>,
      ],
    },
  ];

  const socialLink = [
    {
      icon: <BsFacebook />,
      url: "https://www.facebook.com/huzaifamushtaqofficial",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/huzaifamushtaqofficial",
    },
    {
      icon: <BsTwitter />,
      url: "https://twitter.com/huzaifamushtaqofficial",
    },
    {
      icon: <BsInstagram />,
      url: "https://www.instagram.com/huzaifamushtaqofficial",
    },
    {
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@huzaifamushtaqofficial",
    },
  ];

  return (
    <footer className="footer">
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <ul className="social-icons">
            {socialLink.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0d6efd", fontSize: "1.4rem" }}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="links">
          {links.map(({ title, data }, index) => (
            <div className="link" key={index}>
              <h4>{title}</h4>
              <ul>
                {data.map((link, index2) => (
                  <li key={index2}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="lower">
        <span>&copy; Copyright 2023 Huzaifa Mushtaq</span>
      </div>
    </footer>
  );
}
