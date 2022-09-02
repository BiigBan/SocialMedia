import cl from "./TextAnswer.module.css";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { dialogAPI } from "../../../../../api/api";

const TextAnswer = (props) => {

    // const SignupSchema = Yup.object().shape({
    //     name: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(70, 'Too Long!')
    //         .required('Required'),
    //     email: Yup.string()
    //         .email('Invalid email')
    //         .required('Required'),
    // });


    const yupSchema = yup.object().shape({
        text: yup.string()
                        .min(5, 'Too short!')
                        .max(100, 'Too long!')
                        .typeError('Might be string')
                        .required('Required message')
    })

    return (
        <Formik
            initialValues={{ text: "" }}
            validationSchema={yupSchema}
            onSubmit={(values) => {
                props.buttonSend(values.text);
                props.message(values.text, props.currentId)
            }}>

            <Form className={cl.form}>
                <Field touched name="text" className={cl.text} placeholder="Write your text" type='text' />
                <br />
                <div className={cl.error}>
                    <ErrorMessage  name="text" />
                </div>
                <button  className={cl.button} type="submit">Send</button>
            </Form>

        </Formik>
    )
}
export default TextAnswer;