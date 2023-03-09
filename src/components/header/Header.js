import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ClearButton from '../clearButton/ClearButton';

import './header.scss';


const Header = () => {

    const emptyBasket = useSelector(state => state.goods.basket.length);

    return (
        <header className='header'>
            <div className='container header__grid'>
                <nav className='header__menu'>
                    <ul>
                        <li className='header__menu-item'>
                            <NavLink to="/"
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                Заклади
                            </NavLink>
                        </li>
                        <li className={!emptyBasket 
                                        ? "header__menu-item" 
                                        : "header__menu-item basket_active"}>
                            <NavLink to="/shoppingcart" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                кошик
                            </NavLink>
                        </li>
                        <li className='header__menu-item'>
                            <NavLink to="/history" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                замовлення
                            </NavLink>
                        </li>
                        <li className='header__menu-item'>
                            <NavLink to="/coupones" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                акції
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='header__wrap'>
                    <ClearButton clazz="header__btn" />        
                </div>
            </div>
        </header>
    )
}

export default Header;