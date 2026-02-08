import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600';
    };

    return (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link to="/" className="text-2xl font-bold text-teal-800 tracking-tight flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        TravelCeylon<span className="text-teal-600">.lk</span>
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-8 text-sm font-medium">
                        <li><Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/destinations" className={`transition-colors ${isActive('/destinations')}`}>Destinations</Link></li>
                        <li><Link to="/travel-tips" className={`transition-colors ${isActive('/travel-tips')}`}>Travel Tips</Link></li>
                        <li><Link to="/about" className={`transition-colors ${isActive('/about')}`}>About</Link></li>
                    </ul>

                    {/* CTA Button */}
                    <Link
                        to="/chatbot"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-full transition-colors shadow-sm hover:shadow-md"
                    >
                        <span>Plan Trip</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
