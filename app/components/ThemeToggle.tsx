'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
