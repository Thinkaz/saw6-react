import React from 'react'
import './css/style.css';
import './css/blogc.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export const Blogc = ({ author, date, title, timg, bimg, link }) => {
    return (
        <div className="allbc">
            <div className="fullcardbc">
                <div>
                    <img className="imgbc" src={timg} />
                </div>
                <div className="underimgtxt">
                    <a href="#" className="bcardtitle">
                        <Link to={link}>{title}</Link>
                    </a>
                    <div className="card-author1">
                        <a className="author-avatar1" href="#">
                            <img src={bimg} />
                        </a>
                        <div className="author-name1">
                            {author}
                            <div className="date color">{date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};