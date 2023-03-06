import { useSelector, useDispatch } from 'react-redux';

import { setOrderFromShop, addToBasket } from '../goodsList/goodsSlice';

import "./goodsItemFull.scss";

const GoodsItemFull = ({item}) => {

    const {id, name, description, image, price} = item;

    const activeShop = useSelector(state => state.shops.activeShop);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const basket = useSelector(state => state.goods.basket);
    const dispatch = useDispatch();

    // Show quantity of item added to basket
    const basketItem = basket.filter(item => item.id === id)[0];
    const qtty = basketItem ? basketItem.qtty : '';

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
        <div className="goods__full">
            <img className="goods__full-img"
                 src={image}
                 alt={id}/>
            <div className="goods__full-data">
                <h1 className="goods__full-title">{name}</h1>
                <p className="goods__full-descr">{description}</p>
                <div className="goods__full-order">
                    <p className="goods__full-price">{`${price} ГРН`}</p>
                    <p className='goods__full-qtty'>{qtty}</p>
                    <button className="goods__full-btn" 
                            onClick={() => addItemToBasket(item)}>Замовити</button>
                </div>
            </div>
        </div>
    )
}

export default GoodsItemFull;