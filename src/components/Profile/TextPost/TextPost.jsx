import { Field, Form, Formik } from 'formik';
import React from 'react';
import cl from './TextPost.module.css';

const TextPost = (props) => {
    let message = React.createRef();
    let text;



    return (
        <div className={cl.post}>
            <div className={cl.post__text}>My posts</div>
            <Formik
            initialValues={{ postText: ""}}
                onSubmit={(values) => {
                    props.postFun(values.postText);
                }}>
                <Form className={cl.post__form}>
                    <Field className={cl.input} type="text" name="postText" placeholder='your news...'/>
                    <button className={cl.button} type='submit'>Send</button>
                </Form>
            </Formik>
        </div>
    );
}

export default TextPost;