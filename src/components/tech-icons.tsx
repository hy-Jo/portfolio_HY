import * as React from "react";

const techs = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "AWS", icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

export default function TechIcons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {techs.map((tech) => (
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
  );
} 