import { Link } from 'react-router-dom';

export function Projects({project}) {
    let date = new Date(project.dateCreated);
    let stringDate = date.toString();

    return (
        <div className="project">
            <h1>{project.title}</h1>
            <p>{stringDate.slice(4, 15)}</p>
        </div>
    )
} 