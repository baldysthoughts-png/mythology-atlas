export function MediaFrame({
  aspect = 'aspect-[16/10]',
  label,
  accent = 'var(--gold)',
}: {
  aspect?: string;
  label?: string;
  accent?: string;
}) {
  return (
    <div
      className={`${aspect} relative w-full overflow-hidden rounded-md`}
      style={{
        background:
          'radial-gradient(120% 140% at 20% 15%, var(--bg-card-hover) 0%, var(--bg-card) 45%, var(--bg-elevated) 100%)',
        border: '1px solid var(--rule)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${accent} 12%, transparent)` }}
      />
      {label && (
        <span
          className="font-mono-label absolute bottom-2 left-2.5 text-[9px] tracking-[0.14em] uppercase"
          style={{ color: 'var(--ink-faint)' }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
