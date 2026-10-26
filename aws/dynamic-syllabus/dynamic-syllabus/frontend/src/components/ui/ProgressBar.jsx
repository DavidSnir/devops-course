export default function ProgressBar({ value = 0, className = '' }) {
  return (
    <div className={`h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full accent-gradient rounded-full transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
