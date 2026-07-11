import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'WebArclight — Remote',
    date: 'October 2025 — January 2026',
    tasks: [
      'Developed enterprise-grade web apps including Loan Origination System (LOS) and Learning Management System (LMS) using React.js and Django',
      'Built responsive, reusable UI components with React.js, achieving seamless integration with backend services through RESTful APIs',
      'Designed and implemented RESTful APIs for data handling, user authentication, and complex business logic using Django and Python',
      'Collaborated in agile environment to implement new features, debug issues, and optimize application performance',
      'Maintained clean code practices and utilized Git for version control, ensuring code quality and team collaboration',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'UptoSkills — Remote',
    date: 'July 2025 — September 2025',
    tasks: [
      'Contributed to multiple web development projects utilizing MERN stack technologies to deliver scalable solutions',
      'Developed both frontend and backend components, enhancing user experience and application functionality',
      'Strengthened problem-solving abilities by tackling real-world development challenges and implementing efficient solutions',
      'Worked closely with mentors and cross-functional teams to deliver high-quality, production-ready code',
      'Gained hands-on experience with modern development workflows and professional coding standards',
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          Experience
        </div>
        <h2 className="section-title">
          MY <span className="accent">JOURNEY</span>
        </h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-date">
                <iconify-icon icon="lucide:calendar" />
                {exp.date}
              </div>
              <ul className="timeline-desc">
                {exp.tasks.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}