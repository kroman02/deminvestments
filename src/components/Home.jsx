import React from 'react'
import Square from './Square'
import '../styles/home.css'
import Spinner from './Spinner'
import {useSpring, animated} from "react-spring"
import {useState, useEffect} from 'react'




// Animated number from react-spring package
function Number({n}) {
    const {number} = useSpring ({
        from: {number: 0},
        number: n,
        delay: 300,
        config: {mass: 1, tension: 20, friction:10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
// end of animated numbers

export default function Home(props){
    
   
    return(
        <>
        <div className="page_title_container">
            <h2 className="page_title">Home Page</h2>
        </div>
        {
            props.projects == null || props.clients == null

            ?

            <Spinner />

            :
          

        <div className="dashboard">
            
        <div className="square">
            <h3 className="square_title">Clients</h3>
            <ul className="info_list">
                <li>
                    <div className="info"></div>
                    <div className="info_value"><Number n={props.clients.length}/></div>
                </li>
            </ul>
        </div>
        <div className="square">
            <h3 className="square_title">Projects</h3>
            <ul className="info_list">
            <li>
                    <div className="info first_info">Total</div>
                    <div className="info_open"><Number n={props.projects.length}/></div>
                </li>
                <li>
                    <div className="info first_info">Active</div>
                    <div className="info_open"><Number n={props.projects.filter(p => p.active).length}/></div>
                </li>
                <li>
                    <div className="info">Closed</div>
                    <div className="info_closed"><Number n={props.projects.filter(p => !p.active).length}/></div>
                </li>
            </ul>
        </div>
        <div className="square">
            <h3 className="square_title">Policies</h3>
            <ul className="info_list">
                <li>
                    <div className="info"></div>
                    <div className="info_value"><Number n={12}/></div>
                </li>
            </ul>
        </div>
        </div>}
        </>
            
        
    )
}