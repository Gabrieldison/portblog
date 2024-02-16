import { useAllPrismicDocumentsByType } from "@prismicio/react";
import ProjectsList from "./ProjectsList";
import { Container } from "./styles";

export default function Projects() {
  const [documents] = useAllPrismicDocumentsByType("projects");

  return (
    <Container>
      {documents?.map((projects) => (
        <a href={`/projects/${projects.uid}`} key={projects.uid}>
          <ProjectsList data={projects.data} />
        </a>
      ))}
    </Container>
  );
}
