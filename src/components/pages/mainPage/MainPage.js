import ShopList from '../../shopList/ShopList';
import GoodsList from '../../goodsList/GoodsList';

import './mainPage.scss';

const MainPage = () => {
    return (
        <section className="store">
            <div className="container">
                <div className="store__grid">
                    <ShopList/>
                    <GoodsList/>
                </div>
            </div>
        </section>

    )
}

export default MainPage;