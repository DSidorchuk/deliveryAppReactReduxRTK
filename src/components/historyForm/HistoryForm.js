import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import { getOrders, checkUserOrders } from '../historyList/historySlice';

import './historyForm.scss'


const HistoryForm = () => {

    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const findOrder = (num) => {
        dispatch(getOrders(num.phone));
    }

    return (
        <Formik 
            initialValues={{
                phone: ''
            }}
            validationSchema={Yup.object({
                phone: Yup.string()
                    .min(10, "Неповний номер")
                    .matches(phoneRegExp, "Некоректний номер")
            })}
            onSubmit = {(data, {resetForm}) => {
                findOrder(data);
                resetForm();
            }}>
            <Form className="history__form">
                <label className='history__form-title'
                       htmlFor='phone'>Номер телефону:</label>
                <Field className='history__form-input'
                       id="phone"
                       name="phone"
                       type="phone"
                       placeholder="Введіть телефон за яким ви робили замовлення"/>
                <ErrorMessage className="history__form-error" name="phone" component="div"/>
                <button className='history__form-btn'
                        type='submit'>Пошук</button>
            </Form>
        </Formik>
    )
}

export default HistoryForm;