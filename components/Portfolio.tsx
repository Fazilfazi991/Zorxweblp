import { ArrowRight, Star } from "lucide-react";

const projects = [
    { title: "BWMC Business Setup", industry: "Business Services", review: "Seamless setup process in Dubai.", color: "bg-blue-50", link: "https://bwmc.ae", image: "/bwmc-screenshot.png" },
    { title: "Lamps Plus", industry: "LED Display Solutions", review: "Cutting-edge display technology.", color: "bg-purple-50", link: "http://34.133.208.55/", image: "/lampsplus-screenshot.png" },
    { title: "Payyoli Mixture", industry: "Food & Beverage", review: "Authentic flavors, great site.", color: "bg-orange-50", link: "https://www.payyolimixture.co.in/", image: "/payyoli-screenshot.png" },
    { title: "Neonights Advertising", industry: "Advertising & Signage", review: "We build brands that shine.", color: "bg-slate-50", link: "https://neonights.ae", image: "/neonights-screenshot.png" },
    { title: "Aurora Souq", industry: "E-commerce", review: "User-friendly marketplace.", color: "bg-indigo-50", link: "https://www.aurorasouq.com/", image: "/aurorasouq-screenshot.png" },
    { title: "Al Rizq", industry: "Business Services", review: "Highly professional service.", color: "bg-emerald-50", link: "https://www.alrizq.sa/", image: "/alrizq-screenshot.png" },
];

export default function Portfolio() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Real Websites. Real Businesses.</h2>
                    <p className="text-gray-600">All built for 1,000 AED.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className={`aspect-video rounded-xl overflow-hidden mb-4 relative ${project.color} border border-gray-100`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    /* Blank placeholder for project screenshot as requested */
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl uppercase tracking-widest opacity-30">
                                        {project.title}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{project.industry}</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <span className="text-xs italic text-gray-600">"{project.review}"</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>


            </div>
        </section>
    );
}
