import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookingForm({ brand = "RO" }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const serviceOptions = [
    `${brand} Service & Repair`,
    `${brand} Filter Replacement`,
    `${brand} AMC Maintenance Plans`,
    `${brand} Installation & Relocation`,
  ];

  const generateBookingId = () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `RSC${year}${month}${day}-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);

    try {
      await fetch('https://formsubmit.co/ajax/syedsmaula786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Brand': brand,  // ⭐ Brand name
          'Booking ID': newBookingId,
          'Service Type': formData.get('service'),
          'Name': formData.get('name'),
          'Mobile': formData.get('mobile'),
          'Pincode': formData.get('pincode'),
          'Address': formData.get('address'),
          _subject: `[${brand}] New Booking ${newBookingId} - ${formData.get('name')}`,  // ⭐ Subject me brand
          _template: 'table',
          _captcha: 'false',
        }),
      });

      setSubmitted(true);
      form.reset();

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-XXXXXXXX/YYYYYYYY',
        });
      }
    } catch (err) {
      alert('Something went wrong. Please call us directly at 08050291180.');
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div id="book-service" className="py-8 md:py-10 w-full">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-3">
            ✅ Booking Confirmed!
          </h3>
          <p className="text-green-700 text-sm mb-4">
            Thank you! Our team will call you within 5 minutes to confirm your service.
          </p>
          <div className="bg-white border-2 border-dashed border-green-400 rounded-lg p-4 mb-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Your Booking ID</p>
            <p className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-wider">
              {bookingId}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Please save this ID for future reference
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="tel:08050291180">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-sm md:text-base rounded-lg">
                📞 Call Now: 08050291180
              </Button>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="text-blue-600 text-sm font-semibold hover:underline py-2"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="book-service" className="py-8 md:py-10 w-full">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-2 text-slate-900">
        Book {brand} Service in Bangalore
      </h2>
      <p className="text-center text-slate-500 text-sm mb-6">
        Fill the form, we'll call you in 5 minutes
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <Label>Select Service *</Label>
          <select
            name="service"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>-- Select a Service --</option>
            {serviceOptions.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <Label>Name *</Label>
          <Input name="name" placeholder="Enter your full name" required className="w-full bg-white text-black" />
        </div>

        <div>
          <Label>Mobile Number *</Label>
          <Input name="mobile" type="tel" placeholder="Enter 10-digit mobile number" pattern="[0-9]{10}" maxLength="10" required className="w-full bg-white text-black" />
        </div>

        <div>
          <Label>Pincode *</Label>
          <Input name="pincode" type="text" placeholder="Enter 6-digit pincode" pattern="[0-9]{6}" maxLength="6" required className="w-full bg-white text-black" />
        </div>

        <div>
          <Label>Address *</Label>
          <Input name="address" placeholder="Flat, Building, Area" required className="w-full bg-white text-black" />
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 md:py-6 text-base md:text-lg rounded-lg"
        >
          {submitting ? 'Submitting...' : 'Submit – Get Service'}
        </Button>
      </form>
    </div>
  );
}