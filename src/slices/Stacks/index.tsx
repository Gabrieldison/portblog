import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Stacks`.
 */
export type StacksProps = SliceComponentProps<Content.StacksSlice>;

/**
 * Component for "Stacks" Slices.
 */
const Stacks = ({ slice }: StacksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for stacks (variation: {slice.variation}) Slices
    </section>
  );
};

export default Stacks;
