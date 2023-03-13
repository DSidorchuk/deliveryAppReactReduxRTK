import { Helmet } from 'react-helmet';

import ShopList from '../../shopList/ShopList';
import GoodsList from '../../goodsList/GoodsList';

import './mainPage.scss';


const MainPage = () => {
    
    return (
        <div className="store">
            <Helmet>
                <meta
                    name="description"
                    content="Main page of food delivery app, which contains restaurants names and list of their products" 
                    />
                <title>Доставка їжі</title>
            </Helmet>
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