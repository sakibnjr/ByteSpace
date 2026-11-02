"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-16 pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200/80">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/icons/logo_dark.svg"
                alt="ByteSpace"
                width={140}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm sm:text-base text-neutral-600 max-w-sm">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-600 focus:bg-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors active:scale-95 shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-xs font-medium text-emerald-600">
                  Thank you for subscribing to ByteSpace updates!
                </p>
              )}
              <p className="text-xs text-neutral-400 leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Browse */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Browse</h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Featured Courses</Link></li>
                <li><Link href="#categories" className="hover:text-primary-600 transition-colors">Featured Categories</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Business</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">IT & Software</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Design</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Development</Link></li>
              </ul>
            </div>

            {/* Topics */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Categories</h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Marketing</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Photography</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Finance</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Sport & Fitness</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Creative Writing</Link></li>
                <li><Link href="#courses" className="hover:text-primary-600 transition-colors">Music & Audio</Link></li>
              </ul>
            </div>

            {/* Platform */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">Platform</h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li><Link href="/register" className="hover:text-primary-600 transition-colors">Become a Creator</Link></li>
                <li><Link href="#" className="hover:text-primary-600 transition-colors">Affiliate Program</Link></li>
                <li><Link href="#" className="hover:text-primary-600 transition-colors">Contact Support</Link></li>
                <li><Link href="#" className="hover:text-primary-600 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary-600 transition-colors">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
