"use client";

import { useState } from "react";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  thumbnail: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: number;
  price: string;
  period: string;
  enrolled: string;
}

export default function PopularCourses() {
  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "UI/UX Design",
    "Film & Video",
    "Web Development",
    "Data Science",
  ];

  const [activeCategory, setActiveCategory] = useState("Featured");

  const courses: Course[] = [
    {
      id: "course-1",
      title: "Learn Figma from Basic",
      instructor: "by purepearl studio",
      category: "UI/UX Design",
      level: "Beginner",
      thumbnail: "/images/img_18_frame_93ad9f9e.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
    {
      id: "course-2",
      title: "Build Digital Asset",
      instructor: "by purepearl studio",
      category: "Drawing & Painting",
      level: "Beginner",
      thumbnail: "/images/img_22_frame_c8826419.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
    {
      id: "course-3",
      title: "The Power of Big Data",
      instructor: "by purepearl studio",
      category: "Data Science",
      level: "Beginner",
      thumbnail: "/images/img_23_frame_4f3bdea5.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
    {
      id: "course-4",
      title: "Balancing Productivity and Self-Care",
      instructor: "by purepearl studio",
      category: "Featured",
      level: "Beginner",
      thumbnail: "/images/img_24_frame_72e18d90.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
    {
      id: "course-5",
      title: "Mastering Money Management",
      instructor: "by purepearl studio",
      category: "Marketing",
      level: "Beginner",
      thumbnail: "/images/img_25_frame_a8978945.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
    {
      id: "course-6",
      title: "From Idea to Startup Success",
      instructor: "by purepearl studio",
      category: "Web Development",
      level: "Beginner",
      thumbnail: "/images/img_26_frame_69362b02.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: 4.5,
      price: "$25",
      period: "/lifetime",
      enrolled: "26+",
    },
  ];

  const filteredCourses =
    activeCategory === "Featured"
      ? courses
      : courses.filter((c) => c.category === activeCategory || c.id === "course-1" || c.id === "course-2");

  return (
    <section id="courses" className="py-20 bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
            Top Rated Selection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
            Explore Popular Courses
          </h2>
          <p className="text-sm sm:text-base text-neutral-500">
            Discover our highest-rated learning experiences designed to take your skills to the next level.
          </p>
        </div>

        {/* Category Pills Slider / Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-md"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-neutral-300"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Level Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm">
                    {course.level}
                  </span>
                </div>
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white">
                  <span className="text-secondary-400">★</span>
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 space-y-4">
                {/* Meta details (Lessons, Duration, Comments) */}
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span>{course.lessons}</span>
                  <span>•</span>
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.comments}</span>
                </div>

                {/* Course Title & Author */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 font-medium">
                    {course.instructor}
                  </p>
                </div>

                {/* Bottom Bar: Students Enrolled & Price */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/img_3_ellipse_b44979e1.png" alt="Student" fill className="object-cover" />
                    </div>
                    <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/img_19_ellipse_3fe55918.png" alt="Student" fill className="object-cover" />
                    </div>
                    <div className="relative h-7 w-7 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/img_20_ellipse_0577f0e9.png" alt="Student" fill className="object-cover" />
                    </div>
                    <span className="pl-3 text-xs font-semibold text-neutral-500">{course.enrolled}</span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-neutral-900">{course.price}</span>
                    <span className="text-xs text-neutral-400">{course.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
