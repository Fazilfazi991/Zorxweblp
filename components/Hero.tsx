"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Phone } from "lucide-react";

const images = [
    "/alrizq-screenshot.png",
    "/aurorasouq-screenshot.png",
    "/bwmc-screenshot.png",
    "/lampsplus-screenshot.png",
    "/neonights-screenshot.png",
    "/payyoli-screenshot.png"
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative bg-white pt-20 pb-12 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6"
                        >
                            Professional Website for Just <span className="text-primary">1,000 AED</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Live in 5 Days. Yours Forever. Custom design, SEO optimized, and 1 year FREE support. No hidden fees.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://wa.me/971542763828?text=Hi!%20I'm%20interested%20in%20the%201,000%20AED%20website%20deal.%20Please%20share%20more%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Contact Us Now
                                <ArrowRight className="w-5 h-5" />
                            </a>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500 font-medium"
                        >
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-primary" /> 200+ Delivered
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-primary" /> Dubai Based
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-4 h-4 text-primary" /> Money-Back Guarantee
                            </div>
                        </motion.div>
                    </div>

                    {/* Image/Mockup Content */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 aspect-video flex items-center justify-center group">
                            <div className="absolute inset-0 z-0">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={images[currentImageIndex]}
                                        alt="Portfolio Screenshot"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>



                        </div>

                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
