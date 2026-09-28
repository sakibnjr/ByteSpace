"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full bg-primary-800 text-neutral-50 border-b border-primary-700/50">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image
            src="/icons/logo.svg"
            alt="ByteSpace"
            width={140}
            height={30}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-neutral-100">
          <Link href="/" className="hover:text-secondary-400 transition-colors">
            Home
          </Link>
          <Link href="#courses" className="hover:text-secondary-400 transition-colors">
            Courses
          </Link>
          <Link href="#creators" className="hover:text-secondary-400 transition-colors">
            Creators
          </Link>
        </nav>

        {/* Desktop Auth CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-[15px] font-medium text-neutral-50 hover:text-secondary-300 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-secondary-400 px-5 py-2.5 text-[15px] font-semibold text-neutral-950 transition-all hover:bg-secondary-300 hover:shadow-lg active:scale-95"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg p-2 text-neutral-100 hover:bg-primary-700/50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary-700/60 bg-primary-900 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-neutral-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-secondary-400"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-secondary-400"
            >
              Courses
            </Link>
            <Link
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-secondary-400"
            >
              Creators
            </Link>
          </nav>
          <div className="pt-4 border-t border-primary-800 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl border border-primary-600 text-neutral-50 hover:bg-primary-800 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-secondary-400 text-neutral-950 font-semibold hover:bg-secondary-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
