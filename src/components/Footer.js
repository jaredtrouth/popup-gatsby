import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';
import { Icon } from '@components/icons';
import { Fade, Zoom } from 'react-awesome-reveal';

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
	font-family: 'EckhardtPosterItalicJNL', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  
  a {
		text-decoration: none;
		color: var(--yellow);

		&:hover,
		&:focus {
			background-color: inherit;
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
          <Zoom triggerOnce cascade damping={0.1}>
            {socialMedia &&
              socialMedia.map(({ name, url }, i) => (
                <li key={i}>
                  <a href={url} aria-label={name}>
                    <Icon name={name} />
                  </a>
                </li>
              ))}
          </Zoom>
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  );
};

export default Footer;
