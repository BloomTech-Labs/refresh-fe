// IMPORTS
// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// themes and styles
import Reset from './styles/global/Reset';
import GlobalStyle from './styles/global/GlobalStyle';
// components
import App from './App';
import CreateAccount from "./views/onboarding/CreateAccount";

// RENDER
ReactDOM.render(
    <Router>
        <Reset />
        <GlobalStyle />
        <Route exact path='/' render={props => <App  {...props} />} />      
        <Route 
            exact 
            path = "/signup" 
            render ={props => <CreateAccount {...props} />}
             />
    </Router>,
document.getElementById('root'));

