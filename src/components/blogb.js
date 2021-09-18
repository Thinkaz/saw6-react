import React from 'react'
import './css/blogb.css';
import './css/style.css';

export const Blogb = ({title, author, date, avatar, img, txt}) => {
    return (
        <div className="blog">
            <div className="title">
                {title}
            </div>
            <div className="card-author">
                <img className="author-avatar2" src={avatar}/>
                <div className="toptxt">
                    <p className="author-name">
                        {author} <br />
                        <span className="date color">{date}</span>
                    </p>
                </div>
            </div>
            <br />
            <img src={img} className="blogbimg" />
            <div className="blogtxt">
                {txt}
            </div>
        </div>
    );
};