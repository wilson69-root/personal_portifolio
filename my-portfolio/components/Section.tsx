import { type FC, type PropsWithChildren, forwardRef } from "react";
import FadeIn from "./FadeIn";

type SectionProps = PropsWithChildren<{
  title?: string;
  className?: string;
  id?: string;
}>;

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ title, children, className = "", id }, ref) => {
    return (
      <section ref={ref} id={id} className={`px-4 sm:px-8 ${className}`}>
        <FadeIn>
          {title && (
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-10 text-center transition-colors duration-300">
              {title}
            </h2>
          )}
          {children}
        </FadeIn>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
