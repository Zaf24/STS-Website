interface SectionLabelProps {
  english: string;
  tamil?: string;
}

const SectionLabel = ({ english, tamil }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary">
        {english}
      </span>
      {tamil && (
        <>
          <span className="w-6 h-px bg-primary/30" />
          <span className="font-tamil text-sm text-primary/60">{tamil}</span>
        </>
      )}
    </div>
  );
};

export default SectionLabel;
