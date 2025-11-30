import React from 'react';

const Home: React.FC = () => {
    return (
        <main className="home">
            {/* Hero Section */}
            <section style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '100px 20px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ 
                        fontSize: '3.5rem', 
                        marginBottom: '20px', 
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Omkar Bharati
                    </h1>
                    <h2 style={{ 
                        fontSize: '1.5rem', 
                        marginBottom: '30px', 
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: '300'
                    }}>
                        VLSI Engineer & IoT Enthusiast
                    </h2>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '40px', 
                        maxWidth: '600px', 
                        margin: '0 auto 40px',
                        lineHeight: '1.6',
                        opacity: 0.9
                    }}>
                        Passionate about bridging hardware and software through innovative VLSI design and IoT solutions. 
                        Seeking opportunities to contribute to cutting-edge technology projects.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/projects" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                            View My Projects
                        </a>
                        <a href="/contact" className="btn" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Overview */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="grid grid-3">
                    <div className="card text-center">
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔧</div>
                        <h3>VLSI Design</h3>
                        <p>Expert in Verilog programming and digital circuit design with focus on efficient hardware solutions.</p>
                    </div>
                    <div className="card text-center">
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌐</div>
                        <h3>IoT Integration</h3>
                        <p>Specialized in connecting hardware systems with modern communication protocols and cloud services.</p>
                    </div>
                    <div className="card text-center">
                        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💡</div>
                        <h3>Innovation</h3>
                        <p>Passionate about creating innovative solutions that bridge the gap between hardware and software.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ 
                backgroundColor: '#2c3e50', 
                color: 'white', 
                padding: '60px 20px', 
                textAlign: 'center' 
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Collaborate?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
                        I'm always interested in discussing new opportunities, innovative projects, and collaborations in VLSI and IoT domains.
                    </p>
                    <a href="/contact" className="btn" style={{ backgroundColor: '#3498db' }}>
                        Let's Connect
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;