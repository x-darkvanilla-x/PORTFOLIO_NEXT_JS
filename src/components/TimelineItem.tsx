import React from 'react';
import Image from 'next/image';

interface TimelineItemProps {
  icon: string;
  title: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, date, description }) => {
  return (
    <div className="flex gap-4 pb-8 last:pb-0 relative">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center relative z-10">
          <Image src={icon} alt={title} width={24} height={24} className="dark:invert" />
        </div>
        <div className="absolute top-12 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 last:hidden"></div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{date}</p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;