import './css/style.css';
import './css/footer.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export const Footer = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="spacer" />
            <footer>
                <div className="container-footer">
                    <div className="container-left">
                        <div className="top">
                            <h1>Saw_6</h1>
                            <p>
                                Copyright © 2021 Saw_6.
                            </p>
                        </div>
                        <div className="bot">
                            <p>
                                <a href="#">{t('terms')}</a>
                            </p>
                        </div>
                    </div>
                    <div className="container-right">
                        <div className="left">
                            <ul>
                                <li><Link to="/"><a href="#">{t('home')}</a></Link></li>
                                <li><Link to="/blog"><a href="#">{t('blog')}</a></Link></li>
                                <li><Link to="/roadmap"><a href="#">{t('roadmap')}</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};