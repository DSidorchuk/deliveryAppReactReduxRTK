import { useSelector } from 'react-redux';

import './basketAmount.scss';



const BasketAmount = () => {

    const basketAmount = useSelector(state => state.goods.basketAmount);
    const discount = useSelector(state => state.goods.discount);
    const totalAmount = basketAmount + discount;

    return (
        <div className='cart__amount'>
            <div className='cart__amount-num'>
                <p>Cart Amount:</p>
                <div>{`${basketAmount} ГРН`}</div>
            </div>
            <div className='cart__amount-num'>
                <p>Discount:</p>
                <div>{`${discount} ГРН`}</div>
            </div>
            <div className='cart__amount-num'>
                <p>Total Amount:</p>
                <div>{`${totalAmount} ГРН`}</div>
            </div>
        </div>
    )
}

export default BasketAmount;