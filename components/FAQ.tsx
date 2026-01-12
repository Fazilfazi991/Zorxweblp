"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    { q: "Is 1,000 AED really all I pay?", a: "Yes, 1,000 AED total. This includes design, development, hosting for first year, domain setup, SSL, and content. The ONLY additional cost is domain registration (50-100 AED/year). After year 1, hosting is 300 AED/year optional." },
    { q: "Can you really deliver a custom website in 2 days?", a: "Yes! We use optimized React components and a professional team working in parallel. Quality is never compromised." },
    { q: "What if I need changes after the website is live?", a: "We include 1 year FREE support. Just WhatsApp us for text/image updates or fixes. Free of charge." },
    { q: "Will my website work on mobile phones?", a: "100% yes. Mobile-first design is our standard. It looks perfect on all devices." },
    { q: "Is it really SEO optimized?", a: "Yes. Technical SEO (meta tags, sitemaps, fast loading) is built-in. We also provide 3-4 blog articles." },
    { q: "What if I don't have content?", a: "No problem. We can write it for you and use professional stock photos. You don't need anything to start." },
    { q: "Can I add e-commerce later?", a: "Yes. We can upgrade you to an e-commerce plan anytime." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-900">{item.q}</span>
                                {openIndex === idx ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
