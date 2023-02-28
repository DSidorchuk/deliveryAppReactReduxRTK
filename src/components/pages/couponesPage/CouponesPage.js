import CouponesList from '../../couponesList/CouponesList';

import './couponesPage.scss';


const CouponesPage = () => {
    return (
        <section className="coupones">
            <div className="container">
                <h1 className='coupones__title'>Акції та знижки:</h1>
                <CouponesList/>
                <p className='coupones__msg'>Знижки не сумуються. Найбільша знижка буде застосована автоматично.</p>
            </div>
        </section>
    )
}

export default CouponesPage;