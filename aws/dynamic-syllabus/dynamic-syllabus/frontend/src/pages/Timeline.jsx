import { useState } from 'react'
import ProgressBar from '../components/ui/ProgressBar'
import { useSyllabus } from '../hooks/useSyllabus'
import { updateSyllabus } from '../api/syllabusApi'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || ''

export default function Timeline() {
  const { syllabus, loading } = useSyllabus()
  const [editModule, setEditModule] = useState(null)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [saving, setSaving] = useState(false)

  const completedCount = syllabus.filter(m => m.status === 'completed').length
  const progressPercent = syllabus.length > 0
    ? Math.round((completedCount / syllabus.length) * 100)
    : 0

  const statsCards = [
    { label: 'Overall Progress', value: `${progressPercent}%`, sub: `${completedCount}/${syllabus.length} Modules`, icon: 'trending_up', color: 'text-primary' },
    { label: 'Current Track', value: syllabus.find(m => m.status === 'in_progress')?.module_name.split(' ')[0] || 'N/A', sub: 'Active Module', icon: 'layers', color: 'text-secondary' },
    { label: 'Next Milestone', value: syllabus.length > 0 ? `Module ${syllabus.length}` : 'N/A', sub: 'Final Module', icon: 'emoji_events', color: 'text-tertiary' },
    { label: 'Modules Left', value: `${syllabus.filter(m => m.status !== 'completed').length}`, sub: 'Remaining', icon: 'timer', color: 'text-on-surface-variant' },
  ]

  return (
    <div className="max-w-[container-max] mx-auto p-margin-desktop space-y-stack-lg">
      {/* Stats Bento */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {statsCards.map((s) => (
          <div key={s.label} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter">
            <div className={`flex items-center gap-2 mb-2 ${s.color}`}>
              <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
              <span className="font-label-caps text-[11px] uppercase tracking-wider">{s.label}</span>
            </div>
            <div className="font-black text-[28px] text-on-surface leading-none">{s.value}</div>
            <div className="text-body-md text-on-surface-variant mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      {loading ? (
        <div className="text-center py-12 text-on-surface-variant">Loading timeline…</div>
      ) : (
        <>
          <div className="relative">
            {/* Center Line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant -translate-x-1/2" />

            <div className="space-y-stack-lg lg:space-y-0">
              {syllabus.map((mod, idx) => {
                const isLeft = idx % 2 === 0
                const isCapstone = mod.category === 'CAPSTONE'

                return (
                  <div key={mod._id} className={`relative lg:flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center lg:mb-12`}>
                    {/* Card */}
                    <div className={`lg:w-[45%] ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div
                        className={`bg-surface-container-lowest border rounded-xl p-gutter shadow-sm transition-all hover:shadow-md ${
                          mod.status === 'in_progress' ? 'border-primary border-2' : 'border-outline-variant'
                        } ${isCapstone ? 'accent-gradient text-white border-0' : ''}`}
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                          <span className={`font-label-caps text-[11px] uppercase tracking-wider ${isCapstone ? 'text-white/80' : 'text-on-surface-variant'}`}>
                            {mod.start_date} – {mod.end_date}
                          </span>
                          {mod.status === 'in_progress' && (
                            <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-label-caps rounded">
                              IN PROGRESS
                            </span>
                          )}
                        </div>
                        <h3 className={`font-headline-sm text-headline-sm mb-1 ${isCapstone ? 'text-white' : 'text-on-surface'}`}>
                          {mod.module_name}
                        </h3>
                        <p className={`text-body-md mb-3 ${isCapstone ? 'text-white/80' : 'text-on-surface-variant'}`}>
                          {mod.description}
                        </p>
                        <span className={`font-label-caps text-[11px] ${isCapstone ? 'text-white/60' : 'text-outline'}`}>
                          {mod.category}
                        </span>
                        {ADMIN_PASSWORD && (
                          <button
                            onClick={() => setEditModule(mod)}
                            className={`ml-2 px-2 py-1 text-[10px] font-bold rounded border ${isCapstone ? 'border-white/40 text-white hover:bg-white/10' : 'border-outline text-outline hover:bg-outline hover:text-white'} transition-all`}
                          >
                            EDIT
                          </button>
                        )}
                        {mod.status === 'in_progress' && (
                          <div className="mt-4">
                            <ProgressBar value={65} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Center Marker */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                      {mod.status === 'completed' && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white z-10">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 700" }}>check</span>
                        </div>
                      )}
                      {mod.status === 'in_progress' && (
                        <div className="w-8 h-8 rounded-full accent-gradient flex items-center justify-center text-white ring-4 ring-primary/20 z-10 animate-pulse">
                          <span className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                      {mod.status === 'locked' && (
                        <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-outline font-bold z-10">
                          {idx + 1}
                        </div>
                      )}
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-[45%]" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.location.href = '/topics'}
              className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              Syllabus Grid
            </button>
            <button className="px-6 py-3 accent-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">download</span>
              Download PDF Roadmap
            </button>
          </div>
        </>
      )}

      {editModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter max-w-sm w-full shadow-2xl">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Edit Module</h3>
            <p className="text-body-md text-on-surface-variant mb-4">
              <strong>{editModule.module_name}</strong>
            </p>
            
            {!passwordError ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-bold text-on-surface mb-2">Admin Password</label>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter admin password"
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (passwordInput === ADMIN_PASSWORD) {
                        handleStatusChange()
                      } else {
                        setPasswordError('Incorrect password')
                      }
                    }}
                    disabled={saving}
                    className="flex-1 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all"
                  >
                    {saving ? 'Saving...' : 'Confirm'}
                  </button>
                  <button
                    onClick={() => {
                      setEditModule(null)
                      setPasswordInput('')
                      setPasswordError('')
                    }}
                    className="flex-1 py-2 border border-outline text-on-surface font-bold rounded-lg hover:bg-outline hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-error mb-4">{passwordError}</p>
                <button
                  onClick={() => {
                    setPasswordError('')
                    setPasswordInput('')
                  }}
                  className="py-2 px-6 border border-outline text-on-surface font-bold rounded-lg hover:bg-outline hover:text-white transition-all"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )

  async function handleStatusChange() {
    setSaving(true)
    try {
      const moduleIndex = syllabus.findIndex(m => m._id === editModule._id)
      const updatedModules = [...syllabus]
      const now = new Date()
      
      if (editModule.status === 'completed') {
        updatedModules[moduleIndex] = { ...editModule, status: 'in_progress', end_date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
      } else if (editModule.status === 'in_progress') {
        updatedModules[moduleIndex] = { ...editModule, status: 'completed', end_date: new Date().toISOString().split('T')[0] }
      } else {
        updatedModules[moduleIndex] = { ...editModule, status: 'in_progress', start_date: new Date().toISOString().split('T')[0], end_date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] }
      }
      
      await updateSyllabus(null, { syllabus: updatedModules, admin_password: ADMIN_PASSWORD })
      window.location.reload()
    } catch (err) {
      console.error('Failed to update:', err)
      setPasswordError('Failed to save changes')
    } finally {
      setSaving(false)
    }
  }
}