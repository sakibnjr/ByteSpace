"use client";

import { useState } from "react";
import Image from "next/image";

interface Course {
  id: string;
  title: string;
  author: string;
  category: string;
  level: string;
  thumbnail: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: string;
  price: string;
  period: string;
}

const studentAvatars = [
  "/images/img_3_ellipse_b44979e1.png",
  "/images/img_19_ellipse_3fe55918.png",
  "/images/img_20_ellipse_0577f0e9.png",
  "/images/img_21_ellipse_d0cd3adb.png",
];

// Row 1 (Figma Tab_Categories 21:33)
const row1Categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

// Row 2 (Figma Frame 6 21:56)
const row2Categories = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

// Row 3 (Figma Frame 7 21:63)
const row3Categories = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const allCourses: Course[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    category: "UI/UX Design",
    level: "Beginner",
    thumbnail: "/images/img_18_frame_93ad9f9e.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    category: "Graphic Design",
    level: "Beginner",
    thumbnail: "/images/img_22_frame_c8826419.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    category: "Data Science",
    level: "Beginner",
    thumbnail: "/images/img_23_frame_4f3bdea5.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: "course-4",
    title: "Balancing Productivity an...",
    author: "by purepearl studio",
    category: "Productivity",
    level: "Beginner",
    thumbnail: "/images/img_24_frame_72e18d90.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: "course-5",
    title: "Mastering Money Manage...",
    author: "by purepearl studio",
    category: "Freelance & Entrepreneurship",
    level: "Beginner",
    thumbnail: "/images/img_25_frame_a8978945.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Succ...",
    author: "by purepearl studio",
    category: "Freelance & Entrepreneurship",
    level: "Beginner",
    thumbnail: "/images/img_26_frame_69362b02.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    period: "/lifetime",
  },
];

export default function PopularCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredCourses =
    activeCategory === "Featured"
      ? allCourses
      : allCourses.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : allCourses;

  return (
    <section id="courses" className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle (Figma Frame 3 [12:101]) */}
        <div className="text-center max-w-[920px] mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-neutral-950 leading-[1.2]">
            Discover Your Passion,
            <br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="text-sm sm:text-base lg:text-[18px] text-neutral-500 font-normal leading-relaxed max-w-[840px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from
            technology to the arts, and make a difference in your career and
            life.
          </p>
        </div>

        {/* Category Pills (Figma Tab_Categories, Frame 6, Frame 7) */}
        <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-3.5 max-w-[1140px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5">
            {row1Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-[15px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 shadow-sm"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5">
            {row2Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-[15px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 shadow-sm"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5">
            {row3Categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-[15px] font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 shadow-sm"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-primary-800 text-sm sm:text-[15px] font-medium px-2 py-2 hover:underline cursor-pointer transition-colors whitespace-nowrap"
            >
              + More
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid (Figma Frame 8 [33:683]) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] border border-neutral-200 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-[200px] w-full rounded-[16px] overflow-hidden bg-neutral-100">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Badges on Image (Lessons, Duration, Comments) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 pointer-events-none">
                  <span className="bg-neutral-50/75 backdrop-blur-md rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm">
                    {course.lessons}
                  </span>
                  <span className="bg-neutral-50/75 backdrop-blur-md rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm">
                    {course.duration}
                  </span>
                  <span className="bg-neutral-50/75 backdrop-blur-md rounded-full px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                {/* Title, Author, Rating */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-[20px] font-semibold text-neutral-950 leading-snug line-clamp-1">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[17px] text-neutral-700 font-normal shrink-0">
                      <span>{course.rating}</span>
                      <svg
                        className="w-4 h-4 text-neutral-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 font-normal mt-1">
                    {course.author}
                  </p>
                </div>

                {/* Meta Row: Level Pill & Student Avatar Stack */}
                <div className="mt-5 flex items-center justify-between gap-2">
                  {/* Level Pill */}
                  <div className="bg-neutral-50 rounded-full px-3 py-1.5 flex items-center gap-1.5 shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-neutral-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M18 20V10M12 20V4M6 20v-6"
                      />
                    </svg>
                    <span className="text-xs font-medium text-neutral-700">
                      {course.level}
                    </span>
                  </div>

                  {/* 4 Avatars + 26+ Lime Badge */}
                  <div className="flex items-center -space-x-2">
                    {studentAvatars.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden bg-neutral-200 shrink-0"
                      >
                        <Image
                          src={src}
                          alt="Student"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-secondary-400 text-[11px] font-bold text-neutral-950 shrink-0">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price Row */}
                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-baseline">
                  <span className="text-xl font-bold text-primary-800">
                    {course.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-normal ml-0.5">
                    {course.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
