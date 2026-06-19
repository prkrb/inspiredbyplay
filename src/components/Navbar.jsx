import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PhoneCTA from './PhoneCTA'

const audienceLinks = [
  { to: '/corporate', label: 'For Companies' },
  { to: '/schools', label: 'For Schools' },
  { to: '/events', label: 'For Events' },
]

const mainLinks = [
  { to: '/programs', label: 'Programs' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/locations/vancouver', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0" onClick={() => { setOpen(false); setDropdownOpen(false) }}>
          <img src="/logo.png" alt="Inspired by Play" className="h-8 sm:h-10" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Who We Serve dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${dropdownOpen ? 'text-teal-700' : 'text-ink hover:text-teal-700'}`}
            >
              Who We Serve
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-border rounded-lg shadow-lg py-1">
                {audienceLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-medium transition-colors ${isActive ? 'text-teal-700 bg-sage-50' : 'text-ink hover:text-teal-700 hover:bg-sage-50'}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors whitespace-nowrap ${isActive ? 'text-teal-700' : 'text-ink hover:text-teal-700'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <PhoneCTA variant="nav" />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-4 space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted pt-1 pb-2">Who We Serve</p>
          {audienceLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium py-2.5 pl-3 border-l-2 ${isActive ? 'text-teal-700 border-teal-700' : 'text-ink border-transparent'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="border-t border-border/50 my-2" />
          {mainLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium py-2.5 ${isActive ? 'text-teal-700' : 'text-ink'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3">
            <PhoneCTA className="w-full justify-center" />
          </div>
        </div>
      )}
    </nav>
  )
}
