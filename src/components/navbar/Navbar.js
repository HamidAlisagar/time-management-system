import React from 'react'
import Styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.navbarHeader}>
                <h2>Time Management System</h2>
            </div>
           <ul className={Styles.navbarList}>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/sign-up">Sign Up</Link>
               </li>
              
           </ul>
        </div>
    )
}

export default Navbar
