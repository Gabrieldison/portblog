import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      <PrismicRichText
        field={slice.primary.subtitle}
        components={{
          heading3: ({ children }) => (
            <h3 className="text-3xl mt-10 mb-3">{children}</h3>
          ),
        }}
      />
    </section>
  );
};

export default Subtitle;
