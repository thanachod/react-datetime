import { createContext, useState } from 'react';

export const ProjectContext = createContext({});

export function ProjectContextProvider({children}) {
    const [selectedProject, setSelectedProject] = useState('');
    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </ProjectContext.Provider>
    );
}