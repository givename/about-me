
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "BrainyKid - Мобильная игра",
      platform: "GameMaker Studio",
      period: "2020-2021",
      description: "Разработка и публикация образовательной мобильной игры:",
      achievements: [
        "Создал полноценную мобильную игру на GameMaker Studio",
        "Реализовал игровую логику и пользовательский интерфейс",
        "Прошел полный цикл разработки: от концепта до релиза",
        "Опубликовал игру в Google Play Store",
        "Получил первый коммерческий опыт в геймдеве"
      ],
      technologies: ["GameMaker Studio", "GML", "Android", "Google Play Console"],
      icon: "🎮",
      color: "#8B5CF6",
      link: "Google Play"
    },
    {
      title: "Системы крафтинга и инвентарей",
      platform: "GameMaker Studio",
      period: "2019-2021", 
      description: "Создание сложных игровых механик:",
      achievements: [
        "Разработал гибкую систему инвентаря (аналог Minecraft)",
        "Реализовал механику крафтинга с рецептами и комбинациями",
        "Создал drag-and-drop интерфейс для управления предметами",
        "Оптимизировал производительность для больших инвентарей",
        "Добавил систему категорий и фильтрации предметов"
      ],
      technologies: ["GameMaker Studio", "GML", "Data Structures", "UI/UX"],
      icon: "⚒️",
      color: "#F59E0B",
      link: null
    },
    {
      title: "Языковые парсеры",
      platform: "Исследовательские проекты",
      period: "2020-2022",
      description: "Изучение принципов парсинга и компиляции:",
      achievements: [
        "Создал парсер для простого языка программирования",
        "Изучил теорию компиляторов и формальные грамматики",
        "Реализовал лексический и синтаксический анализ",
        "Экспериментировал с AST (Abstract Syntax Tree)",
        "Углубил понимание архитектуры языков программирования"
      ],
      technologies: ["JavaScript", "TypeScript", "Parsing Theory", "AST", "Compilers"],
      icon: "📝",
      color: "#10B981",
      link: null
    },
    {
      title: "Музыкальное творчество",
      platform: "FL Studio",
      period: "2018-2020",
      description: "Создание электронной музыки и саундтреков:",
      achievements: [
        "Изучил основы музыкальной теории и композиции",
        "Освоил FL Studio для создания треков",
        "Экспериментировал с различными жанрами электронной музыки",
        "Создал несколько завершенных композиций",
        "Развил понимание ритма, мелодии и аранжировки"
      ],
      technologies: ["FL Studio", "Audio Engineering", "Music Theory", "Sound Design"],
      icon: "🎵",
      color: "#EC4899",
      link: null,
      audioFile: "/PKG AMES - __DEPP.mp3"
    }
  ];

  return (
    <section className="section">
      <div className="section-content">
        <h2 className="section-title">Проекты и увлечения</h2>
        <div className="projects-intro">
          <p>Мой путь в программировании начался с разработки игр и экспериментов с различными технологиями. Этот опыт дал мне глубокое понимание архитектуры, алгоритмов и пользовательского опыта.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
                         <div key={index} className="project-card" style={{"--project-color": project.color} as any}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-platform">{project.platform}</span>
                    <span className="project-period">{project.period}</span>
                  </div>
                </div>
                {project.link && (
                  <div className="project-badge">
                    <span className="badge-text">{project.link}</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <ul className="project-achievements">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
                {project.audioFile && (
                  <div className="audio-player">
                    <h4 className="audio-title">Пример работы:</h4>
                    <audio controls>
                      <source src={project.audioFile} type="audio/mpeg" />
                      Ваш браузер не поддерживает аудио элемент.
                    </audio>
                  </div>
                )}
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 