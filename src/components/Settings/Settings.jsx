
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import { updateProfile } from '../../redux/profile-reduce';
import cl from './Settings.module.css';

const Settings = ({ isAuthUser, updateProfile }) => {

    const [accordion, setAccordion] = useState(false);

    const accordionContent = useRef(null);

    const onAccordion = (e) => {
        setAccordion(!accordion);
    }
    useEffect(() => {
        if (isAuthUser) {
            if (accordion) {
                accordionContent.current.style.maxHeight = '500px'
            } else {
                accordionContent.current.style.maxHeight = '0px'
            }
        }
    }, [accordion])

    if (!isAuthUser) {
        return <Navigate to={'./../login'} />
    } else {
        const yupSchema = Yup.object().shape({
            aboutMe: Yup.string().required('Required field'),
            lookingForAJobDescription: Yup.string()
                .required('Required field'),
            fullName: Yup.string()
                .required('Required field')
                .max(20, 'Too long'),
        })

        let photo;
        const onHandleFile = (e) => {
            photo = e.target.files[0];
        }

        return (
            <div className={cl.form}>
                <Formik
                    initialValues={{
                        aboutMe: '',
                        lookingForAJob: false,
                        lookingForAJobDescription: '',
                        fullName: '',
                        github: '',
                        vk: '',
                        facebook: '',
                        instagram: '',
                        twitter: '',
                        website: '',
                        youtube: '',
                        mainLink: '',

                    }}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                        let contacts = {
                            github: values.github,
                            vk: values.vk,
                            facebook: values.facebook,
                            instagram: values.instagram,
                            twitter: values.twitter,
                            website: values.website,
                            youtube: values.youtube,
                            mainLink: values.mainLink,
                        }
                        let cuurrentValues = {
                            aboutMe: values.aboutMe,
                            lookingForAJob: values.lookingForAJob,
                            lookingForAJobDescription: values.lookingForAJobDescription,
                            fullName: values.fullName,
                            contacts
                        }
                        updateProfile(cuurrentValues, photo, setStatus)
                    }}
                    validationSchema={yupSchema}
                >



                    {({ status }) => (
                        <Form>
                            <label className={cl.buttonFile}>
                                <Field onChange={onHandleFile} name="photo" type="file" />
                                Change photos
                            </label>
                            <br></br><br />
                            <p className={cl.text}>Write about you</p> <br></br>
                            <Field className={cl.input} name="aboutMe" placeholder="Write about you" type="text" />
                            <div className={cl.error}>
                                <ErrorMessage name='aboutMe' />
                            </div>
                            <div className={cl.check}>
                                <label className={cl.label}>
                                    <span className={cl.text}>Are you looking for a job</span>
                                    <Field className={cl.jobBoolean} name="lookingForAJob" type="checkbox" />
                                </label>
                            </div>
                            <p className={cl.text}>Write why are you looking  a job?</p> <br></br>
                            <Field className={cl.input} name="lookingForAJobDescription" placeholder="Write about you" type="text" />
                            <div className={cl.error}>
                                <ErrorMessage name='lookingForAJobDescription' />
                            </div>
                            <p className={cl.text}>Write your Full Name</p> <br></br>
                            <Field className={cl.input} name="fullName" placeholder="Full Name" type="text" />
                            <div className={cl.error}>
                                <ErrorMessage className={cl.error} name='aboutMe' />
                            </div>
                            <div className={cl.accordion}>
                                <div onClick={onAccordion} className={cl.header}>More Information <span className={cl.arrow}>{'>'}</span></div>
                                <div className={cl.content} ref={accordionContent}>
                                    <p className={cl.text}>Write your github</p> <br></br>
                                    <Field className={cl.input} name="github" placeholder="github" type="text" />
                                    <p className={cl.text}>Write your facebook</p> <br></br>
                                    <Field className={cl.input} name="facebook" placeholder="facebook" type="text" />
                                    <p className={cl.text}>Write your instagram</p> <br></br>
                                    <Field className={cl.input} name="instagram" placeholder="instagram" type="text" />
                                    <p className={cl.text}>Write your twitter</p> <br></br>
                                    <Field className={cl.input} name="twitter" placeholder="twitter" type="text" />
                                    <p className={cl.text}>Write your website</p> <br></br>
                                    <Field className={cl.input} name="website" placeholder="website" type="text" />
                                    <p className={cl.text}>Write your youtube</p> <br></br>
                                    <Field className={cl.input} name="youtube" placeholder="youtube" type="text" />
                                    <p className={cl.text}>Write your mainLink</p> <br></br>
                                    <Field className={cl.input} name="mainLink" placeholder="mainLink" type="text" />
                                </div>
                            </div>
                            <div className={cl.error}>
                                {
                                    status ? status.map(el => <div>{el} <br></br></div>) : <div></div>
                                }
                                <br></br>
                            </div>
                            <button className={cl.submit} type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthUser: state.auth.isAuthUser
    }
}
export default connect(mapStateToProps, { updateProfile })(Settings);