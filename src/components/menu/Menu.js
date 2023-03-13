import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
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
        </>
    )
}

export default Menu;