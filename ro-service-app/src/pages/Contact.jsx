export default function Contact() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-900">Contact Us</h1>
      <p className="text-center text-slate-500 mb-6 text-sm">Get Reliable RO Water Purifier Services in Bangalore</p>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-4 text-slate-700">
        <p className="text-base">📞 <a href="tel:08050291180" className="text-blue-600 font-semibold">08050291180</a></p>
        <p className="text-base">💬 <a href="https://wa.me/918050291180" className="text-green-600 font-semibold">WhatsApp Booking</a></p>
        <p className="text-base">✉️ <a href="mailto:support@roservicecenteronline24x7.in" className="text-blue-600">support@roservicecenteronline24x7.in</a></p>
        <p className="text-base">📍 Bangalore, Karnataka, India</p>
        <p className="text-base">🕐 Mon–Sun: 24×7 Available</p>
      </div>

      <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
        <iframe
          title="Bangalore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11462349!2d77.34923575!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-64"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}