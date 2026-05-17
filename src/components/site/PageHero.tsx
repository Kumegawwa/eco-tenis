import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="container-prose relative z-10 pb-20 text-bone">
        <div className="eyebrow opacity-80 animate-rise">{eyebrow}</div>
        <h1 className="mt-5 font-display font-light text-5xl md:text-7xl tracking-tight max-w-4xl text-balance animate-rise delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base md:text-lg opacity-85 animate-rise delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
