import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Partners from "./_components/partners";
import Categories from "./_components/categories";
import PopularCourses from "./_components/popular-courses";
import LearningPaths from "./_components/learning-paths";
import GrowthStats from "./_components/growth-stats";
import CreatorCTA from "./_components/creator-cta";
import Testimonials from "./_components/testimonials";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Categories />
        <PopularCourses />
        <LearningPaths />
        <GrowthStats />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
