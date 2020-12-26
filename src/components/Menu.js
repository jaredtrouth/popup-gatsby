import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMenuData } from '@hooks/useMenuData';
import { Icon } from '@components/icons';

const StyledMenuCard = styled.div`
    max-width: 960px;
    background-color: white;
    padding: 10px 0;
    border-radius: 5px;
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
        justify-content: space-between;
    }

    .menu-item-left {
        flex: 2 2 auto;

        .title {
            font-family: "Anton", sans-serif;
            font-size: 1em;
            letter-spacing: 2px;
            font-weight: bold;
        }

        .description {
            font-family: "Libre Baskerville", sans-serif;
            font-size: 0.7em;
        }
    }

    .menu-item-right {
        flex: 1 1 auto;
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
        <div className="menu-item-right">${price}</div>
    </div>
);


const Menu = () => {
    const menu = useMenuData();
    console.log(menu);
    return (
        <StyledMenuCard>
            <StyledMenuHeader>
                <MenuHeader />
            </StyledMenuHeader>
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