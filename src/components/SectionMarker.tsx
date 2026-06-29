export function SectionMarker({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="section-marker whitespace-nowrap">
        § {id} / {label}
      </span>
      <div className="flex-1 h-px bg-ink/15" />
    </div>
  );
}
