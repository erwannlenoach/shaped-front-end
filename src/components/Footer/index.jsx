import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {

    const content = 'Button'

    return (

        <div class='container-grid'>
            <nav id="navbar">
                <ul>
                    <li><a href="#">Social Networks</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>


    )

}

export default Footer