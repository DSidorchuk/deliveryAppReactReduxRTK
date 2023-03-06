
import HistoryForm from "../../historyForm/HistoryForm";
import HistoryList from "../../historyList/HistoryList";

import "./historyPage.scss";


const HistoryPage = () => {
    
    return (
        <div className="history">
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