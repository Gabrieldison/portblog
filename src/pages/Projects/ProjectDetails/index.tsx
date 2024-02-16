import { SliceZone, usePrismicDocumentByUID } from "@prismicio/react";
import { useParams } from "react-router";
import { Content, Image, Link, Subtitle } from "../../../slices";
import { Container, Title } from "./styles";

export default function ProjectDetails() {
  const params = useParams();

  const postUID = params?.uid as string;

  const [document] = usePrismicDocumentByUID("projects", postUID);

  console.log(document);

  return (
    <Container>
      <Title>{document?.data.title[0].text}</Title>
      <SliceZone
        slices={document?.data.body}
        components={{
          subtitle: Subtitle,
          image: Image,
          content: Content,
          link: Link,
        }}
      />
    </Container>
  );
}
