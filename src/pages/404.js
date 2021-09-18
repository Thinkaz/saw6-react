import React from 'react';
import { useTranslation } from 'react-i18next';
import '../components/css/error.css';

export const E404 = () => {
    const { t } = useTranslation();
    return (
            <div class="content404">
                <div class="main-text">
                    <h1>{t('404ttl1')}<br />{t('404ttl2')}</h1>
                    <a className="ptitr">{t('404txt')}</a>
                </div>
            </div>
    );

}

{/* <h1>Aw jeez.<br />That page has gone missing.</h1>
                    <a className="ptitr">So-sorry... But you have to go back home ૮・ᵔ・ა</a> */}