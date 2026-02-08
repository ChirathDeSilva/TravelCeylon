function TravelTips() {
    const tips = [
        {
            id: 1,
            category: 'Visa & Entry',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
            ),
            title: "Visa Requirements",
            content: 'Most visitors need an Electronic Travel Authorization (ETA) before arrival. It is valid for 30 days and can be extended online.'
        },
        {
            id: 2,
            category: 'Currency',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Money & ATMs",
            content: 'The currency is the Sri Lankan Rupee (LKR). ATMs are widely available. Carry cash for small vendors, tuk-tuks, and rural areas.'
        },
        {
            id: 3,
            category: 'Transport',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
            ),
            title: "Getting Around",
            content: 'Trains are scenic and affordable. Private cars with drivers offer flexibility. Use "PickMe" or "Uber" in major cities for reliable rides.'
        },
        {
            id: 4,
            category: 'Weather',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            ),
            title: "Best Time to Visit",
            content: 'Sri Lanka is a year-round destination. West/South coast is best Dec-Mar. East coast season is May-Sep. Hill country is cool year-round.'
        },
        {
            id: 5,
            category: 'Culture',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
            ),
            title: "Cultural Etiquette",
            content: 'Dress modestly at religious sites (cover shoulders/knees). Always remove shoes/hats before entering temples. Ask permission before photos.'
        },
        {
            id: 6,
            category: 'Health',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            ),
            title: "Health & Safety",
            content: 'Drink only bottled water. Use mosquito repellent. Healthcare in cities is good. Travel insurance is highly recommended for all visitors.'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-20 font-sans text-gray-800">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-100">
                        Smart Travel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Essential Travel Advice</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Practical information to help you navigate Sri Lanka confidently and respectfully.
                    </p>
                </div>

                {/* Tip Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {tips.map((tip) => (
                        <div key={tip.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <div className="w-7 h-7">
                                    {tip.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-teal-700 transition-colors">{tip.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {tip.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-800 hover:bg-gray-50 transition-colors">
                                <span>Is Sri Lanka safe for solo travelers?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 border-t border-gray-100 p-6 pt-0 mt-4 leading-relaxed">
                                Yes, Sri Lanka is generally very safe for solo travelers, including women. People are incredibly hospitable. As with any destination, exercise normal precautions, especially at night in secluded areas.
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-800 hover:bg-gray-50 transition-colors">
                                <span>Do I need to tip in Sri Lanka?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 border-t border-gray-100 p-6 pt-0 mt-4 leading-relaxed">
                                Tipping is appreciated but not mandatory. In restaurants, a 10% service charge is often added, but a small extra tip for the waiter is kind. For guides and drivers, tipping is customary (approx. 10%).
                            </div>
                        </details>

                        <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6 text-gray-800 hover:bg-gray-50 transition-colors">
                                <span>What kind of power plugs are used?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 border-t border-gray-100 p-6 pt-0 mt-4 leading-relaxed">
                                Sri Lanka uses Type D, M, and G plugs. The standard voltage is 230V. Most modern hotels use the UK-style Type G (rectangular 3-pin). A universal travel adapter is highly recommended.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelTips;
