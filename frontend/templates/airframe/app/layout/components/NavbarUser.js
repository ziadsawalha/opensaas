import React from 'react';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => (
    <NavItem {...props}>
        <NavLink style={{ padding: 0, fontSize: '28px' }} href="/account/logout">
            <i className="fa fa-power-off" />
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
