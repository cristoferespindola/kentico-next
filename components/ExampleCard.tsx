interface ExampleCardProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

export default function ExampleCard({ title, description, variant = 'primary' }: ExampleCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-on-primary border-primary';
      case 'secondary':
        return 'bg-secondary text-on-secondary border-secondary';
      case 'success':
        return 'bg-success text-white border-success';
      case 'warning':
        return 'bg-warning text-black border-warning';
      case 'error':
        return 'bg-error text-white border-error';
      default:
        return 'bg-surface text-on-surface border-outline';
    }
  };

  return (
    <div className={`
      p-6 rounded-lg border-2 shadow-md
      transition-all duration-200 hover:shadow-lg
      ${getVariantClasses()}
    `}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
