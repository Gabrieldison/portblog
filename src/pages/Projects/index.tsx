import { useAllPrismicDocumentsByType } from "@prismicio/react";
import ProjectsList from "./ProjectsList";
import { Container, WarningContainer } from "./styles";

export default function Projects() {
  const [documents] = useAllPrismicDocumentsByType("projects");
  // const [documents, isLoading] = useAllPrismicDocumentsByType("projects");

  // if (isLoading) {
  //   return (
  //     <WarningContainer>Em construção! Novidades em breve.</WarningContainer>
  //   );
  // }

  if (!documents || documents.length === 0) {
    return (
      <WarningContainer>
        Nenhum projeto encontrado. Volte em breve para novidades!
      </WarningContainer>
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
