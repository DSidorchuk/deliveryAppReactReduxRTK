import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {fetchGoods, fetchCoupones} from './goodsSlice';
import GoodsItem from '../goodsItem/GoodsItem';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './goodsList.scss';




const GoodsList = () => {

    const goodsList = useSelector(state => state.goods.goodsList);
    const goodsLoadingStatus = useSelector(state => state.goods.goodsLoadingStatus);
    const activeShop = useSelector(state => state.shops.activeShop);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchGoods(activeShop));
        dispatch(fetchCoupones());
        // eslint-disable-next-line
    }, [activeShop]);

    const content = goodsList.map((item) => {
        return (
            <CSSTransition key={item.id}
                           timeout={300}
                           classNames="goods__item">
                <GoodsItem key={item.id} 
                           item={item}/>
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

export default GoodsList;