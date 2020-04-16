import React, {useState} from "react";
import {Link} from 'react-router-dom';


function UserLogin() {


    const [user, setUser] = useState({
        email: '',
        password: '',
        admin: false
    });


    //handle any changes made to input fields email and password
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    //handle any changes made to the checkbox field
    const handleCheckboxChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.checked
        });
    }

    //handle form submit
    const submitForm = event => {
        event.preventDefault();
        //add login action for redux 
    }

    return (
        <div>
            <form onSubmit={submitForm}>

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

                <label for="admin">Are you an administrator?</label>
                <input 
                    id="admin"
                    type="checkbox"
                    name="admin"
                    onChange={handleCheckboxChanges}
                    value={user.admin}
                />

                <button type="submit">Log in</button>
                
                <Link to="">Don't have an account? Click here to sign up</Link>

            </form>
        </div>
    );
}

export default UserLogin