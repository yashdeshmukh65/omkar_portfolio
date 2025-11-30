import React from 'react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            category: "Hardware Design",
            skills: [
                { name: "Verilog", level: 85 },
                { name: "Digital Electronics", level: 90 },
                { name: "VLSI Design", level: 80 },
                { name: "Circuit Analysis", level: 85 }
            ]
        },
        {
            category: "Programming",
            skills: [
                { name: "C++", level: 80 },
                { name: "Python", level: 75 },
                { name: "Embedded C", level: 70 },
                { name: "MATLAB", level: 65 }
            ]
        },
        {
            category: "IoT & Communication",
            skills: [
                { name: "MQTT Protocol", level: 80 },
                { name: "RS232 Communication", level: 85 },
                { name: "Sensor Integration", level: 75 },
                { name: "Microcontrollers", level: 80 }
            ]
        }
    ];

    return (
        <main className="skills" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <section style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>Technical Skills</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
                    Comprehensive expertise across hardware design, programming, and IoT technologies
                </p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                {skillCategories.map((category, index) => (
                    <div key={index} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ color: '#2c3e50', marginBottom: '25px', textAlign: 'center' }}>{category.category}</h3>
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                                    <span style={{ color: '#7f8c8d' }}>{skill.level}%</span>
                                </div>
                                <div style={{ backgroundColor: '#ecf0f1', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div 
                                        style={{ 
                                            backgroundColor: '#3498db', 
                                            height: '100%', 
                                            width: `${skill.level}%`,
                                            borderRadius: '4px',
                                            transition: 'width 0.3s ease'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Skills;