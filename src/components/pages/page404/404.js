import Error from '../../error/Error';
import { Link } from "react-router-dom";

import './404.scss';


const Page404 = () => {

    return (
        <div className='error__page'>
            <Error/>
            <h1 className='error__page-title'>Такої сторінки не існує</h1>
            <Link className='error__page-link' to="/">На головну</Link>
        </div>
    )
}

export default Page404;