import Link from "next/link";
import Image from "next/image";

export default function CreatorCTA() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary-800 text-white py-20 lg:py-24">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Decorative 3D Cones on flanks */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none hidden md:block">
        <Image
          src="/images/img_17_cone_01_2_f9c0e0fd.png"
          alt="3D Decorative Cone"
          width={192}
          height={192}
          className="object-contain -rotate-12 opacity-85"
        />
      </div>
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none hidden md:block">
        <Image
          src="/images/img_16_cone_01_2_92fc70a3.png"
          alt="3D Decorative Cone"
          width={192}
          height={192}
          className="object-contain rotate-45 opacity-85"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-secondary-300 uppercase">
          Empowering Educators Everywhere
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.2]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-100/90 max-w-2xl mx-auto leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-secondary-400 px-8 py-3.5 text-base font-semibold text-neutral-950 transition-all hover:bg-secondary-300 hover:shadow-xl active:scale-95"
          >
            Join as Creator
          </Link>
          <Link
            href="#courses"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            Explore Library
          </Link>
        </div>
      </div>
    </section>
  );
}
