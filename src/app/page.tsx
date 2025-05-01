import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 sm:p-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        I'm Dipesh Adelkar, a passionate developer. Use the sidebar to navigate through my portfolio.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Services</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Featured Project</h2>
          <p className="mb-4">
            Check out my latest project in the Projects section of the sidebar.
          </p>
          <div className="flex justify-center">
            <Image
              src="/next.svg"
              alt="Project Preview"
              width={150}
              height={150}
              className="dark:invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
