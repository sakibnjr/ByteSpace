"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full bg-transparent text-white">
      <div className="mx-auto flex h-24 lg:h-[120px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[120px]">
        {/* Left: ByteSpace Logo (Figma: left: 122px, top: 35px) */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/icons/logo.svg"
            alt="ByteSpace"
            width={171}
            height={35}
            priority
            className="h-8 sm:h-9 w-auto"
          />
        </Link>

        {/* Center: Nav Menu (Figma: left: 614.5px, top: 47px) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-white">
          <Link href="/" className="hover:text-secondary-400 transition-colors font-semibold">
            Home
          </Link>
          <Link href="#courses" className="hover:text-secondary-400 transition-colors text-white/90">
            Courses
          </Link>
          <Link href="#creators" className="hover:text-secondary-400 transition-colors text-white/90">
            Creators
          </Link>
        </nav>

        {/* Right: Auth & Cart (Figma: left: 1146px, top: 48px) */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-white">
          <Link
            href="/login"
            className="hover:text-secondary-400 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="hover:text-secondary-400 transition-colors"
          >
            Join Us
          </Link>
          <button
            type="button"
            className="p-1 text-white hover:text-secondary-400 transition-colors"
            aria-label="Cart"
          >
            <Image
              src="/icons/shopping_bag.svg"
              alt="Cart"
              width={20}
              height={24}
              className="h-5 w-auto"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg p-2 text-white hover:bg-white/10"
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
        <div className="md:hidden border-t border-white/10 bg-primary-900/95 backdrop-blur-md px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-neutral-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-secondary-400 font-semibold"
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
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:text-secondary-400"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-secondary-400 hover:text-secondary-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
