import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../@Loader/Loader';
import News from './News';
import cl from './News.module.css';
import Select from './Select/Select';
import getNews, { getNewsAC } from './../../redux/news-reduce.js';
import { newsAPI } from '../../api/api';

const NewsContainer = ({ news, isFetching, getNewsFun }) => {

    useEffect(() => {
        getNewsFun('UA');
    }, [])

    if (news.length === 0) {
        return (
            <Loader />
        )
    } else {
        console.log(news);
        let newsItem = news.map(el => {
            return <News key={el.id} news={el} />
        })
        return (
            <div className={cl.body}>
                <div>
                    {newsItem}
                </div>
                <Select getNews={getNewsFun} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.articles,
        isFetching: state.users.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsFun: (country) => dispatch(getNewsAC(country))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);