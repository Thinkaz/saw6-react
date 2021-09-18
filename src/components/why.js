import React from 'react'
import './css/why.css';
import { useTranslation } from 'react-i18next';

export const Why = () => {
    const { t } = useTranslation();
    return (
        <div className="whys">
            <h3 className="wtitle">{t('whyus')}</h3>
            <div className="alltruc">

                <div class="relative">
                    <dt>
                        <div class="boxsvg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svgw" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="txtwt color">{t('wttl1')}</p>
                    </dt>
                    <dd class="txtwb">
                        {t('wtxt1')}
                    </dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="boxsvg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svgw" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="txtwt color">{t('wttl2')}</p>
                    </dt>
                    <dd class="txtwb">
                        {t('wtxt2')}
                    </dd>
                </div>

                <div class="relative">
                    <dt>
                        <div class="boxsvg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svgw" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="txtwt color">{t('wttl3')}</p>
                    </dt>
                    <dd class="txtwb">
                        {t('wtxt3')}
                    </dd>
                </div>


            </div>
        </div>
    );
};