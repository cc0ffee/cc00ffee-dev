function ProjectCard(props: {image: any, title: string, languages: string, description: string, isPersonal: boolean, link: string}) {

    return <div className='max-w-sm rounded overflow-hidden border border-gray-300 m-4'>
        <img className="w-full" src={ props.image }/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl">{ props.title }</div>
            <p className="text-gray-600 text-sm mb-2">{ props.languages }</p>
            <p className="text-gray-700 text-base mb-2">{ props.description }</p>
            <p className={`text-sm mb-2 text-gray-600`}>
          {props.isPersonal ? 'Personal' : 'Academic'} 
        </p>
        </div>
    </div>
}
export default ProjectCard;