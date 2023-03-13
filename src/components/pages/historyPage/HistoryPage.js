import { Helmet } from 'react-helmet';

import HistoryForm from "../../historyForm/HistoryForm";
import HistoryList from "../../historyList/HistoryList";

import "./historyPage.scss";


const HistoryPage = () => {
    
    return (
        <div className="history">
            <Helmet>
                <meta
                    name="description"
                    content="History page of present and past orders" 
                    />
                <title>Замовлення</title>
            </Helmet>
            <div className="container">
                <div className="history__grid">
                    <HistoryForm/>
                    <HistoryList/>
                </div>
            </div>
        </div>
    )
}

export default HistoryPage;