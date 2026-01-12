"use client";

import { Layout, Zap, Smartphone, Search, FileText, Mail, MapPin, Share2, Lock, Settings, MousePointer, BarChart, Gift } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { icon: Layout, title: "CUSTOM DESIGN", desc: "Not a template. Designed from scratch to match your brand." },
    { icon: Zap, title: "LIGHTNING FAST", desc: "Built with React. Fast loading = more sales." },
    { icon: Smartphone, title: "MOBILE OPTIMIZED", desc: "Looks perfect on every device - guaranteed." },
    { icon: Search, title: "SEO READY", desc: "Optimized for Google from day one. Meta tags, sitemaps included." },
    { icon: FileText, title: "3-4 BLOG ARTICLES", desc: "Content written for you to position you as an expert." },
    { icon: Mail, title: "CONTACT FORMS", desc: "Inquiries sent straight to your email." },
    { icon: MapPin, title: "GOOGLE MAPS", desc: "Integrated maps so customers find you easily." },
    { icon: Share2, title: "SOCIAL MEDIA", desc: "Connect all your profiles seamlessly." },
    { icon: Lock, title: "SSL CERTIFICATE", desc: "Secure HTTPS encryption included." },
    { icon: Settings, title: "EASY TO UPDATE", desc: "We show you how, or do it for you FREE." },
    { icon: MousePointer, title: "CONVERSION FOCUSED", desc: "Designed to turn visitors into customers." },
    { icon: BarChart, title: "ANALYTICS SETUP", desc: "Google Analytics installed to track visitors." },
];

export default function FeatureGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <span className="bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                            Limited New Year Offer
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Everything You Need. One Simple Price.</h2>
                    <p className="text-gray-600">Most agencies charge extra for these. They're <span className="font-bold text-primary">ALL included</span> in your 1,000 AED.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                        <span className="bg-yellow-100 p-2 rounded-full"><Gift className="w-6 h-6 text-yellow-600" /></span>
                        BONUS: 1 YEAR FREE SUPPORT (WORTH 3,600 AED)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Content updates</div>
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Security updates</div>
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Technical fixes</div>
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Hosting issues</div>
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Backups</div>
                        <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Direct WhatsApp support</div>
                    </div>
                    <a
                        href="https://wa.me/971542763828?text=Hi!%20I'm%20interested%20in%20the%201,000%20AED%20website%20deal.%20Please%20share%20more%20details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        YES! I WANT MY WEBSITE →
                    </a>
                </div>
            </div>
        </section>
    );
}
