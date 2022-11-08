import {React, useState} from 'react'

export default function CustomerListElement(props) {

    const[open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className={`customer_elem ${open ? "active" : ""}`}>
            <div className="detail_holder">
                <div className='header_details'>Name <p>{props.customer.fullName}</p></div>
                <div className='header_details'>dob <p>{props.customer.dob}</p></div>
                <div className='header_details'>gender <p>{props.customer.gender}</p></div>
                <div className='header_details'>smoker <p>{props.customer.smoker ? "Y" : "N"}</p></div>
                <div className='header_details'>condition <p>{props.customer.condition}</p></div>
                <div className='header_details'>state <p>{props.customer.state.name}</p></div>
                <div className='header_details'>policy <p>{props.customer.policy == null
                ? "-" : props.customer.policy.policyCode}</p></div>
                <div className='details_buttons'>
                    <a className='opentest' onClick={toggleOpen}>{open ? "Close" : "Expand"}</a>
                    <a className='save_details'>Save</a>
                    </div>
                
            </div>
            {
                open 
                ?
                 props.customer.policy == null 
                 ?
                    <p className='no_policy_notice'>No policy applied to {props.customer.fullName}</p>
                 
                 :

                 <div className="policy_detail">
                    
                    <div className='header_details'>Origination type <p>{props.customer.policy.originationType}</p></div>
                    <div className='header_details'>Issue state <p>{props.customer.policy.state.name}</p></div>
                    <div className='header_details'>Product <p>{props.customer.policy.product.name}</p></div>
                    <div className='header_details'>Carrier <p>{props.customer.policy.product.carrier.name}</p></div>
                    
                </div>
                
                :
                    
                ""
                }
        </div>
    )
}





   