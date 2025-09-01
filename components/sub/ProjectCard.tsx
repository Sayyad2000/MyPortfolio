// components/sub/ProjectCard.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
}

const techIcons: Record<string, string> = {
  Dotnet: "/Dotnet.png",
  MSSQL: "/MSSQL.png",
  Azure: "/Azure.png",
  AWS: "/AWS.png",
  Python: "/Python.png",
  docker: "/docker.webp",
  Putty: "/Putty.png",
  Postman: "/Postman.png",
  Nextjs: "/next.png",
  FramerMotion: "/framer.png",
  TypeScript: "/ts.png",
  Tailwind: "/tailwind.png",
  GitHub: "/GitHub.png",
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { translateY: -6, boxShadow: "0 18px 40px rgba(2,6,23,0.5)", transition: { duration: 0.25 } },
};

const imageVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.06, y: -8, transition: { duration: 0.38, ease: "easeOut" } },
  tap: { scale: 0.98 },
};

const ProjectCard: React.FC<Props> = ({
  src,
  title,
  description,
  technologies = [],
  githubLink,
}) => {
  const cardContent = (
    <motion.article
      className="relative overflow-hidden rounded-lg border border-[#2A0E61] bg-[#0F0F1B] flex flex-col h-full"
      variants={cardVariants}
      initial="initial"
      whileInView="enter"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      <motion.div
        className="relative w-full h-56 md:h-64 rounded-t-lg overflow-hidden"
        variants={imageVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </motion.div>

      <div className="p-4 flex-1 flex flex-col relative z-10">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-1">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#2A0E61] text-white text-xs px-2 py-1 rounded-md"
              >
                {techIcons[tech] ? (
                  <Image
                    src={techIcons[tech]}
                    alt={tech}
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  />
                ) : null}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );

  if (!githubLink) return cardContent;

  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`Open ${title} repository on GitHub`}
      title={`Open ${title} repository on GitHub`}
    >
      {cardContent}
    </a>
  );
};

export default ProjectCard;
