import { X, Check, Quote } from "lucide-react";

export default function PainSolution() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Tired of Overpriced Web Agencies?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Get the same (or better) quality without the agency markup and delays.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Pain */}
                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                            <span className="bg-red-100 p-1 rounded"><X className="w-5 h-5" /></span> Traditional Agencies
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-700">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                Charged 3,000 - 10,000 AED
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                Hidden monthly fees
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                4-8 weeks delivery time
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                No support after payment
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                Cookie-cutter ancient templates
                            </li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="bg-green-50 p-8 rounded-2xl border-2 border-primary relative shadow-lg transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">RECOMMENDED</div>
                        <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                            <span className="bg-green-100 p-1 rounded"><Check className="w-5 h-5" /></span> Our Offer
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-800 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                Just 1,000 AED - One time pay
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                No monthly fees, you own it
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                Ready in 5 days, guaranteed
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                FREE support for 1 full year
                            </li>
                            <li className="flex items-start gap-3 text-gray-800 font-medium">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                Modern React Tech (Like Facebook)
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    );
}

import { Star } from "lucide-react";
