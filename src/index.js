import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./provider/authProvider";

render((
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>
), document.getElementById('root'));


