import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ui/ProgressBar'
import FAB from '../components/ui/FAB'
import { useSyllabus } from '../hooks/useSyllabus'

export default function Dashboard() {
  const navigate = useNavigate()
  const { syllabus, loading, error } = useSyllabus()

  const completedModules = syllabus.filter(m => m.status === 'completed')
  const currentModule = syllabus.find(m => m.status === 'in_progress')
  const upcomingModule = syllabus.find(m => m.status === 'locked')

  const progressPercent = syllabus.length > 0
    ? Math.round((completedModules.length / syllabus.length) * 100)
    : 0

  return (
    <div className="max-w-[container-max] mx-auto p-margin-desktop space-y-stack-lg">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-gutter border border-outline-variant">
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Welcome back, David Snir.</h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              {currentModule
                ? `Your DevOps journey continues. You're currently working on: ${currentModule.module_name}.`
                : 'Your DevOps journey continues. Explore your syllabus to see what\'s next.'}
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-[48px] font-black text-primary leading-none">{progressPercent}%</div>
            <div className="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">Course Complete</div>
          </div>
        </div>
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full accent-gradient opacity-10 blur-3xl" />
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Col */}
        <div className="lg:col-span-8 space-y-gutter">
          {/* Current Module */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter hover:shadow-sm transition-all">
            {loading ? (
              <div className="text-on-surface-variant">Loading modules…</div>
            ) : currentModule ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[32px]">terminal</span>
                    </div>
                    <div>
                      <span className="font-label-caps text-primary uppercase tracking-widest text-[11px]">Active Module</span>
                      <h3 className="font-headline-md text-headline-md text-on-surface">{currentModule.module_name}</h3>
                    </div>
                  </div>
                  <span className="font-code-sm text-on-surface-variant text-[13px]">
                    {currentModule.start_date} – {currentModule.end_date}
                  </span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">{currentModule.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-label-caps text-on-surface-variant text-[11px]">
                    <span>MODULE PROGRESS</span>
                    <span>65%</span>
                  </div>
                  <ProgressBar value={65} />
                </div>
              </>
            ) : (
              <p className="text-on-surface-variant">No active module found.</p>
            )}
          </div>

          {/* Upcoming / Last Completed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-gutter">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-secondary">hub</span>
                <h4 className="font-headline-sm text-headline-sm">Upcoming Topic</h4>
              </div>
              {upcomingModule ? (
                <>
                  <p className="text-body-md text-on-surface-variant mb-4">{upcomingModule.module_name}</p>
                  <span className="inline-flex items-center px-3 py-1 bg-secondary-fixed rounded-full text-on-secondary-fixed font-label-caps text-[10px]">
                    NEXT UP
                  </span>
                </>
              ) : (
                <p className="text-body-md text-on-surface-variant mb-4">All modules completed!</p>
              )}
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-gutter">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-tertiary">history</span>
                <h4 className="font-headline-sm text-headline-sm">Last Completed</h4>
              </div>
              {completedModules.length > 0 ? (
                <>
                  <p className="text-body-md text-on-surface-variant mb-4">{completedModules[completedModules.length - 1].module_name}</p>
                  <span className="inline-flex items-center px-3 py-1 bg-surface-container-high rounded-full text-on-surface-variant font-label-caps text-[10px]">
                    COMPLETED
                  </span>
                </>
              ) : (
                <p className="text-body-md text-on-surface-variant mb-4">No completed modules yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Col */}
        <div className="lg:col-span-4 space-y-gutter">
          {/* Module Overview */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Syllabus Overview</h3>
            <div className="space-y-4">
              {syllabus.slice(0, 4).map((mod) => (
                <div key={mod._id} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    mod.status === 'completed' ? 'bg-tertiary' :
                    mod.status === 'in_progress' ? 'bg-primary' : 'bg-outline'
                  }`} />
                  <span className={`text-sm ${mod.status === 'completed' ? 'text-on-surface-variant line-through' : 'text-on-surface'}`}>
                    {mod.module_name}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/topics')}
              className="w-full mt-6 py-3 border border-outline-variant rounded-lg text-on-surface hover:bg-surface-container transition-colors font-bold text-sm"
            >
              View All Topics
            </button>
          </div>

          {/* Instructor */}
          <div className="bg-primary-container text-on-primary-container rounded-xl p-gutter overflow-hidden relative">
            <h3 className="font-headline-sm text-headline-sm mb-4 relative z-10">Lead Instructor</h3>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-16 h-16 rounded-full border-2 border-on-primary-container/20 p-1">
                <img
                  src="https://i.pravatar.cc/150?img=57"
                  alt="Instructor"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">Major Aviram Levi</h4>
                <p className="text-sm opacity-80">SRE Specialist | IITC Alumnus</p>
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span>alevi@iitc-devops.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span>Slack: @Aviram_L</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-full" />
          </div>
        </div>
      </div>

      {/* Technical Roadmap */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
        <h3 className="font-headline-sm text-headline-sm mb-8">Semester 1: Technical Roadmap</h3>
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-outline-variant" />
          <div className="absolute left-[11px] top-0 h-[40%] w-[2px] accent-gradient" />
          <div className="space-y-stack-lg relative">
            {syllabus.map((mod, idx) => (
              <div key={mod._id} className="flex gap-6 items-start">
                {mod.status === 'completed' && (
                  <div className="z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary text-[14px]">
                    <span className="material-symbols-outlined text-[16px] font-bold" style={{ fontVariationSettings: "'FILL' 0, 'wght' 700" }}>check</span>
                  </div>
                )}
                {mod.status === 'in_progress' && (
                  <div className="z-10 w-6 h-6 rounded-full accent-gradient flex items-center justify-center text-on-primary ring-4 ring-primary/20">
                    <span className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                )}
                {mod.status === 'locked' && (
                  <div className="z-10 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-outline border border-outline-variant">
                    <span className="w-1.5 h-1.5 bg-outline rounded-full" />
                  </div>
                )}
                <div className={`flex-1 ${mod.status === 'completed' ? 'opacity-50' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-bold ${mod.status === 'locked' ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                      {mod.module_name}
                    </h4>
                    {mod.status === 'in_progress' && (
                      <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-label-caps rounded">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${mod.status === 'locked' ? 'text-on-surface-variant opacity-60' : 'text-on-surface-variant'}`}>
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {error && (
        <div className="text-center text-body-md text-on-surface-variant">
          Note: {error}
        </div>
      )}

      <FAB />
    </div>
  )
}