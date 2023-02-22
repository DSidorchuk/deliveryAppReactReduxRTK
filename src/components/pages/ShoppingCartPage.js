
import CustomerForm from '../form/CustomerForm';
import Basket from '../basket/Basket';
import './cart.scss'

const ShoppingCartPage = () => {
    return (
        <section className='cart'>
            <div className='container'>
                <div className='cart__grid'>
                    <CustomerForm/>
                    <Basket/>
                </div>
                <div className='cart__amount'>
                    <p>TOTAL AMOUNT: </p>
                    <div className='cart__amount-num'>  300 ГРН</div>
                </div>
            </div>
        </section>

    )
}

export default ShoppingCartPage;