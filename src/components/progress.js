import React from 'react';
import './css/progress.css';
import './css/style.css';
import { useTranslation } from 'react-i18next';

export const Progress = () => {
    const { t } = useTranslation();
    const progress = '62'
    return (
        <div className="container">
            <h1>{t('webprogress')}</h1>
            <div className="progressbar-container">
                <div className="progressbar-complete" style={{ width: `${progress}%` }}>
                    <div className="progressbar-liquid"></div>
                </div>
                <span className="progress">{progress}%</span>
            </div>
        </div>
    )
}