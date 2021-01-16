import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useScrollDirection from '@hooks/useScrollDirection';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Icon } from '@icons';
import NavMenu from "@components/NavMenu";
import { navLinks } from '../config';

const StyledHeader = styled.header`
	${({ theme }) => theme.mixins.flexAround};
	position: fixed;
	top: 0;
	z-index: 11;
	width: 100vw;
	height: 64px;
	padding: 0 50px;
	top: 0;
	background-color: var(--red);
	transition: var(--transition);

	@media (max-width: 768px) {
		padding: 0 25px;
	}

	${(props) =>
		props.scrollDirection === 'down' &&
		!props.scrolledToTop &&
		css`
			top: -84px;
			transform: translateY(0);
			box-shadow: 0 10px 30px -10px black;
		`};

	${(props) =>
		props.scrollDirection === 'up' &&
		!props.scrolledToTop &&
		css`
			top: 0;
			transform: translateY(calc(64 * -1));
			box-shadow: 0 10px 30px -10px black;
		`};

	.navLogo {
		padding: 0;
		transition: var(--transition);
		transition-delay: 200ms;

		&.hide {
			opacity: 0;
		}

		a {
			color: var(--navy);
			width: 62px;
			height: 62px;
			padding: 5px 0;

			&:hover,
			&:focus {
				transform: scale(1.1);
				transform-origin: 50% 50%;
				transition-duration: 200ms;
				background-color: inherit;
			}
		}
	}
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100vw;
  color: slate;
  z-index: 12;
  display: flex;
  justify-content: space-between;
`;

const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}

	@media (max-width: 768px;) {
		display: none;
	}

	ul {
		${({ theme }) => theme.mixins.flexBetween};
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	li {
		margin: 0 5px;
		position: relative;
		font-size: 1.2em;
		text-transform: uppercase;
		text-align: center;
		
		a {
			color: var(--yellow);
			font-family: var(--font-bold);
			letter-spacing: 3px;
			text-shadow: -2px 2px var(--navy);
			padding: 3px 10px;
			margin: 0 10px;
			transition: 0.2s;

			&:hover,
			&:focus {
				background-color: inherit;
				box-shadow: 0 10px 0 0 var(--navy);
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
		<StyledHeader
			scrollDirection={scrollDirection}
			scrolledToTop={scrolledToTop}>
			<StyledNav>
				<a
					href={isHome ? '#top' : '/'}
					className={`navLogo ${scrolledToTop ? 'hide' : 'show'}`}>
					<Icon name="Logo"></Icon>
				</a>
				<StyledLinks>
					<ul style={{ maxWidth: '100%' }}>
						<Fade triggerOnce cascade direction="down" delay={150} damping={0.25}>
							{navLinks.map(({ url, name }) => (
								<li>
									<a href={url}>{name}</a>
								</li>
							))}
						</Fade>
					</ul>
				</StyledLinks>
				<NavMenu />
			</StyledNav>
		</StyledHeader>
	);
};

Navbar.propTypes = {
  isHome: PropTypes.bool,
};

export default Navbar;
