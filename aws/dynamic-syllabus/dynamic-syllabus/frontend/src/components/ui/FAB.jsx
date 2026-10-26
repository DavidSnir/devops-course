export default function FAB({ onClick, icon = 'add' }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-margin-desktop right-margin-desktop w-14 h-14 rounded-full accent-gradient text-on-primary shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 duration-200 z-50"
    >
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </button>
  )
}
