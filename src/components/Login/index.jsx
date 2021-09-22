import React from 'react'
import './style.scss'

const Login = () => {

    return (

        <div class='form-container'>
            <h2>Log-in</h2>
            <form action="" method="get" class="form">
                <div class="form" id="email">
                    <label for="form">Email</label>
                    <input type="text" id="email-input" placeholder="Your email ..." required />
                </div>
                <div id="password-div">
                    <div class="form" id="password">
                        <label for="password" >Password</label>
                        <input type="password" id="password-input" placeholder="please choose a password with at least 6 characters ... " onblur="confirmEmail()" required />
                    </div>
                </div>
                <button>Log-in</button>
            </form >
        </div >


    )

}

export default Login