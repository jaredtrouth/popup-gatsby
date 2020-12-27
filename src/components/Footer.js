import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';
import { Icon } from '@components/icons';
import { Fade } from 'react-awesome-reveal';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  background-color: var(--navy);
`;

const StyledContact = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  padding: 0;
  color: white;
  width: 100%;
  font-size: 14px;
  a {
    text-decoration: none;
    color: var(--yellow);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  color: white;

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline-block;
      a {
        padding: 10px;
        transition: transform 100ms linear;

        &:hover,
        &:focus {
          transform: scale(1.2);
          background-color: inherit;
        }
        svg {
          fill: var(--yellow);
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContact>
        <Fade triggerOnce direction="down" delay={300}>
          <p>
            Contact{' '}
            <a href="mailto:thepopupchickenshop@gmail.com">
              thepopupchickenshop@gmail.com
            </a>{' '}
            for catering
          </p>
        </Fade>
      </StyledContact>
      <StyledSocialLinks>
        <ul>
          <Fade triggerOnce cascade damping={0.1} direction="down">
            {socialMedia &&
              socialMedia.map(({ name, url }, i) => (
                <li key={i}>
                  <a href={url} aria-label={name}>
                    <Icon name={name} />
                  </a>
                </li>
              ))}
          </Fade>
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  );
};

export default Footer;
