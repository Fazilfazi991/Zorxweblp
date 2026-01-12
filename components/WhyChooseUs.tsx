"use client";

import { MapPin, Clock, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Why Dubai Businesses Choose Us</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl border border-gray-100"
                    >
                        <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">DUBAI-BASED EXPERTS</h3>
                        <p className="text-sm text-gray-500">We're a registered Dubai agency. We understand UAE business culture.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl border border-gray-100"
                    >
                        <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">FASTEST DELIVERY</h3>
                        <p className="text-sm text-gray-500">We deliver in 2 days. We have streamlined our process for speed.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl border border-gray-100"
                    >
                        <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-green-600">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">NO COMPROMISE</h3>
                        <p className="text-sm text-gray-500">Professional React technology. Fast, secure, and SEO friendly.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl border border-gray-100"
                    >
                        <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1 YEAR PROTECTION</h3>
                        <p className="text-sm text-gray-500">We stay with you for 12 months. Updates and fixes included.</p>
                    </motion.div>
                </div>

                <div className="bg-blue-900 text-white rounded-2xl p-8 max-w-4xl mx-auto text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">OUR GUARANTEE TO YOU</h3>
                        <p className="mb-4">If we don't deliver in 2 days, you get 500 AED discount.</p>
                        <p className="text-blue-200">If you're not happy, we refund you 100%. No questions asked.</p>
                    </div>
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </div>
        </section>
    );
}
