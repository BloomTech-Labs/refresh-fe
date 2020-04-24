import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {register} from "../views/private/actions/actions-user"
import { connect } from "react-redux";


function UserSignUp(props) {

     //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const {register, handleSubmit, errors, watch} = useForm({mode: 'onChange'});
    
    //handle form submit
    const submitForm = (data, event) => {
        event.preventDefault();

        //send data of user object with email/fullname/password through to register action
        const user = {
            email: data.email,
            full_name: data.fullName,
            password: data.password
        }
 
        props.register(user);

    }

    return (
        <div className="cardwrapper">
       
                <header className="cardheader">
                    <h1 className="cardheading">Welcome to Refresh!</h1>
                </header>

                <div className="cardbody">

                    <form onSubmit={handleSubmit(submitForm)}>

                        <fieldset className="cardfieldset" >
                            <label for="fullName">Full Name: </label>
                                <input className="cardinput"
                                        id="fullName"
                                        type="text"
                                        name="fullName"
                                        ref={register({required: "Full name is required"})}
                                    />

                                            {errors.fullName && <p>{errors.fullName.message}</p>}
                    </fieldset>
                    <fieldset className="cardfieldset">
                <label for="email">Email: </label>
                <input className="cardinput"
                        id="email"
                        type="email"
                        name="email"
                        ref={register({required: "Email address is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"}})}
                    />

                    {errors.email && <p>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="cardfieldset">
                    <label for="password">Password: </label>
                    <input className="cardinput"
                        id="password"
                        type="password"
                        name="password"
                        ref={register({ required: "Password is required", minLength: {value: 5, message: "Password must be at least 5 letters"} })}
                    />

                    {errors.password && <p>{errors.password.message}</p>}
                    </fieldset>

                    <fieldset className="cardfieldset">
                    <label for="verifyPassword">Verify password: </label>
                    <input className="cardinput"
                        id="verifyPassword"
                        type="password"
                        name="verifyPassword"
                        ref={register({ required: "Please verify your password", validate: value => value === watch('password') || "Passwords must match"})}
                    />
                    {errors.verifyPassword && <p>{errors.verifyPassword.message}</p>}
                    </fieldset>

                    <p>{(props.error == null ? '' : (props.error.response.data.errorMessage))}</p>

                    <fieldset className="cardfieldset">
                        <button className="card-button" type="submit">Sign up</button>
                    </fieldset>

                    <fieldset className="cardfieldset">
                   <a className="cardlink"> <Link to="/">Already have an account? Click here to sign in</Link></a>
                    </fieldset>

                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        error: state.userReducer.error
    }
}
export default connect(mapStateToProps, {register})(UserSignUp)