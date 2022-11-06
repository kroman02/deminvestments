import {React, useState, useEffect} from 'react'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'
export default function CreateProject(props) {
    const linkStyle = {
        color: "#36ABFF",
        textDecoration: "none",
        fontWeight: "600"
    }

    const [clientList, setClientList] = useState(props.clients) 

    
    const [projectForm, setProjectForm] = useState({
        name: "",
        client: null,
        description: ""
    })

    useEffect(()=>{
        fetch('http://localhost:8080/api/clients')
        .then((resp) => resp.json())
        .then((data) => setClientList(data))
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setProjectForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    var optionElements;
    if(clientList != null){
        optionElements = clientList.map(client => {
            return <option key={client.id} value={client.id}>{client.name}</option>
        })
    }

    const createProject = (e) => {
        if(projectForm.client == null){return;}
        const clientURL = `http://localhost:8080/api/clients/${projectForm.client}/projects`
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name:projectForm.name, description: projectForm.description})
        };
        fetch(clientURL, requestOptions)
            .then(response => console.log(response.json()))
            .then(() => {
                window.location.reload();
            })

    }
    

    return(
        <>
        <div className="page_title_container">
        <h2 className="page_title"><Link style={linkStyle} to="/projects">Projects</Link> / Create Project</h2>
        
        </div>
        {
            clientList == null
            ?
            <Spinner />
            :
        <div className="project_detail_container">
            <form onSubmit={createProject} className="new_project_form">
                <div className="form_field">
                    <label htmlFor="projectName">Title</label><input id="projectName" name="name" type="text" value={projectForm.name} onChange={handleChange}/>
                </div>
                <div className="form_field">
                    <label htmlFor="clientSelect">Client</label>
                    <select 
                    id="clientSelect"
                    value={"a"}
                    onChange={handleChange}
                    name="client">
                    {optionElements}
                    </select><p className="warning">Note: this cannot be changed!</p>
                </div>
                <div className="form_field">
                    <label htmlFor="descriptionForm">Client</label><textarea id="descriptionForm" type="text" name="description" value={projectForm.description} onChange={handleChange}/>
                </div>
                <div className="form_field">
                <label htmlFor="descriptionForm"></label>
                <button className="update_project_button create">Save changes</button>
                </div>
            </form>
        </div>
            }
        </>
        
    )

}