import Image from 'next/image';

interface SkillCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

export default function SkillCard({ title, description, iconSrc }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}