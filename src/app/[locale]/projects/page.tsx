"use client";

import { useDarkMode } from "@/src/context/DarkModeContext";
import { StackLabels, useGitHubAutomatedRepos } from "github-automated-repos";
import Link from "next/link";

interface Project {
  id: number;
  html_url: string;
  name: string;
  description: string;
  topics: string[];
}

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDarkMode }) => (
  <Link
    href={project.html_url}
    target="_blank"
    key={project.id}
    className={`flex rounded-lg items-center p-3 mb-3 ${
      isDarkMode
        ? "border border-zinc-950 hover:bg-zinc-950 hover:bg-opacity-75 transition duration-100 delay-75"
        : "border border-gray-100 hover:bg-gray-50 hover:bg-opacity-75 transition duration-100 delay-75"
    }`}
    style={{ flex: "1 0 calc(33.333% - 20px)" }}
  >
    <div>
      <h2 className="text-lg font-semibold">{project.name}</h2>
      <p className="mb-2 text-gray-600">{project.description}</p>
      <div className="flex gap-2">
        {project.topics.map((icon) => (
          <StackLabels
            key={icon}
            itemTopics={icon}
            className={`rounded px-2 ${
              isDarkMode
                ? "bg-gray-900 text-gray-200"
                : "bg-stone-200 text-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  </Link>
);

const Projects: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const data: Project[] = useGitHubAutomatedRepos("Gabrieldison", "projects");

  return (
    <main className="flex flex-wrap gap-3">
      {data.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isDarkMode={isDarkMode}
        />
      ))}
    </main>
  );
};

export default Projects;
