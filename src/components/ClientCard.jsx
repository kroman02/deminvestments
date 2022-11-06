import React from 'react'
import '../styles/client.css'
import {Link} from 'react-router-dom'
export default function ClientCard(props) {

    const placeholderImage = "https://i.ibb.co/r2P5Z7X/image-4.png"
    const linkStyle = {
    marginTop: "20px",
    border: "none",
    background: "#36ABFF",
    color: "white",
    fontSize: "1.3rem",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    transition: "300ms",
    textAlign: "center",
    textDecoration: "none"
    }

    return(
        <div className="client_card_container">
            <img className="client_logo" src={props.clientImage == null ? placeholderImage : props.clientImage}/>
            <p className="clientName">{props.clientName}</p>
            <p className="phone_info contact_info"><img className="contact_icon" src="/phone_icon.png"/>{props.clientPhone}</p>
            <p className="email_info contact_info"><img className="contact_icon" src="/email_icon.png"/>{props.clientEmail}</p>
            <Link style={linkStyle} to={`/clients/${props.clientId}`} >More</Link>
        </div>
    )

}