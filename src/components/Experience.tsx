import React from "react";
import "./Experience.css";

const Experience = () => {
  const experience = [
    {
      position: "Fullstack TypeScript developer",
      company: "КБК",
      location: "Краснодар",
      startDate: "Декабрь 2021",
      endDate: "Июнь 2022",
      duration: "7 месяцев",
      description: "Разработка комплексной CRM/CMS системы:\n• Интегрировал платежные шлюзы Сбербанк и Альфа-Банк\n• Реализовал систему двойных звонков через API Tele2\n• Создал real-time чат с дублированием в Telegram (Socket.io + RabbitMQ)\n• Внедрил систему push-уведомлений на основе WebSocket\n• Исправил критические баги в веб-интерфейсе и API\n• Настроил Docker-контейнеризацию для разработки и деплоя",
      technologies: ["NodeJS", "TypeScript", "AdonisJS", "NestJS", "MySQL", "RabbitMQ", "socket.io", "Docker", "Vue"],
      icon: "🚀",
      color: "#EF4444"
    },
    {
      position: "Backend TypeScript developer",
      company: "TWT",
      startDate: "Июнь 2022",
      endDate: "Январь 2023",
      duration: "8 месяцев",
      description: "Создание API и административной панели с нуля:\n• Спроектировал и реализовал RESTful API на NestJS\n• Разработал административную панель с использованием AdminJS\n• Настроил архитектуру приложения и структуру базы данных\n• Внедрил систему управления процессами (pm2)\n• Создал документацию API и руководство по использованию",
      technologies: ["NodeJS", "TypeScript", "NestJS", "MongoDB", "pm2", "React", "AdminJS"],
      icon: "💻",
      color: "#F59E0B"
    },
    {
      position: "Fullstack JavaScript developer",
      company: "Газпромбанк",
      startDate: "Январь 2023",
      endDate: "Май 2024",
      duration: "1 год 5 месяцев",
      description: "Разработка внутренней CRM/CMS системы для корпоративных нужд:\n• Интегрировал внешние CMS системы (Naumen и другие)\n• Создал конструктор динамических форм (аналог Google/Yandex Forms)\n• Исправил критические баги в существующих формах\n• Провел оптимизацию производительности API endpoints\n• Оптимизировал SQL-запросы и логику обработки данных\n• Улучшил пользовательский интерфейс на React",
      technologies: ["NodeJS", "JavaScript", "Express", "MSSQL", "React"],
      icon: "🏦",
      color: "#10B981"
    },
    {
      position: "Backend TypeScript developer",
      company: "Bitkogan",
      website: "fan-finance.com",
      startDate: "Май 2024",
      endDate: "Июль 2025",
      duration: "1 год 3 месяца",
      description: "Разработка и поддержка финансовой платформы fan-finance.com:\n• Создал систему уведомлений в Telegram с использованием очередей задач (pg-boss)\n• Реализовал функционал закрепленных сообщений\n• Решил критические проблемы с доставляемостью email-уведомлений\n• Исправил баги в системе формирования чеков и обработки платежей\n• Оптимизировал API endpoints для CMS и клиентских приложений\n• Улучшил систему загрузки файлов (S3, blurhash)\n• Внес улучшения в CI/CD процессы",
      technologies: ["NodeJS", "TypeScript", "NestJS", "MongoDB", "PostgreSQL", "pg-boss", "k8s", "k9s", "yandex-cloud", "hbs"],
      icon: "🏢",
      color: "#3B82F6"
    }
  ];

  return (
    <section className="section">
      <div className="section-content">
        <h2 className="section-title">Опыт работы</h2>
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item" style={{"--job-color": job.color}}>
              <div className="timeline-marker">
                <div className="timeline-icon">{job.icon}</div>
              </div>
              <div className="timeline-content">
                <div className="job-card">
                  <div className="job-header">
                    <h3 className="job-title">{job.position}</h3>
                    <div className="company-info">
                      <span className="company-name">{job.company}</span>
                      {job.location && <span className="location">, {job.location}</span>}
                      {job.website && (
                        <span className="website"> - {job.website}</span>
                      )}
                    </div>
                    <div className="employment-period">
                      <span className="period-dates">{job.startDate} — {job.endDate}</span>
                      <span className="period-duration">({job.duration})</span>
                    </div>
                  </div>
                  <div className="job-description">
                    <p>{job.description}</p>
                  </div>
                  <div className="job-technologies">
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 