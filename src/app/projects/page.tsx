import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design and dark mode support.",
      imageUrl: "/projects/portfolio.svg",
      projectUrl: "https://github.com/yourusername/portfolio",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Coaching Website",
      description: "A responsive coaching website built with Next.js and Tailwind CSS, featuring a modern design and interactive elements.",
      imageUrl: "/projects/ecommerce.svg",
      projectUrl: "https://github.com/yourusername/ecommerce",
      tags: ["React", "Node.js", "TailWind", "Express"]
    },
    {
      title: "Pizza App and Website",
      description: "A pizza ordering website built with React and MongoDB, allowing users to place orders and track their deliveries.",
      imageUrl: "/projects/taskapp.svg",
      projectUrl: "https://github.com/x-darkvanilla-x/PizzaHub_Admin_Web",
      tags: ["React", "MongoDB", "React Native", "Nodejs", "Express"]
    },
    {
      title: "Healthcare Platform",
      description: "A healthcare management system for scheduling appointments and managing patient records.",
      imageUrl: "/projects/hummcare.jpg",
      projectUrl: "https://github.com/yourusername/healthcare",
      tags: ["React", "React Native", "TailWind", "Postman"]
    },
    {
        title: "Weather App",
        description: "A weather application built with React and Tailwind CSS, providing real-time weather information for any location.",
        imageUrl: "/projects/WeatherApp.png",
        projectUrl: "https://github.com/x-darkvanilla-x/Weather-App",
        tags: ["React", "TypeScript", "TailWind"]
      }
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