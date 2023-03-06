import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import BasketItem from '../basketItem/BasketItem';
import { setDiscount } from '../goodsList/goodsSlice';
import { getDiscount } from '../../utilities/getDiscount';

import './basket.scss';


const Basket = () => {

    const basket = useSelector(state => state.goods.basket);
    const basketAmount = useSelector(state => state.goods.basketAmount);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const coupones = useSelector(state => state.goods.coupones);
    const dispatch = useDispatch();


    useEffect(() => {
        if (basket.length && coupones.length){
            const discount = getDiscount(basket, coupones, orderFromShop, basketAmount);
            dispatch(setDiscount(discount));
        }
    }, [basket])
    

    const content = basket.map(item => {
        return <BasketItem key={item.id} {...item}/>
    })

    
    return (
        <div className="basket">
            {content}
        </div>
    )
}

export default Basket;