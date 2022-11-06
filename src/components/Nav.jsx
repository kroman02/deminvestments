import React from 'react'
import '../styles/nav.css'
import {useState} from 'react'
import {NavLink} from 'react-router-dom';
export default function Nav() {

    const [expand, setExpand] = useState(false)
    
    const toggleExpand = () => {
        setExpand(prevExpand => (prevExpand ? false : true))
    }

    return(
        <div className={`nav_container ${expand ? "expanded" : ""}`}>
            <button onClick={toggleExpand} className="menu_arrow_btn">
                <img className={`arrow_menu_icon ${expand ? "left":""}`} src="/menu_arrow.png"/>
            </button>
            <ul className="nav_list">
            <NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/"><li>
                    <img src="/home.png" className="nav_icon"/>
                    {expand && <p className="link_title">Home</p>}
                    
                </li></NavLink>
            <NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/projects"><li>
                    <img src="/project.png" className="nav_icon"/>
                    {expand && <p className="link_title">Projects</p>}
                </li></NavLink>
            <NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/clients"><li>
                    <img src="/clients.png" className="nav_icon"/>
                    {expand && <p className="link_title">Clients</p>}
                </li></NavLink>
            <NavLink className={({isActive}) => isActive ? "link active" : "link"} to="/policies"><li>
                    <img src="/policy.png" className="nav_icon"/>
                    {expand && <p className="link_title">Policies</p>}
                </li></NavLink>
            </ul>
        </div>
    )
}