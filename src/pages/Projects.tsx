import ProjectCard from "../components/ProjectCard";
function Projects() {
    return <div className="grid grid-cols-1 md:grid-cols-2 m-8">
        {/* put these in json and then map */}
        <ProjectCard 
            image="" 
            title="cc00ffee.dev" 
            languages="Typescript, React, Tailwind" 
            description="cc00ffee's personal corner of the internet! Hosts my interests/hobbies alongside writeups for CTFs." 
            isPersonal={true}
            link=""
        />
        <ProjectCard 
            image="" 
            title="vitafetch" 
            languages="C, VitaSDK" 
            description="PSVita's own neofetch! Displays system information with ASCII image of your choice to make it your own!" 
            isPersonal={true}
            link=""
        />
        <ProjectCard 
            image="" 
            title="battleships" 
            languages="Dart, Flutter" 
            description="Minimal design version of Battleships versing other students. Interacts with an API to send and receive unique game data." 
            isPersonal={false}
            link=""
        />
        <ProjectCard 
            image="" 
            title="threaded OS development" 
            languages="C" 
            description="Modified research OS to enable threading, scheduling, and user programs with new system calls. " 
            isPersonal={false}
            link=""
        />
    </div>
}
export default Projects;