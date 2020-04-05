import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Lista({ children }) {
  return <Container>{children}</Container>;
}

Lista.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
