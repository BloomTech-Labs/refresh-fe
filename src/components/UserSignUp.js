import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function UserSignUp() {

     //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const {register, handleSubmit, errors} = useForm({mode: 'onChange'});

    const [enteredPassword, setEnteredPassword] = useState('');

    //handle changes for password field in order to validate password matching
    const handleChanges = event => {
        setEnteredPassword(event.target.value);
    }
    
    //handle form submit
    const submitForm = (data, event) => {
        event.preventDefault();

        console.log("data from submitForm", data)

        //add login action here for redux, can create new object from 'data' only including email/pass to send to the db

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>

               <label for="fullName">Full Name: </label>
               <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    ref={register({required: "Full name is required"})}
                />

                {errors.fullName && <p>{errors.fullName.message}</p>}

               <label for="email">Email: </label>
               <input
                    id="email"
                    type="email"
                    name="email"
                    ref={register({required: "Email address is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"}})}
                />

                {errors.email && <p>{errors.email.message}</p>}

                <label for="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChanges}
                    defaultValue={enteredPassword}
                    ref={register({ required: "Password is required", minLength: {value: 5, message: "Password must be at least 5 letters"} })}
                />

                {errors.password && <p>{errors.password.message}</p>}

                <label for="verifyPassword">Verify password: </label>
                <input
                    id="verifyPassword"
                    type="password"
                    name="verifyPassword"
                    ref={register({ required: "Please verify your password", validate: value => value === enteredPassword || "Passwords must match"})}
                />

                {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}

                <button type="submit">Log in</button>
                
                <Link to="/">Already have an account? Click here to sign in</Link>

            </form>
        </div>
    );
}

export default UserSignUp