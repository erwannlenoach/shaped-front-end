import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {

    const content = 'Button'

    return (

        <div class='container-grid'>
            <nav id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>


    )

}

export default Navbar