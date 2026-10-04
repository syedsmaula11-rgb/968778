import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { id } = useParams();

  const posts = {
    1: {
      title: "How to Choose the Best RO Water Purifier in Bangalore (2026 Guide)",
      category: "Buying Guide",
      date: "Oct 4, 2026",
      content: [
        { heading: "Why RO is Essential in Bangalore", body: "Bangalore's water supply has an average TDS (Total Dissolved Solids) level of 300-800 ppm, which is higher than the safe drinking limit of 500 ppm. An RO water purifier is essential to remove dissolved impurities, heavy metals, and harmful chemicals from the water." },
        { heading: "Understanding TDS Levels", body: "Before buying an RO, test your water's TDS. If it's above 300 ppm, RO is necessary. If it's between 100-300 ppm, UV or UF might suffice. You can buy a TDS meter for ₹200-300." },
        { heading: "Key Features to Look For", body: "1. Filtration stages (5-7 is ideal), 2. Storage capacity (8-10L for families), 3. Warranty (1-2 years), 4. Service network in Bangalore, 5. Copper/Mineral boost technology for health benefits." },
        { heading: "Budget Options", body: "Under ₹10,000: Basic RO with 5 stages. ₹10,000-₹18,000: Mid-range with mineral boost. ₹18,000-₹25,000: Premium with copper, hot water, and smart features." },
        { heading: "Our Recommendation", body: "For Bangalore's hard water, choose a 7-stage RO with copper boost and 8-10L storage. Always ensure the brand has service centres in Bangalore to avoid delays in repair." },
      ],
    },
    2: {
      title: "RO Water Purifier Maintenance Tips: Extend Filter Life by 2 Years",
      category: "Maintenance",
      date: "Oct 2, 2026",
      content: [
        { heading: "Monthly Cleaning Routine", body: "Wipe down the outer body with a damp cloth. Clean the water collection tray weekly. Check for water leakage around the tap and tank." },
        { heading: "Filter Cleaning", body: "Once a month, backwash your pre-filter if it's reusable. This removes sediment and extends its life by 3-6 months." },
        { heading: "Water Quality Check", body: "Every 2 months, test your water's TDS. If TDS rises significantly, your membrane may need replacement." },
        { heading: "Avoid These Mistakes", body: "Don't expose the purifier to direct sunlight. Don't run the purifier on low voltage without a stabilizer. Don't ignore unusual noises or leaks." },
        { heading: "Professional Service", body: "Book professional service every 6 months for deep cleaning and inspection. This can extend your purifier's life by 2-3 years." },
      ],
    },
    3: {
      title: "Signs Your RO Filter Needs Replacement (Don't Ignore These!)",
      category: "Health & Safety",
      date: "Sep 28, 2026",
      content: [
        { heading: "1. Bad Taste or Smell", body: "If your water tastes or smells strange, the carbon filter or membrane is exhausted. Immediate replacement needed." },
        { heading: "2. Slow Water Flow", body: "If water takes longer to fill, the pre-filter or membrane is clogged. A sudden 30% drop in flow rate is a warning sign." },
        { heading: "3. Cloudy or Discolored Water", body: "Any discoloration means the sediment filter or membrane is failing. Don't consume this water." },
        { heading: "4. Frequent Motor Running", body: "If the motor runs continuously, the pressure is off due to clogged filters. This increases electricity bill too." },
        { heading: "5. It's Been Over a Year", body: "Even if water seems fine, replace pre-filters every 6 months and membranes every 12-18 months as preventive maintenance." },
      ],
    },
    4: {
      title: "RO Service Cost in Bangalore: Complete Price Guide 2026",
      category: "Pricing",
      date: "Sep 25, 2026",
      content: [
        { heading: "Basic Service Visit", body: "₹299 to ₹499 per visit. Includes inspection, cleaning, and minor adjustments. No parts included." },
        { heading: "Filter Replacement", body: "Pre-filter: ₹200-500 | Carbon filter: ₹500-800 | Sediment filter: ₹400-700 | RO membrane: ₹1,200-2,500 | UV lamp: ₹800-1,500." },
        { heading: "AMC Plans", body: "Basic AMC: ₹999/year (2 services). Standard: ₹1,999/year (4 services + 1 filter). Premium: ₹2,999/year (6 services + 2 filters + unlimited repairs)." },
        { heading: "Why We're Affordable", body: "We use genuine parts, transparent pricing, and pay-after-service model. No hidden charges, no upfront payment." },
        { heading: "Book Your Service", body: "Call 08050291180 for same-day service in Bangalore. Free inspection with every booking." },
      ],
    },
    5: {
      title: "Common RO Problems and How to Fix Them at Home",
      category: "Troubleshooting",
      date: "Sep 22, 2026",
      content: [
        { heading: "Water Leakage", body: "Check the tap assembly, tank seal, and pipe connections. Tighten loose fittings. If leakage continues, call a technician." },
        { heading: "Slow Water Flow", body: "Turn off the purifier, remove the pre-filter, and clean it with water. If flow still slow, replace the pre-filter." },
        { heading: "Motor Not Starting", body: "Check the power supply, plug, and switch. Ensure the stabilizer is working. If all OK, the motor might have failed." },
        { heading: "Bad Taste", body: "If the purifier hasn't been serviced in 6+ months, book a professional service. Filter replacement will fix it." },
        { heading: "When to Call a Technician", body: "If you've tried basic troubleshooting and the issue persists, call us at 08050291180. We reach within 60 minutes in Bangalore." },
      ],
    },
    6: {
      title: "RO vs UV vs UF Water Purifier: Which One is Best for Your Home?",
      category: "Buying Guide",
      date: "Sep 18, 2026",
      content: [
        { heading: "RO (Reverse Osmosis)", body: "Best for: Hard water (TDS > 300 ppm), areas with dissolved impurities. Removes: 90-99% of dissolved solids, heavy metals, chemicals. Cost: ₹8,000-₹25,000." },
        { heading: "UV (Ultraviolet)", body: "Best for: Low TDS water (< 200 ppm), municipal water supply. Removes: Bacteria, viruses, microorganisms. Cost: ₹3,000-₹12,000." },
        { heading: "UF (Ultrafiltration)", body: "Best for: Clear water with low TDS. Removes: Sediment, dust, large particles. Cost: ₹2,000-₹8,000." },
        { heading: "Which One for Bangalore?", body: "Bangalore water TDS is mostly 300-800 ppm. RO is the best choice. If your TDS is between 200-300, UV + sediment filter works." },
        { heading: "Hybrid Options", body: "Many modern purifiers combine RO + UV + UF. These are best for complete protection but cost more." },
      ],
    },
  };

  const post = posts[id];

  if (!post) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white">

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-6 hover:gap-3 transition-all"
      >
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      <div className="mb-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
          {post.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-3 leading-snug">
          {post.title}
        </h1>
        <p className="text-xs text-slate-500">{post.date}</p>
      </div>

      <article className="space-y-6 mb-10">
        {post.content.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
              {section.heading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed text-justify">
              {section.body}
            </p>
          </div>
        ))}
      </article>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Need RO Service in Bangalore?
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Book same-day doorstep repair. 60-minute response.
        </p>
        <a href="tel:08050291180" className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2">
            <Phone size={18} /> Call Now: 08050291180
          </Button>
        </a>
      </div>

    </div>
  );
}