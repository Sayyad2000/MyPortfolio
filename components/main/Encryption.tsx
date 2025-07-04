"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div
        id="Encryption"
        className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"
      >
        <div className="absolute w-auto h-auto top-0 z-[5]">
          <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            Certifications
          </motion.div>
        </div>

        <div className="absolute inset-x-0 translate-y-[-30px] z-[20] flex items-center justify-center space-x-8">
          {/* AZ-204 */}
          <div className="flex flex-col items-center">
            <Image
              src="/AZ204.png"
              alt="AZ-204 Certification"
              width={300}
              height={300}
              className="w-[300px] h-[300px] transition-all duration-200 hover:translate-y-2"
            />
            <span
              className="inline-flex items-center px-6 py-1.5 mt-2
                 bg-white/10 backdrop-blur-sm
                 border border-white/20
                 rounded-full
                 text-sm font-medium text-white"
            >
              AZ‑204
            </span>
          </div>

          {/* AZ-900 */}
          <div className="flex flex-col items-center">
            <Image
              src="/AZ900.png"
              alt="AZ-900 Certification"
              width={300}
              height={300}
              className="w-[300px] h-[300px] transition-all duration-200 hover:translate-y-2"
            />
            <span
              className="inline-flex items-center px-6 py-1.5 mt-2
                 bg-white/10 backdrop-blur-sm
                 border border-white/20
                 rounded-full
                 text-sm font-medium text-white"
            >
              AZ‑900
            </span>
          </div>

          {/* AI-900 */}
          <div className="flex flex-col items-center">
            <Image
              src="/AI900.png"
              alt="AI-900 Certification"
              width={300}
              height={300}
              className="w-[300px] h-[300px] transition-all duration-200 hover:translate-y-2"
            />
            <span
              className="inline-flex items-center px-6 py-1.5 mt-2
                 bg-white/10 backdrop-blur-sm
                 border border-white/20
                 rounded-full
                 text-sm font-medium text-white"
            >
              AI‑900
            </span>
          </div>
        </div>

        <div className="absolute z-[20] bottom-[10px] px-[5px] w-full">
          <div className="cursive text-[20px] font-medium text-center text-gray-300">
            Hope you like my certifications!
          </div>
        </div>

        <div className="w-full flex items-start justify-center absolute">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-auto"
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
