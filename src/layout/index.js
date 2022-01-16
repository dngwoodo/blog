import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ThemeSwitch from '../components/theme-switch';
import { getValueFromLocalStorage } from '../utils/localStorage';
import './style.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
            social {
              github
            }
          }
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  const changeThemeMode = (themeMode) => {
    setTheme((prevState) => ({
      ...prevState,
      themeMode,
    }))
  }

  const [theme, setTheme] = useState({
    themeMode: getValueFromLocalStorage('themeMode') || 'light',
    changeThemeMode,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="page-wrapper">
        <PageHeader siteTitle={title || `Title`} />
        <main className="page-content">{children}</main>
        <PageFooter/>
        <ThemeSwitch />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
