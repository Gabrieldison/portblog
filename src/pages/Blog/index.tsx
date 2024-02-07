import { useAllPrismicDocumentsByType } from "@prismicio/react";
import PostsList from "./PostsLists";
import { Container } from "./styles";

export default function Blog() {
  const [documents] = useAllPrismicDocumentsByType("posts");

  return (
    <Container>
      {documents?.map((posts) => (
        <a href={`/blog/${posts.uid}`} key={posts.uid}>
          <PostsList data={posts.data} />
        </a>
      ))}
    </Container>
  );
}
