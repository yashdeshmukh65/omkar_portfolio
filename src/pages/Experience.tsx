import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: "VLSI Design Student",
            company: "Academic Projects",
            period: "2023 - Present",
            description: "Focused on digital circuit design, Verilog programming, and VLSI implementation. Developed expertise in hardware description languages and digital system design.",
            achievements: [
                "Mastered Verilog for digital circuit design",
                "Implemented complex digital systems",
                "Gained proficiency in VLSI design methodologies"
            ]
        },
        {
            title: "IoT Project Developer",
            company: "Personal Projects",
            period: "2023",
            description: "Developed IoT solutions integrating hardware communication protocols with cloud-based messaging systems.",
            achievements: [
                "Successfully implemented RS232 to MQTT integration",
                "Designed efficient data transmission protocols",
                "Integrated multiple communication interfaces"
            ]
        }
    ];

    const education = [
        {
            degree: "Engineering in Electronics/VLSI",
            institution: "University/College Name",
            period: "2021 - 2025",
            description: "Specialized in VLSI design, digital electronics, and embedded systems with focus on practical implementation."
        }
    ];

    return (
        <main className="experience" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <section style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>Experience & Education</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
                    Building expertise through academic excellence and hands-on project development
                </p>
            </section>

            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '30px', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                    Experience
                </h2>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ 
                        backgroundColor: '#fff', 
                        padding: '30px', 
                        marginBottom: '30px', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid #3498db'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                            <div>
                                <h3 style={{ color: '#2c3e50', marginBottom: '5px' }}>{exp.title}</h3>
                                <h4 style={{ color: '#3498db', marginBottom: '10px' }}>{exp.company}</h4>
                            </div>
                            <span style={{ 
                                backgroundColor: '#ecf0f1', 
                                padding: '5px 15px', 
                                borderRadius: '20px', 
                                fontSize: '0.9rem',
                                color: '#7f8c8d'
                            }}>
                                {exp.period}
                            </span>
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>{exp.description}</p>
                        <ul style={{ paddingLeft: '20px' }}>
                            {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} style={{ marginBottom: '8px', color: '#666' }}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div>
                <h2 style={{ color: '#2c3e50', marginBottom: '30px', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                    Education
                </h2>
                {education.map((edu, index) => (
                    <div key={index} style={{ 
                        backgroundColor: '#fff', 
                        padding: '30px', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        borderLeft: '4px solid #e74c3c'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                            <div>
                                <h3 style={{ color: '#2c3e50', marginBottom: '5px' }}>{edu.degree}</h3>
                                <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>{edu.institution}</h4>
                            </div>
                            <span style={{ 
                                backgroundColor: '#ecf0f1', 
                                padding: '5px 15px', 
                                borderRadius: '20px', 
                                fontSize: '0.9rem',
                                color: '#7f8c8d'
                            }}>
                                {edu.period}
                            </span>
                        </div>
                        <p style={{ lineHeight: '1.6', color: '#555' }}>{edu.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Experience;