import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="relative z-50 flex flex-col items-center justify-center py-5 scroll-mt-[70px]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row md:justify-center gap-10 px-10">
        <div className="w-full md:w-1/3 flex">
          <ProjectCard
            src="/ECommerce.png"
            title="E-Commerce Application"
            description="An E-Commerce Toy Store where products like soft toys, remote control cars etc. can be bought from the comfort of home over the Internet."
            technologies={["Dotnet", "MSSQL", "Azure"]}
            githubLink="https://github.com/Sayyad2000/Capstone-Project.git"
          />
        </div>

        <div className="w-full md:w-1/3 flex">
          <ProjectCard
            src="/ToDo.jpg"
            title="Deploying a Python App Using Docker & AWS EC2"
            description="Docker is a containerization platform that enables to create, deploy and run applications easily with the help of containers. Deployment of python application has been done using Docker containers and AWS EC2."
            technologies={["AWS", "Python", "docker", "Putty", "Postman"]}
            githubLink="https://github.com/Sayyad2000/Final-Year-B.Tech-Project.git"
          />
        </div>

        <div className="w-full md:w-1/3 flex">
          <ProjectCard
            src="/Portfolio.png"
            title="Space Themed Website"
            description="A modern, space-themed portfolio with a sleek dark interface and smooth animations, it offers a seamless, immersive browsing experience. Built using Next.js, Tailwind CSS, and Framer Motion."
            technologies={["Nextjs", "TypeScript", "FramerMotion", "Tailwind"]}
            githubLink="https://github.com/Sayyad2000/MyPortfolio.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
