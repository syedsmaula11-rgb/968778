import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-8 pb-4 px-4 mt-10 border-t border-slate-800">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="text-white font-bold mb-3">RO Service Center 24x7</h4>
            <p className="text-gray-400 text-xs">Trusted RO service provider in Bangalore. 15+ years experience. 50,000+ happy customers.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p className="text-xs text-gray-400">📞 <a href="tel:08050291180" className="hover:text-white">08050291180</a></p>
            <p className="text-xs text-gray-400 mt-1">✉️ <a href="mailto:support@roservicecenteronline24x7.in" className="hover:text-white">support@roservicecenteronline24x7.in</a></p>
            <p className="text-xs text-gray-400 mt-1">📍 Bangalore, Karnataka, India</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-4 pb-16">
          <p className="text-xs text-gray-500 text-center mb-2">© 2026 RO Service Center 24x7. All rights reserved.</p>
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            Disclaimer: We are an independent service provider and not affiliated, associated, authorized, endorsed by, or in any way officially connected with any brand mentioned on this website. All brand names and trademarks are the property of their respective owners and are for informational purposes only. We provide third-party repair and maintenance services for various water purifier systems.
          </p>
        </div>
      </div>
    </footer>
  );
}