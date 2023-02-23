import { useSelector, useDispatch } from 'react-redux';

import { setOrderFromShop, addToBasket } from '../goodsList/goodsSlice';

import './goodsItem.scss'


const GoodsItem = ({item}) => {

    const {id, name, description, image, price} = item;
    const activeShop = useSelector(state => state.shops.activeShop);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const basket = useSelector(state => state.goods.basket);
    const dispatch = useDispatch();

    // Show quantity of item added to basket
    const basketItem = basket.filter(item => item.id === id)[0];
    const qtty = basketItem ? basketItem.qtty : '';

    const shortDescr = description.length > 110 
    ? description.slice(0, 110) + '...'
    : description;

    // Goods can be added from single shop
    const addItemToBasket = (item) => {
        if (!orderFromShop) {
            dispatch(setOrderFromShop(activeShop));
            dispatch(addToBasket(item))
        } else if (orderFromShop === activeShop) {
            dispatch(addToBasket(item))
        }
    };


    return (
        <div className="goods__item">
            <img className="goods__item-img" src={image} alt={name} />
            <h3 className="goods__item-title">{name}</h3>
            <p className='goods__item-descr'>{shortDescr}</p>
            <div className='goods__item-order'>
                <p className='goods__item-price'>{price} ГРН</p>
                <p className='goods__item-qtty'>{qtty}</p>
                <button className="goods__item-btn"
                        onClick={() => addItemToBasket(item)}>
                    заказать
                </button>
            </div>
        </div>
    )
}

export default GoodsItem;