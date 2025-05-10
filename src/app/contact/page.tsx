"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const ContactPage = () => {
  const contactInfo = {
    phone: "+91 9876543210",
    whatsapp: "+91 9876543210",
    email: "dipesh.adelkar@gmail.com",
    location: "Thane, Maharashtra, India",
    socialLinks: [
      { name: "GitHub", href: "https://github.com/x-darkvanilla-x", icon: "/github.svg" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/dipesh-adelkar-378ba3256/", icon: "/linkedin.svg" },
      { name: "Instagram", href: "https://www.instagram.com/x_darkvanilla_x", icon: "/instagram.svg" },
    ],
  };

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCyZYuKJc4YREy3ppZxlnODX_HL7sJlAbk`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const location = { lat: 19.197222, lng: 72.972222 }; // Mumbai coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 13,
    });
  };

  return (
    <div className="flex flex-col">
      <section className="pt-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Phone & WhatsApp */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Phone & WhatsApp</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{contactInfo.whatsapp}</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label={link.name}
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} Icon`}
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Location</h2>
          <p className="mb-4">{contactInfo.location}</p>
          <div id="map" className="w-full rounded-lg" style={{aspectRatio: "1"}}></div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ContactPage;