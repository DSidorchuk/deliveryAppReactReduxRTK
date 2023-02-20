import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './goodsItem.scss'


const GoodsItem = ({name, description, image, price, addItem }) => {

    const [qtty, setQtty] = useState(0);
    const emptyBasket = useSelector(state => state.goods.basket.length);

    // To clear counter when basket was cleared 
    useEffect(() => {
        if (!emptyBasket) {
            setQtty(0);
        }
    }, [emptyBasket])


    const onClick = () => {
        setQtty(qtty => qtty + 1); // show counter of added to basket items
        addItem();
    }

    return (
        <div className="goods__item">
            <img className="goods__item-img" src={image} alt={name} />
            <h3 className="goods__item-title">{name}</h3>
            <p className='goods__item-descr'>{description}</p>
            <div className='goods__item-order'>
                <p className='goods__item-price'>{price} ГРН</p>
                <p className='goods__item-qtty'>{qtty ? `(${qtty})` : ''}</p>
                <button className="goods__item-btn"
                        onClick={onClick}>
                    заказать
                </button>
            </div>
        </div>
    )
}

export default GoodsItem;