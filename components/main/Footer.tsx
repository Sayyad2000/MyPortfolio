"use client";
import React from "react";
import { RxGithubLogo, RxDiscordLogo } from "react-icons/rx";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaUser,
} from "react-icons/fa";
import { SiGmail, SiLeetcode, SiX } from "react-icons/si";

// Gmail compose URL
const gmailUrl = [
  "https://mail.google.com/mail/?view=cm&fs=1",
  "to=Sayyad2000.com@gmail.com",
  "su=" + encodeURIComponent("Hello from your site!"),
  "body=" + encodeURIComponent("Hi Sayyad,\n\nI saw your portfolio and …"),
].join("&");

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-around">
        {/* Community Links */}
        <div className="min-w-[200px] flex flex-col items-start pl-4">
          <h4 className="font-bold text-lg">Community</h4>
          <a
            href="https://www.linkedin.com/in/sayyad-azahar-86011a1a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <FaLinkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/GAhVa8Apfr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <SiLeetcode size={20} />
            <span className="text-sm">LeetCode</span>
          </a>
          <a
            href="https://github.com/Sayyad2000/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <FaGithub size={20} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="min-w-[200px] flex flex-col items-start pl-4">
          <h4 className="font-bold text-lg">Social Media</h4>
          <a
            href="https://www.instagram.com/sayyadazahar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <FaInstagram size={20} />
            <span className="text-sm">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/sayyad.azahar.2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <FaFacebook size={20} />
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href="https://x.com/SayyadAzahar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 hover:bg-gray-700 rounded z-50 cursor-pointer"
          >
            <SiX size={20} />
            <span className="text-sm">Twitter </span>
          </a>
        </div>

        {/* Contact Section */}
        <div className="min-w-[200px] flex flex-col items-start pl-4">
          <h4 className="font-bold text-lg pl-4">Contact</h4>

          <button
            onClick={scrollToTop}
            className="my-4 text-sm hover:underline pl-2 cursor-pointer bg-transparent text-left focus:outline-none z-50 inline-flex items-center space-x-2"
          >
            <FaUser size={18} />
            <span>About Me</span>
          </button>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-4 space-x-2 pl-2 text-sm hover:underline z-50"
          >
            <SiGmail size={20} />
            <span>Sayyad2000.com@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
