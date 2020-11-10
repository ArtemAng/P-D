import './Nav.css';
import React from 'react';
import logo from '../../logo.svg';

const Nav = ({ tabs=['NO ELEMENTS'] }) => {
    return (
        <div className='nav'>
            <img className='logo' src={logo} alt='logo' />
            <ul className='tabs'>
                {tabs.map((i, key) => <li className='tab' key={key}>{i}</li>)}
            </ul>
        </div>
    );
}
export default Nav;