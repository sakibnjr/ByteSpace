import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/images/img_20_ellipse_0577f0e9.png",
      rating: 5,
      content:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/images/img_29_ellipse_63c4be83.png",
      rating: 5,
      content:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/images/img_30_ellipse_728c3b1d.png",
      rating: 5,
      content:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50/70 border-t border-neutral-100">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-primary-600 uppercase">
            Learner Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
            >
              <div className="space-y-4">
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-neutral-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">{item.name}</h4>
                  <p className="text-xs font-medium text-neutral-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
