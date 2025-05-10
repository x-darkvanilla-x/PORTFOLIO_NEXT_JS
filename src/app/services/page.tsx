import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  tools: string[];
}

function ServiceCard({ title, description, icon, tools }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <div className="relative h-16 w-16 mb-4">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites and web applications using the latest technologies and best practices.",
      icon: "/skills/react.svg",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "REST API", "UI/UX Design"]
    },
    {
      title: "App Development",
      description: "Building cross-platform mobile applications that provide seamless user experiences across devices.",
      icon: "/skills/globe.svg",
      tools: ["React Native", "iOS", "Android", "API Integration", "Mobile UI/UX", "Node.js", "Express", "MongoDB", "REST API"]
    },
    {
      title: "Graphic Design",
      description: "Crafting visually stunning designs that communicate your brand's message effectively.",
      icon: "/skills/figma.svg",
      tools: ["Logo Design", "Branding", "Ppt", "Banner Designs", "Social Media", "UI/UX Design"]
    },
    {
      title: "Video Editing",
      description: "Creating engaging video content with professional editing, effects, and post-production.",
      icon: "/skills/vercel.svg",
      tools: ["Whiteboard Animations", "Presentation Animations", "Video Editing", "Video Production"]
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="pt-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                tools={service.tools}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}