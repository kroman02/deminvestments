import React from 'react'
import ProjectListElement from './ProjectListElement'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'
import projectData from '../project_data.js'



export default function Projects(props){
    const linkStyle = {
        
        textDecoration: "none",
        
    }
    var projectElements = [];
    if(props.projects != null){
        console.log(props.projects)
        projectElements = props.projects.map(project => {
            return <Link style={linkStyle} key={project.id} to={`/projects/${project.id}/${project.name}`}><ProjectListElement 
            id={project.id}
            title={project.name} 
            client={project.client.name} 
            desc={project.description}
            status={project.active}
            date={project.dateCreated} 
            /></Link>
        })
    }
    

    return (
    <>
    <div className="page_title_container for_project">
            <h2 className="page_title">Projects</h2>
            <Link to="/projects/newproject"><button className="add_project"><img src="/add.png"></img></button></Link>
        </div>
        {
            props.projects == null 
            ? 
                <Spinner />
           
            :
        
        <div className="projects_container">
            <ul className="projects_list">
             {projectElements}
            </ul>
        </div>
        }
    </>
    )

}