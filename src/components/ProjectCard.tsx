import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={projectUrl} target="_blank" className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer">
        <div className="relative h-48 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}