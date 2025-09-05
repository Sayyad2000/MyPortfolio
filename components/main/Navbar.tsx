"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icons
import clsx from "clsx"; // ✅ helps toggle classes cleanly

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  // ✅ Disable background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleMenu = (open: boolean) => {
    if (!open) {
      setAnimating(true); // start closing animation
      setTimeout(() => {
        setMenuOpen(false);
        setAnimating(false);
      }, 250); // match slideUp duration
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300 text-2xl">
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#Encryption" className="cursor-pointer">Certificates</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
          </div>
        </div>

        {/* Socials (Desktop) */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              className="text-white cursor-pointer"
              onClick={() => toggleMenu(false)}
            />
          ) : (
            <Menu
              size={28}
              className="text-white cursor-pointer"
              onClick={() => toggleMenu(true)}
            />
          )}
        </div>
      </div>

      {/* ✅ Mobile Dropdown with Backdrop */}
      {(menuOpen || animating) && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            onClick={() => toggleMenu(false)}
          ></div>

          {/* Dropdown */}
          <div
            className={clsx(
              "fixed top-[65px] left-0 w-full bg-[#030014ee] backdrop-blur-md shadow-lg flex flex-col items-center py-6 gap-6 text-gray-200 z-[100]",
              menuOpen ? "mobile-menu-enter" : "mobile-menu-exit"
            )}
          >
            <a href="#about-me" onClick={() => toggleMenu(false)}>About me</a>
            <a href="#skills" onClick={() => toggleMenu(false)}>Skills</a>
            <a href="#Encryption" onClick={() => toggleMenu(false)}>Certificates</a>
            <a href="#projects" onClick={() => toggleMenu(false)}>Projects</a>

            {/* Socials */}
            <div className="flex flex-row gap-5 mt-4">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
