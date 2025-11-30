import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'omkar.bharati@email.com',
            link: 'mailto:omkar.bharati@email.com'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'omkar-bharati-5872ba31a',
            link: 'https://www.linkedin.com/in/omkar-bharati-5872ba31a'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'omkarrr03',
            link: 'https://github.com/omkarrr03'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'India',
            link: null
        }
    ];

    return (
        <main className="contact" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <section style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2c3e50' }}>Get In Touch</h1>
                <p style={{ fontSize: '1.2rem', color: '#7f8c8d', maxWidth: '600px', margin: '0 auto' }}>
                    I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow engineers.
                </p>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
                {/* Contact Information */}
                <div>
                    <h2 style={{ color: '#2c3e50', marginBottom: '30px' }}>Contact Information</h2>
                    <div style={{ marginBottom: '40px' }}>
                        {contactInfo.map((info, index) => (
                            <div key={index} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '20px',
                                padding: '15px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px'
                            }}>
                                <span style={{ fontSize: '1.5rem', marginRight: '15px' }}>{info.icon}</span>
                                <div>
                                    <h4 style={{ color: '#2c3e50', marginBottom: '5px' }}>{info.title}</h4>
                                    {info.link ? (
                                        <a 
                                            href={info.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ color: '#3498db', textDecoration: 'none' }}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span style={{ color: '#7f8c8d' }}>{info.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ 
                        backgroundColor: '#3498db', 
                        color: 'white', 
                        padding: '30px', 
                        borderRadius: '15px' 
                    }}>
                        <h3 style={{ marginBottom: '15px' }}>Let's Collaborate!</h3>
                        <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                            Whether you're looking for a VLSI engineer, need help with IoT projects, 
                            or want to discuss innovative hardware solutions, I'd love to hear from you.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 style={{ color: '#2c3e50', marginBottom: '30px' }}>Send a Message</h2>
                    <form onSubmit={handleSubmit} style={{ 
                        backgroundColor: '#fff', 
                        padding: '30px', 
                        borderRadius: '15px', 
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)' 
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>
                                Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '2px solid #ecf0f1',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '2px solid #ecf0f1',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>
                                Subject *
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '2px solid #ecf0f1',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#2c3e50', fontWeight: '500' }}>
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '2px solid #ecf0f1',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    resize: 'vertical',
                                    transition: 'border-color 0.3s ease'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#3498db',
                                color: 'white',
                                padding: '15px 40px',
                                border: 'none',
                                borderRadius: '25px',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                                width: '100%'
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;