import { Formik, Field, Form, ErrorMessage, ErrorEvent } from "formik";
import { connect } from 'react-redux';
import cl from './Login.module.css';
import * as yup from 'yup';
import { loginThunk } from "../../redux/auth-reduce";
import { Navigate } from 'react-router-dom'
import { setStatus } from "../../redux/profile-reduce";

const Login = (props) => {
    const yupSchema = yup.object().shape({
        email: yup.string()
            .typeError('Write string')
            .email('Incorrect email')
            .required('It`s required'),
        password: yup.string()
            .required('It`s required'),
    })
    if (props.isAuthUser) {
        return <Navigate to={`/Profile/${props.userId}`} />
    } else {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "", rememberMe: 'false' }}
                    validationSchema={yupSchema}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                        let email = values.email;
                        let password = values.password;
                        let rememberMe = values.rememberMe;
                        props.loginThunk(email, password, rememberMe, setStatus);
                    }}
                >
                    {({ status }) => (
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
                                {status}
                                <br></br>
                            </div>
                            <button className={cl.submit} type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthUser: state.auth.isAuthUser,
        userId: state.auth.id,
    }
}

export default connect(mapStateToProps, { loginThunk })(Login);
// export default Login;