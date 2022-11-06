import {React, useState} from 'react'
import {Link} from 'react-router-dom'

export default function CreateClient() {


    const [clientForm, setClientForm] = useState({
        name: "",
        phone: "",
        email: "",
        image: "",
    })

    const linkStyle = {
        color: "#36ABFF",
        textDecoration: "none",
        fontWeight: "600"
    }

    const addDefaultSrc = (e) => {
        e.target.src = "https://i.ibb.co/r2P5Z7X/image-4.png"
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setClientForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const clientURL = `http://localhost:8080/api/clients/add`
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientForm)
        };
        fetch(clientURL, requestOptions)
            .then(() => {
                window.location.reload();
            })
    }

    return(
        
        <><div className="page_title_container">
        <h2 className="page_title"><Link style={linkStyle} to="/clients">Clients</Link> / Add Client </h2>
        </div>

        <div className="client_detail_container">
            <form onSubmit={handleSubmit} className="new_client_form">
                <div className="client_creation_left">
                    <div className="form_field">
                        <label htmlFor="projectName">Name</label><input required onChange={handleChange} value={clientForm.name} id="projectName" name="name" type="text"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="clientSelect">Email</label>
                        <input required onChange={handleChange} value={clientForm.email} id="clientEmail" name="email" type="text"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="clientPhone">Phone</label>
                        <input required onChange={handleChange} value={clientForm.phone} id="clientPhone" name="phone" type="text"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="clientSelect">Logo URL</label>
                        <input onChange={handleChange} value={clientForm.image} id="projectName" name="image" type="text"/>
                    </div>
                    <div className="form_field">
                    <label htmlFor=""></label>
                    <button className="update_project_button create">Create Client</button>
                    </div>
                </div>
                <div className="logo_container">
                <img onError={addDefaultSrc} className="logo_preview" src={clientForm.image}/>
                <p>Logo preview</p>
            
                </div>
                
            </form>
        </div>
        </>
    )
}