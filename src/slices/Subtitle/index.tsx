import { PrismicRichText } from "@prismicio/react";
import { Subtitle } from "./styles";

export default function Content({ slice }: any) {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.subtitle}
        components={{
          heading3: ({ children }) => <Subtitle>{children}</Subtitle>,
        }}
      />
    </section>
  );
}
