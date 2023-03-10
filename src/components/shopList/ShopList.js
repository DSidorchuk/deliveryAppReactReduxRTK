import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';

import { fetchShops, setActiveShop } from './shopListSlice';
import { setContent } from '../../utilities/setContent';
import ClearButton from '../clearButton/ClearButton';

import './shopList.scss';


const ShopList = () => {

    const shopsList = useSelector(state => state.shops.shops);
    const activeShop = useSelector(state => state.shops.activeShop);
    const orderFromShop = useSelector(state => state.goods.orderFromShop);
    const shopsLoadingStatus = useSelector(state => state.shops.shopsLoadingStatus);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchShops());
        
        // eslint-disable-next-line 
    }, [])

    // After click on shop change activeShop at state
    const onClick = (id) => {
        dispatch(setActiveShop(id));
    }

    const createContent = (list) => {
        return list.map(shop => {
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
    }

    const content = setContent(shopsLoadingStatus, createContent, shopsList);

    
    return (
        <div className="shops">
            <ul className='shops__list'>
                {content}
            </ul>
            <MediaQuery maxWidth={768}>
                <ClearButton clazz='shops__clear'/>
            </MediaQuery>
        </div>
    )
}


export default ShopList;