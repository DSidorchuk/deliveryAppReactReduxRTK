import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import { getOrders, checkUserOrders } from '../historyList/historySlice';

import './historyForm.scss'


const HistoryForm = () => {

    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    useEffect(() => {
        dispatch(getOrders());
    }, [])
    
    const findOrder = (num) => {
        dispatch(checkUserOrders(num));
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
                    .required("Необхідно заповнити"), 
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
                <button className='history__form-btn'
                        type='submit'>Пошук</button>
            </Form>
        </Formik>
    )
}

export default HistoryForm;