import { Phone, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function FloatingCall() {
  const location = useLocation();
  const path = location.pathname;

  // Har page ke liye alag WhatsApp message
  const getWhatsAppMessage = () => {
    const base = 'https://wa.me/918050291180?text=';
    
    if (path.includes('aquaguard')) {
      return base + encodeURIComponent("Hi, I need Aquaguard RO service in Bangalore. Please help me with my booking.");
    }
    if (path.includes('kent')) {
      return base + encodeURIComponent("Hi, I need KENT RO service in Bangalore. Please help me with my booking.");
    }
    if (path.includes('pureit')) {
      return base + encodeURIComponent("Hi, I need Pureit RO service in Bangalore. Please help me with my booking.");
    }
    if (path.includes('aosmith')) {
      return base + encodeURIComponent("Hi, I need AO Smith RO service in Bangalore. Please help me with my booking.");
    }
    if (path.includes('havells')) {
      return base + encodeURIComponent("Hi, I need Havells RO service in Bangalore. Please help me with my booking.");
    }
    if (path.includes('livpure')) {
      return base + encodeURIComponent("Hi, I need Livpure RO service in Bangalore. Please help me with my booking.");
    }
    // Default (Home, About, Blog, etc.)
    return base + encodeURIComponent("Hi, I need RO water purifier service in Bangalore. Please help me with my booking.");
  };

  return (
    <>
      {/* Call Button - Left (Blue) */}
      <a
        href="tel:08050291180"
        className="fixed bottom-5 left-5 bg-blue-600 p-3 md:p-4 rounded-full shadow-xl animate-pulse z-50 text-white"
        aria-label="Call Now"
      >
        <Phone size={26} />
      </a>

      {/* WhatsApp Button - Right (Green) with auto message */}
      <a
        href={getWhatsAppMessage()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-[#25d366] p-3 md:p-4 rounded-full shadow-xl z-50 text-white animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}