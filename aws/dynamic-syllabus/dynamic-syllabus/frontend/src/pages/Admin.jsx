import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const navigate = useNavigate()

  function handleUnlock(e) {
    e.preventDefault()
    if (password === 'admin123') {
      setUnlocked(true)
      setError('')
    } else {
      setError('Incorrect password. Access denied.')
    }
  }

  if (unlocked) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-gutter max-w-md w-full text-center shadow-xl">
          <span className="material-symbols-outlined text-[48px] text-primary mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
            lock_open
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Access Granted</h2>
          <p className="text-body-md text-on-surface-variant mb-6">Edit mode is now active. You can modify syllabus content.</p>
          <button
            onClick={() => navigate('/topics')}
            className="w-full py-3 rounded-lg accent-gradient text-white font-bold"
          >
            Go to Topics Editor
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full accent-gradient opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-secondary opacity-10 blur-3xl pointer-events-none" />

      <div className="relative z-10 bg-surface-container-lowest border-t-4 border-primary rounded-xl p-gutter max-w-sm w-full shadow-xl mx-4">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_lock
            </span>
          </div>
        </div>

        <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-2">Admin Access Required</h2>
        <p className="text-body-md text-on-surface-variant text-center mb-8">
          This section is restricted to authorized instructors only. Enter your credentials to unlock edit mode.
        </p>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">
              key
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          {error && (
            <p className="text-sm text-error flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">error</span>
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg accent-gradient text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            Unlock Terminal
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-outline-variant flex items-center justify-between text-[11px] text-on-surface-variant font-code-sm">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">wifi</span>
            192.168.1.104
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-error-container text-on-error-container rounded font-bold uppercase">LOCKED</span>
            <span className="px-2 py-0.5 bg-primary-container/10 text-primary rounded uppercase">SYS_MONITOR: ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
