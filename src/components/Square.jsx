import React from 'react'
import '../styles/squares.css'
export default function Square(props){
    
    const data_style = props.type == "list" ? "listStyle" : "";
    return(
        <div className="square">
            <h3 className="square_title">{props.squareTitle}</h3>
            <ul className="info_list">
                <li className={data_style}>
                    <p className="info"></p>
                    <p className="info_value">40</p>
                </li>
            </ul>
        </div>
    )
}