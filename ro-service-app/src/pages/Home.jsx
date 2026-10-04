import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import { Button } from "@/components/ui/button";
import { Check, Star, MapPin, Droplet, Gauge, Zap, Wind, Droplets, AlertTriangle } from 'lucide-react';

export default function Home() {
  const services = [
    { title: "RO Repair Service", desc: "Water leakage, slow flow, motor noise, bad taste, or purifier not turning on? We diagnose and fix all RO problems at your doorstep within 60 minutes. All brands supported. 90-day warranty on repairs." },
    { title: "RO Service & Filter Change", desc: "Regular filter and membrane replacement to maintain water quality. We use genuine pre-filters, carbon filters, and RO membranes. Book annual service and save 30% on parts." },
    { title: "RO Installation", desc: "New water purifier? We do site inspection, wall mounting, tap connection, and complete setup. Same-day installation available across Bangalore. Demo after installation." },
  ];

  const brands = [
    "Aquaguard Service",
    "KENT Service",
    "Pureit Service",
    "AO Smith Service",
    "Livpure Service",
    "Havells Service",
  ];

  const problems = [
    { title: "Water Leakage", desc: "Is your RO leaking? We fix it instantly.", icon: Droplet },
    { title: "Slow Water Flow", desc: "Water coming slowly? Filter or pump issue.", icon: Gauge },
    { title: "Bad Taste / Smell", desc: "Water tastes bad? Membrane needs changing.", icon: Droplets },
    { title: "Motor Noise", desc: "Strange noise from motor? Immediate repair needed.", icon: Zap },
    { title: "Purifier Not Turning On", desc: "RO not turning on? Power or adapter issue.", icon: Wind },
    { title: "Filter Clogged", desc: "Filter is jammed? Replacement required.", icon: AlertTriangle },
  ];

  const whyChoose = [
    "15+ Years Experience – Trusted by 50,000+ families across Bangalore",
    "60-Minute Doorstep Service – Same-day repair at your home",
    "All Brands Supported – We service every major water purifier brand",
    "Genuine Spare Parts – No duplicate filters, only original parts",
    "90-Day Warranty – On every repair and part replacement",
    "Transparent Pricing – No hidden charges, pay after service",
    "24×7 Customer Support – Call or WhatsApp anytime",
  ];

  const testimonials = [
    { name: "Rajesh Kumar", area: "Whitefield", text: "Technician came within 45 minutes. Fixed my RO leakage in 20 minutes. Very professional." },
    { name: "Priya Sharma", area: "Koramangala", text: "Booked AMC plan. Got 4 free services and saved a lot on filters. Highly recommended." },
    { name: "Amit Patel", area: "Indiranagar", text: "Same-day installation. The technician explained everything clearly. Water tastes much better now." },
  ];

  const faqs = [
    { q: "How long does RO service take?", a: "We reach your home within 60 minutes. Most repairs are completed within 30 minutes." },
    { q: "Do you service all brands?", a: "Yes, we service all major water purifier brands in Bangalore – RO, UV, UF, and Alkaline purifiers." },
    { q: "What is the service charge?", a: "Basic visit starts at ₹299. Inspection included. Parts are charged separately. No hidden charges." },
    { q: "Do you use genuine parts?", a: "Yes, we only use genuine and branded spare parts. Every part comes with a 90-day warranty." },
    { q: "How can I make the payment?", a: "Cash, UPI, Card, and Net Banking – all accepted. Pay after the service is completed." },
  ];

  const areas = ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "Marathahalli", "Electronic City", "Hebbal", "Yelahanka", "Rajajinagar", "Malleshwaram"];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 bg-white">

      {/* HERO SECTION */}
      <section className="text-center pt-6 pb-6 px-4 bg-gradient-to-b from-blue-50 to-white rounded-2xl mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-slate-900">
          RO Water Purifier Service Near Me – 60 Min Doorstep Repair in Bangalore
        </h1>
        <h2 className="text-sm md:text-base text-blue-600 font-semibold mb-4">
          All Brands | Genuine Parts | 90-Day Warranty | 24×7 Support
        </h2>

        <img
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop"
          alt="RO Water Purifier Service Bangalore"
          className="w-full h-auto rounded-xl mb-5 shadow-md object-cover max-h-80"
        />

        <a href="tel:08050291180" className="block w-full mb-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 text-base md:text-lg rounded-lg">
            📞 Call Now: 08050291180
          </Button>
        </a>

        <a href="#book-service" className="block w-full mb-4">
          <Button className="w-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold py-5 text-base md:text-lg rounded-lg">
            📝 Book Service Online
          </Button>
        </a>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-3">
          Looking for reliable RO service near you in Bangalore? We provide same-day RO water purifier repair, installation, and AMC service across Bangalore. Our trained technicians handle all major brands with genuine spare parts.
        </p>

        <p className="text-sm md:text-base font-bold text-blue-700">
          ⚡ Service starts at just ₹299 | Free Inspection | Pay After Service
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">
          Our RO Services in Bangalore
        </h2>
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} />
        ))}

        {/* We Service All Major Brands - Text Only */}
        <div className="mt-6 bg-blue-50 p-5 rounded-xl border border-blue-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
            We Service All Major Brands
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map((brand, i) => (
              <span
                key={i}
                className="bg-white text-slate-700 text-sm px-4 py-2 rounded-full border border-blue-200 font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-slate-900">
          Common RO Problems We Fix
        </h2>
        <p className="text-center text-slate-500 text-sm mb-5">
          Every problem solved in 60 minutes
        </p>
        <div className="grid grid-cols-2 gap-3">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-white border border-blue-100 shadow-sm p-4 rounded-xl text-center">
                <Icon size={28} className="text-blue-600 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </div>
            );
          })}
        </div>
        <a href="#book-service" className="block w-full mt-5">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-sm md:text-base rounded-lg">
            📞 Book Repair Now
          </Button>
        </a>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-10 bg-blue-50 p-5 md:p-6 rounded-xl border border-blue-100">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">
          Why Choose Us?
        </h2>
        <ul className="space-y-3">
          {whyChoose.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
              <Check size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">
          What Our Customers Say
        </h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-100 shadow-sm p-5 rounded-xl">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-2">"{t.text}"</p>
              <p className="text-xs text-blue-600 font-semibold">– {t.name}, {t.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-slate-200 p-4 rounded-xl cursor-pointer group shadow-sm">
              <summary className="font-semibold text-slate-900 text-sm md:text-base list-none flex justify-between items-center">
                {f.q}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="mt-10 bg-blue-50 p-5 md:p-6 rounded-xl border border-blue-100">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-slate-900 flex items-center justify-center gap-2">
          <MapPin size={24} className="text-blue-600" /> We Serve In Bangalore
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {areas.map((a, i) => (
            <span key={i} className="bg-white text-slate-700 text-xs md:text-sm px-3 py-1.5 rounded-full border border-blue-200">
              {a}
            </span>
          ))}
        </div>
      </section>

      <BookingForm />
    </div>
  );
}