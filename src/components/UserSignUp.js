import React, {useState} from "react";
import {Link} from 'react-router-dom';

function UserSignUp() {


    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        verifyPassword: ''
    });


    //handle any changes made to input fields email and password
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }


    //handle form submit
    const submitForm = event => {
        event.preventDefault();
        //add login action for redux 
    }

    return (
        <div>
            <form onSubmit={submitForm}>

               <label for="fullName">Full Name: </label>
               <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    onChange={handleChanges}
                    value={user.fullName}
                />

                <label for="email">Email: </label>
               <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChanges}
                    value={user.email}
                />

                <label for="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChanges}
                    value={user.password}
                />

                <label for="verifyPassword">Password: </label>
                <input
                    id="verifyPassword"
                    type="password"
                    name="verifyPassword"
                    onChange={handleChanges}
                    value={user.verifyPassword}
                />


                <button type="submit">Log in</button>
                
                <Link to="/">Already have an account? Click here to sign in</Link>

            </form>
        </div>
    );
}

export default UserSignUp