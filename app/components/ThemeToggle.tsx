'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  console.log('ThemeToggle is rendering') // 👈 Add this line

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
    className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
  >
    {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
  </button>
)
