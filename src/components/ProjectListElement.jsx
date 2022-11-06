import React from 'react'
import '../styles/project.css'

export default function ProjectListElement(props){
    const dateFormatted = props.date
    
    return(
     
    <div className="project_preview_container">
        <div>
            <p className="project_title">Title: {props.title}</p>
            <p className="project_client">Client: {props.client}</p>
            <p className="project_description_preview">Description: {props.desc}</p>
        </div>
        <div>
            <p className="project_status">Status:&nbsp;{props.status ? <span className="active_status"> Active</span> : <span className="closed_status"> Closed</span>}</p>
            <p className="project_client">Date started: {dateFormatted}</p>
        </div>
    </div>
    )
    
}