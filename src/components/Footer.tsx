import React from 'react';

const Footer: React.FC = () => {
    const linkedinUrl = "https://www.linkedin.com/in/omkar-bharati-5872ba31a";
    const githubUrl = "https://github.com/omkarrr03";
    
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <p>Connect with me on:</p>
            <nav aria-label="Social media links">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    LinkedIn
                </a>
                {' | '}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    GitHub
                </a>
            </nav>
        </footer>
    );
};

export default Footer;