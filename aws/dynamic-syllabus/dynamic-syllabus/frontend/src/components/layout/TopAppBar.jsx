import { useLocation, useNavigate } from 'react-router-dom'

const pageTitles = {
  '/dashboard': 'IITC Syllabus',
  '/topics': 'Topics & Modules',
  '/timeline': 'Course Timeline',
  '/calendar': 'Calendar',
  '/admin': 'Admin',
}

export default function TopAppBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const title = pageTitles[location.pathname] ?? 'IITC Syllabus'

  return (
    <header className="sticky top-0 z-40 bg-surface/80 dark:bg-on-background/80 backdrop-blur-md flex justify-between items-center w-full px-margin-desktop h-16 border-b border-outline-variant dark:border-outline shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="font-headline-md text-headline-md font-black tracking-tight text-on-surface dark:text-on-background">
          {title}
        </h1>
        <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-caps text-on-surface-variant text-[11px]">
          Semester 1
        </span>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 font-body-md text-primary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">lock</span>
          <span className="hidden md:inline">Edit Mode ( Lecturer Only )</span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-outline-variant">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Student Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}
