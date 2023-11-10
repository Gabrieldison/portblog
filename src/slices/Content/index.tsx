import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

/**
 * Component for "Section" Slices.
 */
const Section = ({ slice }: SectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for section (variation: {slice.variation}) Slices
    </section>
  );
};

export default Section;
