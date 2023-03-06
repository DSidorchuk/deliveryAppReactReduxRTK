import { useSelector } from 'react-redux';

import { setContent } from '../../utilities/setContent';

import './couponesList.scss';


const CouponesList = () => {

    const coupones = useSelector(state => state.goods.coupones);
    const couponesLoadingStatus = useSelector(state => state.goods.couponesLoadingStatus);


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