import React from 'react';
import cl from './Person.module.css';

const Person = (props) => {

    let image = (!props.profile.photos || props.profile.photos.small == false) ? props.profile.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO4MHTpDqZpz63MDWC05Oy3KOOXTmh9Z70w&usqp=CAU";

    let fullName = props.profile.fullName ? props.profile.fullName : 'User';
    let aboutMe = props.profile.aboutMe ? props.profile.aboutMe : 'Sorry';
    let facebook = props.profile.contacts.facebook ? props.profile.contacts.facebook : 'facebook.com';
    let github = props.profile.contacts.github ? props.profile.contacts.github : 'github.com';
    let instagram = props.profile.contacts.instagram ? props.profile.contacts.instagram : 'instagram.com';
    let twitter = props.profile.contacts.twitter ? props.profile.contacts.twitter : 'twitter.com';



    return (
        <div className={cl.person}>
            <div className={cl.person__image}>
                <img src={image}/>
            </div>
            <div className={cl.person__info}>
                <div >{fullName}</div> 
                    <div className={cl.person__main}>
                        <div>Main info: {aboutMe}</div>
                        <div>Contacts:
                            <ul>
                                <li><a href={facebook}>Facebook</a></li>
                                <li><a href={github}>GitHub</a></li>
                                <li><a href={instagram}>Instagram</a></li>
                                <li><a href={twitter}>Twitter</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Person;