import Image from "next/image";
import React from "react";

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

const ProjectCard = ({
  src,
  title,
  description,
  technologies = [],
  githubLink,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0F0F1B]">
      {/* Project Image */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="p-4 relative">
        {/* Title & Description */}
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Technology Icons Row */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-[#2A0E61] text-white text-xs px-2 py-1 rounded-md"
              >
                {techIcons[tech] && (
                  <Image
                    src={techIcons[tech]}
                    alt={tech}
                    width={16}
                    height={16}
                  />
                )}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        )}

        {/* GitHub Icon Below Technologies */}
        {githubLink && (
          <div className="mt-4 z-20">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer pointer-events-auto"
              title="View on GitHub"
            >
              <Image
                src="/GitHub.png"
                alt="GitHub Repository"
                width={24}
                height={24}
                className="hover:opacity-80"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
