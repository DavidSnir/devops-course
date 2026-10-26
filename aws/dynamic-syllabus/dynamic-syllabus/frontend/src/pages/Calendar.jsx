import { useState } from 'react'
import { useSyllabus } from '../hooks/useSyllabus'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Calendar() {
  const { syllabus, loading } = useSyllabus()
  const [selectedDate, setSelectedDate] = useState(null)
  const [viewDate, setViewDate] = useState(new Date())

  const currentMonth = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay()
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const goToPrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
  }

  const getModulesForDate = (day) => {
    if (!day) return []
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
    return syllabus.filter(mod => {
      const start = mod.start_date ? new Date(mod.start_date) : null
      const end = mod.end_date ? new Date(mod.end_date) : null
      if (!start) return false
      return date >= start && (!end || date <= end)
    })
  }

  const isModuleStart = (day, mod) => {
    if (!day || !mod.start_date) return false
    const start = new Date(mod.start_date)
    return day === start.getDate() && start.getMonth() === viewDate.getMonth() && start.getFullYear() === viewDate.getFullYear()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-tertiary text-white'
      case 'in_progress': return 'bg-primary text-white'
      default: return 'bg-outline text-on-surface'
    }
  }

  return (
    <div className="max-w-[container-max] mx-auto p-margin-desktop space-y-stack-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface">{currentMonth}</h2>
            <div className="flex gap-2">
              <button onClick={goToPrevMonth} className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">chevron_left</span>
              </button>
              <button onClick={goToNextMonth} className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-0">
            {DAYS.map((d) => (
              <div key={d} className="text-center font-label-caps text-[11px] text-on-surface-variant uppercase py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border border-outline-variant rounded-lg overflow-hidden">
            {cells.map((day, idx) => {
              const isSelected = day === selectedDate
              const dayDate = day ? new Date(viewDate.getFullYear(), viewDate.getMonth(), day) : null
              const eventMod = dayDate ? syllabus.find(mod => {
                if (!mod.start_date || !mod.end_date) return false
                const start = new Date(mod.start_date)
                const end = new Date(mod.end_date)
                return dayDate >= start && dayDate <= end
              }) : null
              const isStart = eventMod && dayDate && new Date(eventMod.start_date).getTime() === dayDate.getTime()
              return (
                <div
                  key={idx}
                  onClick={() => day && setSelectedDate(day)}
                  className={`min-h-[70px] flex flex-col ${
                    !day ? 'bg-surface-container-low' : isSelected ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest hover:bg-surface-container-high'
                  }`}
                >
                  {day && (
                    <>
                      {eventMod && (
                        <div className={`text-[9px] px-1 py-0.5 font-medium truncate text-white h-5 flex items-center justify-center ${getStatusColor(eventMod.status)}`}>
                          {eventMod.module_name}
                        </div>
                      )}
                      <div className={`text-sm font-bold p-1 ${isSelected ? 'text-white' : 'text-on-surface'}`}>
                        {day}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Day Schedule */}
        <div className="space-y-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
            <div className="mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {selectedDate ? `Module Details` : 'Select a date'}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {selectedDate ? `${new Date(viewDate.getFullYear(), viewDate.getMonth(), selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}` : 'Daily Schedule'}
              </p>
            </div>

            {loading ? (
              <p className="text-on-surface-variant">Loading…</p>
            ) : selectedDate ? (
              <div className="space-y-4">
                {(() => {
                  const mods = getModulesForDate(selectedDate)
                  if (mods.length === 0) {
                    return <p className="text-body-md text-on-surface-variant">No module on this date.</p>
                  }
                  return mods.map(mod => (
                    <div key={mod._id}>
                      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="material-symbols-outlined text-primary">school</span>
                          <span className="font-bold text-on-surface">{mod.module_name}</span>
                        </div>
                        <p className="text-body-md text-on-surface-variant mb-3">{mod.description}</p>
                        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          <span>{mod.start_date} – {mod.end_date}</span>
                        </div>
                        {mod.sub_modules?.length > 0 && (
                          <div className="flex items-start gap-2 mt-2 text-sm text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">list</span>
                            <div>
                              <span className="font-semibold">Topics:</span> {mod.sub_modules.map(s => s.name).join(', ')}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[10px] font-label-caps inline-block ${
                        mod.status === 'completed' ? 'bg-tertiary/10 text-tertiary' :
                        mod.status === 'in_progress' ? 'bg-primary-container text-on-primary-container' :
                        'bg-surface-container text-on-surface-variant'
                      }`}>
                        {mod.status === 'completed' ? 'COMPLETED' : mod.status === 'in_progress' ? 'IN PROGRESS' : 'UPCOMING'}
                      </div>
                    </div>
                  ))
                })()}
              </div>
            ) : (
              <p className="text-body-md text-on-surface-variant">
                Click on a date to see module details.
              </p>
            )}

            <button className="mt-6 w-full py-2.5 rounded-lg accent-gradient text-white font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">videocam</span>
              Enter Virtual Classroom
            </button>
          </div>

          {/* Coming Up Next */}
          <div className="bg-secondary-fixed border border-outline-variant rounded-xl p-gutter">
            <h4 className="font-label-caps text-[11px] text-on-secondary-fixed uppercase tracking-wider mb-3">Coming Up Next</h4>
            {(() => {
              const nextModule = syllabus.find(m => m.status === 'in_progress') || syllabus.find(m => m.status === 'locked')
              return nextModule ? (
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">notifications_active</span>
                  <div>
                    <p className="font-bold text-on-surface">{nextModule.module_name}</p>
                    <p className="text-body-md text-on-surface-variant">Starts {nextModule.start_date}</p>
                  </div>
                </div>
              ) : (
                <p className="text-on-surface-variant">No upcoming modules.</p>
              )
            })()}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
          <div className="text-[32px] font-black text-primary leading-none mb-1">
            {syllabus.length > 0 ? Math.round((syllabus.filter(m => m.status === 'completed').length / syllabus.length) * 100) : 0}%
          </div>
          <div className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider">Course Progress</div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
          <div className="text-[32px] font-black text-on-surface leading-none mb-1">
            {syllabus.filter(m => m.status === 'completed').length}/{syllabus.length}
          </div>
          <div className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider">Completed Modules</div>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">dns</span>
          </div>
          <div>
            <div className="font-bold text-on-surface">Lab Environment</div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-body-md text-on-surface-variant">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}