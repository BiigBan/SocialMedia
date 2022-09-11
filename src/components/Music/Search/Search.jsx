import { Field, Form, Formik } from 'formik';
import cl from './Search.module.css'
import { useEffect, useRef, useState } from 'react';

const Search = ({ findUserFun }) => {

    return (
        <Formik
            initialValues={{ q: '', }}
            onSubmit={(values) => {
                console.log(values.q);
                findUserFun(values.q)
            }}
        >

            <Form>
                <div className={cl.body}>
                    <Field className={cl.input} name='q' type='text' placeholder='Find your artist'></Field>
                    <button className={cl.button} type='submit'>Find</button>
                </div>
            </Form>
        </Formik>
    )
}

export default Search;