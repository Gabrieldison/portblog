import { PrismicLink } from "@prismicio/react";
import { Container } from "./styles";

export default function Link({ slice }: any) {
  return (
    <Container>
      <PrismicLink field={slice.primary.link}>
        {slice.primary.link.url}
      </PrismicLink>
    </Container>
  );
}
