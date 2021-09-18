import React from 'react'
import './css/style.css';
import { useTranslation } from 'react-i18next';

export const Pres = () => {
    const { t } = useTranslation();
    return (
            <h2 className="hello">{t('pres1')} <a className="color">{t('pres2')}.</a></h2>
    );
};