import { PrismicImage } from "@prismicio/react";
import { Container } from "./styles";

export default function Image({ slice }: any) {
  return (
    <Container>
      <PrismicImage
        field={slice.primary?.image}
        style={{ marginBottom: "25px" }}
      />
    </Container>
  );
}
