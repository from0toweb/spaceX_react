import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../logo.svg';

const Header = (props) => {
    return (
        <header className="header">
            <Link href="/" as="/">
                <img src={logo} alt="Logo Space X" className="logo" />
            </Link>
            <nav className="main-nav nav">
                <ul className="list">
                    {props.rockets.map((item) => (
                        <li className="item" key={item}>
                            <Link
                                href="/rocket"
                                as="/rocket"
                                className="item-link"
                                onClick={(e) => {
                                    props.changeRocket(item);
                                }}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="secondary-nav">
                <ul className="list">
                    <li className="item">
                        <NavLink
                            exact
                            href="/"
                            as="/"
                            className="item-link"
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink
                            href="/calendar"
                            as="/calendar"
                            className="item-link"
                            activeClassName="active"
                        >
                            Calendar
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
