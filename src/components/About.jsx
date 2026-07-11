import useScrollReveal from '../hooks/useScrollReveal';

const details = [
  { label: 'Name', value: 'Vibhore Kumar' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Location', value: 'Delhi, India' },
  { label: 'Degree', value: 'B.Tech CSE (2027)' },
];

const software = [
  { name: 'React.js', icon: 'simple-icons:react' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Django', icon: 'simple-icons:django' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'MySQL', icon: 'simple-icons:mysql' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'VS Code', icon: 'simple-icons:visualstudiocode' },
  { name: 'Postman', icon: 'simple-icons:postman' },
  { name: 'GitHub', icon: 'simple-icons:github' },
];

const achievements = [
  { icon: 'lucide:trophy', text: 'Solved 100+ DSA problems across GeeksforGeeks & LeetCode' },
  { icon: 'lucide:award', text: 'JEE Mains Qualifier — among 1.2M+ candidates (2022)' },
  { icon: 'lucide:star', text: 'JEE Advanced Qualifier — top ~2.5% of JEE Mains candidates (2023)' },
  { icon: 'lucide:medal', text: 'State Cricketer (U-19) — Represented Kota, Rajasthan (2020)' },
];

const certifications = [
  'Python Essentials 1 — Foundational Python Programming Certification',
];

export default function About() {
  const ref = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-label" ref={ref}>
          About Me
        </div>
        <h2 className="section-title">
          WHO AM <span className="accent">I_</span>
        </h2>

        <div className="about-grid">
          <div>
            <div className="about-text" ref={ref2}>
              <p>
                I'm a Computer Science Engineering student at GD Goenka
                University, Delhi, specializing in Full-Stack Web Development
                and RESTful API Design. I love turning complex problems into
                clean, efficient code.
              </p>
              <p>
                With hands-on experience from two remote internships at
                WebArclight and UptoSkills, I've built enterprise-grade
                applications like Loan Origination Systems and AI-powered
                tools using MERN stack and Django.
              </p>
              <p>
                When I'm not coding, you'll find me grinding DSA problems
                on LeetCode or playing cricket — I represented Kota at the
                state level in Under-19 cricket.
              </p>
            </div>

            <div className="about-details">
              {details.map((d, i) => (
                <div className="about-detail-item" key={i}>
                  <div className="about-detail-label">{d.label}</div>
                  <div className="about-detail-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>
              Tech Stack
            </div>
            <div className="software-list">
              {software.map((s, i) => (
                <div className="software-tag" key={i}>
                  <iconify-icon icon={s.icon} />
                  {s.name}
                </div>
              ))}
            </div>

            <div
              className="section-label"
              style={{ marginBottom: 20, marginTop: 40 }}
            >
              Achievements
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {achievements.map((a, i) => (
                <div className="contact-link" key={i} style={{ padding: '12px 16px' }}>
                  <iconify-icon icon={a.icon} style={{ fontSize: 16 }} />
                  <span style={{ fontSize: 11 }}>{a.text}</span>
                </div>
              ))}
            </div>

            <div
              className="section-label"
              style={{ marginBottom: 16, marginTop: 32 }}
            >
              Certifications
            </div>
            <div className="software-list">
              {certifications.map((c, i) => (
                <div className="software-tag" key={i}>
                  <iconify-icon icon="lucide:badge-check" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}