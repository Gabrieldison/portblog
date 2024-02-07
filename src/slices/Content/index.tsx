import { PrismicRichText } from "@prismicio/react";

export default function Content({ slice }: any) {
  return (
    <div>
      <PrismicRichText field={slice.primary.content} />
    </div>
  );
}
