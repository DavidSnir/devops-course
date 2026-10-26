import { useState, useEffect } from 'react'
import { fetchSyllabus } from '../api/syllabusApi'

function getCategory(moduleIndex) {
  const categories = ['FOUNDATIONS', 'SYSTEMS', 'NETWORK', 'DEVELOPMENT', 'VERSION CONTROL', 'DEVELOPMENT', 'CLOUD', 'CI/CD', 'CONTAINERIZATION', 'KUBERNETES', 'CLOUD', 'INFRASTRUCTURE', 'INFRASTRUCTURE', 'MONITORING', 'CI/CD', 'GITOPS', 'CAPSTONE']
  return categories[moduleIndex] || 'GENERAL'
}

function getStatus(startDate, endDate, moduleIndex) {
  const now = new Date()
  const start = startDate ? new Date(startDate) : null
  const end = endDate ? new Date(endDate) : null

  if (end && end < now) return 'completed'
  if (start && start <= now && (!end || end >= now)) return 'in_progress'
  return 'locked'
}

export function useSyllabus() {
  const [syllabus, setSyllabus] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSyllabus()
      .then((data) => {
        let modules = []
        if (Array.isArray(data)) {
          modules = data
        } else if (data?.syllabus) {
          modules = data.syllabus
        }
        
        const enriched = modules.map((mod, idx) => {
          const moduleId = mod._id || mod.id || `mod-${idx}`
          const formattedMod = {
            ...mod,
            _id: moduleId,
            start_date: mod.start_date ? new Date(mod.start_date).toISOString().split('T')[0] : null,
            end_date: mod.end_date ? new Date(mod.end_date).toISOString().split('T')[0] : null,
            category: getCategory(idx),
            status: getStatus(mod.start_date, mod.end_date, idx),
          }
          return formattedMod
        })
        
        setSyllabus(enriched)
      })
      .catch((err) => {
        setError('Failed to load syllabus data.')
        console.error('Fetch error:', err)
      })
      .finally(() => setLoading(false))
  }, [])

  return { syllabus, loading, error }
}