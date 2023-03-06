import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { clearBasket } from '../goodsList/goodsSlice';
import { postOrder } from '../historyList/historySlice';

import "./basketForm.scss";

const BasketForm = () => {

    const basket = useSelector(state => state.goods.basket);
    const amount = useSelector(state => state.goods.basketAmount);
    const discount = useSelector(state => state.goods.discount);
    const shop = useSelector(state => state.goods.orderFromShop);
    const sending = useSelector(state => state.history.orderPostStatus)
    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    
    const sendOrder = (formData) => {
        if (basket.length) {
            const order = {
                ...formData,
                id: uuidv4(),
                orderList: basket,
                shop,
                amount: amount + discount,
                date: new Date().toString()
            };
            dispatch(postOrder(order));
            dispatch(clearBasket());
        }
    }

    
    return (
        <div className='form'>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    address: ''
                }}
                validationSchema = {Yup.object({
                    name: Yup.string()
                              .min(2, "Мінімум 2 символи")
                              .required("Необхідно заповнити"),
                    phone: Yup.string()
                              .min(10, "Неповний номер")
                              .matches(phoneRegExp, "Некоректний номер")
                              .required("Необхідно заповнити"),
                    email: Yup.string()
                              .email("Некоректний e-mail")
                              .required("Необхідно заповнити"),
                    address: Yup.string()
                                .min(20, "Мінімум 20 символів")
                                .required("Необхідно заповнити")
                })}
                onSubmit = {(data, {resetForm}) => {
                    sendOrder(data);
                    resetForm();
                }}>
                <Form className='form__grid'>
                    <div className='form__input'>
                        <label htmlFor='name'>Ваше ім'я</label>
                        <Field id="name"
                            name="name"
                            type="text"
                            placeholder="Введіть ваше ім'я"/>
                        <ErrorMessage className="form__error" name="name" component="div"/>
                    </div>
                    <div className='form__input'>
                        <label htmlFor='phone'>Ваш телефон</label>
                        <Field id="phone"
                            name="phone"
                            type="phone"
                            placeholder="Введіть ваш телефон"/>
                        <ErrorMessage className="form__error" name="phone" component="div"/>
                    </div>
                    <div className='form__input'>
                        <label htmlFor='email'>Ваш e-mail</label>
                        <Field id="email"
                            name="email"
                            type="email"
                            placeholder="Введіть вашу пошту"/>
                        <ErrorMessage className="form__error" name="email" component="div"/>
                    </div>
                    <div className='form__input'>
                        <label htmlFor='address'>Ваша адреса</label>
                        <Field id="address"
                            name="address"
                            type="text"
                            placeholder="Введіть вашу адресу"/>
                        <ErrorMessage className="form__error" name="address" component="div"/>
                    </div>
                    <button type='submit' 
                            className='form__btn'
                            disabled={sending === "sending"}>
                                Підтвердити замовлення
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default BasketForm;