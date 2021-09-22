import React from 'react'
import './style.scss'
import Login from 'components/Login';
import Signup from 'components/Signup';
import Cards from 'components/Cards'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Navbar = () => {

    const content = 'Button'

    return (
        <Router>
            <div class='container-grid'>
                <nav id="navbar">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Log-in</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign-up</Link>
                        </li>
                    </ul>
                </nav>

               
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/">
                        <Cards />
                    </Route>
                </Switch>
            </div>
        </Router >
       


    )

}

export default Navbar