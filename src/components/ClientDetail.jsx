import {useEffect, useState, React} from 'react'
import {Link, useParams} from 'react-router-dom'
import Spinner from './Spinner'

export default function ClientDetail() {
    const linkStyle = {
        color: "#36ABFF",
        textDecoration: "none",
        fontWeight: "600"
    }

    const [currentClient, setCurrentClient] = useState(null)

    // Retrieve parameters from router
    const {id, name} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:8080/api/clients/${id}`)
        .then((resp) => resp.json())
        .then((data) => setCurrentClient(data))
    }, [])

    const addDefaultSrc = (e) => {
        e.target.src = "https://i.ibb.co/r2P5Z7X/image-4.png"
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCurrentClient(prevClient => {
            return {
                ...prevClient,
                [name]: value
            }
        })
        
    }

    const updateClient = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentClient)
        };
        fetch(`http://localhost:8080/api/clients/put/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => setCurrentClient(data))
            .then(() => {
                window.location.reload();
            })
    }

    return(
        <>
        <div className="page_title_container">
        <h2 className="page_title"><Link style={linkStyle} to="/clients">Clients</Link> / {name}</h2>
        </div>
        {

            currentClient == null 

            ?
                // LOADING DATA
                <Spinner />
            :

            <>
        <div className="default_container">
            <form onSubmit={updateClient} className="client_detail_form">
                <div>
                    <div className="form_field">
                        <label htmlFor="clientName">Client</label>
                        <div className="align_div">
                            <input onChange={handleChange} id="clientName" type="text" name="name" value={currentClient.name} />
                        </div>
                    </div>
                    <div  className="form_field">
                        <label htmlFor="clientEmail">Email</label>
                        <div className="align_div">
                            <input onChange={handleChange} id="clientEmail" type="text" name="email" value={currentClient.email} />
                        </div>
                    </div>
                    <div className="form_field">
                        <label htmlFor="clientPhone">Phone</label>
                        <div className="align_div">
                            <input onChange={handleChange} id="clientPhone" type="text" name="phone" value={currentClient.phone} />
                        </div>
                    </div>
                </div>

                <div className="client_detail_form_right">
                    <div className="form_field">
                        <label htmlFor="clientLogo">Logo URL</label>
                        
                        <div className="align_div">
                            <input onChange={handleChange} id="clientLogo" type="text" name="image" value={currentClient.image} />
                        </div>
                        <div className="logo_container">
                        <img onError={addDefaultSrc} className="logo_preview" src={currentClient.image}/>
                        <p>Logo preview</p>
                        </div>
                        
                    </div>
                    <div className="form_field buttons">
                            <button onClick={(e)=>{e.preventDefault()}} className="delete_client_button">Delete Client</button>
                            <button className="update_client_button">Save changes</button>
                        </div>

                </div>
            </form>

        </div>
        <div className="default_container customer_list">
        <h2 className="page_title">{name} customer base</h2>
        </div>
            </>}
        </>
    )

}