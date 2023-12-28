import React, { useContext } from "react";
import myContext from "../context/myContext";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const footerBackgroundColor = mode === "dark" ? "black" : "white";
  const footerTextColor = mode === "dark" ? "white" : "";

  return (
    <footer
      className="text-gray-600 body-font bg-gray-300"
      style={{
        backgroundColor: footerBackgroundColor,
        color: footerTextColor,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div
        className="bg-gray-200"
        style={{
          backgroundColor: footerBackgroundColor,
          color: footerTextColor,
        }}
      >
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to={"/"} className="flex">
            <div className="flex">
              <h1
                className="text-2xl font-bold px-2 py-1 rounded"
                style={{ color: footerTextColor }}
              >
                TEE-DEES
              </h1>
            </div>
          </Link>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://github.com/swayam-vij"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/rustyo_0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <FaInstagram size={24} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
