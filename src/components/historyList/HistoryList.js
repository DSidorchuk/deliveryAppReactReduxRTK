import { useSelector } from 'react-redux';

import HistoryListItem from '../historyListItem/HistoryListItem';

import './historyList.scss';


const HistoryList = () => {

    const listPresent = useSelector(state => state.history.presentOrders);
    const listPast = useSelector(state => state.history.ordersOfUser);

    const presentOrdersContent = getListOfItems(listPresent);
    const pastOrdersContent = getListOfItems(listPast);

    return (
        <div className='history__list'>
            <div className='history__list-present'>
                <h3 className='history__list-title'>Замовлення в обробці:</h3>
                <div className='history__list-grid'>
                    {presentOrdersContent}
                </div>
            </div>
            <div className='history__list-past'>
                <h3 className='history__list-title'>Історія замовлень:</h3>
                <div className='history__list-grid'>
                    {pastOrdersContent}
                </div>
            </div>
        </div>
    )
}

function getListOfItems (arr) {
    return arr.length 
                    ? arr.map(item => {return <HistoryListItem key={item.id} {...item}/>})
                    : null;
}

export default HistoryList;