import React from 'react';

const About: React.FC = () => {
    return (
        <main className="about" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <section className="hero-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>About Me</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d', maxWidth: '600px', margin: '0 auto' }}>
                    Passionate VLSI Engineer with expertise in digital design and IoT integration
                </p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                <div>
                    <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>My Journey</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                        I am Omkar Bharati, a dedicated VLSI and IoT enthusiast with a strong foundation in digital electronics 
                        and hardware design. My passion lies in bridging the gap between hardware and software through innovative 
                        IoT solutions.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                        With expertise in Verilog, digital circuit design, and embedded systems, I focus on creating efficient 
                        and scalable solutions for modern technological challenges.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        I am actively seeking opportunities to contribute to cutting-edge VLSI and IoT projects where I can 
                        apply my technical skills and continue growing as an engineer.
                    </p>
                </div>
                
                <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
                    <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Quick Facts</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}>🎓 <strong>Field:</strong> VLSI Engineering</li>
                        <li style={{ marginBottom: '10px' }}>💡 <strong>Specialization:</strong> Digital Electronics & IoT</li>
                        <li style={{ marginBottom: '10px' }}>🔧 <strong>Primary Tools:</strong> Verilog, C++, Python</li>
                        <li style={{ marginBottom: '10px' }}>🌟 <strong>Focus:</strong> Hardware-Software Integration</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default About;