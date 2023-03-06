
import BasketForm from '../../basketForm/BasketForm';
import Basket from '../../basket/Basket';
import BasketAmount from '../../basketAmount/BasketAmount';

import './basketPage.scss'


const BasketPage = () => {

    return (
        <div className='cart'>
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