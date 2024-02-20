import { useAllPrismicDocumentsByType } from "@prismicio/react";
import PostsList from "./PostsLists";
import { Container, WarningContainer } from "./styles";

export default function Blog() {
  const [documents] = useAllPrismicDocumentsByType("posts");
  // const [documents, isLoading] = useAllPrismicDocumentsByType("posts");

  // if (isLoading) {
  //   return (
  //     <WarningContainer>Em construção! Novidades em breve.</WarningContainer>
  //   );
  // }

  if (!documents || documents.length === 0) {
    return (
      <WarningContainer>
        Nenhum post encontrado. Volte em breve para novidades!
      </WarningContainer>
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
