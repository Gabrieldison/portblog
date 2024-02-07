import { SliceZone, usePrismicDocumentByUID } from "@prismicio/react";
import { useParams } from "react-router";
import { Content, Image, Link, Subtitle } from "../../../slices";

export default function PostDetails() {
  const params = useParams();

  const postUID = params?.uid as string;

  const [document] = usePrismicDocumentByUID("posts", postUID);

  return (
    <div>
      <h1>{document?.data.title[0].text}</h1>
      <SliceZone
        slices={document?.data.body}
        components={{
          subtitle: Subtitle,
          image: Image,
          content: Content,
          link: Link,
        }}
      />
    </div>
  );
}
