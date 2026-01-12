import { Phone, ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                    Ready to Launch Your Website?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Join 200+ Dubai businesses already growing online.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a
                        href="https://wa.me/971542763828?text=Hi!%20I'm%20interested%20in%20the%201,000%20AED%20website%20deal.%20Please%20share%20more%20details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-green-500/25 w-full sm:w-auto hover:-translate-y-1"
                    >
                        BOOK MY WEBSITE NOW - 1,000 AED
                    </a>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm">
                        <span className="flex items-center gap-1">✓ No credit card required</span>
                        <span className="flex items-center gap-1">✓ Pay when happy</span>
                        <span className="flex items-center gap-1">✓ Money-back guarantee</span>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-gray-800">
                    <p className="mb-6 text-gray-400">Prefer to talk first?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+971542763828" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 border border-gray-700 transition-colors">
                            <Phone className="w-4 h-4" /> Call 054 276 3828
                        </a>
                        <a href="https://wa.me/971542763828" target="_blank" className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                        <a href="mailto:sales@zorxmedia.com" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 border border-gray-700 transition-colors">
                            <Mail className="w-4 h-4" /> Email Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
