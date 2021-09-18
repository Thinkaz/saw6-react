import React from 'react';

import { Blogc } from '../components/blogc.js';
import { Footer } from '../components/footer.js';
import { useTranslation } from 'react-i18next';

import '../components/css/style.css';


export const Blog = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2 className="hello">{t('blog1')} <a className="color">{t('blog2')}.</a></h2>
            <div className="allbc">
                <Blogc title={t('blogttl1')} link="/blogs/1#" author="Saw_6" date={t('blogdate1')} timg="https://getwallpapers.com/wallpaper/full/8/3/8/878774-raptor-jesus-wallpaper-1920x1080-full-hd.jpg" bimg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8a/8a1886d9f6ff13ec736adad933584aa7d9d04c6d_medium.jpg" />
                <Blogc title={t('blogttl2')} link="/blogs/2#" author="Saw_6" date={t('blogdate2')} timg="https://wallpapercave.com/wp/1H7oFYn.jpg" bimg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8a/8a1886d9f6ff13ec736adad933584aa7d9d04c6d_medium.jpg" />
            </div>
            <Footer />
        </div>
    );

}
