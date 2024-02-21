import { useAllPrismicDocumentsByType } from "@prismicio/react";
import ProjectsList from "./ProjectsList";
import { Container, LoadingIndicator, WarningContainer } from "./styles";

export default function Projects() {
  const [documents, isLoading] = useAllPrismicDocumentsByType("projects");

  if (!documents || documents.length === 0) {
    return (
      <WarningContainer>
        Nenhum projeto encontrado. Volte em breve para novidades!
      </WarningContainer>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    );
  }

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
