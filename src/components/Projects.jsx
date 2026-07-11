import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'AI RESUME BUILDER',
    desc: 'Built with a team of 5 under an industry expert using MERN Stack. Features AI-powered content suggestions, dynamic template customization, JWT-based authentication, role-based access control, live preview, and PDF export — achieving 40–60% reduction in resume creation time.',
    tag: 'MERN Stack',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI', 'JWT'],
    image: 'https://picsum.photos/seed/ai-resume-builder/800/500.jpg',
  },
  {
    title: 'WEBARCLIGHT 24*7',
    desc: 'Dynamic web application built as part of the WebArclight dev team using PHP, JavaScript, and HTML. Developed and optimized frontend components, improving UI responsiveness and overall user experience.',
    tag: 'Web Dev',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    image: 'https://picsum.photos/seed/webarclight-app/800/500.jpg',
  },
  {
    title: 'LOAN ORIGINATION SYSTEM',
    desc: 'Enterprise-grade LOS built during internship at WebArclight. Full-stack application with React.js frontend, Django REST API backend, user authentication, and complex business logic for loan processing workflows.',
    tag: 'Full Stack',
    tags: ['React.js', 'Django', 'Python', 'REST API'],
    image: 'https://picsum.photos/seed/loan-system-los/800/500.jpg',
  },
  {
    title: 'LEARNING MANAGEMENT SYSTEM',
    desc: 'LMS platform built during WebArclight internship. Features course management, user progress tracking, responsive UI components, and seamless frontend-backend integration through RESTful APIs.',
    tag: 'Full Stack',
    tags: ['React.js', 'Django', 'REST API', 'Responsive'],
    image: 'https://picsum.photos/seed/lms-platform-edu/800/500.jpg',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          Portfolio
        </div>
        <h2 className="section-title">
          MY <span className="accent">PROJECTS</span>
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="project-image-overlay" />
                <div className="project-tag">{p.tag}</div>
              </div>
              <div className="project-info">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span className="project-tag-small" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}