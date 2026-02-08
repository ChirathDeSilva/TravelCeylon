import { useState } from 'react';

function Chatbot() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! I\'m your Sri travel assistant. How can I help you plan your trip today?', sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');

    const quickPrompts = [
        "Best time to visit Kandy?",
        "How to travel from Colombo to Jaffna?",
        "What are must-see places in Ella?",
        "Where can I find the best beaches?"
    ];

    const handleSendMessage = (text = inputText) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = { id: Date.now(), text: text, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInputText('');

        // Simulate bot response (placeholder)
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: 'I\'m currently a demo. Soon I will be connected to a powerful AI to answer your questions about Sri Lanka!',
                sender: 'bot'
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 px-4">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col h-[80vh] border border-gray-100">
                {/* Chat Header */}
                <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-lg">
                            AI
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-800 text-lg">Travel Assistant</h2>
                            <span className="text-xs text-green-500 flex items-center gap-1 font-medium">
                                ● Online
                            </span>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white flex flex-col">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'user'
                                    ? 'bg-teal-600 text-white self-end rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 self-start rounded-bl-none'
                                }`}
                        >
                            {msg.text}
                        </div>
                    ))}

                    {/* Quick Prompts (Only show if few messages) */}
                    {messages.length < 3 && (
                        <div className="mt-8">
                            <p className="text-gray-400 text-sm mb-3 font-medium">Try asking:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickPrompts.map((prompt, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSendMessage(prompt)}
                                        className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-medium hover:bg-teal-100 transition-colors border border-teal-100"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent transition-all">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask me anything about Sri Lanka..."
                            className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            className={`p-3 rounded-full w-10 h-10 flex items-center justify-center transition-all ${inputText.trim()
                                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md transform hover:scale-105'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                            disabled={!inputText.trim()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">
                        AI can make mistakes. Verify important travel info.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
