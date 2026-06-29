const LOGOS = [
  { name: "lowercarbon", style: "l1", mark: "dot" },
  { name: "Third Derivative", style: "l2" },
  { name: "gener8tor", style: "l3", italicNum: true },
  { name: "Cool Climate", style: "l4" },
  { name: "4ward.vc", style: "l5" },
  { name: "Enduring Planet", style: "l6", mark: "sq" },
  { name: "Anthropocene", style: "l1" },
  { name: "Riffle", style: "l2", mark: "ring" },
] as const;

function LogoMark({ kind }: { kind: "dot" | "sq" | "ring" }) {
  const base = "inline-block shrink-0";
  if (kind === "ring")
    return <span className={`${base} w-3.5 h-3.5 rounded-full border-[1.5px] border-ink/55`} />;
  if (kind === "sq")
    return <span className={`${base} w-3.5 h-3.5 rounded-[2px] bg-ink/55`} />;
  return <span className={`${base} w-3.5 h-3.5 rounded-full bg-ink/55`} />;
}

function Logo({ logo }: { logo: (typeof LOGOS)[number] }) {
  const styleMap: Record<string, string> = {
    l1: "font-display font-medium text-[17px] tracking-[-0.02em]",
    l2: "font-display font-medium text-[17px] tracking-[-0.005em]",
    l3: "font-display font-medium text-[17px]",
    l4: "font-display font-medium text-[14.5px] uppercase tracking-[0.06em]",
    l5: "font-display italic text-[18px]",
    l6: "font-display font-medium text-[17px] tracking-[-0.005em]",
  };
  const cls = styleMap[logo.style] ?? styleMap.l1;
  return (
    <span className="inline-flex items-center gap-2.5 text-ink/60 whitespace-nowrap">
      {logo.mark && <LogoMark kind={logo.mark} />}
      <span className={cls}>
        {logo.italicNum ? (
          <>
            gener<span className="italic">8</span>tor
          </>
        ) : (
          logo.name
        )}
      </span>
    </span>
  );
}

export function LogoCarousel() {
  return (
    <div className="overflow-hidden carousel-mask">
      <div className="flex gap-14 w-max carousel-track items-center py-2">
        {LOGOS.map((logo, i) => (
          <Logo key={i} logo={logo} />
        ))}
        {LOGOS.map((logo, i) => (
          <Logo key={`dup-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
