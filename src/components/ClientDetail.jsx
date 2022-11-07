import {useEffect, useState, React} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function ClientDetail() {
    const linkStyle = {
        color: "#36ABFF",
        textDecoration: "none",
        fontWeight: "600"
    }

    const {id, name} = useParams()

    return(
        <>
        <div className="page_title_container">
        <h2 className="page_title"><Link style={linkStyle} to="/clients">Clients</Link> / {name}</h2>
        </div>
        </>
    )

}