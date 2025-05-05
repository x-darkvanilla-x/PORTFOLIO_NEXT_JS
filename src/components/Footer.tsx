import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/x-darkvanilla-x", icon: "/github.svg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dipesh-adelkar-378ba3256/", icon: "/linkedin.svg" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/x_darkvanilla_x",
      icon: "/instagram.svg",
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Dipesh Adelkar. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                  className="dark:invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;