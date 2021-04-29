import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <header className="header">
            <div className="logo">
               <img src="https://brigatebyabtahi.netlify.app/images/logo.svg" alt="logo"/>
            </div>
            <div className="menu">
            <Link className="menus" to="/">Home</Link>
            <Link className="menus" to="/about">About</Link>
            <Link className="menus" to="/contact">Contact</Link>
            <Link className="menus" to="/user">User</Link>
            </div>

        </header>
        </>
    )
}
export default Navbar