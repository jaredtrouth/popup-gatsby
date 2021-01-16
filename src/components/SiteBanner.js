import React from 'react';
import styled from 'styled-components';
import { Icon, IconLogo } from '@components/icons';
import { Fade, Zoom } from 'react-awesome-reveal';

const StyledBanner = styled.div`
	background-color: var(--red);
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	font-family: 'DayPosterBlack';
	text-align: center;
	color: var(--yellow);
	text-shadow: -2px 2px var(--navy);
	overflow: hidden;
	${'' /* box-shadow: 0 10px 10px -10px black; */}
	position: relative;
	z-index: 1;
	padding: 10px 0;
  }
  	@media (max-width: 960px) {
		  padding-top: 0;
		  .address-block { order: 2; padding-top: 1vh; }
		  .hours-block { order: 3;  }
	  }
	.address-block,
	.hours-block {
		margin: 1vh auto;
		min-width: 250px;

		@media (max-width: 960px) {
			font-size: .8rem;
			margin: 0;
			min-width: 0;
			align-self: center;

      .avatar > svg { height: 8; width: 8}
		}

		.avatar {
			@media (max-width: 960px) {
				display: none;
			}
			svg {
				padding: 0.33rem;
				border-radius: 100px;
				background-color: var(--yellow);
			}
		}

		.phone {
			padding-left: 5px;
		}

		address {
			font-style: normal;
		}

		svg {
			fill: var(--navy);
		}
	}

	.large-logo {
		display: flex;
		margin: 0 auto;
		align-content: flex-start;
		justify-content: center;
		flex-wrap: wrap;

		width: 360px;

		@media (max-width: 960px) {
			flex: 100%;
			order: 1;
		}

		.large-logo-title {
			display: flex;
			align-items: center;
			justify-content: space-between;

			h1 {
				padding-left: 5px;
				margin: 0;
				font-size: 64px;
				color: var(--yellow);
				text-shadow: -5px 5px var(--navy);
				text-transform: uppercase;
				letter-spacing: 1px;
				transform: scaleY(1.2);
			}
		}

		.large-logo-subtitle {
			flex-basis: 100%;
			width: 360px;
			font-family: 'EckhardtPosterItalicJNL', sans-serif;
			background-color: var(--navy);

			h2 {
				margin: 0;
				padding: 5px 0;
				font-size: 22px;
				letter-spacing: 0.4rem;
			}
		}
	}

	a {
		transition: background-color 0.5s;
	}
`;

const LargeLogo = () => {
  return (
    <Zoom triggerOnce className="large-logo">
      <div className="large-logo">
        <div className="large-logo-title">
          <IconLogo size={72} />
          <h1>Pop-Up</h1>
        </div>
        <div className="large-logo-subtitle">
          <h2>Chicken Shop</h2>
        </div>
      </div>
    </Zoom>
  );
};

const AddressBlock = () => {
  return (
    <Fade triggerOnce direction="left" className="address-block">
      <div>
        <span className="avatar">
          <Icon name="Location" size={42} />
        </span>
        <address>
          1006 E. Lincoln St.
          <br />
          Bloomington, IL 61701
        </address>
        <Icon name="Phone" size={16} />
        <a href="tel:+13098273999" className="phone">
          (309) 827-3999
        </a>
        <br />
        <Icon name="Phone" size={16} />
        <a href="tel:+1309-821-1380" className="phone">
          (309) 821-1380
        </a>
      </div>
    </Fade>
  );
};

const HoursBlock = () => {
  return (
		<Fade triggerOnce direction="right" className="hours-block">
			<div>
				<span className="avatar">
					<Icon name="Clock" size={42} />
				</span>
				<div>
					11 AM - 4 PM
					<br />
					Mon - Sat
				</div>
			</div>
		</Fade>
	);
};

const SiteBanner = () => {
  return (
    <StyledBanner id="site-banner">
      <AddressBlock />
      <LargeLogo />
      <HoursBlock />
    </StyledBanner>
  );
};

export default SiteBanner;
