export function ImagePlaceholder({ label, aspect = 'aspect-[16/9]' }: { label: string; aspect?: string }) {
  return (
    <div
      className={`${aspect} w-full flex items-center justify-center rounded-md`}
      style={{
        background:
          'repeating-linear-gradient(135deg, var(--bg-card) 0px, var(--bg-card) 10px, var(--bg-elevated) 10px, var(--bg-elevated) 20px)',
        border: '1px solid var(--rule)',
      }}
    >
      <span className="font-mono-label text-[10px] tracking-[0.18em] uppercase" style={{ color: 'var(--ink-faint)' }}>
        {label}
      </span>
    </div>
  );
}
