import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMenuData } from '@hooks/useMenuData';

const Menu = () => {
    const menu = useMenuData();
    console.log(useMenuData());
    return (
        <p></p>
    );
};

export default Menu;