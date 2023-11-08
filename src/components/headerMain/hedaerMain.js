import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './headerMain.css';
import coffeeMain from '../../resources/img/coffee-beans-main.svg';
const HeaderMain = () => {
    return(
        <header className="header header___main">
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/"  activeStyle={{'fontSize' : '16px', 'fontWeight' : '600' }} className="menu__link">Coffee house</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/catalog"  activeStyle={{'fontSize' : '16px', 'fontWeight' : '600' }} className="menu__link">Our coffee</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/pleasure" activeStyle={{'fontSize' : '16px', 'fontWeight' : '600' }} className="menu__link">For your pleasure</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header__container">
            <div className="header__title title">
                <div className="title__main">Everything You Love About Coffee</div>
                <div className="devider">
                    <div className="devider__img devider__img_white">
                        <img src={coffeeMain} alt="coffee"/>
                    </div>
                </div>
                <div className="title__submain">
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                </div>
                <div className="title__btn">
                    <Link to="/catalog"  className="title__link" href="#">More</Link>
                </div>

            </div>
    </div>
        </header>
    )
}

export default HeaderMain;
