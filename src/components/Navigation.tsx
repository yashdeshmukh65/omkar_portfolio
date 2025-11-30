import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/experience', label: 'Experience' },
        { path: '/projects', label: 'Projects' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav style={{ 
            backgroundColor: '#2c3e50', 
            padding: '15px 0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <ul style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                flexWrap: 'wrap',
                gap: '10px'
            }}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link 
                            to={item.path}
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                transition: 'all 0.3s ease',
                                fontWeight: '500',
                                fontSize: '0.95rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#3498db';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;