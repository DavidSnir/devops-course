import { NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', icon: 'dashboard', label: 'Overview' },
  { to: '/timeline', icon: 'timeline', label: 'Timeline' },
  { to: '/calendar', icon: 'calendar_month', label: 'Calendar' },
  { to: '/topics', icon: 'list_alt', label: 'Topics' },
  { to: '#', icon: 'assignment', label: 'Assignments' },
  { to: '#', icon: 'quiz', label: 'Exams' },
  { to: '#', icon: 'folder_open', label: 'Resources' },
  { to: '#', icon: 'grade', label: 'Grades' },
]

export default function SideNavBar() {
  const navigate = useNavigate()

  return (
    <aside className="w-[280px] h-full fixed left-0 top-0 bg-surface dark:bg-on-background border-r border-outline-variant dark:border-outline flex flex-col py-stack-md px-stack-sm z-50">
      {/* Logo */}
      <div className="px-4 mb-stack-lg flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
        </div>
        <div>
          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-background">
            DevOps Lohamim
          </h2>
          <p className="text-[11px] font-label-caps text-on-surface-variant uppercase tracking-wider">
            Semester 1
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              isActive && to !== '#'
                ? 'flex items-center gap-3 px-4 py-2 text-primary dark:text-inverse-primary font-bold border-l-2 border-primary hover:bg-surface-container dark:hover:bg-surface-dim transition-colors duration-200 translate-x-1 transition-transform'
                : 'flex items-center gap-3 px-4 py-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container dark:hover:bg-surface-dim transition-colors duration-200'
            }
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Edit Mode */}
      <div className="mt-auto border-t border-outline-variant pt-4 px-4">
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors w-full"
        >
          <span className="material-symbols-outlined">lock</span>
          <span>Edit Mode</span>
        </button>
      </div>
    </aside>
  )
}
