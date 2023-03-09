import { useSelector, useDispatch } from 'react-redux';

import { clearBasket } from '../goodsList/goodsSlice';

const ClearButton = ({clazz}) => {

    const emptyBasket = useSelector(state => state.goods.basket.length);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(clearBasket());
    }

    return (
        <button className={!emptyBasket 
                            ? clazz
                            : `${clazz} ${clazz}_active`}
               onClick={onClick}>
            очистити кошик
        </button>
    )
}

export default ClearButton;