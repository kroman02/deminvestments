import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'
import {Outlet} from 'react-router-dom'


export default function CommonLayout() {

    return(
    <>  
        <Header />
        <Nav />
        <div className="main_container">
            <Outlet />
        </div>
        <Footer />
    </>
        
    )
}