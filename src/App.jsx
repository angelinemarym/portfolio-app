import React from 'react';
import { projects, experience, awards, education, publications, skills } from './data';

const Icon = ({ name }) => {
    const icons = {
        calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
        mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
        education: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
        folder: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>,
        github: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
        linkedin: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
        twitter: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
        instagram: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
        code: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        award: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
        star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
        web: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
        book: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    };
    return icons[name] || null;
}

const DescriptionWithToggle = ({ text, limit = 200 }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    if (text.length <= limit) return <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '1.5rem' }}>{text}</p>;

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                {isExpanded ? text : `${text.substring(0, limit)}...`}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-color)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    padding: 0,
                    cursor: 'pointer'
                }}
            >
                {isExpanded ? "Show less" : "Read more"}
            </button>
        </div>
    );
};

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    // Reset when out of view (optional, but makes it trigger every time you scroll down)
                    setVisible(false);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px' // Triggers when 100px into the viewport
        });

        const current = domRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div
            className={`reveal ${isVisible ? 'active' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

const FocusScrollItem = ({ children }) => {
    const [isActive, setIsActive] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                } else {
                    setIsActive(false);
                }
            });
        }, {
            threshold: 0.6,
            // When constrained, 0% margin works better if the items snap to the center of the scroller
            rootMargin: '-10% 0% -10% 0%'
        });

        const current = domRef.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); };
    }, []);

    return (
        <div ref={domRef} className={isActive ? 'focused-item' : 'dimmed-item'} style={{ transition: 'all 0.6s ease', width: '100%' }}>
            {children}
        </div>
    );
};

const Modal = ({ isOpen, onClose, award }) => {
    if (!isOpen || !award) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <img src={award.image} alt={award.title} className="modal-image" />
                <div className="modal-content">
                    <h3 className="modal-title">{award.title}</h3>
                    <p className="modal-description">{award.description}</p>
                </div>
            </div>
        </div>
    );
};

function App() {
    const [time, setTime] = React.useState(new Date());
    const [location, setLocation] = React.useState('');
    const [selectedAward, setSelectedAward] = React.useState(null);

    React.useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const city = tz.split('/').pop().replace(/_/g, ' ');
            setLocation(city);
        } catch (e) {
            setLocation('Remote');
        }

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <div className="app-container" style={{ padding: '0 2rem' }}>
            <header className="header-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.2rem' }}>
                    <div style={{ padding: '4px', background: '#333', borderRadius: '6px', color: 'white', display: 'flex' }}>
                        <Icon name="code" />
                    </div>
                    Portfolio
                </div>
                <nav style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(10px)', padding: '0.5rem 1.5rem', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#publications">Publications</a></li>
                        <li><a href="#awards">Awards</a></li>
                    </ul>
                </nav>
                <div style={{ display: 'flex', gap: '1rem', color: '#666' }}>
                    <a href="mailto:angeline030303@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>
                        <Icon name="mail" /> Contact Me
                    </a>
                </div>
            </header>

            <main className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 0' }}>
                <FadeInSection>
                    <section id="hero" className="hero-section">
                        <div className="hero-content">
                            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#999', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                                AVAILABLE FOR COLLABORATION
                            </div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 700,
                                marginBottom: '2rem',
                                color: '#1a1a1a',
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start'
                            }}>
                                <div className="typewriter-container">
                                    <div className="typewriter typing-1">Angeline Mary</div>
                                </div>
                                <div className="typewriter-container">
                                    <div className="typewriter typing-2">Marchella</div>
                                </div>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '650px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                                Master's of Computer Science student at <span style={{ color: '#000', fontWeight: 600 }}>Beijing Institute of Technology</span>.
                                Published IEEE researcher specializing in AI, RAG systems, and Neural Networks with a strong software engineering background.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a href="https://github.com/angelinemarym" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>Explore Work <span style={{ fontSize: '1.1rem' }}>→</span></a>
                                <a href="https://drive.google.com/file/d/1rlCzbkQqQFPJsy_WQ64z6RIQeNRsNGca/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>Download CV</a>
                            </div>
                        </div>
                        <div className="profile-pic-container">
                            <img
                                src="/profile-pic.jpg"
                                alt="Angeline Mary Marchella"
                                className="profile-pic"
                            />
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="education" className="section">
                        <h2 className="section-title">Education Background</h2>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content card">
                                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                            <img src={edu.logo} alt={edu.school} style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px' }} />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{edu.school}</h3>
                                                    <span className="experience-period" style={{ padding: '4px 12px' }}>{edu.period}</span>
                                                </div>
                                                <p style={{ color: '#111', fontWeight: 500, margin: '0.5rem 0' }}>{edu.degree}</p>
                                                {edu.details.length > 0 && (
                                                    <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                                        {edu.details.map((detail, idx) => (
                                                            <p key={idx} style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                                <span style={{ width: '4px', height: '4px', background: '#ccc', borderRadius: '50%' }}></span>
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="projects" className="section">
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="grid">
                            {projects.map((project, index) => (
                                <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                    <div style={{ background: '#f5f5f5', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#333' }}>
                                        <Icon name={project.type} />
                                    </div>
                                    <h3>{project.title}</h3>
                                    <DescriptionWithToggle text={project.description} limit={150} />
                                    <div className="tag">{project.category}</div>
                                </a>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="experience" className="section">
                        <h2 className="section-title">Professional Experience</h2>
                        <div className="experience-scroll-container">
                            {experience.map((exp, index) => (
                                <FocusScrollItem key={index}>
                                    <div className="card experience-card">
                                        <div className="experience-header">
                                            <div style={{ background: '#f0f4ff', width: '48px', height: '48px', borderRadius: '12px', color: '#137fec', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon name={exp.type ? exp.type : "folder"} />
                                            </div>
                                            <div>
                                                <h3 style={{ marginBottom: '0.25rem' }}>{exp.role}</h3>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#888', marginBottom: '1rem' }}>
                                                    <Icon name={"folder"} /> {exp.company}
                                                </div>
                                                <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>{exp.description}</p>
                                            </div>
                                        </div>
                                        <div className="experience-period" style={{ textAlign: 'right', flexShrink: 0 }}>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1a1a1a' }}>{exp.period}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '4px' }}>{exp.location}</div>
                                        </div>
                                    </div>
                                </FocusScrollItem>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="skills" className="section">
                        <h2 className="section-title">Tech Stacks & Skills</h2>
                        <div className="skills-carousel">
                            {skills.map((category, idx) => (
                                <div key={idx} className={`card skills-category-card cat-${category.id}`}>
                                    <div className="skills-category-header">
                                        <div className="skills-category-icon">
                                            <Icon name={category.id === "languages" ? "code" : category.id === "frameworks" ? "web" : category.id === "design" ? "star" : "mail"} />
                                        </div>
                                        <h3 style={{ margin: 0 }}>{category.category}</h3>
                                    </div>
                                    <ul className="skills-list">
                                        {category.items.map((skill, i) => (
                                            <li key={i} className="skill-tag">
                                                {skill.icon.startsWith('http') ? (
                                                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                                ) : (
                                                    <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                                                )}
                                                {skill.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="publications" className="section">
                        <h2 className="section-title">Research Publications</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {publications.map((pub, index) => (
                                <div key={index} className="card" style={{ padding: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                        <div style={{ color: '#137fec' }}>
                                            <Icon name="book" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.4 }}>{pub.title}</h3>
                                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
                                                {pub.publisher} · {pub.date}
                                            </div>

                                            <a href={pub.url} target="_blank" rel="noopener noreferrer" style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                padding: '0.6rem 1.25rem',
                                                borderRadius: '30px',
                                                border: '1px solid #ddd',
                                                fontSize: '0.85rem',
                                                fontWeight: 500,
                                                color: '#333',
                                                marginBottom: '1.5rem',
                                                transition: 'all 0.3s ease'
                                            }} className="pub-btn">
                                                Show publication <span style={{ fontSize: '1.1rem' }}>↗</span>
                                            </a>

                                            <DescriptionWithToggle text={pub.description} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <FadeInSection>
                    <section id="awards" className="section">
                        <h2 className="section-title">Honors & Awards</h2>
                        <div className="grid">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="card award-card"
                                    style={{ display: 'flex', gap: '1.5rem', cursor: 'pointer' }}
                                    onClick={() => setSelectedAward(award)}
                                >
                                    <div style={{ color: '#f59e0b' }}>
                                        <Icon name={award.type === "award" ? "award" : "star"} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{award.title}</h3>
                                        <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>{award.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </FadeInSection>

                <Modal
                    isOpen={!!selectedAward}
                    onClose={() => setSelectedAward(null)}
                    award={selectedAward}
                />

                <FadeInSection>
                    <div className="code-window">
                        <div className="code-header">
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eee' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eee' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eee' }}></div>
                            </div>
                            <span>ANGELINE_PROFILE.PY</span>
                            <div style={{ width: '30px' }}></div>
                        </div>
                        <div className="code-content">
                            <pre style={{ margin: 0, color: '#1a1a1a', overflowX: 'auto' }}>
                                <span style={{ color: '#888', marginRight: '2rem' }}>81</span> <span style={{ color: '#005cc5' }}>import</span> bit_research <span style={{ color: '#005cc5' }}>as</span> research{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>82</span> <span style={{ color: '#d73a49' }}>class</span> <span style={{ color: '#6f42c1' }}>MastersStudent</span>(Researcher):{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>83</span>   <span style={{ color: '#d73a49' }}>def</span> <span style={{ color: '#6f42c1' }}>__init__</span>(self, focus=<span style={{ color: '#032f62' }}>"AI"</span>):{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>84</span>     self.university = <span style={{ color: '#032f62' }}>"Beijing Institute of Technology"</span>{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>85</span>     self.interests = [<span style={{ color: '#032f62' }}>"RAG Systems"</span>, <span style={{ color: '#032f62' }}>"LLMs"</span>]{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>86</span>     self.current_goal = <span style={{ color: '#032f62' }}>"Enhancing personalized learning"</span>{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>87</span>     self.status = <span style={{ color: '#032f62' }}>"Optimizing systems"</span>{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>88</span>   {'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>89</span>   <span style={{ color: '#d73a49' }}>def</span> <span style={{ color: '#6f42c1' }}>contribute</span>(self):{'\n'}
                                <span style={{ color: '#888', marginRight: '2rem' }}>90</span>     <span style={{ color: '#d73a49' }}>return</span> <span style={{ color: '#032f62' }}>"Code & research for better education."</span>
                            </pre>
                        </div>
                    </div>
                </FadeInSection>
            </main>

            <footer>
                <div className="footer-content">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a href="https://github.com/angelinemarym" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="github" /> Github</a>
                        <a href="https://www.linkedin.com/in/angeline-mary-marchella/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="linkedin" /> LinkedIn</a>
                        <a href="https://www.instagram.com/angelinemarym/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icon name="instagram" /> Instagram</a>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'rgba(16, 185, 129, 0.05)',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            border: '1px solid rgba(16, 185, 129, 0.1)'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)' }}></span>
                            <span style={{ fontWeight: 500, color: '#444', fontSize: '0.85rem' }}>{location || 'Remote'} — {formatTime(time)}</span>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#999' }}>© 2026 Built with Antigravity.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
