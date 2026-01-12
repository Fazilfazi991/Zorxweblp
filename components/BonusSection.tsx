import { TrendingUp, Instagram, Target } from "lucide-react";

export default function BonusSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4 flex items-center justify-center gap-2">
                        FREE BONUS: Marketing Strategy
                    </h2>
                    <p className="text-gray-600">A website is just the start. We'll help you get customers.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="border border-gray-200 rounded-xl p-8 text-center hover:border-primary transition-colors">
                        <div className="mx-auto bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-green-600">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">SEO CONSULTATION</h3>
                        <p className="text-sm text-gray-500 mb-4">Audit, keywords, and content strategy.</p>
                        <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">Value: 500 AED</div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-8 text-center hover:border-primary transition-colors">
                        <div className="mx-auto bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-pink-600">
                            <Instagram className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">SOCIAL GUIDE</h3>
                        <p className="text-sm text-gray-500 mb-4">IG/FB setup, Google Business listing.</p>
                        <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">Value: 300 AED</div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-8 text-center hover:border-primary transition-colors">
                        <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-blue-600">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">ADS STARTER PACK</h3>
                        <p className="text-sm text-gray-500 mb-4">Keywords, ad templates, and budget tips.</p>
                        <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">Value: 400 AED</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
