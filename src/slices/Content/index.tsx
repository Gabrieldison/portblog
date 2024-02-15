import { PrismicRichText } from "@prismicio/react";
import { Paragraph } from "./styles";

export default function Content({ slice }: any) {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
        }}
      />
    </section>
  );
}
