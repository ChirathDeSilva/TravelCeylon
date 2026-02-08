import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeaturedCard from '../components/FeaturedCard';

function Home() {
    const featuredDestinations = [
        {
            id: 1,
            title: 'Sigiriya',
            image: 'https://images.unsplash.com/photo-1588258524675-92c4737227c9?q=80&w=800&auto=format&fit=crop',
            description: 'Ancient rock fortress with breathtaking views'
        },
        {
            id: 2,
            title: 'Galle Fort',
            image: 'https://images.unsplash.com/photo-1550953683-112348c58043?q=80&w=800&auto=format&fit=crop',
            description: 'Historic Dutch colonial architecture'
        },
        {
            id: 3,
            title: 'Ella',
            image: 'https://images.unsplash.com/photo-1588693892806-38374d6f8319?q=80&w=800&auto=format&fit=crop',
            description: 'Scenic train rides through tea country'
        },
        {
            id: 4,
            title: 'Beaches',
            image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc2ab252?q=80&w=800&auto=format&fit=crop',
            description: 'Pristine tropical coastlines'
        }
    ];

    const features = [
        {
            id: 1,
            icon: '🌴',
            title: 'Authentic Experiences',
            description: 'Discover the real Sri Lanka with our carefully curated local experiences.'
        },
        {
            id: 2,
            icon: '🚗',
            title: 'Best Transport',
            description: 'Travel comfortably with our reliable transport partners across the island.'
        },
        {
            id: 3,
            icon: '💡',
            title: 'Expert Guides',
            description: 'Get insights from knowledgeable local guides who specific areas.'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroSection />

            {/* Featured Destinations Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Destinations</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Explore the most iconic places that make Sri Lanka unforgettable
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredDestinations.map((dest) => (
                            <FeaturedCard
                                key={dest.id}
                                title={dest.title}
                                image={dest.image}
                                description={dest.description}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/destinations"
                            className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg"
                        >
                            View all
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Experience the Best of Sri Lanka</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                                <div className="text-4xl mb-6 bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative py-32">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1546708773-e529a67a8ed3?q=80&w=1920&auto=format&fit=crop')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-gray-100 drop-shadow-md">
                        Let our AI travel assistant help you plan the perfect trip to Sri Lanka.
                    </p>
                    <Link
                        to="/chatbot"
                        className="inline-block px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-2xl border-2 border-transparent hover:border-white"
                    >
                        Chat with Assistant
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
