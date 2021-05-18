import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    // const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        // history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding:'0 2rem'}}>
                {/*<a href="/" className="brand-logo">Сокращение ссылок</a>*/}
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    {/*<li><NavLink to="/create">Создать</NavLink></li>*/}
                    <li><NavLink to="/">Календарь</NavLink></li>
                    <li><NavLink to="/">Услуги</NavLink></li>
                    <li><NavLink to="/users">Сотрудники</NavLink></li>
                    <li><NavLink to="/clients">Клиенты</NavLink></li>
                    <li className="right"><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}