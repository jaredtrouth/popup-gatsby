import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { convertPrice } from '@helpers';

const StyledMenuCard = styled.div`
    max-width: 960px;
    background-color: white;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    color: black;
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
            text-transform: uppercase;
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
    )
}

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
    
    .menu-item-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }

    .menu-item-left {
        flex: 2 2 auto;
        margin-right: 10px;

        .title {
            font-family: "Anton", sans-serif;
            font-size: 1em;
            letter-spacing: 2px;
            font-weight: bold;
        }

        .description {
            font-size: 0.75em;
            color: rgba(0,0,0,.6);
            text-transform: uppercase;
            line-height: 1.2;
        }
    }

    .menu-item-right {
        flex: 1 1 auto;
        font-family: "Anton", sans-serif;
        font-style: normal;
        font-size: 16px;
        letter-spacing: 1px;
        text-align: right;
        margin-left: 10px;
    }
`;

const StyledFooter = styled.div`
    width: 100%;
    border-bottom: 15px solid var(--yellow);
    text-align: center;
    address {
        font-style: normal;
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
    price: PropTypes.number.isRequired
}


const Menu = ({ menu }) => {
    return (
        <StyledMenuCard>
            <StyledMenuHeader>
                <MenuHeader />
            </StyledMenuHeader>
            <div style={{color: "var(--red)", width: "100%"}}>
                <h4 style={{margin: "10px 0", fontSize: "18px", textAlign: "center", textTransform: "uppercase"}}>Choose a style & heat level - served with bread & pickles</h4>
            </div>
            <StyledColumn>
                <StyledMenuSection>
                    {menu.entrees.map(i => <MenuItem title={i.title} description={i.description} price={i.price} key={i.title} />)}
                </StyledMenuSection>
                    
                <StyledMenuSection>Heat Meter</StyledMenuSection>
            </StyledColumn>
            <StyledColumn>
                <StyledMenuSection>
                    {menu.sides.map(i => <MenuItem title={i.title} description={i.description} price={i.price} key={i.title} />)}
                </StyledMenuSection>
                <StyledMenuSection>
                    {menu.addons.map(i => <MenuItem title={i.title} description={i.description} price={i.price} key={i.title} />)}
                </StyledMenuSection>
                <StyledMenuSection>
                    {menu.sauces.map(i => <MenuItem title={i.title} description={i.description} price={i.price} key={i.title} />)}
                </StyledMenuSection>
                <StyledMenuSection>
                    {menu.drinks.map(i => <MenuItem title={i.title} description={i.description} price={i.price} key={i.title} />)}
                </StyledMenuSection>
            </StyledColumn>
            <StyledFooter>
                <address>
                    1006 E. Lincoln St. VFW Post 454 Bloomington IL 61701
                    <br />
                    <a href="tel:+13098273999">(309) 827-3999</a>&nbsp;or&nbsp;
                    <a href="tel:+13098211380">(309) 821-1380</a>
                </address>
            </StyledFooter>
        </StyledMenuCard>
    );
};

export default Menu;