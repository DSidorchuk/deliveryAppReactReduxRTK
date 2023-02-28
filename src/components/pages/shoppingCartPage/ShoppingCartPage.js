
import BasketForm from '../../basketForm/BasketForm';
import Basket from '../../basket/Basket';
import BasketAmount from '../../basketAmount/BasketAmount';

import './shoppingCartPage.scss'

const ShoppingCartPage = () => {


    return (
        <section className='cart'>
            <div className='container'>
                <div className='cart__grid'>
                    <BasketForm/>
                    <Basket/>
                </div>
                <BasketAmount/>
            </div>
        </section>

    )
}

export default ShoppingCartPage;