import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '@components/Layout';
import Menu from '../components/Menu';
import useMenuData from '@hooks/useMenuData';
import { Fade, Zoom } from 'react-awesome-reveal';
import Hero from '../components/Hero';

const StyledMainContainer = styled.main`
  background-color: var(--red);
`;

const StyledSectionHeading = styled.h1`
  display: block;
  padding: 10px;
  margin: 0;
  font-family: 'DayPosterBlack';
  font-size: 2.75rem;
  letter-spacing: 7px;
  text-shadow: -4px 4px var(--navy);
  text-align: center;
  text-transform: uppercase;
  background-color: var(--red);
  color: var(--yellow);
`;

const StyledSection = styled.section`
  background-color: var(--red);
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 20px;
    .card {
      border-radius: 5px;
      box-shadow: -1px 1px 8px 1px black;
    }
  }
`;

const IndexPage = ({ location, data }) => {
  const menu = useMenuData();
  console.log(menu);

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero heroImage={data.heroImage.fluid} />
        <StyledSectionHeading id="menu" style={{/*boxShadow: '0 -10px 10px -10px black', position: 'relative', zIndex: 1*/}}>
          <Zoom triggerOnce>
            Menu
          </Zoom>
        </StyledSectionHeading>
        <StyledSection>
          <Fade triggerOnce delay={100}>
            <Menu className="card" menu={menu} />
          </Fade>
        </StyledSection>
        <StyledSectionHeading id="location">
          <Fade triggerOnce direction="left">
            Location
          </Fade>
        </StyledSectionHeading>
        <StyledSection>
          <Fade triggerOnce style={{ width: '100%' }}>
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              className="card"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBzSEoRVvC4gRQ3DVfi7e6yc&key=AIzaSyBJC9i-Zt2WRdAow4kjzMW7DcTagXu-G7U&zoom=13"
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </Fade>
        </StyledSection>
      </StyledMainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export const query = graphql`
	{
		heroImage: imageSharp(original: { src: { regex: "/chickens-hero/" } }) {
			fluid {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export default IndexPage;
