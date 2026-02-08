import { Link } from 'react-router-dom';

function DestinationCard({ image, title, description, locationTag }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Location Badge (Top Left) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {locationTag || title}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>
                <Link
                    to={`/destinations/${title.toLowerCase()}`}
                    className="text-teal-600 font-semibold text-sm hover:text-teal-800 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                    View Details <span>→</span>
                </Link>
            </div>
        </div>
    );
}

export default DestinationCard;
