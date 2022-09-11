import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { musicAPI, newsAPI } from '../../api/api';
import { findUser, getMusic } from '../../redux/music-reduce';
import Item from './Item/Item';
import Loader from './../@Loader/Loader'
import cl from './Music.module.css';
import Search from './Search/Search';
import User from './User/User';

const Music = ({ tracks, artist, getMusicFun, findUserFun }) => {
    useEffect(() => {
        getMusicFun();
    }, [])
    useEffect(() => {
        console.log(artist);
    }, [artist])

    if (!tracks) {
        <Loader />
    }
    else {

        let items = tracks.map(el => {
            return <Item key={el.id} uri={el.uri} previewUrl={el['preview_url']} name={el.name} linkToProfile={el['external_urls'].spotify} />
        })
        let user
        if (artist) {
            user =  <User tracks = {artist.tracks.items} artist={artist.artists.items[0]}/>
        }
        return (
            <div>
                <Search findUserFun={findUserFun} />
                {!artist ? items : user}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.music.tracks,
        artist: state.music.artist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMusicFun: () => dispatch(getMusic()),
        findUserFun: (text) => dispatch(findUser(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Music);