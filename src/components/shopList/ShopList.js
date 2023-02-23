import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchShops, setActiveShop } from './shopListSlice';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './shopList.scss';

const ShopList = () => {

    const shopsList = useSelector(state => state.shops.shops);
    const activeShop = useSelector(state => state.shops.activeShop);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const shopsLoadingStatus = useSelector(state => state.shops.shopsLoadingStatus)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchShops());
        
        // eslint-disable-next-line 
    }, [])

    // After click on shop change activeShop at state
    const onClick = (id) => {
        dispatch(setActiveShop(id));
    }

    // Make li elements by shops names got from state
    const content = shopsList.map(shop => {

        let clazz;
        if(orderFromShop) {
            clazz = shop.id === orderFromShop 
                        ? "shops__item shops__item_active" 
                        : "shops__item shops__item_non-active" 
        } else {
            clazz = shop.id === activeShop 
                            ? "shops__item shops__item_active"
                            : "shops__item";
        }

        return (
            <li className={clazz}
                key={shop.id}
                onClick={() => onClick(shop.id)}>
                {shop.name}
            </li>
        )
    });

    const loading = shopsLoadingStatus === 'loading' ? <Spinner/> : null;
    const error = shopsLoadingStatus === 'error' ? <Error/> : null;


    return (
        <div className="shops">
            <ul className='shops__list'>
                {loading}
                {error}
                {content}
            </ul>
        </div>
    )
}

export default ShopList;