import { useSelector } from 'react-redux';

import BasketForm from '../../basketForm/BasketForm';
import Basket from '../../basket/Basket';

import './shoppingCartPage.scss'

const ShoppingCartPage = () => {

    const basketAmount = useSelector(state => state.goods.basketAmount);

    return (
        <section className='cart'>
            <div className='container'>
                <div className='cart__grid'>
                    <BasketForm/>
                    <Basket/>
                </div>
                <div className='cart__amount'>
                    <p>TOTAL AMOUNT: </p>
                    <div className='cart__amount-num'>{`${basketAmount} ГРН`}</div>
                </div>
            </div>
        </section>

    )
}

export default ShoppingCartPage;