import { Helmet } from 'react-helmet';

import BasketForm from '../../basketForm/BasketForm';
import Basket from '../../basket/Basket';
import BasketAmount from '../../basketAmount/BasketAmount';

import './basketPage.scss'


const BasketPage = () => {

    return (
        <div className='cart'>
            <Helmet>
                <meta
                    name="description"
                    content="Shopping cart or basket page" 
                    />
                <title>Кошик</title>
            </Helmet>
            <div className='container'>
                <div className='cart__grid'>
                    <BasketForm/>
                    <Basket/>
                </div>
                <BasketAmount/>
            </div>
        </div>
    )
}

export default BasketPage;