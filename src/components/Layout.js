import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Loader from '@components/Loader';
import SiteBanner from '@components/SiteBanner';
import { GlobalStyle } from '@styles';
import theme from '@styles/theme';
import Head from '@components/Head';
import PropTypes from 'prop-types';

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 750,
    offset: 64,
    easing: 'easeInOutQuad',
  });
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location.hash])

    // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    };

  };

  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <>
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Navbar isHome={isHome} />
              <div id="content" style={{marginTop: '64px', backgroundColor: 'white'}}>
                <SiteBanner />
                {children}
              </div>
              <Footer />
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout
