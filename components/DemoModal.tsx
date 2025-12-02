'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { COMPANY_INFO } from '@/lib/constants';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  restaurantName: string;
  phone: string;
  city: string;
  locations: string;
  callVolume: string;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    restaurantName: '',
    phone: '',
    city: '',
    locations: '1',
    callVolume: '<100',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required';
    if (!formData.restaurantName.trim()) newErrors.restaurantName = 'Restaurant name required';
    if (!formData.city.trim()) newErrors.city = 'City required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Track conversion with Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Demo Request',
          currency: 'USD',
          value: 299,
        });
      }

      // Track with GTM
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_captured',
          form_name: 'demo_request',
          restaurant_name: formData.restaurantName,
          locations: formData.locations,
        });
      }

      setStep(2);
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      restaurantName: '',
      phone: '',
      city: '',
      locations: '1',
      callVolume: '<100',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8">
        {/* Step 1: Email Capture */}
        {step === 1 && (
          <div className="p-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="float-right text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="font-inter text-3xl text-primary-navy mb-2">Schedule Your Demo</h2>
            <p className="text-gray-600 mb-8">
              Let's find the perfect time to see Ring to Kitchen AI in action.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-primary-navy mb-2 text-sm">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${
                      errors.firstName ? 'border-red-500 bg-red-50' : 'border-soft-gray focus:border-energy-red'
                    }`}
                    placeholder="Maria"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block font-bold text-primary-navy mb-2 text-sm">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${
                      errors.lastName ? 'border-red-500 bg-red-50' : 'border-soft-gray focus:border-energy-red'
                    }`}
                    placeholder="García"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-soft-gray focus:border-energy-red'
                  }`}
                  placeholder="maria@lacocina.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Restaurant Name */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">Restaurant Name*</label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${
                    errors.restaurantName ? 'border-red-500 bg-red-50' : 'border-soft-gray focus:border-energy-red'
                  }`}
                  placeholder="La Cocina"
                />
                {errors.restaurantName && <p className="text-red-500 text-xs mt-1">{errors.restaurantName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:border-energy-red transition"
                  placeholder="+1 (305) 555-0123"
                />
              </div>

              {/* City */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${
                    errors.city ? 'border-red-500 bg-red-50' : 'border-soft-gray focus:border-energy-red'
                  }`}
                  placeholder="Miami, FL"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>

              {/* Locations */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">Number of Locations</label>
                <select
                  name="locations"
                  value={formData.locations}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:border-energy-red transition"
                >
                  <option value="1">1 Location</option>
                  <option value="2-3">2-3 Locations</option>
                  <option value="4-10">4-10 Locations</option>
                  <option value="10+">10+ Locations</option>
                </select>
              </div>

              {/* Call Volume */}
              <div>
                <label className="block font-bold text-primary-navy mb-2 text-sm">Monthly Call Volume</label>
                <select
                  name="callVolume"
                  value={formData.callVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:border-energy-red transition"
                >
                  <option value="<100">&lt; 100 calls/month</option>
                  <option value="100-500">100-500 calls/month</option>
                  <option value="500-1K">500-1,000 calls/month</option>
                  <option value="1K+">1,000+ calls/month</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-energy-red text-white px-6 py-4 rounded-lg hover:bg-[#E63D23] transition font-bold text-lg mt-6"
              >
                Continue to Schedule
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to receive communications from Ring to Kitchen AI.
              </p>
            </form>
          </div>
        )}

        {/* Step 2: Calendly */}
        {step === 2 && (
          <div className="p-8">
            <button
              onClick={handleClose}
              className="float-right text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="font-inter text-3xl text-primary-navy mb-4">Pick Your Time</h2>
            <p className="text-gray-600 mb-6">
              Thanks {formData.firstName}! Select a time that works best for you:
            </p>

            {/* Calendly Embed */}
            <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }}>
              <iframe
                src={`${COMPANY_INFO.calendlyUrl}?name=${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&email=${encodeURIComponent(formData.email)}&hide_event_type_details=1&hide_gdpr_banner=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a demo"
              />
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              You'll receive a confirmation email shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
