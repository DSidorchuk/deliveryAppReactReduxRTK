import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchCoupones} from '../goodsList/goodsSlice';
import { setContent } from '../../utilities/setContent';

import './couponesList.scss';


const CouponesList = () => {

    const coupones = useSelector(state => state.goods.coupones);
    const couponesLoadingStatus = useSelector(state => state.goods.couponesLoadingStatus);
    const dispatch = useDispatch();

    // If user goes directly to coupones page and avoid main page, when we fetch coupones, it would be fetched here.
    useEffect(() =>{
        if (!coupones.length) {
            dispatch(fetchCoupones());
        }
         // eslint-disable-next-line
    }, [])

    const createContent = (list) => {
        return list.map(item => {
            return (
                <li key={item.id} className="coupones__list-item">
                    {item.description}
                </li>
            )
        });
    }

    const content = setContent(couponesLoadingStatus, createContent, coupones);

    
    return (
        <ul className="coupones__list">
            {content}
        </ul>
    )
}

export default CouponesList;