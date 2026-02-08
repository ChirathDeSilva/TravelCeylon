import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TravelTips from './pages/TravelTips';
import Chatbot from './pages/Chatbot';
import About from './pages/About';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/destinations" element={<Destinations />} />
                        <Route path="/travel-tips" element={<TravelTips />} />
                        <Route path="/chatbot" element={<Chatbot />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
