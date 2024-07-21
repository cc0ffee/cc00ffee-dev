function ProjectCard(props: {image: any, title: string, languages: string, description: string, isPersonal: boolean, link: string}) {

    return <div className='max-w-sm rounded overflow-hidden border border-gray-300 m-2'>
        <img className="h-20 w-full object-cover" src={ props.image }/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl">{ props.title }</div>
            <p className="text-gray-600 text-sm mb-2">{ props.languages }</p>
            <p className="text-gray-700 text-base mb-2">{ props.description }</p>
            <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
                    <span>{props.isPersonal ? 'Personal' : 'Academic'}</span>
                    {props.link && 
                        <a href={props.link} className="text-blue-500 hover:text-blue-400">
                            Github →
                        </a>
                    }
                </div>
        </div>
    </div>
}
export default ProjectCard;