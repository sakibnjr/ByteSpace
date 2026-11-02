import Image from "next/image";

export default function LearningPaths() {
  const paths = [
    {
      title: "Design",
      tagline: "Master UI/UX & Graphics",
      courses: "35+ courses",
      accent: "bg-primary-50 text-primary-600",
      icon: "/icons/cat_design.svg",
    },
    {
      title: "Development",
      tagline: "Build Modern Web & Mobile",
      courses: "48+ courses",
      accent: "bg-secondary-100 text-secondary-900",
      icon: "/icons/cat_development.svg",
    },
    {
      title: "IT & Software",
      tagline: "Cloud, Systems & Security",
      courses: "29+ courses",
      accent: "bg-neutral-100 text-neutral-800",
      icon: "/icons/cat_it_software.svg",
    },
    {
      title: "Business",
      tagline: "Lead & Scale Venturing",
      courses: "22+ courses",
      accent: "bg-primary-50 text-primary-600",
      icon: "/icons/cat_business.svg",
    },
    {
      title: "Marketing",
      tagline: "Digital Growth & Analytics",
      courses: "18+ courses",
      accent: "bg-secondary-100 text-secondary-900",
      icon: "/icons/cat_marketing.svg",
    },
    {
      title: "Photography",
      tagline: "Visual Storytelling",
      courses: "15+ courses",
      accent: "bg-neutral-100 text-neutral-800",
      icon: "/icons/cat_photography.svg",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50/50 border-t border-neutral-100">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
            Curated Curriculums
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            At ByteSpace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-400 group"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-50 group-hover:bg-primary-50 transition-colors">
                <Image
                  src={path.icon}
                  alt={path.title}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {path.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                    {path.courses}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-400 truncate">
                  {path.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
