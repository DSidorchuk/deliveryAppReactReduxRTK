import { Helmet } from 'react-helmet';

import CouponesList from '../../couponesList/CouponesList';

import './couponesPage.scss';


const CouponesPage = () => {
    
    return (
        <div className="coupones">
            <Helmet>
                <meta
                    name="description"
                    content="Coupones and sales page" 
                    />
                <title>Акції та знижки</title>
            </Helmet>
            <div className="container">
                <h1 className='coupones__title'>Акції та знижки:</h1>
                <CouponesList/>
                <p className='coupones__msg'>Знижки не сумуються. Найбільша знижка буде застосована автоматично.</p>
            </div>
        </div>
    )
}

export default CouponesPage;