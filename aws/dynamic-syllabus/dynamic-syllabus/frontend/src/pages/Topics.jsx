import { useState } from 'react'
import { useSyllabus } from '../hooks/useSyllabus'

const filterTabs = ['All Modules', 'Basics (1-4)', 'Dev (5-8)', 'Cloud (9-12)', 'CI/CD & Ops (13-17)']

const statusConfig = {
  completed: {
    label: 'Completed',
    icon: 'check_circle',
    iconFill: true,
    textClass: 'text-tertiary',
    progressValue: 100,
  },
  in_progress: {
    label: 'In Progress',
    icon: 'play_circle',
    iconFill: true,
    textClass: 'text-primary animate-pulse',
    progressValue: 65,
  },
  locked: {
    label: 'Locked',
    icon: 'lock_clock',
    iconFill: false,
    textClass: 'text-on-surface-variant',
    progressValue: 0,
  },
}

function formatDateRange(start, end) {
  if (!start || !end) return 'TBD'
  const startDate = new Date(start)
  const endDate = new Date(end)
  const options = { month: 'short', day: 'numeric' }
  return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}, ${endDate.getFullYear()}`
}

function ModuleCard({ module, index }) {
  const cfg = statusConfig[module.status] ?? statusConfig.locked
  const isActive = module.status === 'in_progress'

  return (
    <div
      className={`group relative bg-white rounded-xl p-6 hover:-translate-y-1 transition-all duration-200 ${
        isActive
          ? 'border-2 border-primary shadow-lg'
          : 'border border-outline-variant shadow-sm hover:shadow-md opacity-90'
      }`}
    >
      {isActive && (
        <div className="absolute -left-[2px] top-8 bottom-8 w-1 bg-primary rounded-r-full" />
      )}
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-2.5 py-0.5 rounded-full font-label-caps text-[10px] uppercase ${
            isActive ? 'bg-primary-container text-white' : 'bg-surface-container text-on-surface-variant'
          }`}
        >
          {module.category}
        </span>
        <span className={`flex items-center gap-1 font-bold text-body-md ${cfg.textClass}`}>
          <span
            className="material-symbols-outlined text-[18px]"
            style={cfg.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {cfg.icon}
          </span>
          {cfg.label}
        </span>
      </div>

      <h3
        className={`font-headline-sm text-headline-sm mb-2 transition-colors ${
          isActive ? 'text-primary font-bold' : 'group-hover:text-primary'
        }`}
      >
        {module.module_name}
      </h3>
      <p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">{module.description}</p>

      <div className="space-y-2 pt-4 border-t border-surface-container">
        <div className={`flex items-center gap-3 ${module.status === 'locked' ? 'opacity-60' : ''} text-on-surface-variant`}>
          <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-primary' : ''}`}>calendar_today</span>
          <span className={`text-body-md ${isActive ? 'font-semibold' : ''}`}>
            {formatDateRange(module.start_date, module.end_date)}
          </span>
        </div>
        {module.sub_modules && module.sub_modules.length > 0 && (
          <div className={`flex items-start gap-3 ${module.status === 'locked' ? 'opacity-60' : ''} text-on-surface-variant`}>
            <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-primary' : ''} mt-0.5`}>list</span>
            <div className="text-body-md">
              <span className="font-semibold">Topics:</span> {module.sub_modules.map(s => s.name).join(', ')}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 w-full bg-surface-container h-1 rounded-full overflow-hidden">
        <div
          className="h-full accent-gradient rounded-full"
          style={{ width: `${cfg.progressValue}%` }}
        />
      </div>

      {isActive && (
        <button className="mt-6 w-full py-2.5 rounded-lg accent-gradient text-white font-bold flex items-center justify-center gap-2">
          Join Live Lab
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      )}
    </div>
  )
}

export default function Topics() {
  const [activeFilter, setActiveFilter] = useState('All Modules')
  const [viewMode, setViewMode] = useState('grid')
  const { syllabus, loading } = useSyllabus()

  const completedCount = syllabus.filter(m => m.status === 'completed').length
  const progressPercent = syllabus.length > 0 ? Math.round((completedCount / syllabus.length) * 100) : 0

  const getFilteredModules = () => {
    if (activeFilter === 'All Modules') return syllabus
    const ranges = {
      'Basics (1-4)': [0, 3],
      'Dev (5-8)': [4, 7],
      'Cloud (9-12)': [8, 11],
      'CI/CD & Ops (13-17)': [12, 16],
    }
    const [start, end] = ranges[activeFilter] || [0, syllabus.length - 1]
    return syllabus.slice(start, end + 1)
  }

  const filteredModules = getFilteredModules()

  return (
    <div className="p-margin-desktop max-w-[container-max] mx-auto">
      {/* Filter Bar */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter mb-stack-lg">
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-body-md font-semibold transition-colors ${
                activeFilter === tab
                  ? 'accent-gradient text-white'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-body-md text-on-surface-variant">View as:</span>
          <div className="bg-surface-container p-1 rounded-lg flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64 text-on-surface-variant">Loading modules…</div>
      ) : (
        <div className={`grid gap-gutter ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredModules.map((mod, idx) => (
            <ModuleCard key={mod._id ?? idx} module={mod} index={idx} />
          ))}

          {/* Capstone Card */}
          <div className="lg:col-span-1 relative rounded-xl overflow-hidden min-h-[280px] accent-gradient p-8 text-white flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-[120px]">auto_awesome</span>
            </div>
            <div className="relative z-10">
              <span className="px-3 py-1 border border-white/30 bg-white/10 rounded-full font-label-caps text-[10px] mb-4 inline-block">
                Capstone Project
              </span>
              <h3 className="font-headline-md text-headline-md mb-2">The Lohamim Final Challenge</h3>
              <p className="text-body-md opacity-90 mb-6">
                A full-scale cloud migration project involving K8s, Terraform, and a complete CI/CD chain.
              </p>
              <button className="px-6 py-2 bg-white text-primary font-bold rounded-lg hover:bg-surface-container transition-colors">
                Project Brief
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Footer */}
      <section className="mt-stack-lg grid grid-cols-1 lg:grid-cols-4 gap-gutter">
        <div className="lg:col-span-3 bg-surface-container-low rounded-xl p-8 border border-outline-variant flex items-center justify-between">
          <div>
            <h4 className="font-headline-sm text-headline-sm mb-2">Course Completion Progress</h4>
            <p className="text-on-surface-variant text-body-md">You have completed {completedCount} modules out of {syllabus.length} total syllabus topics.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="transparent" className="text-surface-container-high" stroke="currentColor" strokeWidth="8" />
                <circle cx="40" cy="40" r="34" fill="transparent" className="text-primary" stroke="currentColor" strokeDasharray="213.6" strokeDashoffset={213.6 - (213.6 * progressPercent / 100)} strokeWidth="8" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-primary">{progressPercent}%</span>
            </div>
            <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
              View Full Report
            </button>
          </div>
        </div>
        <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-[48px] text-tertiary mb-3">emoji_events</span>
          <span className="font-bold text-headline-sm text-on-surface">{completedCount} Badges</span>
          <p className="text-body-md text-on-surface-variant">Earned this semester</p>
        </div>
      </section>
    </div>
  )
}
