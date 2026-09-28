import Image from "next/image";
import Link from "next/link";

export default function GrowthStats() {
  return (
    <section className="py-24 bg-neutral-50/70 border-t border-neutral-100 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Block 1: Professional Growth with Stats & Course Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
                Accelerate Your Future
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 leading-[1.2]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900">12K+</div>
                <div className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">Active Students</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900">70+</div>
                <div className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">Certified Courses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-neutral-900">16+</div>
                <div className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">Expert Creators</div>
              </div>
            </div>

            <div>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-primary-700 transition-all active:scale-95"
              >
                Start Learning Now
              </Link>
            </div>
          </div>

          {/* Right Visual: Featured Card Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] rounded-3xl bg-white p-5 shadow-2xl border border-neutral-200/80">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/img_18_frame_93ad9f9e.png"
                  alt="Featured Course"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm">
                  Beginner
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-neutral-900/80 px-2.5 py-1 text-xs font-semibold text-white flex items-center gap-1">
                  <span className="text-secondary-400">★</span> 4.5
                </span>
              </div>

              <div className="pt-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>17 Lessons</span>
                  <span>•</span>
                  <span>2 hours 16 mins</span>
                  <span>•</span>
                  <span>59 Comments</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Learn Figma from Basic</h3>
                <p className="text-xs text-neutral-400">by purepearl studio</p>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div className="flex items-center -space-x-2">
                    <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/img_3_ellipse_b44979e1.png" alt="Student" fill className="object-cover" />
                    </div>
                    <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/img_19_ellipse_3fe55918.png" alt="Student" fill className="object-cover" />
                    </div>
                    <span className="pl-3 text-xs font-semibold text-neutral-500">26+ enrolled</span>
                  </div>
                  <div className="text-xl font-bold text-neutral-900">$25 <span className="text-xs font-normal text-neutral-400">/lifetime</span></div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Accent Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 items-center gap-3 rounded-2xl bg-neutral-900 p-4 shadow-xl text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-400 text-neutral-950 font-bold text-lg">
                ✓
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-400">Course Verified</p>
                <p className="text-sm font-semibold">100% Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Preview Card */}
          <div className="order-2 lg:order-1 relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[460px] rounded-3xl bg-white p-6 shadow-xl border border-neutral-200 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                    BE
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">ByteSpace Studio Editor</h4>
                    <p className="text-xs text-neutral-400">Version 3.2 • Live Sync</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-100 text-secondary-800 text-xs font-semibold">
                  Active
                </span>
              </div>

              {/* Module List Mockup */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-neutral-400">01</span>
                    <span className="text-xs font-semibold text-neutral-800">Introduction & Design Principles</span>
                  </div>
                  <span className="text-xs text-neutral-400">14:20</span>
                </div>
                <div className="p-3.5 rounded-xl bg-primary-50/70 border border-primary-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary-600">02</span>
                    <span className="text-xs font-semibold text-primary-900">Figma Auto-Layout & Design Tokens</span>
                  </div>
                  <span className="text-xs text-primary-700 font-medium">Playing</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-neutral-400">03</span>
                    <span className="text-xs font-semibold text-neutral-800">Component Variants & Prototyping</span>
                  </div>
                  <span className="text-xs text-neutral-400">22:45</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-secondary-50/80 border border-secondary-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-600">Estimated Monthly Earnings</p>
                  <p className="text-lg font-bold text-neutral-900">$3,450.00</p>
                </div>
                <span className="text-xs font-bold text-secondary-800 bg-secondary-200/80 px-2 py-1 rounded-lg">
                  +18.4%
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
              Creator Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 leading-[1.2]">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses. Turn your knowledge into a sustainable, scalable business with intuitive tools built for educators.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-400 text-neutral-950 text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Seamless Course Builder</h4>
                  <p className="text-xs text-neutral-500">Organize video lessons, resources, quizzes, and downloadable files in minutes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-400 text-neutral-950 text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Real-Time Community Insights</h4>
                  <p className="text-xs text-neutral-500">Track student questions, ratings, completion rates, and feedback in one unified dashboard.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-400 text-neutral-950 text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">Automated Global Payouts</h4>
                  <p className="text-xs text-neutral-500">Direct creator deposits with complete tax reporting and multi-currency support.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
