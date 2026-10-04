import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Brand pages ki list
  const brandPages = ['/aquaguard', '/kent', '/pureit', '/aosmith', '/havells', '/livpure'];
  const isBrandPage = brandPages.includes(location.pathname);

  // Home link: brand page par ho to wahin raho, warna main home
  const homeLink = isBrandPage ? location.pathname : '/';

  // Services link: brand page par ho to uske services section, warna home ke services
  const servicesLink = isBrandPage ? `${location.pathname}#services` : '/#services';

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-white py-3 md:py-4 sticky top-0 z-50 shadow-sm border-b border-slate-200 w-full">
      <div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
        
        <Link to="/" className="text-base md:text-xl font-bold text-blue-600 whitespace-nowrap">
          RO Service Center 24x7
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 text-sm md:text-base">
          <Link to={homeLink} className="text-slate-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to={servicesLink} className="text-slate-700 hover:text-blue-600 font-medium">Services</Link>
          <Link to="/blog" className="text-slate-700 hover:text-blue-600 font-medium">Blog</Link>
          <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-800">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pt-3 pb-2 space-y-2 border-t border-slate-200 mt-3 bg-white">
          <Link to={homeLink} onClick={closeMenu} className="block text-slate-700 hover:text-blue-600 py-2 font-medium">Home</Link>
          <Link to={servicesLink} onClick={closeMenu} className="block text-slate-700 hover:text-blue-600 py-2 font-medium">Services</Link>
          <Link to="/blog" onClick={closeMenu} className="block text-slate-700 hover:text-blue-600 py-2 font-medium">Blog</Link>
          <Link to="/about" onClick={closeMenu} className="block text-slate-700 hover:text-blue-600 py-2 font-medium">About</Link>
          <Link to="/contact" onClick={closeMenu} className="block text-slate-700 hover:text-blue-600 py-2 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}