import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Partner 1", src: "/icons/partner_logo_1.svg" },
    { name: "Partner 2", src: "/icons/partner_logo_2.svg" },
    { name: "Partner 3", src: "/icons/partner_logo_3.svg" },
    { name: "Partner 4", src: "/icons/partner_logo_4.svg" },
    { name: "Partner 5", src: "/icons/partner_logo_5.svg" },
  ];

  return (
    <section className="bg-neutral-50 py-12 border-b border-neutral-200/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 mb-8">
          Trusted by Industry Leaders and Creative Companies Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-70 grayscale transition-all hover:grayscale-0">
          {partners.map((p, idx) => (
            <div key={idx} className="relative h-8 sm:h-10 w-28 sm:w-36 flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.name}
                width={120}
                height={35}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
