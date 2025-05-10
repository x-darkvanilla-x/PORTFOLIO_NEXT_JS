import React from "react";
import Services from "../services/page";
import ContactPage from "../contact/page";

function About() {
  return (
    <>
      <section className="pt-16 px-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-4xl text-left font-bold mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-left leading-relaxed">
              Greetings, everyone! I am Dipesh Mahesh Adelkar, I was born in
              Ratnagiri and brought up in Thane, Maharashtra. Currently, I am
              studying at Sahyog College in Thane, pursuing BSC in Information
              Technology. My passion lies in the realms of coding and web
              development, thanks to my family's unique blend of business and IT
              expertise that has provided me with a fertile ground for skill
              development.
            </p>
            <p className="text-left leading-relaxed">
              Beyond the confines of academia, I find solace and inspiration in
              my hobbies. One of my greatest pastimes is indulging in video
              games, a pursuit that not only entertains but also sharpens my
              strategic thinking abilities. Additionally, coding serves as both
              a hobby and a creative outlet for me, fostering my critical
              thinking skills and enabling me to explore innovative solutions to
              complex problems.
            </p>
            <p className="text-left leading-relaxed">
              In essence, I am a Mumbai native transplanted to Thane, on a quest
              to expand my horizons in the world of Information Technology. My
              academic journey is driven by a passion for coding, web
              development, and a rich family background that fuels my enthusiasm
              for these fields. Outside of the academic sphere, I find joy in
              the strategic challenges of video games and the intellectual
              stimulation that coding offers.
            </p>
          </div>
        </div>
      </section>
      <Services />
      <ContactPage />
    </>
  );
}

export default About;