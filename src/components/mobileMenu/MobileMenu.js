import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './mobileMenu.scss';
import home from '../../assets/home.svg';

const MobileMenu = () => {

    const [active, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!active);
    }

    return (
        <>
            <NavLink to="/">
                <img src={home} alt="home" className='home'/>
            </NavLink>
            <nav className={active ? 'menu menu_active' : 'menu' }
                 onClick={toggleClass}>
                <NavLink to="/" 
                         style={({isActive}) => 
                                isActive ? {color: '#E85A4F'} : undefined}>
                    Заклади
                </NavLink>
                <NavLink to="/shoppingcart" 
                         style={({isActive}) => 
                                isActive ? {color: '#E85A4F'} : undefined}>
                    кошик
                </NavLink>
                <NavLink to="/history" 
                         style={({isActive}) => 
                                isActive ? {color: '#E85A4F'} : undefined}>
                    замовлення
                </NavLink>
                <NavLink to="/coupones"  
                         style={({isActive}) => 
                                isActive ? {color: '#E85A4F'} : undefined}>
                    акції
                </NavLink>
            </nav>
            <div className={active ? 'hamburger hamburger_active' : 'hamburger' }
                 onClick={toggleClass}>
                <span></span>
                <span></span>  
                <span></span>                
            </div>
        </>
    )
}

export default MobileMenu;