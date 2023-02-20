import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { clearBasket } from '../goods/goodsSlice';

import './header.scss';

const Header = () => {

    const emptyBasket = useSelector(state => state.goods.basket.length);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(clearBasket());
    }

    return (
        <header className='header'>
            <div className='container header__grid'>
                <nav className='header__menu'>
                    <ul>
                        <li className='header__menu-item'>
                            <NavLink to="/"
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                Shops
                            </NavLink>
                        </li>
                        <li className={!emptyBasket 
                                        ? "header__menu-item" 
                                        : "header__menu-item basket_active"}>
                            <NavLink to="/shoppingcart" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                Shopping Cart
                            </NavLink>
                        </li>
                        <li className='header__menu-item'>
                            <NavLink to="/history" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                History
                            </NavLink>
                        </li>
                        <li className='header__menu-item'>
                            <NavLink to="/history" 
                                     style={({isActive}) => 
                                            isActive ? {color: '#E85A4F'} : undefined}>
                                Coupones
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='header__wrap'>
                    <button className={!emptyBasket 
                                        ? "header__btn" 
                                        : "header__btn header__btn_active"}
                            onClick={onClick}>
                        clear cart 
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;