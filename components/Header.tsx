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
                    {/* Address & WhatsApp */}
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-6 mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-xs md:text-sm text-black md:text-gray-700 text-right md:text-left">
                                <span className="font-semibold text-primary">Dubai:</span> Office No 147, Emarat Atrium, Sheikh Zayed Road - E11
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </motion.header>
    );
}
