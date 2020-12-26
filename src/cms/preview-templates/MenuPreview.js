import React from 'react';
import useMenuData from '@hooks/useMenuData';

import Menu from '@components/menu';

const MenuPreview = ({ entry }) => {
    console.log(entry.getIn(['data']));
    const menu = useMenuData();

    return (
        <Menu menu={menu} />
    );
};

export default MenuPreview;