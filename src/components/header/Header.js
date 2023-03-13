import MediaQuery from 'react-responsive';

import ClearButton from '../clearButton/ClearButton';
import MobileMenu from '../mobileMenu/MobileMenu';
import Menu from '../menu/Menu';

import './header.scss';


const Header = () => {

    return (
        <>
            <MediaQuery minWidth={577}>
                <header className='header'>
                    <div className='container header__grid'>
                        <nav className='header__menu'>
                         <Menu/>
                     </nav>
                        <div className='header__wrap'>
                            <ClearButton clazz="header__btn" />        
                        </div>
                    </div>
                </header>
        </MediaQuery>
        <MediaQuery maxWidth={576}>
            <MobileMenu/>                      
        </MediaQuery>
        </>


    )
}

export default Header;