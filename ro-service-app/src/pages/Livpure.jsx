import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import { Button } from "@/components/ui/button";
import { Check, Star, MapPin, Droplet, Wrench, ShieldCheck, Calendar, Phone } from 'lucide-react';

export default function Livpure() {
  const services = [
    { title: "Livpure RO Repair Service", desc: "Water leakage, low flow, bad taste, or purifier not turning on? We repair all Livpure RO models at your doorstep within 60 minutes. Genuine parts. 90-day warranty." },
    { title: "Livpure AMC Plans", desc: "Save money with our Livpure Annual Maintenance plans. Includes filter replacement, tank cleaning, unlimited repair visits, and priority support." },
    { title: "Livpure Filter Replacement", desc: "We use genuine Livpure filters and membranes for Livpure water purifiers. Get pure water with original parts." },
    { title: "Livpure Installation", desc: "New Livpure water purifier? We do site inspection, wall mounting, tap connection, and complete setup with a free demo." },
  ];

  const problems = [
    { title: "Water Leakage", desc: "Is your Livpure RO leaking? We fix it instantly.", icon: Droplet },
    { title: "Low Water Flow", desc: "Water coming slowly? Filter or pump issue.", icon: Wrench },
    { title: "Bad Taste / Smell", desc: "Water tastes bad? Membrane needs changing.", icon: Droplet },
    { title: "Motor Noise", desc: "Strange noise from motor? Immediate repair needed.", icon: Wrench },
    { title: "Purifier Not Turning On", desc: "Livpure not turning on? Power issue.", icon: ShieldCheck },
    { title: "Filter Clogged", desc: "Filter is jammed? Genuine replacement required.", icon: Droplet },
  ];

  const whyChoose = [
    "15+ Years Experience – Trusted by 50,000+ families across Bangalore",
    "60-Minute Doorstep Service – Same-day Livpure RO repair",
    "All Livpure Models Supported – Envy, Bolt, Pep, Zinger, etc.",
    "Genuine Spare Parts – Original Livpure filters & membranes",
    "90-Day Warranty – On every Livpure repair and part replacement",
    "Transparent Pricing – No hidden charges, pay after service",
    "24×7 Customer Support – Call or WhatsApp anytime",
  ];

  const testimonials = [
    { name: "Rajesh Kumar", area: "Whitefield", text: "Livpure technician came within 45 minutes. Fixed my leakage in 20 minutes. Very professional." },
    { name: "Priya Sharma", area: "Koramangala", text: "Booked Livpure AMC plan. Got genuine filters and saved a lot. Highly recommended." },
    { name: "Amit Patel", area: "Indiranagar", text: "Same-day Livpure installation. The technician explained everything clearly. Water tastes much better now." },
  ];

  const faqs = [
    { q: "Do you repair all Livpure RO models?", a: "Yes, we service and repair all Livpure models including Envy, Bolt, Pep, Zinger, and other Livpure water purifiers in Bangalore." },
    { q: "How long does Livpure RO service take?", a: "We reach your home within 60 minutes. Most Livpure RO repairs are completed within 30 minutes." },
    { q: "Do you use genuine Livpure parts?", a: "Yes, we only use genuine Livpure filters and branded spare parts. Every part comes with a 90-day warranty." },
    { q: "How can I make the payment?", a: "Cash, UPI, Card, and Net Banking – all accepted. Pay after the Livpure service is completed." },
    { q: "What is the Livpure service charge?", a: "Basic Livpure RO visit starts at ₹299. Inspection included. Parts are charged separately. No hidden charges." },
  ];

  const areas = ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "BTM Layout", "Jayanagar", "Marathahalli", "Electronic City", "Hebbal", "Yelahanka", "Rajajinagar", "Malleshwaram"];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 bg-white">

      {/* ⭐ HERO SECTION - LIVPURE GREEN ⭐ */}
      <section className="text-center pt-4 pb-6 px-2 bg-gradient-to-b from-green-50 via-green-50 to-white rounded-2xl mb-6 border border-green-100">
        <p className="text-[11px] font-bold text-green-700 uppercase tracking-wide mb-2">
          Livpure Water Purifier Service
        </p>
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 text-green-900 leading-snug">
          Livpure RO Service Near Me – 60 Minute Doorstep Repair in Bangalore
        </h1>
        <h2 className="text-sm md:text-lg font-semibold mb-5 text-slate-700">
          Expert Repair, AMC & Genuine Filter Replacement for All Livpure Models
        </h2>

        <img
          src="/livpure-image.jpg"
          alt="Livpure RO Water Purifier Service Bangalore"
          className="w-full h-auto rounded-xl mb-5 shadow-lg object-contain bg-white max-h-72"
        />

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a href="tel:08050291180">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 text-base md:text-lg rounded-lg flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now: 08050291180
            </Button>
          </a>
          <a href="#book-service">
            <Button className="w-full bg-white text-black border-2 border-green-600 hover:bg-green-50 font-bold py-5 text-base md:text-lg rounded-lg flex items-center justify-center gap-2">
              <Calendar size={20} /> Book Service Online
            </Button>
          </a>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="mt-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900">
          Livpure RO Repair Service In Bangalore
        </h2>
        <div className="space-y-4 text-left">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Searching for <strong>Livpure RO service near me</strong> in Bangalore? We provide same-day Livpure RO water purifier repair, installation, AMC, and filter replacement across Bangalore. Our trained technicians handle all Livpure models including Livpure Envy, Livpure Bolt, Livpure Pep, Livpure Zinger with genuine Livpure spare parts.
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            If your Livpure RO is showing water leakage, low flow, bad taste, or not turning on, our technicians fix it within 60 minutes at your doorstep. One of the most trusted names for <strong>Livpure water purifier service in Bangalore</strong> is <span className="text-orange-500 font-bold">RO Service Center 24x7</span>. We use only genuine Livpure filters, membranes, and pumps. Every Livpure repair comes with a 90-day warranty and transparent pricing.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">Our Livpure RO Services in Bangalore</h2>
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} />
        ))}
      </section>

      {/* PROBLEMS */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-slate-900">Common Livpure RO Problems We Fix</h2>
        <p className="text-center text-slate-500 text-sm mb-5">Every problem solved in 60 minutes</p>
        <div className="grid grid-cols-2 gap-3">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-white border border-green-100 shadow-sm p-4 rounded-xl text-center">
                <Icon size={28} className="text-green-600 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </div>
            );
          })}
        </div>
        <a href="#book-service" className="block w-full mt-5">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-sm md:text-base rounded-lg">
            📞 Book Livpure RO Repair Now
          </Button>
        </a>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-10 bg-green-50 p-5 md:p-6 rounded-xl border border-green-100">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">Why Choose Us for Livpure RO?</h2>
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
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">What Our Customers Say</h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-100 shadow-sm p-5 rounded-xl">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-2">"{t.text}"</p>
              <p className="text-xs text-green-600 font-semibold">– {t.name}, {t.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-5 text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white border border-slate-200 p-4 rounded-xl cursor-pointer group shadow-sm">
              <summary className="font-semibold text-slate-900 text-sm md:text-base list-none flex justify-between items-center">
                {f.q}
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="mt-10 bg-green-50 p-5 md:p-6 rounded-xl border border-green-100">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-slate-900 flex items-center justify-center gap-2">
          <MapPin size={24} className="text-green-600" /> We Serve In Bangalore
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {areas.map((a, i) => (
            <span key={i} className="bg-white text-slate-700 text-xs md:text-sm px-3 py-1.5 rounded-full border border-green-200">
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <BookingForm brand="Livpure" />
    </div>
  );
}