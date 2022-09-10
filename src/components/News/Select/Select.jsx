import { Field, Formik, Form } from 'formik';
import cl from './Select.module.css';

const Select = ({getNews}) => {
    return (
        <div>
            <h2 className={cl.text}>Select country for search news</h2>
            <Formik
                initialValues={{ country: "" }}
                onSubmit={values => {
                    getNews(values.country)
                }}
            >
                <Form className={cl.body}>
                    <Field className={cl.selectBox} as="select" name="country">
                        <option value="UA">Ukraine</option>
                        <option value="US">USA</option>
                        <option value="UK">UK</option>
                    </Field>
                    <button className={cl.button} type='submit'>Find</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Select;