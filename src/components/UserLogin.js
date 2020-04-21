import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {login} from '../views/private/actions/actions-user';
import {connect} from 'react-redux';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardOptionsNote,
    CardButton,
    CardLink
 } from "./styles";


function UserLogin(props) {

    //adjusted the 'mode' argument from the default value of 'onSubmit' for the useForm hook, in order to allow live error changes as user types
    const { register, handleSubmit, errors } = useForm({mode: 'onChange'});

    //handle form submit
    const submitForm = (data, event) => {
        event.preventDefault();

        //send data of user object with email/password through to login action
        const user = {
            email: data.email,
            password: data.password
        }

        props.login(user); 

       
    }

    return (
        <CardWrapper>
            <CardHeader><CardHeading>Welcome to Refresh!</CardHeading></CardHeader> 
            <CardBody>
            <form onSubmit={handleSubmit(submitForm)}>
            <CardFieldset>
               <label for="email">Email: </label>
               <CardInput
                    id="email"
                    type="email"
                    name="email"
                    ref={register({required: "Email is required to login"})}
                />
          

                {errors.email && <p>{errors.email.message}</p>}
                </CardFieldset>
                <CardFieldset>
                    <label for="password">Password: </label>
                    <CardInput
                        id="password"
                        type="password"
                        name="password"
                        ref={register({required: "Password is required to login"})}
                    />

                     {errors.password && <p>{errors.password.message}</p>}
                </CardFieldset>
                <CardFieldset>
                    <label for="admin">Are you an administrator?</label>
                    <CardInput
                        id="admin"
                        type="checkbox"
                        name="admin"
                        ref={register}
                    />
                </CardFieldset>  
                <CardFieldset>  
                <CardButton type="submit">Log in</CardButton>
                </CardFieldset>
                <CardFieldset>   
                <CardLink><Link to="/sign-up">Don't have an account? <br/> Click here to sign up</Link></CardLink>
               </CardFieldset> 
            </form>
            </CardBody>
        </CardWrapper>
    );
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {login})(UserLogin)