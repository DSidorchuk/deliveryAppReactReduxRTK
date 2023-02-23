import { useSelector } from 'react-redux';

import BasketItem from '../basketItem/BasketItem';

import './basket.scss';

const Basket = () => {

    const basket = useSelector(state => state.goods.basket);

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