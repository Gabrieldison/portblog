import {
  StackIcons,
  StackLabels,
  useGitHubAutomatedRepos,
} from "github-automated-repos";
import Link from "next/link";
import { AiFillApi } from "react-icons/ai";

const Projects = () => {
  const data = useGitHubAutomatedRepos("Gabrieldison", "projects");

  return (
    <main>
      {data.map((project) => (
        <Link
          href={project.html_url}
          target="_blank"
          key={project.id}
          className="flex gap-10 bg-zinc-900 rounded items-center pb-2"
        >
          <AiFillApi size={55} />

          <div>
            <h2 className="text-3xl mb-2">{project.name}</h2>
            <p className="mb-2">{project.description}</p>
            <div className="flex gap-2">
              {project.topics.map((icon) => (
                <StackLabels
                  key={icon}
                  itemTopics={icon}
                  className="bg-gray-700 rounded px-2"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Projects;
