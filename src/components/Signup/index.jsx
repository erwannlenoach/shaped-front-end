import React from 'react'
import Cookies from 'js-cookie'
import './style.scss'

const Signup = () => {

    const RegexName = `^[A-Za-z( ')]*$`

    const RegexEmail = '(^[a-zA-Z0-9_.-]*)([@])([a-z]+)(.)([a-z]+)'

    const retrieveInfo = (e) => {
        e.preventDefault();
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("password-input").value;
        submitInfo(email, password)
    }

    async function submitInfo(email, password) {

        // stringify converts a JS value into JSON

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        // add user: before the email and password fields
        let raw = JSON.stringify({
            "user": {
              "email": `${email}`,
              "password": `${password}`
            }
          });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        }
        const response = await fetch('http://[::1]:3001/signup', requestOptions)
        const info = await response.json()
        if(response.headers.get('Authorization')){
            let jti = response.headers.get('Authorization')
            Cookies.set('token', jti)
        }

    }


    return (

        <div class='form-container'>
            <h2>Signup</h2>
            <form action="" method="get" class="form">

                <div class="form" id="email">
                    <label for="form">Email</label>
                    <input type="text" id="email-input" placeholder="Your email ..." pattern={RegexEmail} required />
                </div>

                <div class="form">
                    <label for="email">Confirmation of the email</label>
                    <input type="text" id="confirmed-email-input" placeholder="Please confirm your email ... " onblur="confirmEmail()" pattern={RegexEmail} required />
                </div>

                <div id="password-div">
                    <div class="form" id="password">
                        <label for="password" >Password</label>
                        <input type="password" id="password-input" placeholder="please choose a password with at least 6 characters ... " onblur="confirmEmail()" required />
                    </div>

                    <div class="form" id="confirmation-password">
                        <label for="password">Confirmation of the password</label>
                        <input type="password" id="confirmed-password-input" placeholder="Please confirm your password ... " onblur="confirmPassword()" required />
                    </div>
                </div>

                <div id="send">
                    <button onClick={retrieveInfo}>Envoyer</button>
                </div>

            </form>
        </div>


    )

}

export default Signup