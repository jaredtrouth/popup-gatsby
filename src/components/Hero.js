import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import Slider from '@farbenmeer/react-spring-slider';

const StyledHero = styled.div`
	.hero-content {
		display: flex;
		align-content: center;
		justify-content: center;
		height: 430px;
		position: relative;
		${'' /* box-shadow: 0 -7px 10px -5px black inset, 0 7px 10px -5px black inset; */}
		${'' /* background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.25),
			rgba(0, 0, 0, 0.4)
		); */}
	}

	.slide {
		padding: 0 5vw;

		h1 {
			font-family: "DayPosterBlack";
			color: var(--yellow);
			text-shadow: -3px 3px var(--navy);
			letter-spacing: 2px;
			text-align: center;
			text-transform: uppercase;
		}
	}
`;

const Hero = ({ heroImage }) => {
    return (
			// <Fade delay={400}>
			<StyledHero>
				<div className="hero-content">
					<Slider hasBullets auto="5000">
						<div className="slide">
							<h1>Announcements</h1>
						</div>
						<div className="slide">
							<h1>Specials</h1>
						</div>
					</Slider>
				</div>
			</StyledHero>
			// </Fade>
		);
};

export default Hero;
