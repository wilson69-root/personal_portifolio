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
      <section
        ref={ref}
        id={id}
        className={`px-6 sm:px-8 py-24 sm:py-32 ${className}`}
      >
        <FadeIn>
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-16 text-center tracking-tight">
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
