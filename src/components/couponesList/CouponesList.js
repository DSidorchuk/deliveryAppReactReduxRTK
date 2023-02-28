import { useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import './couponesList.scss';

const CouponesList = () => {

    const coupones = useSelector(state => state.goods.coupones);
    const couponesLoadingStatus = useSelector(state => state.goods.couponesLoadingStatus);

    const content = coupones.map(item => {
        return (
            <li key={item.id} className="coupones__list-item">
                {item.description}
            </li>
        )
    })

    const loading = couponesLoadingStatus === 'loading' ? <Spinner/> : null;
    const error = couponesLoadingStatus === 'error' ? <Error/> : null;

    return (
        <ul className="coupones__list">
            {loading}
            {error}
            {content}
        </ul>
    )
}

export default CouponesList;