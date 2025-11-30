import React from 'react';
import { useParams } from 'react-router-dom';
import { Project } from '../types';

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = React.useState<Project | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!projectId) {
            setError('Project ID is required');
            setLoading(false);
            return;
        }

        const fetchProjectDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/api/projects/${projectId}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch project: ${response.status}`);
                }
                
                const data = await response.json();
                setProject(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load project');
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectDetail;