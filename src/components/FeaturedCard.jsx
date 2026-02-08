import { Link } from 'react-router-dom';

function FeaturedCard({ image, title, description }) {
    return (
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay & Text */}
            <div className="absolute inset-x-0 bottom-0 pt-20 pb-6 px-6 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{title}</h3>
                <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default FeaturedCard;
