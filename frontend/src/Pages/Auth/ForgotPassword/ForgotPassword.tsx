import * as React from 'react';
import AuthComponent from '../../../Components/AuthComponent';
import {IField} from '../../../Components/AuthComponent/types';

const ForgotPassword: React.FC = () => {
    const fields:IField[] = [{
        label: "Email",
        name: "email",
        type: 'email',
    }]

    return (
        <AuthComponent labelUppercase="FORGOT PASSWORD" description="Please enter your email address to recover your password" fields={fields}/>
    );
}

export default ForgotPassword;