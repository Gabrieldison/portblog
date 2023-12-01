import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Demo`.
 */
export type DemoProps = SliceComponentProps<Content.DemoSlice>;

/**
 * Component for "Demo" Slices.
 */
const Demo = ({ slice }: DemoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for demo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Demo;
