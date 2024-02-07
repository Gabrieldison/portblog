import { PrismicLink } from "@prismicio/react";

export default function Link({ slice }: any) {
  return (
    <div>
      <PrismicLink field={slice.primary.link} />
    </div>
  );
}
