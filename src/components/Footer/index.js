import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
