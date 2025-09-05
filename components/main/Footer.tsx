"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa";
import { SiGmail, SiLeetcode, SiX, SiInstagram, SiFacebook } from "react-icons/si";

const gmailUrl = [
  "https://mail.google.com/mail/?view=cm&fs=1",
  "to=Sayyad2000.com@gmail.com",
  "su=" + encodeURIComponent("Hello from your site!"),
  "body=" + encodeURIComponent("Hi Sayyad,\n\nI saw your portfolio and …"),
].join("&");

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // vertical padding only; no horizontal padding so columns don't shift
  const linkCls = "flex items-center gap-3 text-sm hover:text-white transition py-2 px-0";

  return (
    <footer
      role="contentinfo"
      className="w-full bg-[#030014ee] text-gray-300 py-8 px-4 border-t border-gray-700 mt-auto"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* stacked on tiny, 3 columns from xs (>=375px); items-start aligns top baseline */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 xs:gap-12 items-start">
          {/* Community */}
          <div className="justify-self-start">
            <h4 className="font-bold text-base sm:text-lg mb-4 mx-0">Community</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/sayyad-azahar-86011a1a3/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <FaLinkedin className="w-full h-full" />
                </span>
                <span className="leading-none">LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/GAhVa8Apfr/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <SiLeetcode className="w-full h-full" />
                </span>
                <span className="leading-none">LeetCode</span>
              </a>

              <a
                href="https://github.com/Sayyad2000/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <FaGithub className="w-full h-full" />
                </span>
                <span className="leading-none">GitHub</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="justify-self-center">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-center mx-0">Social Media</h4>
            <div className="flex flex-col gap-2 items-start">
              <a
                href="https://www.instagram.com/sayyadazahar/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <SiInstagram className="w-full h-full" />
                </span>
                <span className="leading-none">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/sayyad.azahar.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <SiFacebook className="w-full h-full" />
                </span>
                <span className="leading-none">Facebook</span>
              </a>

              <a
                href="https://x.com/SayyadAzahar/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <SiX className="w-full h-full" />
                </span>
                <span className="leading-none">Twitter</span>
              </a>
            </div>
          </div>

          {/* Contact - right-aligned (Gmail nudged slightly for visual baseline match) */}
          <div className="justify-self-end">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-left mx-0">Contact</h4>

            <div className="flex flex-col gap-2 items-end">
              <button
                onClick={scrollToTop}
                className={linkCls + " text-right"}
                aria-label="About Me"
              >
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0">
                  <FaUser className="w-full h-full" />
                </span>
                <span className="leading-none">About Me</span>
              </button>

              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls + " text-right break-words"}
                aria-label="Send Gmail"
              >
                {/* micro-nudge: moves Gmail icon up 1px for perfect alignment */}
                <span className="inline-flex w-6 h-6 items-center justify-center flex-shrink-0 -translate-y-[1px] -translate-x-[26px]">
                  <SiGmail className="w-full h-full" />
                </span>
                <span className="leading-none translate-x-[-25px]">Gmail</span>
              </a>
            </div>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sayyad Azahar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
