import React, { useEffect, useState } from 'react';
import { Home } from "./pages/home"
import { Blog } from "./pages/blog"
import { Blog1 } from "./pages/blogs/blog1.js"
import { Blog2 } from "./pages/blogs/blog2.js"
import { E404 } from "./pages/404"
import { Roadmap } from "./pages/roadmap"
import { Navbar, NavItem, DropdownMenu } from "./components/nav"
import "./components/css/nav.css"

import { ReactComponent as CaretIcon } from './components/icons/caret.svg';
import { ReactComponent as HomeIcon } from './components/icons/home.svg';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import CookieConsent, { Cookies } from "react-cookie-consent"

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

export default function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <Router>
      <Navbar>
        <Link to="/"><NavItem icon={<HomeIcon />}></NavItem></Link>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/" exact component={Home} />
        <Route path="/blogs/1" component={Blog1} />
        <Route path="/blogs/2" component={Blog2} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="*" component={E404} />
      </Switch>
      <CookieConsent location="bottom" cookieName="AcceptOrConcequences-Cookies" expires={999} style={{ backgroundColor: '#141418'}} overlay>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Router>
  );
}