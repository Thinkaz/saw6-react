import React from 'react';

import { Footer } from '../components/footer.js';
import { Roads } from '../components/roads.js';
import { Progress } from '../components/progress.js';
import { useTranslation } from 'react-i18next';

import '../components/css/style.css';

export const Roadmap = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <Progress />
            <Roads tag1={t('rtag1.1')} tag2={t('rtag1.2')} color="#3cb371" state={t('over')} weight="700" issue={t('rissue1')} link="https://github.com/" />
            <Roads tag1={t('rtag2.1')} tag2={t('rtag2.2')} color="#3cb371" state={t('over')} weight="700" issue={t('rissue2')} link="#"/>
            <Roads tag1={t('rtag3.1')} tag2={t('rtag3.2')} color="#5353cf" state={t('going')} weight="700" issue={t('rissue3')} link="/"/>
            <Roads tag1={t('rtag4.1')} tag2={t('rtag4.2')} color="#778899" state={t('nstarted')} issue={t('rissue4')} link="/blog"/>
            <Roads tag1={t('rtag5.1')} tag2={t('rtag5.2')} color="#778899" state={t('nstarted')} issue={t('rissue5')} link="/yup"/>
            <Roads tag1={t('rtag6.1')} tag2={t('rtag6.2')} color="#778899" state={t('nstarted')} issue={t('rissue6')} link="/"/>
            <Footer />
        </div>
    );

}