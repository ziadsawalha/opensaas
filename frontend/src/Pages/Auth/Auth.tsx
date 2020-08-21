import * as React from 'react';
import './Auth.scss';
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import Login from './Login';
const Auth: React.FC = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="auth">
            <Switch>
                <Route  path={`${path}/signup`} component={SignUp} />
                <Route  path={`${path}/login`} component={Login} />
                <Route  path={`${path}/forgot-password`} component={ForgotPassword} />
                <Route exact path={`${path}/`}>
                    <Redirect to={`${path}/login`} />
                </Route>
            </Switch>
        </div>
    )
};

export default Auth;