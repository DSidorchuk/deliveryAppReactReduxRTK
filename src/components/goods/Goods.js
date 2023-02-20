import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { setOrderFromShop, addToBasket, fetchGoods } from './goodsSlice';
import GoodsItem from '../goodsItem/GoodsItem';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './goods.scss';



const Goods = () => {

    const goodsList = useSelector(state => state.goods.goodsList);
    const goodsLoadingStatus = useSelector(state => state.goods.goodsLoadingStatus);
    const activeShop = useSelector(state => state.shops.activeShop);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoods(activeShop));
        // eslint-disable-next-line
    }, [activeShop]);

    const addItemToBasket = (item) => {
        if (!orderFromShop) {
            dispatch(setOrderFromShop(activeShop));
            dispatch(addToBasket(item))
        } else if (orderFromShop === activeShop) {
            dispatch(addToBasket(item))
        }
    };

    const content = goodsList.map( (item) => {
        const {id, description, ...props} = item;
        const shortDescr = description.length > 110 
                              ? description.slice(0, 110) + '...'
                              : description;
        return (
            <CSSTransition key={id}
                           timeout={300}
                           classNames="goods__item">
                <GoodsItem key={id} 
                           description={shortDescr} 
                           {...props}
                           addItem={() => addItemToBasket(item)}/>
            </CSSTransition>
        )
    })

    const loading = goodsLoadingStatus === 'loading' ? <Spinner/> : null;
    const error = goodsLoadingStatus === 'error' ? <Error/> : null;

    return (
        <div className="goods">
            {loading}
            {error}
            <TransitionGroup component={null}>
                {content}
            </TransitionGroup>
        </div>
    )
}

export default Goods;