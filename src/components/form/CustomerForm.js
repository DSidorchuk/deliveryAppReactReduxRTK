import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./form.scss";

const CustomerForm = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
                              .matches(phoneRegExp, "Некоректний номер")
                              .required("Необхідно заповнити"),
                    email: Yup.string()
                              .email("Некоректний e-mail")
                              .required("Необхідно заповнити"),
                    address: Yup.string()
                                .min(20, "Мінімум 20 символів")
                                .required("Необхідно заповнити")
                })}>
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
                            className='form__btn'>
                                Підтвердити замовлення
                    </button>
                </Form>
            </Formik>
        </div>
    )

}

export default CustomerForm;