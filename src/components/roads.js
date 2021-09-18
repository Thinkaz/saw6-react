import React from 'react'
import './css/style.css';
import './css/roadmap.css';
import { useTranslation } from 'react-i18next';

export const Roads = ({tag1, tag2, issue, state, color, weight, link}) => {
    const { t } = useTranslation();
    return (
        <div className="roadmap_all">
            <div className="roadmap_item">
                <div className="roadmap_content">
                    <div className="roadmap_title">
                        <a href={link}>{issue}</a>
                    </div>
                    <div className="tags">
                        <a>{tag1}</a>
                        <a>{tag2}</a>
                    </div>
                </div>
                <div className="status" style={{"background-color":color,"font-weight":weight}}>
                    {state}
                </div>
            </div>
        </div>
    );
};