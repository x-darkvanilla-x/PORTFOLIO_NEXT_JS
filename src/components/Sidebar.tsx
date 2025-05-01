"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial render
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation links
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "EDUCATION", href: "/education" },
  ];

  // Social media links
  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: "/github.svg" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "/linkedin.svg" },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: "/instagram.svg",
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out z-40 flex flex-col justify-between
          ${isMobile ? (isOpen ? "w-64" : "w-0") : "w-64"} overflow-hidden`}
      >
        <div className="flex flex-col items-center p-6 overflow-y-auto">
          {/* Profile section */}
          <div className="flex flex-col items-center mb-8 mt-4">
            {/* <div className="text-xs text-center mb-2 text-gray-600 dark:text-gray-400">
              <p>#code</p>
              <p>#travel</p>
              <p>#game</p>
            </div> */}

            <h1 className="text-xl font-bold my-4">Dipesh Adelkar</h1>

            <div className="w-32 h-32 relative mb-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">dipesh.adelkar@gmail.com</span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="w-full mb-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center">
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map((link) => (
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
                  />
                </a>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Made with ❤️ Using Next Js and Tailwind Css
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;