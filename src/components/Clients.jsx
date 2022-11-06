import React from 'react'
import ClientCard from './ClientCard'
import {Link} from 'react-router-dom'
export default function Clients(props) {

    var clientCardElements
    if(props.clients != null){
        clientCardElements = props.clients.map(client => {
            return <ClientCard 
                clientId={client.id}
                clientName={client.name} 
                clientPhone={client.phone}
                clientEmail={client.email}
                clientImage={client.image}
                        />
        })
    }
    

    return(
        <>
            <div className="page_title_container">
                <h2 className="page_title">Clients</h2>
            </div>
            <div className="clients_container">
                 {clientCardElements}
            <Link to="/clients/newclient"><div className="add_client_card">
            
            <img src="/plus_icon.png" />
            </div></Link>
            
        </div>
        </>
    )
}