import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      title: "Design",
      icon: "/icons/cat_design.svg",
      coursesCount: "120+ Courses",
      description: "UI/UX, Graphic Design, 3D, and Branding",
    },
    {
      title: "Development",
      icon: "/icons/cat_development.svg",
      coursesCount: "95+ Courses",
      description: "Web, Mobile, Full-Stack, and APIs",
    },
    {
      title: "IT & Software",
      icon: "/icons/cat_it_software.svg",
      coursesCount: "80+ Courses",
      description: "Cloud, DevOps, Cybersecurity & Systems",
    },
    {
      title: "Business",
      icon: "/icons/cat_business.svg",
      coursesCount: "60+ Courses",
      description: "Leadership, Startups & Management",
    },
    {
      title: "Marketing",
      icon: "/icons/cat_marketing.svg",
      coursesCount: "45+ Courses",
      description: "Growth, Content Strategy & Ads",
    },
    {
      title: "Photography",
      icon: "/icons/cat_photography.svg",
      coursesCount: "35+ Courses",
      description: "Studio, Lighting, Portrait & Editing",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
              Featured Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
              Innovative Paths to Knowledge
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
              At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>
          <Link
            href="#courses"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary-600 hover:text-primary-800 transition-colors shrink-0 group"
          >
            <span>View More</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Categories 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-neutral-200/90 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl cursor-pointer"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-50 transition-colors group-hover:bg-primary-50">
                <Image
                  src={cat.icon}
                  alt={cat.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                {cat.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-neutral-400">
                {cat.coursesCount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
