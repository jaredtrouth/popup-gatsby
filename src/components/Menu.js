import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { convertPrice } from '@helpers';
import { Fade } from 'react-awesome-reveal';

const StyledMenuCard = styled.div`
  max-width: 960px;
  background-color: white;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  color: black;
  text-transform: uppercase;
  font-size: 16px;
`;

const StyledMenuHeader = styled.div`
  display: flex;
  flex: 100%;

  .outside-border {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    border-top: 15px solid var(--yellow);
  }

  .header {
    ${({ theme }) => theme.mixins.flexCenter}
    width: 100%;
    border-top: 7px double var(--red);
    border-bottom: 7px double var(--red);

    h3 {
      margin: 0;
      padding: 0 5px;
      text-align: center;
      align: center;
    }
  }
`;

const MenuHeader = () => {
  return (
    <div className="outside-border">
      <div className="header">
        <Icon name="Logo" size={42} />
        <h3>Illinois Hot Chicken</h3>
      </div>
    </div>
  );
};

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 100%;

  @media (min-width: 768px) {
    flex: 1 50%;
  }
`;

const StyledMenuSection = styled.div`
  min-width: 100;
  min-height: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-family: 'Kanit', sans-serif;
    letter-spacing: 1px;
    color: var(--red);
    margin: 0 0 10px 0;

    &:before {
      content: '• ';
    }
    &:after {
      content: ' •';
    }
  }

  h4,
  h5 {
    color: var(--red);
    margin: 0;
    text-align: center;
  }

  .menu-item-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px dotted grey;
  }

  .menu-item-left {
    flex: 2 2 auto;
    margin-right: 10px;

    .title {
      font-family: 'Lato', sans-serif;
      font-weight: 900;
    }

    .description {
      font-size: 0.85em;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.2;
      padding-left: 0.5rem;
    }
  }

  .menu-item-right {
    flex: 1 1 auto;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: right;
    margin-left: 10px;
    align-self: flex-end;
  }
`;

const StyledFooter = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 15px solid var(--yellow);
  text-align: center;

  @media (max-width: 778px) {
    justify-content: center;
  }

  & > * {
    padding: 0 10px;
  }

  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  }
  a:hover,
  a:active {
    text-decoration: underline;
    background-color: inherit;
  }
`;

const MenuItem = ({ title, description, price }) => (
  <div className="menu-item-wrapper">
    <div className="menu-item-left">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
    <div className="menu-item-right">{convertPrice(price)}</div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
};

const Menu = ({ menu }) => {
  return (
    <StyledMenuCard className="card">
      <StyledMenuHeader>
        <MenuHeader />
      </StyledMenuHeader>

      <StyledColumn>
        <StyledMenuSection>
          <div>
            <h4>Choose a style & heat level</h4>
            <h5>Served with bread & pickles</h5>
          </div>
          <Fade triggerOnce>
            {menu.entrees.items.map((i) => (
              <MenuItem {...i} key={i.title} />
            ))}
          </Fade>
        </StyledMenuSection>

        <StyledMenuSection>Heat Meter</StyledMenuSection>
      </StyledColumn>
      <StyledColumn style={{ paddingTop: 15 }}>
        <StyledMenuSection>
          <h2>Sides</h2>
          <Fade triggerOnce>
            {menu.sides.items.map((i) => (
              <MenuItem {...i} key={i.title} />
            ))}
          </Fade>
        </StyledMenuSection>
        <StyledMenuSection>
          <h2>Addons</h2>
          <Fade triggerOnce>
            {menu.addons.items.map((i) => (
              <MenuItem {...i} key={i.title} />
            ))}
          </Fade>
        </StyledMenuSection>
        <StyledMenuSection>
          <h2>Sauces</h2>
          TODO: Sauce Card
        </StyledMenuSection>
        <StyledMenuSection>
          <h2>Drinks</h2>
          <Fade triggerOnce>
            {menu.drinks.items.map((i) => (
              <MenuItem {...i} key={i.title} />
            ))}
          </Fade>
        </StyledMenuSection>
      </StyledColumn>
      <StyledFooter>
        <address>
          <Icon name="Location" size={14} />
          1006 E. Lincoln St. VFW Post 454 Bloomington IL 61701
        </address>
        <div>
          <Icon name="Phone" size={14} />
          <a href="tel:+13098273999">(309) 827-3999</a>&nbsp;or&nbsp;
          <a href="tel:+13098211380">(309) 821-1380</a>
        </div>
      </StyledFooter>
    </StyledMenuCard>
  );
};

export default Menu;
export { MenuItem, StyledMenuHeader, StyledMenuSection };
