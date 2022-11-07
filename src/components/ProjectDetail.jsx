import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Spinner from './Spinner'
import ClientCard from './ClientCard'
import { useNavigate } from 'react-router-dom';
export default function ProjectDetail(props){

    const linkStyle = {
        color: "#36ABFF",
        textDecoration: "none",
        fontWeight: "600"
    }
    // Retrieve parameters from router
    const {id, name} = useParams()
    

    const [currentProject, setCurrentProject] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8080/api/projects/${id}`)
        .then((resp) => resp.json())
        .then((data) => setCurrentProject(data))
    }, [])

    

    const updateProject = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentProject)
        };
        fetch(`http://localhost:8080/api/projects/put/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => setCurrentProject(data))
            .then(() => {
                window.location.reload();
            })
            
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCurrentProject(prevProject => {
            return {
                ...prevProject,
                [name]: value
            }
        })
        
    }

    const deleteProject = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:8080/api/projects/${id}`, requestOptions)
            .then(() => navigate(-1))
    }
    const toggleActiveProject = () => {
        setCurrentProject(prevProject => {
            return {
                ...prevProject,
                active: !prevProject.active
            }
        })
    }
    return(
        <><div className="page_title_container">
        <h2 className="page_title"><Link style={linkStyle} to="/projects">Projects</Link> / {name}</h2>
        </div>
        {
            currentProject == null  
            ?
            <Spinner />
            :
            
            <div className="project_detail_container">
                
                <form onSubmit={updateProject}>
                <div className="project_detail_inner">
                    <div className="form_field">
                        <label htmlFor="projectName">Project name</label>
                        <div className="align_div">
                            <input onChange={handleChange} id="projectName" type="text" name="name" value={currentProject.name} />
                        </div>
                    </div>
                    <div className="form_field">
                    <label htmlFor="">Client</label>
                    <div className="align_div">
                        <ClientCard 
                        clientId={currentProject.client.id}
                        clientName={currentProject.client.name} 
                        clientPhone={currentProject.client.phone}
                        clientEmail={currentProject.client.email}
                        clientImage={currentProject.client.image}
                        />
                    </div>
                    </div>

                    <div className="form_field">
                        <label>Date Started</label>
                        <div className="align_div date">
                            <p>{currentProject.dateCreated}</p>
                        </div>
                    </div>

                </div>
                <div className="project_detail_inner right">
                <div className="form_field right">
                        <label htmlFor="projectName">Description</label>
                        <div className="align_div">
                            <textarea onChange={handleChange} id="projectName" name="description" value={currentProject.description} />
                        </div>
                </div>
                <div className="form_field right status">
                    <label>Status: {currentProject.active ? "active" : "closed"}</label>
                    <a className="toggle_link" onClick={() => toggleActiveProject()}><div className={`active_toggle ${currentProject.active ? "on" : "off"}`}><div className={`toggle ${currentProject.active ? "on" : "off"}`}></div></div></a>
                </div>
                <div className="form_field right button">
                    <button onClick={deleteProject} className="update_project_button delete">Delete Project</button>
                    <button className="update_project_button">Save changes</button>
                </div>
                </div>
                </form>
            </div>

        }
        </>
        
    )
}