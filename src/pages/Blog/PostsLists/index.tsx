import { PostContainer, PostSection } from "./styles";

interface PropsPostsList {
  data: Record<string, any>;
}

export default function PostsList({ data }: PropsPostsList) {
  return (
    <PostContainer>
      <PostSection>
        <h1>{data.title[0].text}</h1>
        <span>{data.description[0].text}</span>
      </PostSection>
    </PostContainer>
  );
}
