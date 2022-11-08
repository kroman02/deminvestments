import {React, useState} from 'react'
import CustomerListElement from './CustomerListElement'
import Spinner from './Spinner'

export default function CustomerBase(props){

    const [listElements, setListElements] = useState(
            props.customers.map(customer => {
                return <CustomerListElement customer={customer}/>
            })
    )

    return (
        <>
        {
            props.customers == null
            ?
            <Spinner />

            :
        
        <div className="default_container customer_list">
        <h2 className="page_title">{props.clientName} customer base</h2>
            <ul>
                {listElements}
            </ul>
        </div>
        }
        </>
    )
}