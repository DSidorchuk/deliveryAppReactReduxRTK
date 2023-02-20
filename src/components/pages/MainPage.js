import './store.scss';
import ShopList from '../shops/ShopList';
import Goods from '../goods/Goods';

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