import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© {currentYear} Мидзяев Кирилл Игоревич</p>
          <p className="footer-subtitle">Fullstack Developer</p>
        </div>
        <div className="footer-links">
          <a href="https://t.me/kirillmid" target="_blank" rel="noopener noreferrer" className="footer-link">
            💬 Telegram
          </a>
          <a href="https://github.com/givename" target="_blank" rel="noopener noreferrer" className="footer-link">
            💻 GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 