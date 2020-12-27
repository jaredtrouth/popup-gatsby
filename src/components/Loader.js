import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--red);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    ${'' /* transition: var(--transition); */}
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    #logo {
      max-width: 128px;
      margin: 0 auto;
    }
  }
`;

const IconLoader = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="400"
    height="408"
    viewBox="0 0 300 306"
  >
    <g transform="matrix(.1 0 0 -.1 0 306)" fill="#002156">
      <ellipse
        id="logo-border"
        cx="1496.278"
        cy="1512.098"
        rx="1452.465"
        ry="1458.539"
        fill="#ffe001"
        stroke="#002156"
        strokeWidth="51.062"
      />
      <path d="M877 2520c-4-14-10-18-22-14-10 4-21 1-26-7-7-11-11-10-24 6-14 19-16 19-28 3-10-12-17-14-25-6-14 14-54-71-54-116 0-46 13-96 24-96 6 0-1-9-16-21-14-11-26-25-26-30 0-13 27-11 49 3 15 9 23 9 36-2 9-7 14-19 11-27s1-16 9-19c8-4 12-10 9-16-3-5 3-17 15-27 19-17 20-26 15-121-3-57-10-112-15-121-11-22-12-202 0-214 4-6 19-53 31-105 13-52 36-122 51-155s31-73 35-88c13-53 50-112 80-126 16-7 39-22 51-33 11-11 46-32 77-47 72-36 86-49 86-77 0-13 8-28 19-33 10-6 24-23 30-40 11-25 10-33-4-55-19-28-15-90 6-124 15-24-18-72-117-174-75-78-76-78-128-78-58 0-71-6-55-26 16-19-16-30-37-14-11 10-18 10-26 2-7-7-28-12-47-12h-34l23-25c25-27 50-31 81-14 15 7 24 7 35-2 9-8 18-8 27-2 17 15 87 26 87 15 0-6-7-12-15-16-8-3-15-15-15-27 0-16 3-19 12-12 7 5 24 10 37 11 14 0 28 8 33 16s20 29 35 46c26 32 32 33 96 14 28-9 22 34-8 48-20 9-23 16-18 37 3 14 15 32 25 39s18 19 18 25c0 17 79 107 94 107 7 0 18 11 24 25 7 15 20 25 32 25 11 0 20 4 20 9s9 12 19 16c11 3 23 15 26 26 4 10 11 19 16 19s41-31 80-70c38-38 83-77 99-85l30-16v-94c0-52-4-97-10-100-5-3-10-15-10-26 0-16-6-19-37-17-21 2-39-1-40-7-4-21-80-26-159-10-21 5-34 3-39-6-14-21 24-38 106-45 43-3 79-9 79-12s-8-14-17-24c-21-23-3-49 20-30 19 16 108 42 119 36 15-10 48 28 48 54 0 24 1 24 18 8 13-11 28-14 51-10 37 8 36 28-2 32-44 5-62 51-61 154 1 89 15 139 46 170 12 12 18 33 18 67 0 42 3 49 22 54 12 3 41-3 64-14 53-24 53-24 46 3-5 22-4 22 15 5 25-22 66-22 114 1 30 13 40 24 45 50 5 24 11 32 28 32 13 0 33 11 45 24 19 20 20 24 6 30-26 10-9 23 25 18 16-2 30 0 31 4 6 47 5 75-2 80-5 3-7 15-4 27 4 16-1 29-20 45-14 12-30 22-35 22-6 0-11 7-11 15-1 8-2 20-3 27 0 7-12 15-26 19s-18 8-10 8c13 1 13 2 0 11s-13 11 0 20c8 5 32 10 53 10s63 11 92 25c74 33 103 88 108 207 3 45 8 91 12 100 4 10 4 41 1 70-4 29-8 73-9 98s-8 57-16 72c-12 23-11 32 3 68 22 55 20 72-9 100-14 13-25 29-25 36 0 19-53 44-93 44-19 0-42-8-55-20-12-11-28-20-37-20-12 0-15-12-15-56 0-54-1-56-24-50-21 5-34-5-87-65-35-39-83-82-108-97-41-24-51-25-190-26-116-1-153 2-181 16-40 19-120 32-120 20 0-4 5-13 12-20 16-16-2-16-37 0-16 7-25 19-25 33 0 13-8 25-17 29-47 16-80 46-105 96-15 30-28 62-28 70 0 19-99 216-125 248-58 70-74 84-125 102-30 11-63 20-72 20-10 0-18 5-18 10 0 6 4 10 9 10 18 0 18 27 0 51-15 20-21 21-28 10-8-12-13-12-24-3-12 10-16 9-20-8zm67-136c20-8 21-57 1-74-12-10-15-10-15 0 0 8-8 10-25 6-18-5-25-2-25 9 0 9 9 15 25 15 17 0 25 5 24 18 0 10-3 12-6 5-7-18-43-16-43 1 0 8 10 17 23 19 12 2 23 5 24 6 1 0 8-2 17-5zm-178-101c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm234-12c0-13-29-35-37-28-7 8 15 37 28 37 5 0 9-4 9-9zm-166-20c4-5 2-19-2-31-7-19-10-20-20-7-7 8-10 22-6 31 7 18 20 21 28 7zm284-10c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm-222-36c1-13-2-27-7-30-5-4-9 11-9 31 0 40 12 40 16-1zm221-22c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm-25-85c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm71 7c4-8 2-17-3-20-6-4-10-4-10-1 0 2-3 11-6 20s-2 16 4 16c5 0 12-7 15-15zm1247-75c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1160-24c0-15-18-31-26-23-7 7 7 37 17 37 5 0 9-6 9-14zm927-22c8-21-19-46-40-38-15 5-15 8 1 30 20 28 30 30 39 8zm-890-44c-1-43-7-49-27-25-10 12-9 16 4 21 9 3 16 15 16 25s2 19 4 19c3 0 4-18 3-40zm1060 33c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-130-60c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm183-5c0-18-12-33-32-41-13-5-18-1-18 13 0 10 8 24 18 29 23 14 32 13 32-1zm-1160-2c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm164-47c-10-16-24-9-24 12 0 18 2 19 15 9 8-7 12-16 9-21zm793 1c-1-23-37-25-45-2-2 7 2 10 12 6 9-3 16-1 16 5s4 11 9 11c6 0 9-9 8-20zm-1317-20c0-16-4-30-10-30-11 0-14 43-3 53 11 12 13 8 13-23zm267 13c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm71-1c6-18-15-14-22 4-4 10-1 14 6 12 6-2 14-10 16-16zm42 3c0-8-7-15-15-15-9 0-12 6-9 15 4 8 10 15 15 15s9-7 9-15zm50-9c0-15-18-31-26-23-7 7 7 37 17 37 5 0 9-6 9-14zm-100-64c0-10-22-32-31-32-8 0-18 48-11 54 6 7 42-12 42-22zm120 18c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1045 0c3-5 4-10 1-10s-8 5-11 10c-3 6-4 10-1 10s8-4 11-10zm-181-9c3-5-1-12-10-15-20-8-29-1-19 13 8 13 22 14 29 2zm-1079-21c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1112-27c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm-687-13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm750-11c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm-1374-11c0-13-5-26-10-30-22-15-26-7-11 22 19 36 21 37 21 8zm841-25c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm573 7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-673-7c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm148-13c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm177-12c-6-6-15-8-19-4s-1 11 7 16c19 12 27 3 12-12zm-402 2c0-5-10-10-22-10-19 0-20 2-8 10 19 13 30 13 30 0zm158-22c-3-7-11-13-18-13s-15 6-17 13c-3 7 4 12 17 12s20-5 18-12zm485 3c13-2 7-19-10-25-9-4-20-1-25 6-6 10-8 8-8-4 0-10 5-18 10-18 6 0 10-4 10-10 0-21-31-9-40 16-17 45-14 47 63 35zm-688-10c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm325-7c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-575-4c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm220 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm395-32c0-5-4-8-10-8-5 0-10 10-10 23 0 18 2 19 10 7 5-8 10-18 10-22zm60 11c0-14-16-11-29 5-10 12-8 13 8 9 12-3 21-9 21-14zm121-10c22-17 37-35 34-39-9-14-34 0-40 21-4 10-17 22-31 25-13 3-21 10-18 15 8 14 13 12 55-22zm-596 1c3-5-3-10-14-10-12 0-21 5-21 10 0 6 6 10 14 10s18-4 21-10zm-128-17c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm380 10c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm116-7c-2-5-15-10-30-11-16-1-36-5-45-9-13-6-18-4-18 6 0 8 2 17 5 20 9 9 90 3 88-6zm-608-16c10-11 14-20 9-20s-15 9-22 20-11 20-9 20 12-9 22-20zm745-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-283-6c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm223-4c0-5-7-7-15-4-8 4-15 8-15 10s7 4 15 4 15-4 15-10zm27 3c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-983-22c7-11-22-23-35-15-5 3-7 10-4 15 8 12 32 12 39 0zm320-10c11-4 15-10 9-14-5-3-19 0-29 8-20 15-11 18 20 6zm63 2c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm196-8c-3-9-8-14-10-11-3 3-2 9 2 15 9 16 15 13 8-4zm317 0c-12-15-30-12-30 6 0 5 10 9 21 9 18 0 19-2 9-15zm-178-7c-17-8-26-8-34 0-9 9-4 12 23 11 32 0 33-1 11-11zm438 2c0-5-9-10-19-10-14 0-18-5-14-20 4-17 1-20-23-19h-29l25 11c24 10 24 10 5 18-17 7-17 9-2 9 9 1 17 6 17 11 0 6 9 10 20 10s20-4 20-10zm-1120-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm64-6c9-22 8-23-14-21-11 1-20 2-20 3s3 9 6 18c8 20 20 20 28 0zm345 7c13-7 16-19 13-45-4-31-6-34-23-23-13 8-15 15-7 24 7 9 7 13-1 13-6 0-11 9-11 20 0 23 4 24 29 11zm65-10c13-14 14-20 4-24-7-2-21 6-31 19-14 19-15 24-4 24 8 0 22-8 31-19zm466 9c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm80-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-690-9c0-23-16-27-17-5-1 10 2 19 8 19 5 0 9-6 9-14zm655 4c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-138-17c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-480-10c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm170 0c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm240 1c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm159-19c-1-25-10-32-20-16-7 11 3 41 14 41 4 0 7-11 6-25zm-306 5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm40-19c0-12-30-22-43-14-7 4-3 9 9 14 26 10 34 10 34 0zm47 3c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm-229-22c5-16-23-15-37 1-8 11-6 13 11 12 12-1 24-7 26-13zm422-1c0-11-107-41-148-41-18 0-32 4-32 10 0 15 33 28 61 23 14-2 41 0 60 5 44 13 59 14 59 3zm-625-19c-3-3-11 0-18 7-9 10-8 11 6 5 10-3 15-9 12-12zm275 8c10-7 11-10 3-11-7-1-19-2-25-3-19-3-29 4-23 15 8 12 26 11 45-1zm40-20c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-231-76c1-6-11-16-26-23-21-10-28-9-34 1-6 9-2 14 11 16 17 3 18 6 7 25-7 12-19 31-27 42s4 4 27-15 42-40 42-46zm-201 27c4 0 8-16 9-34 1-29-3-35-31-45-42-15-46-15-46 4 0 8 4 13 8 10 4-2 14-1 21 4 11 6 10 13-6 36l-21 29 29-1c16-1 33-2 37-3zm959 2c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-272-21c6-4 8-20 5-37l-5-29-23 29c-17 22-20 30-10 37 16 10 20 10 33 0zm-45-58c0-20-21-28-31-13-15 24-10 37 11 32 11-3 20-11 20-19zm230 16c0-5-4-10-10-10-5 0-10-9-10-21 0-15-4-19-16-15-9 3-22 6-30 6-10 0-5 9 13 25 29 25 53 32 53 15zm-740-39c0-12-20-25-27-18s6 27 18 27c5 0 9-4 9-9zm180-11c8-5 11-12 7-16s-15 0-24 9c-18 18-8 23 17 7zm380 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-110-36c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm220-14c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-670-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm687-17c-4-3-7 0-7 7s3 10 7 7c3-4 3-10 0-14zm-597-7c0-3-5-8-12-12s-8-3-4 4c7 12 16 16 16 8zm580-36c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-345-10c3-5 4-10 1-10s-8 5-11 10c-3 6-4 10-1 10s8-4 11-10zm202 3c-4-3-10-3-14 0-3 4 0 7 7 7s10-3 7-7zm-327-49c0-6 7-17 15-24s15-16 15-21c0-16-28-10-34 7-4 9-13 14-21 10-17-6-21 19-5 29 6 4 8 16 4 28-6 22-6 22 10 2 8-11 16-25 16-31zm30-93c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm73-16c-3-17-30-17-37 0-4 13-1 16 17 13 12-2 21-7 20-13zm47-45c14-11 20-20 13-20-21 0-63 19-63 30 0 16 23 11 50-10zm-10-410c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10z" />
      <path d="M657 2303c-10-9-9-53 1-53 8 0 32 43 32 55 0 7-26 6-33-2zM1450 1880c0-5 5-10 11-10 5 0 7 5 4 10-3 6-8 10-11 10-2 0-4-4-4-10zM1290 530c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10z" />
    </g>
  </svg>
);

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo-border',
        delay: 300,
        duration: 1000,
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 500,
        easing: 'easeInOutSine',
        opacity: 0,
        scale: 0.1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
