import { useDispatch } from "react-redux";

import { incrQtty, decrQtty } from "../goodsList/goodsSlice";

import "./basketItem.scss";


const BasketItem = ({id, image, name, price, qtty}) => {

    const dispatch = useDispatch();

    const amount = price * qtty;

    
    const onIncr = (id) => {
        dispatch(incrQtty(id));
    }
    const onDecr = (id) => {
        dispatch(decrQtty(id));
    }

    
    return (
        <div className="basketItem">
            <div className="basketItem__descr">
                <img className="basketItem__img" src={image} alt={name}/>
                <div className="basketItem__title">{name}</div>
            </div>
            <div className="basketItem__volume">
                <div className="basketItem__price">{`${price} ГРН`}</div>
                <div className="basketItem__qtty">
                    <button className="basketItem__qtty-decr"
                            onClick={() => onDecr(id)}>-</button>
                    <p className="basketItem__qtty-num">{qtty}</p>
                    <button className="basketItem__qtty-incr"
                            onClick={() => onIncr(id)}>+</button>
                </div>
                <div className="basketItem__amount">{`${amount} ГРН`}</div>
            </div>
        </div>
    )
}

export default BasketItem;

