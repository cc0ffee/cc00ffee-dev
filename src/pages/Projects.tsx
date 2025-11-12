import ProjectCard from "../components/ProjectCard";
import CoffeeDevImage from '../assets/coffeedev.png';
import CompilerImage from '../assets/compiler.png';
import BattleshipsImage from '../assets/battleships.png';
// import OsDevImage from '../assets/osdev.png';
import FumoImage from '../assets/fumo.png';
import DominoImage from '../assets/domino.png';
import AppImage from '../assets/iitapp.png';
import { useState } from 'react';

const projects = [
    {
        image: CoffeeDevImage,
        title: "Greenhouse Temperature Modeling",
        languages: "Python, Go, Next.js, Redis",
        description: "Model of internal temperatures for testing structures and insulation, delivered on a web interface for accessbility.",
        isPersonal: false,
        link: "https://github.com/cc0ffee/greensim"
    },
    {
        image: CompilerImage,
        title: "ML & C to RISC-V Compiler",
        languages: "OCaml, LLVM",
        description: "Implementation of IR, Closure Conv., and Code Generation with compiler optimizations to perform ML or C code to RISC-V Assembly.",
        isPersonal: false,
        link: "https://github.com/cc0ffee/ML2RISCV-compiler"
    },
    {
        image: "https://i.pinimg.com/736x/a1/2c/c3/a12cc3de1982560bb0f8317adc818494.jpg",
        title: "vitafetch",
        languages: "C, VitaSDK",
        description: "PSVita's own neofetch! Displays system information with ASCII image of your choice to make it your own!",
        isPersonal: true,
        link: "https://github.com/cc0ffee/vitafetch"
    },
    {
        image: BattleshipsImage,
        title: "battleships",
        languages: "Dart, Flutter",
        description: "Minimal design version of Battleships versing other students. Interacts with an API to send and receive unique game data.",
        isPersonal: false,
        link: "https://github.com/cc0ffee/flutter-battleships"
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