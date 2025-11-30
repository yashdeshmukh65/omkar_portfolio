import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    const isValidUrl = (url: string): boolean => {
        try {
            const urlObj = new URL(url);
            return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
        } catch {
            return false;
        }
    };

    const safeLink = isValidUrl(link) ? link : '#';
    
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {isValidUrl(link) ? (
                <a href={safeLink} target="_blank" rel="noopener noreferrer">View Project</a>
            ) : (
                <span>Invalid project link</span>
            )}
        </div>
    );
};

export default ProjectCard;