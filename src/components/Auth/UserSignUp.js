import React from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {register} from "../../views/private/actions/actions-user"
import { connect } from "react-redux";
import Marketing from './Marketing'

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
        <div className="sign-up auth-container">

            <Marketing />
            
            <div className="sign-up-card">
        
                    <header className="cardheader">
                        <h1 className="cardheading">Sign Up!</h1>
                    </header>

                    <div className="cardbody">

                        <form onSubmit={handleSubmit(submitForm)}>

                            <fieldset className="cardfieldset" >
                                <label for="fullName"></label>
                                    <input className="cardinput"
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                            ref={register({required: "Full name is required"})}
                                        />

                                                {errors.fullName && <p className='input-errors'>{errors.fullName.message}</p>}
                        </fieldset>
                        <fieldset className="cardfieldset">
                    <label for="email"></label>
                    <input className="cardinput"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            ref={register({required: "Email is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"}})}
                        />

                        {errors.email && <p className='input-errors'>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                        <label for="password"></label>
                        <input className="cardinput"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={register({ required: "Password is required", minLength: {value: 5, message: "Password must be at least 5 letters"} })}
                        />

                        {errors.password && <p className='input-errors'>{errors.password.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                        <label for="verifyPassword"></label>
                        <input className="cardinput"
                            id="verifyPassword"
                            type="password"
                            name="verifyPassword"
                            placeholder="Verify Password"
                            ref={register({ required: "Please verify your password", validate: value => value === watch('password') || "Passwords must match"})}
                        />
                        {errors.verifyPassword && <p className='input-errors'>{errors.verifyPassword.message}</p>}
                        </fieldset>

                        {/* <p>{(props.error == null ? '' : (props.error.response.data.errorMessage))}</p> */}

                        {(props.error == null ? <p> </p> : <p className='input-errors'>{(props.error.response.data.errorMessage)}</p> )}

                        <fieldset className="cardfieldset">
                            <button className="card-button" type="submit">Sign up</button>
                        </fieldset>

                        <fieldset className="cardfieldset">
                    <a className="cardlink"> <Link to="/">Already have an account?<br></br> Click here to sign in</Link></a>
                        </fieldset>

                    </form>
                </div>
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