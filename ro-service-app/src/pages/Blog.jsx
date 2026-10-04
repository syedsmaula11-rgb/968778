import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Droplet, Wrench, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Best RO Water Purifier in Bangalore (2026 Guide)",
      excerpt: "Complete guide to selecting the right RO water purifier for Bangalore's hard water. Learn about TDS, filtration stages, and budget-friendly options.",
      category: "Buying Guide",
      icon: Droplet,
      date: "Oct 4, 2026",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "RO Water Purifier Maintenance Tips: Extend Filter Life by 2 Years",
      excerpt: "Simple monthly maintenance tips to keep your RO purifier running efficiently. Save money on repairs and filter replacements.",
      category: "Maintenance",
      icon: Wrench,
      date: "Oct 2, 2026",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Signs Your RO Filter Needs Replacement (Don't Ignore These!)",
      excerpt: "Learn the 7 warning signs that indicate your RO filter or membrane needs replacement. Avoid contaminated water and health risks.",
      category: "Health & Safety",
      icon: ShieldCheck,
      date: "Sep 28, 2026",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "RO Service Cost in Bangalore: Complete Price Guide 2026",
      excerpt: "Transparent breakdown of RO repair, service, AMC, and filter replacement charges in Bangalore. No hidden costs.",
      category: "Pricing",
      icon: Droplet,
      date: "Sep 25, 2026",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Common RO Problems and How to Fix Them at Home",
      excerpt: "Water leakage, slow flow, bad taste? Learn quick troubleshooting tips before calling a technician.",
      category: "Troubleshooting",
      icon: Wrench,
      date: "Sep 22, 2026",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "RO vs UV vs UF Water Purifier: Which One is Best for Your Home?",
      excerpt: "Confused between RO, UV, and UF water purifiers? Here's a detailed comparison to help you decide.",
      category: "Buying Guide",
      icon: ShieldCheck,
      date: "Sep 18, 2026",
      readTime: "9 min read",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 bg-white">
      
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900">
          RO Service Blog
        </h1>
        <p className="text-slate-600 text-sm md:text-base">
          Tips, guides, and insights on RO water purifier maintenance, repair, and buying decisions.
        </p>
      </section>

      <div className="space-y-6">
        {posts.map((post) => {
          const Icon = post.icon;
          return (
            <article
              key={post.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                {post.title}
              </h2>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Need RO Service Right Now?
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Same-day doorstep repair in Bangalore. Call us now.
        </p>
        <a href="tel:08050291180" className="block">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-base rounded-lg">
            📞 Call Now: 08050291180
          </Button>
        </a>
      </div>

    </div>
  );
}