"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-800" />
          <span className="font-semibold text-black">Phlox | Portfolio</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex text-sm text-slate-600">
          <Link href="#" className="hover:text-slate-900">Home</Link>
          <Link href="#services" className="hover:text-slate-900">Services</Link>
          <Link href="#about" className="hover:text-slate-900">About</Link>
          <Link href="#portfolio" className="hover:text-slate-900">Portfolio</Link>
          <Link href="#contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        {/* Burger button (mobile) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-100"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-slate-900"
          >
            {isOpen ? (
              // X icon
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29 10.59 10.6l6.3-6.31 1.41 1.42Z"
              />
            ) : (
              // Hamburger icon
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm text-slate-700">
            <Link href="#" className="py-2 hover:text-slate-900" onClick={closeMenu}>Home</Link>
            <Link href="#services" className="py-2 hover:text-slate-900" onClick={closeMenu}>Services</Link>
            <Link href="#about" className="py-2 hover:text-slate-900" onClick={closeMenu}>About</Link>
            <Link href="#portfolio" className="py-2 hover:text-slate-900" onClick={closeMenu}>Portfolio</Link>
            <Link href="#contact" className="py-2 hover:text-slate-900" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}


