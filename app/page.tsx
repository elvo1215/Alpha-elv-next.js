import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-6 space-y-6">
      <ThemeToggle />

      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Alpha_elv is rising from Kericho 🌍🔥
      </h1>

      <p className="text-lg md:text-xl text-center max-w-xl">
        Built with resilience, faith, and code. From the forest to the future.
      </p>
    </main>
  )
}
