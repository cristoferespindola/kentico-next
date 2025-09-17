type Props = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
};

export default function Chip({ children, selected = false, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
        selected
          ? 'bg-primary text-on-primary border-primary'
          : 'bg-surface text-on-surface border-outline hover:bg-surface-variant'
      }`}
    >
      {children}
    </button>
  );
}
