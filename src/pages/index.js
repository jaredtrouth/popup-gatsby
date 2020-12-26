import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '@components/Layout'
import Menu from '../components/Menu';

const StyledMainContainer = styled.main`
  background-color: white;
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
  min-height: 100px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    & > * {
      margin: 20px;
      border-radius: 5px;
      box-shadow: -2px 2px 5px 1px black;
    }
  }
`;


const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledSectionHeading id="menu">Menu</StyledSectionHeading>
        <StyledSection>
          <Menu />
        </StyledSection>
      <StyledSectionHeading id="location">Location</StyledSectionHeading>
      <StyledSection>
        <iframe
            width="100%"
            height="450"
            frameBorder="0"
            className="map"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBzSEoRVvC4gRQ3DVfi7e6yc&key=AIzaSyBJC9i-Zt2WRdAow4kjzMW7DcTagXu-G7U&zoom=13"
            allowFullScreen
            title="Google Maps"
          ></iframe>
      </StyledSection>
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;