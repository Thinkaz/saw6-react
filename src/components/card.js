import React from 'react'
import './css/style.css';
import './css/card.css';
import { useTranslation } from 'react-i18next';

export const Card = () => {
    const { t } = useTranslation();
    return (
        <section className="card-list">
            <article className="card">
                <header className="card-header">
                    <p>{t('date')}</p>
                    <h3>{t('card')}</h3>
                </header>
                <div className="card-author">
                    <a className="author-avatar" href="#">
                        <img src="saw_6.jpg" />
                    </a>
                    <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                    </svg>
                    <div className="author-name">
                        <div className="author-name-prefix">{t('author')}</div>
                        Saw_6
                    </div>
                </div>
            </article>
        </section>
    );
};