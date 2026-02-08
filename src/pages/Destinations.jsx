import DestinationCard from '../components/DestinationCard';

function Destinations() {
    const destinations = [
        {
            id: 1,
            title: 'Kandy',
            image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop',
            description: 'Cultural capital home to the sacred Temple of the Tooth. Experience traditional dance, botanical gardens, and serene lakeside beauty.',
            locationTag: 'Kandy'
        },
        {
            id: 2,
            title: 'Nuwara Eliya',
            image: 'https://images.unsplash.com/photo-1546708773-e529a67a8ed3?q=80&w=800&auto=format&fit=crop',
            description: 'The "Little England" of Sri Lanka with rolling tea plantations, cool climate, and colonial charm. Perfect for nature lovers.',
            locationTag: 'Nuwara Eliya'
        },
        {
            id: 3,
            title: 'Galle',
            image: 'https://images.unsplash.com/photo-1550953683-112348c58043?q=80&w=800&auto=format&fit=crop',
            description: 'Historic coastal city with a UNESCO World Heritage Dutch fort. Explore cobblestone streets, boutique shops, and stunning ocean views.',
            locationTag: 'Galle'
        },
        {
            id: 4,
            title: 'Jaffna',
            image: 'https://images.unsplash.com/photo-1580718507850-84c6c4c47844?q=80&w=800&auto=format&fit=crop',
            description: 'Discover the vibrant Tamil culture, ancient Hindu temples, and unique cuisine of the northern peninsula.',
            locationTag: 'Jaffna'
        },
        {
            id: 5,
            title: 'Colombo',
            image: 'https://images.unsplash.com/photo-1578556942959-1e354924a13e?q=80&w=800&auto=format&fit=crop',
            description: 'The commercial capital blending colonial buildings with modern skyscrapers, vibrant markets, and seaside promenade.',
            locationTag: 'Colombo'
        },
        {
            id: 6,
            title: 'Ella',
            image: 'https://images.unsplash.com/photo-1588693892806-38374d6f8319?q=80&w=800&auto=format&fit=crop',
            description: 'Famous for the Nine Arch Bridge and scenic train rides. A hiker\'s paradise with stunning mountain views.',
            locationTag: 'Ella'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                        Explore Destinations
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover the diverse landscapes and historic sites that make Sri Lanka a unique travel destination.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12 gap-3 flex-wrap">
                    <button className="px-6 py-2 bg-teal-600 text-white rounded-full font-semibold shadow-md active:transform active:scale-95 transition-all">
                        All
                    </button>
                    {['Beaches', 'Mountains', 'History', 'Wildlife'].map((filter) => (
                        <button key={filter} className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 hover:text-teal-600 rounded-full font-medium shadow-sm border border-gray-200 transition-colors">
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <DestinationCard
                            key={dest.id}
                            title={dest.title}
                            image={dest.image}
                            description={dest.description}
                            locationTag={dest.locationTag}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Destinations;
