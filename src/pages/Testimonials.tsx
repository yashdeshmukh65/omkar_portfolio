import React from 'react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Dr. [Professor Name]",
            position: "VLSI Design Professor",
            company: "University/College",
            testimonial: "Omkar demonstrates exceptional understanding of digital circuit design and Verilog programming. His analytical approach to complex problems and dedication to learning make him a standout student in VLSI engineering.",
            rating: 5
        },
        {
            name: "[Project Collaborator]",
            position: "IoT Developer",
            company: "Project Team",
            testimonial: "Working with Omkar on the RS232-MQTT integration project was impressive. His ability to bridge hardware and software components while maintaining clean, efficient code is remarkable.",
            rating: 5
        },
        {
            name: "[Peer/Colleague]",
            position: "Electronics Engineering Student",
            company: "Academic Peer",
            testimonial: "Omkar's expertise in digital electronics and his willingness to help others understand complex concepts make him an invaluable team member. His technical skills are matched by his collaborative spirit.",
            rating: 5
        }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} style={{ color: index < rating ? '#f39c12' : '#bdc3c7', fontSize: '1.2rem' }}>
                ★
            </span>
        ));
    };

    return (
        <main className="testimonials" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <section style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>Testimonials</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>
                    What professors, collaborators, and peers say about my work
                </p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ 
                        backgroundColor: '#fff', 
                        padding: '30px', 
                        borderRadius: '15px', 
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        position: 'relative',
                        border: '1px solid #ecf0f1'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            {renderStars(testimonial.rating)}
                        </div>
                        
                        <blockquote style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.6', 
                            color: '#555', 
                            fontStyle: 'italic',
                            marginBottom: '25px',
                            position: 'relative'
                        }}>
                            <span style={{ 
                                fontSize: '3rem', 
                                color: '#3498db', 
                                position: 'absolute', 
                                top: '-10px', 
                                left: '-10px',
                                opacity: 0.3
                            }}>
                                "
                            </span>
                            {testimonial.testimonial}
                        </blockquote>
                        
                        <div style={{ borderTop: '1px solid #ecf0f1', paddingTop: '20px' }}>
                            <h4 style={{ color: '#2c3e50', marginBottom: '5px' }}>{testimonial.name}</h4>
                            <p style={{ color: '#3498db', marginBottom: '3px', fontWeight: '500' }}>{testimonial.position}</p>
                            <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>{testimonial.company}</p>
                        </div>
                    </div>
                ))}
            </div>

            <section style={{ 
                textAlign: 'center', 
                marginTop: '60px', 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '15px' 
            }}>
                <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>Ready to Work Together?</h3>
                <p style={{ color: '#7f8c8d', marginBottom: '25px' }}>
                    I'm always open to discussing new opportunities and collaborations in VLSI and IoT domains.
                </p>
                <a 
                    href="/contact" 
                    style={{ 
                        backgroundColor: '#3498db', 
                        color: 'white', 
                        padding: '12px 30px', 
                        borderRadius: '25px', 
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'background-color 0.3s ease'
                    }}
                >
                    Get In Touch
                </a>
            </section>
        </main>
    );
};

export default Testimonials;