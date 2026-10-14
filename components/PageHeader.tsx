const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

export default function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="mx-auto max-w-[1400px] px-4 pt-20 pb-16 sm:px-6 lg:px-10 lg:pt-28 lg:pb-20">
      <h1 className="animate-rise max-w-[18ch] text-5xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className="animate-rise mt-8 max-w-[56ch] text-lg leading-relaxed text-muted" style={delay(0.1)}>
        {lead}
      </p>
    </header>
  );
}
