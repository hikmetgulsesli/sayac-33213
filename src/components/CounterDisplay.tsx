interface CounterDisplayProps {
  count: number;
  label?: string;
}

export function CounterDisplay({ count, label = 'Mevcut Değer' }: CounterDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-surface-container-lowest rounded-3xl p-12 mb-12 shadow-[0_12px_40px_rgba(70,72,212,0.06)] relative border border-outline-variant/15">
      <div className="relative z-10 text-center">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-secondary mb-4 block">{label}</span>
        <div
          className="text-[5rem] md:text-[8rem] font-bold tracking-tighter leading-none"
          style={{
            background: 'linear-gradient(135deg, #4648d4 0%, #6063ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px rgba(70,72,212,0.15)',
          }}
        >
          {count}
        </div>
      </div>
    </div>
  );
}
