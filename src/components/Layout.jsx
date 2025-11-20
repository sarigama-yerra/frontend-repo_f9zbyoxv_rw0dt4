import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, Bookmark, User, Layers, Home, Filter, Sparkles } from 'lucide-react'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  const nav = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/categories', label: 'All Categories', icon: Layers },
    { to: '/search', label: 'Search', icon: Search },
    { to: '/filters', label: 'Filters', icon: Filter },
    { to: '/saved', label: 'Saved Items', icon: Bookmark },
    { to: '/dashboard', label: 'User Dashboard', icon: User },
    { to: '/pricing', label: 'Pricing', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-400 shadow-lg shadow-indigo-500/20" />
            <span className="font-semibold tracking-tight text-white">AI Content</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>
                <Icon className="w-4 h-4" /> {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/search" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/5">
            <div className="px-4 py-2 grid grid-cols-2 gap-2">
              {nav.map(({ to, label }) => (
                <Link key={to} to={to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-slate-200 bg-white/5">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(45rem_45rem_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-indigo-500/5 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AI Content Dashboard – Built for exploration
      </footer>
    </div>
  )
}
