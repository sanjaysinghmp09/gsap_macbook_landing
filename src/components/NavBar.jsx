import React from 'react'
import { navLinks } from '../constants'
function NavBar() {
  return (
    <header className="w-full bg-black text-gray-200">
      <nav className="flex items-center justify-between px-4 py-2">
        <img src="/logo.svg" alt="Apple Logo" className="w-6" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label} className="hover:text-white transition">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button>
            <img src="/search.svg" alt="Search" className="w-5" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" className="w-5" />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <img src="/menu.svg" alt="Menu" className="w-6" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
