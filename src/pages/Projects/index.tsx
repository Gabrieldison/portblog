// Projects.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ProjectDescription,
  ProjectItem,
  ProjectLink,
  ProjectList,
  ProjectsContainer,
} from "./styles";

type Repo = {
  name: string;
  description: string;
  stars: number;
  url: string;
  topics: string[];
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/GabrielDison/repos"
        );
        const data = response.data;

        const topicRequests = data.map(async (repo: any) => {
          const topicsResponse = await axios.get(repo.url + "/topics", {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          });
          const topicsData = topicsResponse.data;

          return {
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            url: repo.html_url,
            topics: topicsData.names,
            hasPortfolioTag: topicsData.names.includes("portfolio"),
          };
        });

        const reposData = await Promise.all(topicRequests);

        const filteredRepos = reposData.filter((repo) => repo.hasPortfolioTag);

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Erro ao buscar os repositórios do GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <ProjectsContainer>
      <ProjectList>
        {repos.map((repo, index) => (
          <ProjectLink
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={repo.url}
          >
            <ProjectItem>
              {repo.name}
              <ProjectDescription>{repo.description}</ProjectDescription>
            </ProjectItem>
          </ProjectLink>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
}
