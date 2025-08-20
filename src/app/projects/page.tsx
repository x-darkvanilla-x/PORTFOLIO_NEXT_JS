import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Skincare Website UI",
      description:
        "A modern skincare website built with Next.js and Tailwind CSS, featuring responsive design and on scroll animations",
      imageUrl: "/projects/skincare.png",
      projectUrl: "https://skincare-website-roan.vercel.app/",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GSAP Animation",
        "Figma",
      ],
    },
    {
      title: "Coaching Website",
      description:
        "A responsive coaching website built with React.js and Tailwind CSS, featuring a modern design and interactive elements.",
      imageUrl: "/projects/coaching.png",
      projectUrl: "https://www.cometobecoaching.com/",
      tags: ["React", "TailWind CSS", "Figma"],
    },
    {
      title: "Healthcare Platform",
      description:
        "A healthcare management system for scheduling appointments and managing patient records.",
      imageUrl: "/projects/hummcare.png",
      projectUrl: "https://github.com/yourusername/healthcare",
      tags: ["React", "React Native", "TailWind", "Postman"],
    },
    {
      title: "Makeup Studio Website",
      description:
        "A stylish and user-friendly website for a makeup studio, designed with React and Tailwind CSS. It showcases services, pricing, and portfolios with smooth UI interactions and responsive layouts.",
      imageUrl: "/projects/nuts.png",
      projectUrl: "https://nuts-eta.vercel.app/",
      tags: ["React", "TypeScript", "TailWind"],
    },
    {
      title: "Weather App",
      description:
        "A weather application built with React and Tailwind CSS, providing real-time weather information for any location.",
      imageUrl: "/projects/WeatherApp.png",
      projectUrl: "https://github.com/x-darkvanilla-x/Weather-App",
      tags: ["React", "TypeScript", "TailWind"],
    },
    {
      title: "Pizza App and Website",
      description:
        "A Pizza ordering website built with React and MongoDB, allowing users to place orders and track their deliveries.",
      imageUrl: "/projects/taskapp.svg",
      projectUrl: "https://github.com/x-darkvanilla-x",
      tags: ["React", "MongoDB", "React Native", "Nodejs", "Express"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}