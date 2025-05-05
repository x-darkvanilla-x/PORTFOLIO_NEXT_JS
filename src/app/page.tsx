import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import TimelineItem from "@/components/TimelineItem";

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

      <section className="py-16 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Humm Care"
              description="End-to-end healthcare and support, through each stage of family-building, women's health, employee assistance programs and condition management."
              imageUrl="/projects/hummcare.jpg"
              projectUrl="https://play.google.com/store/apps/details?id=hummcare.app&hl=en_IN&pli=1"
            />
            <ProjectCard
              title="Task Management App"
              description="A React-based task management application with real-time updates and collaborative features."
              imageUrl="/projects/taskapp.svg"
              projectUrl="https://www.linkedin.com/posts/dipesh-adelkar-378ba3256_reactdevelopment-taskmanagement-visualappeal-activity-7202614170188488704-R6cT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8uJEwBEvPG7lAndAo0IuIGamk6yC-E3Xo"
            />
            <ProjectCard
              title="Coaching Website"
              description="A modern Coaching website built with React.js and Tailwind CSS, featuring responsive design."
              imageUrl="/projects/portfolio.svg"
              projectUrl="https://ctbwebsite.netlify.app/"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Frontend Development"
              description="Expertise in React, Next.js, and modern CSS frameworks like Tailwind."
              iconSrc="/skills/next.svg"
            />
            <SkillCard
              title="Backend Development"
              description="Experience with Node.js, Express, and database management."
              iconSrc="/skills/file.svg"
            />
            <SkillCard
              title="UI/UX Design"
              description="Creating intuitive user interfaces and experiences using modern design principles and tools."
              iconSrc="/skills/window.svg"
            />
            <SkillCard
              title="Mobile Development"
              description="Building cross-platform mobile applications using React Native"
              iconSrc="/skills/globe.svg"
            />
            <SkillCard
              title="Graphic Design"
              description=" Skilled in Adobe Creative Suite (Photoshop, Illustrator, XD) and Figma for creating visually stunning designs."
              iconSrc="/skills/vercel.svg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">My Journey</h2>
          <div className="space-y-2">
          <TimelineItem
  icon="/journey/globe.svg"
  title="App Developer"
  date="2024–2025"
  description="Worked as a React Native Intern at Banao Technologies, where I developed and maintained cross-platform mobile applications using modern development practices."
/>
<TimelineItem
  icon="/journey/window.svg"
  title="Freelance Graphic Designer"
  date="2022–Present"
  description="Designed promotional materials, branding assets, and visual content for various clients to strengthen their brand identity and market visibility."
/>
<TimelineItem
  icon="/journey/next.svg"
  title="BSc in Information Technology"
  date="2022–2025"
  description="Completed a Bachelor's degree in Information Technology at Sahyog College, Thane, with a focus on web development, programming, and software engineering."
/>
<TimelineItem
  icon="/journey/education.svg"
  title="Higher Education"
  date="2021"
  description="Completed HSC from MatoShree College of Science with major subjects in Physics, Chemistry, and Mathematics under the Maharashtra State Board."
/>

          </div>
        </div>
      </section>

      </div>
  );
}