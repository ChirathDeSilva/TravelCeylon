import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="relative h-[600px] flex items-center justify-center text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1586619141011-8fe9795d4653?q=80&w=1920&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div> {/* Slightly lighter overlay to match design */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-xl tracking-wide">
                    Discover Sri Lanka
                </h1>
                <p className="text-xl md:text-2xl mb-10 font-light drop-shadow-md text-gray-100">
                    Experience the pearl of the Indian Ocean
                </p>

                {/* Teal CTA Button */}
                <Link
                    to="/destinations"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-xl"
                >
                    Explore Now <span className="font-bold">→</span>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
