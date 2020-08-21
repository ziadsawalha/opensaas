import * as React from 'react';
import AuthComponent from '../../../Components/AuthComponent';
import {IField} from '../../../Components/AuthComponent/types';

const SignUp: React.FC = () => {
    const fields:IField[] = [{
        label: "Username",
        name: "Username",
        type: 'text',
    },
    {
        label: "Email",
        name: "email",
        type: 'email',
    },
    {
        label: "Password",
        name: "Password",
        type: 'password',
    }]

    return (
        <AuthComponent labelUppercase="CREATE ACCOUNT" description="Please enter your name, email address and password to create an account" fields={fields}/>
    );
}

export default SignUp;