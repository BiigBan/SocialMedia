import { useEffect, useRef, useState } from 'react';
import Item from './Item/Item';
import cl from './User.module.css';

const User = ({artist, tracks}) => {


    let items = tracks.map(el => {
        el = el.data
        console.log(el);
        return <Item key={el.id} uri={el.uri} name={el.name} linkToProfile={artist.data.uri} />
    })

    return (
        <div className={cl.item}>
            <div className={cl.profile}>
                <div className={cl.image}>
                    <img src={artist.data.visuals.avatarImage.sources[0].url} alt="Image of artist" />
                </div>
                <div className={cl.profileInfo}>
                    <a href={artist.data.uri} target='_blank'>
                    <span className={cl.name}>{artist.data.profile.name}</span>
                    </a>
                </div>
            </div>

            {items}
        </div>
    )
}

export default User;