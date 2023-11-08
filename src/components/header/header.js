import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './header.css';

const Header = (props) => {
    return(
        <header className="header">
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink exact  to="/" activeStyle={{'fontSize' : '16px', 'fontWeight' : '600' }} className="menu__link">Coffee house</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink exact to="/catalog" activeStyle={{ 'fontSize' : '16px','fontWeight' : '600' }}  className="menu__link">Our coffee</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/pleasure"  activeStyle={{'fontSize' : '16px', 'fontWeight' : '600' }} className="menu__link">For your pleasure</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header__title title">
                <p>{props.title}</p>
            </div>
        </header>
    )
}

export default Header;
