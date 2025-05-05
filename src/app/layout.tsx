import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata.ts
export const metadata = {
  title: "Dipesh Adelkar - Web Developer & Software Engineer",
  description: "Explore the professional portfolio of Dipesh Adelkar, a skilled Web Developer and Software Engineer with expertise in modern web technologies, app development, and innovative solutions.",
  keywords: "Dipesh Adelkar, Web Developer, Software Engineer, React, Node.js, Portfolio, Full-stack Development, App Development, UI/UX Design, JavaScript, Programming, Skills, Projects, Blogs",
  creator: "Dipesh Adelkar",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Dipesh Adelkar - Web Developer & Software Engineer",
    description: "Discover the portfolio of Dipesh Adelkar, a passionate developer showcasing projects in web and app development, with a focus on user-centered design and cutting-edge technologies.",
    images: "/profile.jpg",  // replace with your actual image path
    url: "https://dipeshadelkar.vercel.app",  // replace with your actual website URL
  },
  routes: {
    skills: {
      title: "Skills - Dipesh Adelkar",
      description: "Explore the technical skills and technologies expertise of Dipesh Adelkar, from front-end to back-end development.",
      openGraph: {
        title: "Skills - Dipesh Adelkar",
        description: "Discover the key skills and technologies that power Dipesh Adelkar’s work in web development and software engineering.",
        image: "/assets/images/skills-og-image.jpg",  // replace with your actual image path
        url: "https://dipeshadelkar.vercel.app/skills",
      },
    },
    blogs: {
      title: "Blogs - Dipesh Adelkar",
      description: "Read insightful blogs and articles by Dipesh Adelkar on web development, programming, and tech trends.",
      openGraph: {
        title: "Blogs - Dipesh Adelkar",
        description: "Stay updated with the latest tech trends, coding tutorials, and personal insights shared by Dipesh Adelkar.",
        image: "/assets/images/blogs-og-image.jpg",  // replace with your actual image path
        url: "https://dipeshadelkar.vercel.app/blogs",
      },
    },
    projects: {
      title: "Projects - Dipesh Adelkar",
      description: "Browse through the projects portfolio of Dipesh Adelkar, showcasing innovative solutions and development expertise.",
      openGraph: {
        title: "Projects - Dipesh Adelkar",
        description: "Explore the various projects by Dipesh Adelkar, highlighting his contributions to web and app development.",
        image: "/assets/images/projects-og-image.jpg",  // replace with your actual image path
        url: "https://dipeshadelkar.vercel.app/projects",
      },
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <Sidebar />
          <div className="flex-1 ml-0 md:ml-64 min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
