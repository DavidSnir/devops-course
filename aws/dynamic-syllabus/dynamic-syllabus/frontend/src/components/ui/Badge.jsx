const variants = {
  primary: 'bg-primary-container text-white',
  surface: 'bg-surface-container text-on-surface-variant',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  error: 'bg-error-container text-on-error-container',
  gradient: 'accent-gradient text-white',
}

export default function Badge({ label, variant = 'surface', className = '' }) {
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full font-label-caps text-[10px] uppercase tracking-wider inline-flex items-center ${variants[variant] ?? variants.surface} ${className}`}
    >
      {label}
    </span>
  )
}
