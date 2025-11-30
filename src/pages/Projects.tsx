import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'RS232 integration with MQTT',
        description: 'Sending data through RS232 port and to MQTT.',
        link: 'https://github.com/KPYerawar/iot_project_rs232'
    }
];

const Projects: React.FC = () => {
    return (
        <div>
            <h1>My VLSI & IoT Projects</h1>
            <div className="project-list">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;