import React, {useState} from "react";
import {Link} from 'react-router-dom';
import UserSignUp from './UserSignUp.js'
import {useForm} from 'react-hook-form';

function UserLogin() {

    //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

    //handle form submit
    const submitForm = (data, event) => {
        event.preventDefault();

        console.log("data: ", data)

        //add login action for redux 
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>

               <label for="email">Email: </label>
               <input
                    id="email"
                    type="email"
                    name="email"
                    ref={register({required: "Email is required to login"})}
                />

                {errors.email && <p>{errors.email.message}</p>}

                <label for="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    ref={register({required: "Password is required to login"})}
                />

                {errors.password && <p>{errors.password.message}</p>}

                <label for="admin">Are you an administrator?</label>
                <input 
                    id="admin"
                    type="checkbox"
                    name="admin"
                    ref={register}
                />

                <button type="submit">Log in</button>
                
                <Link to="/sign-up">Don't have an account? Click here to sign up</Link>

            </form>
        </div>
    );
}

export default UserLogin