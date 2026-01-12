"use client";

import Image from "next/image";

const logos = [
    { src: "/Logo/BRIDGEWATER-LAST-400x150.png", alt: "Bridgewater", width: 150, height: 60 },
    { src: "/Logo/cropped-ChatGPT-Image-Dec-21-2025-10_08_16-PM-300x200.png", alt: "Client Logo", width: 130, height: 80 },
    { src: "/Logo/neonights-Logo__a-scaled-300x192.png", alt: "Neonights", width: 120, height: 70 },
    { src: "/Logo/trart-logo.webp", alt: "Trart", width: 140, height: 60 },
    { src: "/Logo/zapmart_logo_600x@2x.webp", alt: "Zapmart", width: 140, height: 60 },
];

export default function TrustBar() {
    return (
        <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wider">
                    Trusted by 200+ Businesses in UAE
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-10 md:gap-14 lg:gap-20 min-w-full items-center">
                    {/* First set of logos */}
                    {logos.map((logo, idx) => (
                        <div
                            key={`a-${idx}`}
                            className="relative flex items-center justify-center shrink-0"
                            style={{ minWidth: '100px', minHeight: '60px' }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {logos.map((logo, idx) => (
                        <div
                            key={`b-${idx}`}
                            className="relative flex items-center justify-center shrink-0"
                            style={{ minWidth: '100px', minHeight: '60px' }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                    {/* Triplicate set for wider screens */}
                    {logos.map((logo, idx) => (
                        <div
                            key={`c-${idx}`}
                            className="relative flex items-center justify-center shrink-0"
                            style={{ minWidth: '100px', minHeight: '60px' }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind config needs to have 'animate-marquee' or we add inline style. 
                Since I cannot edit tailwind.config.ts easily without restart, I will add a style tag for the keyframes.
            */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </section>
    );
}
