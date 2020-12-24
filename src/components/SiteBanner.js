import React from 'react';
import styled from 'styled-components';
import { Icon, IconLogo } from '@components/icons';

const StyledBanner = styled.div`
   background-color: var(--red);
   min-height: 200px;
   display: flex;
   align-items: flex-start;
   flex-direction: row;
   flex-wrap: wrap;
   font-family: 'DayPosterBlack';
   text-align: center;
   color: var(--yellow);
   text-shadow: -2px 2px var(--navy);

   .corner-ribbon {
       display: block;
        width: 350px;
        background: var(--navy);
        position: absolute;
        top: 55px;
        left: -120px;
        font-family: "EckhardtPosterItalicJNL";
        font-size: 1.15rem;
        text-align: center;
        line-height: 1.5rem;
        letter-spacing: 1px;
        color: var(--yellow);
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
        padding-bottom: 2px;
        z-index: 12;
    }

    .address-block,
    .hours-block {
        margin: 1vh auto;
        min-width: 250px;

        @media (max-width: 960px) {
            flex-basis: 50%;
           order: 2;
           padding-top: 5vh;
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
       margin: 1vh auto;
       align-content: flex-start;
       justify-content: center;
       flex-wrap: wrap;
       
       width: 360px;

       @media (max-width: 960px) {
           flex-basis: 100%;
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
`;


const Ribbon = () => {
    return (
        <div class="corner-ribbon">Inside the VFW</div>
    )
}

const LargeLogo = () => {
    return (
        <div className="large-logo">
            <div class="large-logo-title">
                <IconLogo size={78} />
                <h1>Pop-Up</h1>
            </div>
            <div class="large-logo-subtitle">
                <h2>Chicken Shop</h2>
            </div>
        </div>
    )
};

const AddressBlock = () => {
    return (
        <div class="address-block">
            <span className="avatar">
                <Icon name="Location" size={42} />
            </span>
            <address>
                  1006 E. Lincoln St.<br />
                  Bloomington, IL 61701
            </address>
            <Icon name="Phone" size={18} />
            <a href="tel:+13098273999" class="phone">(309) 827-3999</a>
            <br />
            <Icon name="Phone" size={18} />
            <a href="tel:+1309-821-1380" class="phone">(309) 821-1380</a>
        </div>
    )
};

const HoursBlock = () => {
    return (
        <div class="hours-block">
            <span className="avatar">
                <Icon name="Clock" size={42} />
            </span>
            <div>
                11 AM - 4 PM<br />
                Mon - Sat
            </div>
        </div>
    )
}




const SiteBanner = () => {
    return (
        <StyledBanner id="site-banner">
            <AddressBlock />
            <LargeLogo />
            <HoursBlock />
            {/* <Ribbon /> */}
        </StyledBanner>
    )
};

export default SiteBanner;