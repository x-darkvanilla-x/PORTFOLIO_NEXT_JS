import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative flex flex-col items-center justify-center min-h-[100vh] w-full bg-cover bg-center px-8"
        style={{ backgroundImage: 'url("/header-bg.svg")' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Full Stack Developer</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Passionate about creating innovative web solutions with cutting-edge
            technologies
          </p>
          <a
            href="/resume.pdf"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-left font-bold mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Dipesh Adelkar"
                fill
                className="object-cover"
              />
            </div> */}
            <div className="flex-1 space-y-4">
              <p className="text-left leading-relaxed">
                Greetings, everyone! I am Dipesh Mahesh Adelkar, I was born in
                Ratnagiri and brought up in Thane, Maharashtra. Currently, I am
                studying at Sahyog College in Thane, pursuing BSC in Information
                Technology. My passion lies in the realms of coding and web
                development, thanks to my family's unique blend of business and
                IT expertise that has provided me with a fertile ground for
                skill development.
              </p>
              <p className="text-left leading-relaxed">
                Beyond the confines of academia, I find solace and inspiration
                in my hobbies. One of my greatest pastimes is indulging in video
                games, a pursuit that not only entertains but also sharpens my
                strategic thinking abilities. Additionally, coding serves as
                both a hobby and a creative outlet for me, fostering my critical
                thinking skills and enabling me to explore innovative solutions
                to complex problems.
              </p>
              <p className="text-left leading-relaxed">
                In essence, I am a Mumbai native transplanted to Thane, on a
                quest to expand my horizons in the world of Information
                Technology. My academic journey is driven by a passion for
                coding, web development, and a rich family background that fuels
                my enthusiasm for these fields. Outside of the academic sphere,
                I find joy in the strategic challenges of video games and the
                intellectual stimulation that coding offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Humm Care"
              description="End-to-end healthcare and support for your employees, through each stage of family-building, women's health, employee assistance programs and condition management."
              imageUrl="/projects/hummcare.jpg"
              projectUrl="https://github.com/username/ecommerce"
            />
            <ProjectCard
              title="Task Management App"
              description="A React-based task management application with real-time updates and collaborative features."
              imageUrl="/projects/taskapp.svg"
              projectUrl="https://github.com/username/taskapp"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A modern portfolio website built with Next.js and Tailwind CSS, featuring responsive design."
              imageUrl="/projects/portfolio.svg"
              projectUrl="https://github.com/username/portfolio"
            />
          </div>
        </div>
      </section>

      <div className="p-8 sm:p-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8 text-center max-w-2xl">
          I'm Dipesh Adelkar, a passionate developer. Use the sidebar to
          navigate through my portfolio.
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
              Check out my latest project in the Projects section of the
              sidebar.
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
    </div>
  );
}