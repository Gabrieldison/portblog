import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Subtitle`.
 */
export type SubtitleProps = SliceComponentProps<Content.SubtitleSlice>;

/**
 * Component for "Subtitle" Slices.
 */
const Subtitle = ({ slice }: SubtitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for subtitle (variation: {slice.variation}) Slices
    </section>
  );
};

export default Subtitle;
