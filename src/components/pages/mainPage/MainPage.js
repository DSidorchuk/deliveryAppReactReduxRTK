import ShopList from '../../shopList/ShopList';
import Goods from '../../goodsList/Goods';

import './mainPage.scss';

const MainPage = () => {
    return (
        <section className="store">
            <div className="container">
                <div className="store__grid">
                    <ShopList/>
                    <Goods/>
                </div>
            </div>
        </section>

    )
}

export default MainPage;