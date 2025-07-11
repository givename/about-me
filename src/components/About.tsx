import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section">
      <div className="section-content">
        <h2 className="section-title">О себе</h2>
        <div className="about-section-content">
          <div className="about-content">
            <p className="about-paragraph">
              <strong>Fullstack разработчик</strong> с опытом более 3 лет. Специализируюсь на создании надежных и масштабируемых веб-решений с использованием <strong>Node.js</strong> и современного стека технологий.
            </p>
            
            <p className="about-paragraph">
              <strong>Мой путь:</strong> Начинал с разработки игр на GameMaker, где создавал полноценные проекты и изучал основы программирования. Этот опыт дал мне глубокое понимание архитектуры, алгоритмов и пользовательского опыта. Сейчас работаю fullstack разработчиком, но продолжаю изучать новые языки программирования, такие как <strong>Go</strong> и <strong>Clojure</strong>.
            </p>

            <p className="about-paragraph">
              <strong>Базы данных:</strong> Имею глубокий опыт работы как с SQL (PostgreSQL, MySQL, MSSQL), так и с NoSQL решениями (MongoDB). Пишу сложные SQL-запросы и MongoDB агрегации, оптимизирую производительность базы данных.
            </p>

            <p className="about-paragraph">
              <strong>Языки и технологии:</strong> Одинаково комфортно работаю как с чистым JavaScript, так и с TypeScript. Разбираюсь в сложных типах и использую их для создания типобезопасного кода.
            </p>

            <p className="about-paragraph">
              <strong>Архитектура:</strong> Имею опыт работы как с монолитными приложениями, так и с микросервисной архитектурой. Использую очереди задач (RabbitMQ, pg-boss) для асинхронной обработки данных.
            </p>

            <p className="about-paragraph">
              <strong>DevOps:</strong> Разбираюсь в CI/CD процессах, работаю с Kubernetes (k9s), Docker и облачными платформами для развертывания и мониторинга приложений.
            </p>

            <p className="about-paragraph">
              <strong>ИИ и автоматизация:</strong> Активно использую нейросети для генерации контента, музыки, изображений, видео и кода. Применяю ИИ-инструменты в повседневной работе для повышения продуктивности и исследую новые возможности машинного обучения.
            </p>

            <p className="about-paragraph">
              <strong>Принципы работы:</strong> Для меня критически важна <strong>определенность</strong> в задачах и техническом планировании, а также <strong>свобода во времени</strong> для качественной реализации решений без спешки и хаоса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 