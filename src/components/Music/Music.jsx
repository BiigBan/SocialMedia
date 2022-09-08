import { useEffect } from 'react';
import cl from './Music.module.css';

const Music = () => {
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/search',
        params: { query: 'eminem' },
        headers: {
            'X-RapidAPI-Key': 'ff2cdbd7b5msh8ce4e43184ff15ap1b9f0djsne4e318b2e942',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    const onClick = (e) => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

        return (
            <div>
                <button onClick={onClick}>aAA</button>
            </div>
        )
    }

    export default Music;