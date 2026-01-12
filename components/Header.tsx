"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            {/* Main Header */}
            <div className={`transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2" : "py-4"}`}>
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="relative h-12 w-40">
                        <Image
                            src="/logo.png"
                            alt="ZORX Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Address */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm text-gray-700">
                                <span className="font-semibold text-primary">Dubai:</span> Office No 147, Emarat Atrium, Sheikh Zayed Road - E11
                            </span>
                        </div>

                        <a
                            href="https://wa.me/971542763828?text=Hi!%20I'm%20interested%20in%20the%201,000%20AED%20website%20deal.%20Please%20share%20more%20details."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 filter brightness-0 invert" />
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
