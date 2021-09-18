import "./css/nav.css"
import "./css/style.css"

import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as FlagIcon } from './icons/flag.svg';
import { ReactComponent as StoreIcon } from './icons/store.svg';
import { ReactComponent as RouteIcon } from './icons/route.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';


import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'de',
        name: 'Deutsch',
        country_code: 'de',
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es',
    },
]

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="close" onClick={() => setOpen(false)} />
            <li className="nav-item">
                <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>

                {open && props.children}
            </li>
        </>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <Link to="/blog">
                        <DropdownItem
                            leftIcon={<BellIcon />}>
                            {t('blog')}
                        </DropdownItem>
                    </Link>
                    <Link to="/roadmap">
                        <DropdownItem
                            leftIcon={<RouteIcon />}>
                            {t('roadmap')}
                        </DropdownItem>
                    </Link>
                    <DropdownItem
                        leftIcon={<FlagIcon />}
                        goToMenu="languages">
                        {t('lang')}
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'languages'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h1>{t('back')}</h1>
                    </DropdownItem>
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                            <a
                                href="#"
                                className={classNames('dropdown-item', {
                                    disabled: currentLanguageCode === code,
                                })}
                                onClick={() => {
                                    i18next.changeLanguage(code)
                                }}
                            >
                                <DropdownItem
                                    leftIcon={<FlagIcon />}
                                    className={`flag-icon flag-icon-${country_code} mx-2`}
                                    style={{
                                        opacity: currentLanguageCode === code ? 0.5 : 1,
                                    }}
                                >{name}</DropdownItem>
                            </a>
                        </li>
                    ))}
                </div>
            </CSSTransition>
        </div>

    );
}

export {
    DropdownMenu,
    NavItem,
    Navbar
}