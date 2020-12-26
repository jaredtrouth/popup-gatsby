import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useScrollDirection from '@hooks/useScrollDirection';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexAround };
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 64px;
  top: 0;
  background-color: var(--red);
  transition: var(--transition);

  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      top: -84px;
      transform: translateY(0);
      box-shadow: 0 10px 30px -10px black;
    `};
  
  ${props => 
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      top: 0;
      transform: translateY(calc(64 * -1));
      box-shadow: 0 10px 30px -10px black;
    `};
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  color: slate;
  z-index: 12;

`;

const StyledLinks = styled.div`

  .logo {
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }
    a {
      color: var(--navy);
      width: 62px;
      height: 62px;
      padding: 5px 0;

      &:hover,
      &:focus {
        transform: scale(1.1);
        background-color: inherit;
      }
    }
  }

  @media (max-width: 768px;) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  li {
    margin: 0 5px;
    position: relative;
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;

    a {
      color: var(--yellow);
      font-family: var(--font-bold);
      letter-spacing: 3px;
      text-shadow: -2px 2px var(--navy);
      padding: 3px 10px;
      border-radius: 5px;

      &:hover,
      &:focus {
        background-color: var(--yellow-tint);
      }      
    }
  }
`;

const Navbar = ({ isHome }) => {
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <StyledLinks>
          <ol>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/#location">Location</a></li>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}

Navbar.propTypes = {
  isHome: PropTypes.bool,
};

export default Navbar;
