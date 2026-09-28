import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Logoipsum 1", src: "/icons/partner_logo_1.svg", width: 167, height: 41 },
    { name: "Logoipsum 2", src: "/icons/partner_logo_2.svg", width: 168, height: 41 },
    { name: "Logoipsum 3", src: "/icons/partner_logo_3.svg", width: 170, height: 41 },
    { name: "Logoipsum 4", src: "/icons/partner_logo_4.svg", width: 170, height: 41 },
    { name: "Logoipsum 5", src: "/icons/partner_logo_5.svg", width: 169, height: 42 },
  ];

  return (
    <section className="bg-neutral-50 py-12 lg:py-16 border-b border-neutral-200/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-10 lg:gap-12">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
