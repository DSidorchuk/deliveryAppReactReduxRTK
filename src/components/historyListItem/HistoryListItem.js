
import { dateParser } from "../../utilities/dateParser"

import "./historyListItem.scss"


const HistoryListItem = ({date, id, address, amount, shop, orderList}) => {

    const shortDate = dateParser(date);
    const productList = orderList.map(item => {
        return (
            <li className="history__item-product"> 
                <p>{item.name}</p>
                <p>{`${item.qtty} шт`}</p>
            </li>
        )
    })


    return (
        <div className="history__item">
            <div className="history__item-data">
                <p className="history__item-date">{shortDate}</p>
                <p className="history__item-id">{`Номер: ${id}`}</p>
                <p className="history__item-amount">{`Сума: ${amount} ГРН`}</p>
            </div>
            <div className="history__item-address">{`Адреса: ${address}`}</div>
            <div className="history__item-shop">{shop}</div>
            <ul className="history__item-goods"><u>Перелік товарів:</u> 
                {productList}
            </ul>
        </div>
    )
}

export default HistoryListItem;