import { useAllPrismicDocumentsByType } from "@prismicio/react";
import PostsList from "./PostsLists";
import { Container, LoadingIndicator, WarningContainer } from "./styles";

export default function Blog() {
  const [documents, isLoading] = useAllPrismicDocumentsByType("posts");

  if (!documents || documents.length === 0) {
    return (
      <Container>
        <WarningContainer>
          Nenhum post encontrado. Volte em breve para novidades!
        </WarningContainer>
      </Container>
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
      {documents.map((post) => (
        <a href={`/blog/${post.uid}`} key={post.uid}>
          <PostsList data={post.data} />
        </a>
      ))}
    </Container>
  );
}
