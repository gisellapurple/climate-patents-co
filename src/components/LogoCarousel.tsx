const LOGOS = [
  "Lowercarbon Capital",
  "gener8tor",
  "Third Derivative",
  "Anthropocene Ventures",
  "4ward.vc",
  "Cool Climate Collective",
  "Enduring Planet",
  "Riffle Ventures",
  "Climate Tech Bootcamp",
  "Sustainable Ocean Alliance",
  "iCademy",
];

export function LogoCarousel() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="overflow-hidden carousel-mask">
      <div className="flex gap-0 w-max carousel-track items-center py-2">
        {items.map((name, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display font-medium text-[15px] tracking-[-0.01em] text-ink/50 whitespace-nowrap px-5">
              {name}
            </span>
            <span className="w-1 h-1 rounded-full bg-ink/25 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
