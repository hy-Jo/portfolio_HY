import * as React from "react";

const techCategories = [
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "NestJS", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ]
  },
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ]
  },
  {
    category: "Database",
    techs: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ]
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ]
  }
];

export default function TechIcons() {
  return (
    <div className="space-y-10">
      {techCategories.map((category) => (
        <div key={category.category} className="space-y-4">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 border-b pb-2">{category.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {category.techs.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                {tech.name === "AWS" ? (
                  <div className="w-12 h-12 flex items-center justify-center bg-[#232F3E] rounded">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-5 object-contain" 
                    />
                  </div>
                ) : (
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-12 h-12 object-contain" 
                  />
                )}
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 