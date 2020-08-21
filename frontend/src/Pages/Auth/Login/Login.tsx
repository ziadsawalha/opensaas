import * as React from 'react';
import AuthComponent from '../../../Components/AuthComponent';
import {IField} from '../../../Components/AuthComponent/types';

const Login: React.FC = () => {

    const fields:IField[] = [{
        label: "Username",
        name: "Username",
        type: 'text',
    },
    {
        label: "Password",
        name: "Password",
        type: 'password',
    }]

    return (
        <AuthComponent labelUppercase="login" description="Please enter your username and password to login" fields={fields}/>
    );
}

export default Login;