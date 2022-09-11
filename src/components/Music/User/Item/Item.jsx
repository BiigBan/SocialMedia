import { useEffect, useRef, useState } from 'react';
import cl from './Item.module.css';

const Item = ({ name, linkToProfile, previewUrl, uri}) => {

    return (
        <div className={cl.item}>
            <div className={cl.info}>
                <a className={cl.name} href={linkToProfile} target='_blank'>
                    <span>{name}</span>
                </a>
            </div>
            <div className={cl.body}>
                <a className={cl.uri} href={uri}>Listen music</a>
            </div>
        </div>
    )
}

export default Item;