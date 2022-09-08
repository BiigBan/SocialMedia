import { Formik, Field, Form, ErrorMessage } from "formik";
import { connect } from 'react-redux';
import cl from './Login.module.css';
import * as yup from 'yup';
import { loginThunk } from "../../redux/auth-reduce";
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const Login = (props) => {
    const [captchaMode, setCaptchaMode] = useState(false);
    const [statusError, setStatusError] = useState('');
    let captchaUrl;
    // // useEffect(() => {
    // //     captchaUrl = props.captchaInfo
    // // }, [props.captchaInfo])
    // useEffect(() => {
    //     // setCaptchaMode(prev => !prev)
    //     console.log('changed');
    //     console.log(captchaMode);
    // }, [captchaMode])



    const yupSchema = yup.object().shape({
        email: yup.string()
            .typeError('Write string')
            .email('Incorrect email')
            .required('It`s required'),
        password: yup.string()
            .required('It`s required')
    })

    // const compareStatus = (status) => {
    //     return statusError === "Incorrect anti-bot symbols" && status == statusError ? props.captcha() : statusError
    // }

    if (props.isAuthUser) {
        return <Navigate to={`/Profile/${props.userId}`} />
    } else {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "", rememberMe: 'false', captcha: '' }}
                    validationSchema={yupSchema}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                        let email = values.email;
                        let password = values.password;
                        let rememberMe = values.rememberMe;
                        let captcha = values.captcha;
                        props.loginThunk(email, password, rememberMe, captcha, setStatus);
                    }}
                >
                    {({ status }) => {
                        setStatusError(status);
                        if (status === "Incorrect anti-bot symbols") {
                            setStatusError(prev => {
                                if (prev === status) {
                                } else {
                                    return status
                                }
                            });
                        }
                        return (
                            <Form className={cl.form}>
                                <Field className={cl.input} name="email" type="email" />
                                <div className={cl.error}>
                                    <ErrorMessage name="email" />
                                </div>
                                <br />
                                <Field className={cl.input} name="password" type="password" />
                                <div className={cl.error}>
                                    <ErrorMessage className={cl.error} name="password" />
                                </div>
                                <br />
                                <div>
                                    <label className={cl.inputRemember}>
                                        <span className={cl.remember}>
                                            Remember me
                                        </span>
                                        <Field className={cl.check} name="rememberMe" type="checkbox" />
                                    </label>
                                </div>
                                <div className={cl.error}>
                                    {/* {statusError === undefined ?
                                        <Loader /> : compareStatus(status)
                                        
                                    } */}
                                    {status}
                                    {/* {status === undefined ? props.captcha() : status} */}
                                    {/* {(statusError === "Incorrect anti-bot symbols" && status === "Incorrect anti-bot symbols") ? status : props.captcha()} */}
                                    {/* {(statusError === "Incorrect anti-bot symbols" && status === "Incorrect anti-bot symbols") || status === undefined ? props.captcha() : status} */}
                                    <br></br>
                                </div>
                                {props.captchaInfo ? <div>
                                    <img src={props.captchaInfo.url} alt="" />
                                    <Field className={cl.input} name="captcha" type="text" />
                                </div> : <></>}
                                <button className={cl.submit} type="submit">Submit</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthUser: state.auth.isAuthUser,
        userId: state.auth.id,
        captchaInfo: state.auth.captcha,
    }
}

export default connect(mapStateToProps, { loginThunk })(Login);
// export default Login;