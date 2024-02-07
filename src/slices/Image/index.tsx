import { PrismicImage } from "@prismicio/react";

export default function Image({ slice }: any) {
  return (
    <div>
      <PrismicImage field={slice.primary?.image} height={300} width={500} />
    </div>
  );
}
