import ProjectCard from "../components/ProjectCard";
import CoffeeDevImage from '../assets/coffeedev.png';
import BattleshipsImage from '../assets/battleships.png';
import OsDevImage from '../assets/osdev.png';
import FumoImage from '../assets/fumo.png';
import InterpreterImage from '../assets/interpreter.png';
import DominoImage from '../assets/domino.png';
import AppImage from '../assets/iitapp.png';
import { useState } from 'react';

const projects = [
    {
        image: CoffeeDevImage,
        title: "cc00ffee.dev",
        languages: "Typescript, React, Tailwind",
        description: "cc00ffee's personal corner of the internet! Hosts my interests/hobbies alongside writeups for CTFs.",
        isPersonal: true,
        link: "https://github.com/cc0ffee/cc00ffee-dev"
    },
    {
        image: "https://i.pinimg.com/736x/a1/2c/c3/a12cc3de1982560bb0f8317adc818494.jpg",
        title: "vitafetch",
        languages: "C, VitaSDK",
        description: "PSVita's own neofetch! Displays system information with ASCII image of your choice to make it your own!",
        isPersonal: true,
        link: ""
    },
    {
        image: BattleshipsImage,
        title: "battleships",
        languages: "Dart, Flutter",
        description: "Minimal design version of Battleships versing other students. Interacts with an API to send and receive unique game data.",
        isPersonal: false,
        link: ""
    },
    {
        image: OsDevImage,
        title: "threaded OS development",
        languages: "C",
        description: "Modified research OS to enable threading, scheduling, and user programs with new system calls.",
        isPersonal: false,
        link: ""
    },
    {
        image: FumoImage,
        title: "render fumo",
        languages: "Javascript, React, three.js",
        description: "A silly project that features a fumo following your cursor. Plan to introduce it as something for wallpaper engine.",
        isPersonal: true,
        link: "https://render-fumo.vercel.app/"
    },
    {
        image: DominoImage,
        title: "domino transit bot",
        languages: "Python, discord.py",
        description: "Domino helps give arrival times for all CTA stations through discord's slash commands and interactions.",
        isPersonal: true,
        link: "https://github.com/cc0ffee/domino"
    },
    {
        image: AppImage,
        title: "student scheduler (iitapp)",
        languages: "Dart, Flutter",
        description: "A Proof of Concept app for mobile devices that allows students to check their schedule and assignments.",
        isPersonal: false,
        link: "https://github.com/cc0ffee/iitapp"
    },
    {
        image: InterpreterImage,
        title: "Interpreter",
        languages: "Racket",
        description: "An interpreter implementing language constructs, 'syntactic sugar', and define form that supports recursion.",
        isPersonal: false,
        link: ""
    },
];

const ITEMS_PER_PAGE = 4;

function Projects() {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return <div className="grid grid-cols-1 md:grid-cols-2">
        {selectedProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        languages={project.languages}
                        description={project.description}
                        isPersonal={project.isPersonal}
                        link={project.link}
                    />
                ))}
            <div className="flex justify-center sm:justify-start items-center mt-4 mb-10">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}> ← </button>
                <span className="pl-4 pr-4"> {currentPage} / {totalPages} </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}> → </button>
            </div>
    </div>
}
export default Projects;