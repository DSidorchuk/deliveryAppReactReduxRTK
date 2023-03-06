import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {fetchGoods, fetchCoupones} from './goodsSlice';
import GoodsItem from '../goodsItem/GoodsItem';
import { setContent } from '../../utilities/setContent';

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

    const createContent = (list) => {
        return list.map((item) => {
                        return (
                            <CSSTransition timeout={300}
                                            classNames="goods__item">
                                <GoodsItem key={item.id} 
                                            item={item}/>
                            </CSSTransition>
                        )
                    });
    }

    const content = setContent(goodsLoadingStatus,createContent, goodsList);


    return (
        <div className="goods">
            <TransitionGroup component={null}> 
                {content}
            </TransitionGroup>
            
        </div>
    )
}

export default GoodsList;

