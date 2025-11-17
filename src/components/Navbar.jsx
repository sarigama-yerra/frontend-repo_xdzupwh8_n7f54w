import { useState } from 'react'
import { Menu, X, Plane, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'Hotels', href: '#hotels' },
    { label: 'Transport', href: '#transport' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold">
            <Plane className="w-6 h-6 text-blue-400" />
            InstaYatra
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
              <Phone className="w-4 h-4" /> Get Help 24x7
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-200 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              <Phone className="w-4 h-4" /> Get Help 24x7
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
