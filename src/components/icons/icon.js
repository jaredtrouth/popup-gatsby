import React from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  Instagram,
  Yelp,
  IconLogo,
  IconLocation,
  IconPhone,
  IconClock,
} from '@components/icons';

const Icon = ({ name, size }) => {
  switch (name) {
    case 'Facebook':
      return <Facebook size={size} />;
    case 'Instagram':
      return <Instagram size={size} />;
    case 'Yelp':
      return <Yelp size={size} />;
    case 'Logo':
      return <IconLogo size={size} />;
    case 'Location':
      return <IconLocation size={size} />;
    case 'Phone':
      return <IconPhone size={size} />;
    case 'Clock':
      return <IconClock size={size} />;
    default:
      return <Facebook size={size} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 48,
};

export default Icon;
