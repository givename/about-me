import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Backend",
      icon: "🚀",
      skills: ["Node.js", "TypeScript", "JavaScript", "NestJS", "Express", "AdonisJS"],
      color: "#3B82F6"
    },
    {
      category: "Базы данных",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "MSSQL", "Redis", "ClickHouse"],
      color: "#10B981"
    },
    {
      category: "Инструменты",
      icon: "🛠️",
      skills: ["Docker", "Kubernetes", "RabbitMQ", "Socket.io", "Git", "CI/CD", "pm2", "k8s", "k9s"],
      color: "#F59E0B"
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "Vue", "Nuxt", "HTML5", "CSS", "AdminJS"],
      color: "#EF4444"
    },
    {
      category: "Другие навыки",
      icon: "⚡",
      skills: ["REST API", "GraphQL", "Linux", "pg-boss", "S3", "blurhash", "telegram-api", "hbs", "yandex-cloud", "Jira", "ClickUp"],
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="section">
      <div className="section-content">
        <h2 className="section-title">Навыки</h2>
        <div className="skills-section-content">
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category" style={{"--category-color": skillGroup.color}}>
                <div className="category-header">
                  <span className="category-icon">{skillGroup.icon}</span>
                  <h3 className="category-title">{skillGroup.category}</h3>
                </div>
                <div className="skill-tags">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 