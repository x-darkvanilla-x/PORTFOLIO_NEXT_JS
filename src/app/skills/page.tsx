import SkillCard from "@/components/SkillCard";

export default function Skills() {
  const tech_skills = [
    {
      title: "Python",
      description: "High-level programming language known for its readability.",
      iconSrc: "/skills/python.svg",
    },
    // {
    //   title: "C",
    //   description: "Powerful procedural programming language.",
    //   iconSrc: "/skills/c.svg",
    // },
    // {
    //   title: "C++",
    //   description: "Extension of C with object-oriented features.",
    //   iconSrc: "/skills/cpp.svg",
    // },
    {
      title: "Java",
      description: "Object-oriented programming language used in many domains.",
      iconSrc: "/skills/java.svg",
    },
    {
      title: "HTML",
      description: "Standard markup language for creating web pages.",
      iconSrc: "/skills/html.svg",
    },
    {
      title: "CSS",
      description:
        "Style sheet language used for describing the look of a webpage.",
      iconSrc: "/skills/css.svg",
    },
    {
      title: "JavaScript",
      description:
        "High-level language used to create interactive effects in web browsers.",
      iconSrc: "/skills/javascript.svg",
    },
  ];

  const frameworks_libraries = [
    {
      title: "React.js",
      description: "JavaScript library for building user interfaces.",
      iconSrc: "/skills/react.svg",
    },
    {
      title: "Next.js",
      description: "React framework for production-ready web applications with server-side rendering.",
      iconSrc: "/skills/nextjs.svg",
    },  
    {
      title: "Angular",
      description: "TypeScript-based web application framework by Google.",
      iconSrc: "/skills/angular.svg",
    },
    {
      title: "Bootstrap",
      description: "CSS framework for responsive, mobile-first front-end development.",
      iconSrc: "/skills/bootstrap.svg",
    },
    {
      title: "jQuery",
      description: "Fast and feature-rich JavaScript library for DOM manipulation.",
      iconSrc: "/skills/jquery.svg",
    },
    // {
    //   title: "SCSS",
    //   description: "Syntactically awesome style sheets – a CSS preprocessor.",
    //   iconSrc: "/skills/scss.svg",
    // },
    {
      title: "Material UI",
      description: "React UI framework implementing Google’s Material Design.",
      iconSrc: "/skills/materialui.svg",
    },
    {
      title: "React Native",
      description: "Framework for building native apps using React.",
      iconSrc: "/skills/react.svg",
    },
    {
      title: "Node.js",
      description: "JavaScript runtime built on Chrome’s V8 engine for server-side development.",
      iconSrc: "/skills/node.svg",
    },
    {
      title: "Express",
      description: "Minimalist web framework for Node.js.",
      iconSrc: "/skills/express.svg",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapidly building modern websites.",
      iconSrc: "/skills/tailwind.svg",
    },
  ];

  const tools = [
    {
      title: "Figma",
      description: "Collaborative interface design tool for UI/UX.",
      iconSrc: "/skills/figma.svg",
    },
    {
      title: "Canva",
      description: "Online design tool for creating social media graphics, presentations, and more.",
      iconSrc: "/skills/canva.svg",
    },
    {
      title: "Git - GitHub",
      description: "Version control system for tracking code changes.",
      iconSrc: "/skills/git.svg",
    },
    {
      title: "VS Code",
      description: "Popular code editor by Microsoft with extensive extensions.",
      iconSrc: "/skills/vscode.svg",
    },
    {
      title: "PowerPoint",
      description: "Microsoft tool for creating presentations.",
      iconSrc: "/skills/powerpoint.svg",
    },
    {
      title: "Excel",
      description: "Spreadsheet tool by Microsoft for data analysis and visualization.",
      iconSrc: "/skills/excel.svg",
    },
    {
      title: "Postman",
      description: "API testing and collaboration platform for developers.",
      iconSrc: "/skills/postman.svg",
    },
  ];  
  
  const databases = [
    {
      "title": "MongoDB",
      "description": "NoSQL document database known for scalability and flexibility.",
      "iconSrc": "/skills/mongodb.svg"
    },
    {
      "title": "MySQL",
      "description": "Popular open-source relational database management system.",
      "iconSrc": "/skills/database.svg"
    }
  ]

  const soft_skills = [
    {
      "title": "Excellent Communication",
      "description": "Ability to clearly convey ideas and collaborate effectively with others.",
      "iconSrc": "/skills/communication.svg"
    },
    {
      "title": "Adaptive Learning",
      "description": "Quick to grasp new concepts and adapt to changing environments.",
      "iconSrc": "/skills/education.svg"
    },
    {
      "title": "Creativity and Innovation",
      "description": "Ability to think outside the box and generate original ideas or solutions.",
      "iconSrc": "/skills/window.svg"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tech_skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Frameworks and Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks_libraries.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Database</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databases.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soft_skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                iconSrc={skill.iconSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}