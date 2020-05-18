import React from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {login, clearErrorUser} from '../../views/private/actions/actions-user';
import {adminLogin, clearErrorAdmin} from '../../views/private/actions/actions';
import {connect} from 'react-redux';
import Marketing from './Marketing'


//login component for BOTH user types - users and admins
function UserLogin(props) {

    //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

    //handle form submit
    const submitForm = (data, event) => {
        //event.preventDefault();

        //first clear any error data that could have previously existed (such as from a previous invalid login try)
        //this way, if users try logging in as a user but meant to as admin, but still fail on the 2nd attempt at logging in as an admin,
        //users only sees the error associated with the last attempt
        props.clearErrorUser();
        props.clearErrorAdmin();

        //send data of user object with email/password through to login action
        const user = {
            email: data.email,
            password: data.password
        }

        //check if user logging in checked if they were an administrator or not, then direct to proper login
        if (data.admin) {
            props.adminLogin(user);
        }
        else {
            props.login(user); 
        }
    }

    return (
        <div className='log-in auth-container'>

            <Marketing />

            <div className='log-in-card'>

                <header className="cardheader">
                    <h2 className="cardheading">Sign In!</h2>
                </header> 
{/* 
                <usertype className='usertype'>
                    <h4>I am a...</h4>
                    
                    <fieldset className="cardfieldset user-type-buttons">  
                        <button className="user-button" type="submit">User</button>
                        <button className="admin-button" type="submit">Admin</button>
                    </fieldset>

                </usertype> */}



                <div className="cardbody">

                    <form onSubmit={handleSubmit(submitForm)}>

                        <fieldset className="cardfieldset">
                            <label for="email"></label>
                                <input
                                        className="cardinput"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        ref={register({required: "Email is required"})}
                                />
                                {errors.email && <p className='input-errors'>{errors.email.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset">
                            <label for="password"></label>
                            <input
                                className="cardinput"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                ref={register({required: "Password is required"})}
                            />
                            {errors.password && <p className='input-errors'>{errors.password.message}</p>}
                        </fieldset>

                        <fieldset className="cardfieldset checkbox-section container">
                            <label className="checkbox-text" for="admin">Are you an administrator?</label>
                            <input 
                                id="checkbox"
                                className= "checkbox-input container"
                                type="checkbox"
                                name="admin"
                                ref={register}
                            />
                            <span class="checkmark"></span>
                        </fieldset>  


                        {(props.error === null ? <p></p> : <p className='input-errors'>{(props.error.response.data.message)}</p>)}

                        {(props.adminError === null ? <p></p> : <p className='input-errors'>{(props.adminError.response.data.message)}</p>)}

                        <fieldset className="cardfieldset">  
                        <button className="card-button" type="submit">Log in</button>
                        </fieldset>

                        <fieldset className="cardfieldset">   
                        <a className="cardlink"><Link to="/sign-up">Don't have an account? <br/> Click here to sign up</Link></a>
                    </fieldset> 

                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        error: state.userReducer.error,
        adminError: state.reducer.error
    }
}

export default connect(mapStateToProps, {login, adminLogin, clearErrorAdmin, clearErrorUser})(UserLogin)