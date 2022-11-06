import React from 'react'
import '../styles/footer.css'

export default function Footer(){
    let year = new Date().getFullYear()
    return(
        <div className="footer_container">
            <p className="cpy">©{year} by <a href="https://koryroman.dev">Kornel Roman</a></p>
        </div>
    )
}