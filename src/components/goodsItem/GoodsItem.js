import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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

    // Show short descrtiption of item
    const shortDescr = (length) => {
        return description.length > length 
        ? description.slice(0, length) + '...'
        : description;
    }

    // Goods can be added from single shop only
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
            <Link to={`/${activeShop}/${id}`}>
                <img className="goods__item-img" src={image} alt={name} />
            </Link>
            <h3 className="goods__item-title">{name}</h3>
            <MediaQuery minWidth={1201}>
                <p className='goods__item-descr'>{shortDescr(110)}</p>
            </MediaQuery>
            <MediaQuery minWidth={769} maxWidth={1200}>
                <p className='goods__item-descr'>{shortDescr(95)}</p>
            </MediaQuery>
            <MediaQuery minWidth={577} maxWidth={768}>
                <p className='goods__item-descr'>{shortDescr(120)}</p>
            </MediaQuery>
            <MediaQuery minWidth={320} maxWidth={576}>
                <p className='goods__item-descr'>{shortDescr(150)}</p>
            </MediaQuery>
            <div className='goods__item-order'>
                <p className='goods__item-price'>{price} ГРН</p>
                <p className='goods__item-qtty'>{qtty}</p>
                <button className="goods__item-btn"
                        onClick={() => addItemToBasket(item)}>
                    замовити
                </button>
            </div>
        </div>
    )
}

export default GoodsItem;