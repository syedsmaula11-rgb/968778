import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Aquaguard from './pages/Aquaguard';
import Kent from './pages/Kent';
import Pureit from './pages/Pureit';
import AOSmith from './pages/AOSmith';
import Havells from './pages/Havells';
import Livpure from './pages/Livpure';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FloatingCall from './components/FloatingCall';

// Scroll to hash (#services) on route change
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aquaguard" element={<Aquaguard />} />
        <Route path="/kent" element={<Kent />} />
        <Route path="/pureit" element={<Pureit />} />
        <Route path="/aosmith" element={<AOSmith />} />
        <Route path="/havells" element={<Havells />} />
        <Route path="/livpure" element={<Livpure />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>
      <FloatingCall />
      <Footer />
    </Router>
  );
}