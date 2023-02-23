
import HistoryForm from "../../historyForm/HistoryForm";
import HistoryList from "../../historyList/HistoryList";

import "./historyPage.scss";

const HistoryPage = () => {
    return (
        <section className="history">
            <div className="container">
                <div className="history__grid">
                    <HistoryForm/>
                    <HistoryList/>
                </div>
            </div>
        </section>
    )
}

export default HistoryPage;