import React from 'react'
import newslogo from "./news.jpg"

const NewsItem = ({ title, description, imgurl, newsUrl, author, date, source }) => {
    return (
        <>
            <div className="my-3">
                <div className="card" >
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                            {source}
                        </span>
                    </div>
                    <img src={!imgurl
                        ? newslogo
                        : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {!author ? "Unknown" : author} on{" "}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem
