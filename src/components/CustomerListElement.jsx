import React from 'react'

export default function CustomerListElement(props) {

    return (
        <div className='customer_elem'>
            <div className='detail_holder'>
                <p>Name <p>{props.customer.fullName}</p></p>
                <p>dob <p>{props.customer.dob}</p></p>
                <p>gender <p>{props.customer.gender}</p></p>
                <p>smoker <p>{props.customer.smoker ? "Y" : "N"}</p></p>
                <p>condition <p>{props.customer.condition}</p></p>
                <p>state <p>{props.customer.state.name}</p></p>
                <p>policy <p>{props.customer.policy == null
                ? "-" : props.customer.policy.policyCode}</p></p>
            </div>
        </div>
    )
}

