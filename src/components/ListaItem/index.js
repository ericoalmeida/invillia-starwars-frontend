import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ListaItem({ children }) {
  return <Container>{children}</Container>;
}

ListaItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
