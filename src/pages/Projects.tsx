import ProjectCard from "../components/ProjectCard";
import CoffeeDevImage from '../assets/coffeedev.png';
import BattleshipsImage from '../assets/battleships.png';
import OsDevImage from '../assets/osdev.png';
function Projects() {
    return <div className="grid grid-cols-1 md:grid-cols-2">
        {/* put these in json and then map */}
        <ProjectCard 
            image={ CoffeeDevImage } 
            title="cc00ffee.dev" 
            languages="Typescript, React, Tailwind" 
            description="cc00ffee's personal corner of the internet! Hosts my interests/hobbies alongside writeups for CTFs." 
            isPersonal={true}
            link="https://github.com/cc0ffee/cc00ffee-dev"
        />
        {/* Take a picture of the software at some point, using this pinterest picture for now */}
        <ProjectCard 
            image="https://i.pinimg.com/736x/a1/2c/c3/a12cc3de1982560bb0f8317adc818494.jpg"
            title="vitafetch" 
            languages="C, VitaSDK" 
            description="PSVita's own neofetch! Displays system information with ASCII image of your choice to make it your own!" 
            isPersonal={true}
            link=""
        />
        <ProjectCard 
            image={ BattleshipsImage } 
            title="battleships" 
            languages="Dart, Flutter" 
            description="Minimal design version of Battleships versing other students. Interacts with an API to send and receive unique game data." 
            isPersonal={false}
            link=""
        />
        <ProjectCard 
            image={ OsDevImage } 
            title="threaded OS development" 
            languages="C" 
            description="Modified research OS to enable threading, scheduling, and user programs with new system calls. " 
            isPersonal={false}
            link=""
        />
    </div>
}
export default Projects;