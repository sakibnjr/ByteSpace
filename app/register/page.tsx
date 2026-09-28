"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Registration successful! Welcome to ByteSpace.");
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-primary-800 text-white overflow-hidden py-8 px-4 sm:px-6">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="register-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#register-grid)" />
        </svg>
      </div>

      {/* Floating 3D ornaments */}
      <div className="absolute -left-12 top-24 w-36 h-36 opacity-70 pointer-events-none hidden md:block">
        <Image
          src="/images/img_17_cone_01_2_f9c0e0fd.png"
          alt="Decorative Cone"
          width={144}
          height={144}
          className="object-contain"
        />
      </div>
      <div className="absolute -right-12 bottom-24 w-40 h-40 opacity-70 pointer-events-none hidden md:block">
        <Image
          src="/images/img_16_cone_01_2_92fc70a3.png"
          alt="Decorative Cone"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Top Header Logo */}
      <div className="relative z-10 mx-auto max-w-[1200px] w-full flex items-center justify-between">
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
        <Link
          href="/"
          className="text-xs sm:text-sm font-medium text-neutral-200 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Centered Signup Card */}
      <div className="relative z-10 mx-auto my-8 w-full max-w-[500px] rounded-3xl bg-white p-8 sm:p-10 shadow-2xl text-neutral-900 border border-neutral-100">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
            Create an Account
          </h1>
          <p className="text-sm text-neutral-500">
            The registration process is straightforward, allowing you to sign up quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jamie Davis"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="designer@example.com"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-primary-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-xl bg-secondary-400 py-3.5 text-base font-semibold text-neutral-950 transition-all hover:bg-secondary-300 hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Continue"}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary-600 hover:underline">
            Login
          </Link>
        </div>
      </div>

      {/* Bottom Footer info */}
      <div className="relative z-10 text-center text-xs text-neutral-300">
        © 2026 ByteSpace. All rights reserved.
      </div>
    </div>
  );
}
