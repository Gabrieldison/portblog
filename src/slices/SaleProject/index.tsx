import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SaleProject`.
 */
export type SaleProjectProps = SliceComponentProps<Content.SaleProjectSlice>;

/**
 * Component for "SaleProject" Slices.
 */
const SaleProject = ({ slice }: SaleProjectProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sale_project (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SaleProject;
