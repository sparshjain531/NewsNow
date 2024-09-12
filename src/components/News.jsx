import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, pagesize, setProgress }) => {


    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const fetchMoreData = async () => {
        let response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=c50d7d0c99b44f2da20787d705c34bda&page=${page + 1}&pageSize=${pagesize}`);
        setPage(page + 1)
        setNews(news.concat(response.data.articles))
        setTotalResults(response.data.totalResults)
    }

    useEffect(() => {
        const fetchNews = async () => {
            setProgress(0)
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=c50d7d0c99b44f2da20787d705c34bda&page=${page + 1}&pageSize=${pagesize}`);
            setProgress(70)
            setNews(response.data.articles);
            console.log(response.data);
            setProgress(90)
            setLoading(false)
            setProgress(100)
            document.title = `${capital(category)}- News`;
        }
        fetchNews()
    }, [])

    return (
        <div className='container my-5'>
            <h2 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>News in Trending on {capital(category)}</h2>
            {loading ? (
                <Spinner />
            ) : (
                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchMoreData}
                    hasMore={news.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {
                                news.map((e) => {
                                    return (
                                        <div className="col-md-4" key={e.url}>
                                            <NewsItem
                                                title={e.title ? e.title : ""} description={e.description ? e.description : ""} imgurl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </InfiniteScroll>
            )}
        </div>
    )
}

export default News
