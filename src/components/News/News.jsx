import cl from './News.module.css';

const News = ({news}) => {
    return (
        <div>
            <div className={cl.newsBody}>
                <div className={cl.newsInfo}>
                    <div className={cl.nameNews}>
                        <a className={cl.nameNewsUrl} href={news.source.url}>
                            {news.source.title}
                        </a>
                    </div>
                </div>
                <div className={cl.mainInfo}>
                    <a href={news.link}>
                        <p className={cl.title}>{news.title}</p>
                    </a>
                    <p className={cl.date}>{news.published_date}</p>
                </div>
            </div>
        </div>
    )
}

export default News;