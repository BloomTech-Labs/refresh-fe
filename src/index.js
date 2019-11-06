// IMPORTS
// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import App from './App';

ReactDOM.render(
    <Router>
        <Route path='/' render={props => <App  {...props} />} />
    </Router>,
document.getElementById('root'));

