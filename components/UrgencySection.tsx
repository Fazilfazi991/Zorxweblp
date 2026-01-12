import { Clock } from "lucide-react";

export default function UrgencySection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mb-8 flex items-center justify-center gap-3">
                    <Clock className="w-10 h-10 animate-pulse" />
                    Limited Availability This Month
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-3xl mx-auto">
                    <p className="text-xl text-gray-800 mb-6 font-medium">
                        We can only take on <span className="font-bold">20 projects per month</span> to maintain our 2-day delivery promise.
                    </p>



                    <p className="text-gray-600 mb-4">
                        Once these 5 slots are filled, the next available start date is <span className="font-bold text-gray-900">February 15th</span>.
                    </p>


                </div>
            </div>
        </section>
    );
}

