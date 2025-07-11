import React from "react";
import "./Header.css";

const Header = () => {
  const personalInfo = {
    name: "Мидзяев Кирилл Игоревич",
    email: "k.midzyaev@ya.ru",
    phone: "+7 (928) 2510506",
    telegram: "kirillmid",
    github: "givename"
  };

  const stats = [
    { number: "3+", label: "Года опыта", icon: "💼" },
    { number: "4", label: "Компании", icon: "🏢" },
    { number: "20+", label: "Технологий", icon: "⚡" }
  ];

  return (
    <header className="header">
      <div className="header-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-photo-wrapper">
            <div className="profile-photo-ring"></div>
            <img src="/photo_2025-04-05_00-30-33.jpg" alt="Profile" className="profile-photo" />
            <div className="profile-status">
              <span className="status-dot"></span>
              <span className="status-text">Открыт к предложениям</span>
            </div>
          </div>
          
          <div className="profile-info">
            <div className="greeting">👋 Привет, я</div>
            <h1 className="name">
              <span className="name-highlight">Кирилл</span> Мидзяев
            </h1>
            <div className="title-wrapper">
              <p className="title">Fullstack Developer</p>
              <div className="title-underline"></div>
            </div>
            <p className="description">
              Создаю надежные и масштабируемые веб-решения с использованием современных технологий.<br/>
              Специализируюсь на TypeScript, Node.js и экосистеме JavaScript.
            </p>
            
            <div className="contact-actions">
              <a href="https://t.me/kirillmid" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                💬 Написать в Telegram
              </a>
              <a href="https://github.com/givename" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 