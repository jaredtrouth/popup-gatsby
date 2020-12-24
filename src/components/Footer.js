import React from 'react'
import styled from 'styled-components';
import { socialMedia } from '../config';
import { Icon } from '@components/icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexBetween };
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

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: scale(1.2);
      }
      svg {
        fill: var(--yellow);
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContact>
        <p>Contact <a href="mailto:thepopupchickenshop@gmail.com">thepopupchickenshop@gmail.com</a> for catering</p>
      </StyledContact>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li kep={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  )    
}

export default Footer
