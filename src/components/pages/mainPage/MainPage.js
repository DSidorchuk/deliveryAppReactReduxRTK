import ShopList from '../../shopList/ShopList';
import GoodsList from '../../goodsList/GoodsList';

import './mainPage.scss';


const MainPage = () => {
    
    return (
        <div className="store">
            <div className="container">
                <div className="store__grid">
                    <ShopList/>
                    <GoodsList/>
                </div>
            </div>
        </div>

    )
}

export default MainPage;