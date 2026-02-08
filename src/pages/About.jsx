function About() {
    return (
        <div className="bg-white min-h-screen text-gray-800">
            {/* Hero Section */}
            <div className="relative bg-teal-900 py-32 text-center text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <span className="text-teal-300 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Authentic Sri Lankan Journeys</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto font-light leading-relaxed">
                        We are a team of passionate locals dedicated to showing you the hidden gems and vibrant culture of our island home.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* About Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why TravelCeylon?</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                TravelCeylon.lk was born out of a love for exploration. We believe that travel is not just about visiting places, but about connecting with people and their stories.
                            </p>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our curated itineraries are designed to take you off the beaten path while still hitting the iconic highlights. We partner exclusively with sustainable, community-driven businesses to ensure your visit has a positive impact.
                        </p>

                        <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 mt-8">
                            <h3 className="text-xl font-bold mb-4 text-teal-800 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                The TravelCeylon Promise
                            </h3>
                            <ul className="space-y-3 text-teal-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                    <span>100% Verified Local Guides</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                    <span>Unbeatable 24/7 On-Ground Support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                    <span>Carbon-Conscious Travel Options</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">Start Planning</h2>
                        <p className="text-gray-500 mb-8">Send us a message and our experts will get back to you within 24 hours.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-800"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-800"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-800"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-gray-800"
                                    placeholder="Tell us about your dream trip..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-200 active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
