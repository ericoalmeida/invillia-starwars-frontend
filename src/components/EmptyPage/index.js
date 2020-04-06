import React from 'react';
import { FiFrown } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { Container, TextContainer, Text, Header } from './styles';

export default function EmptyPage({ message }) {
  return (
    <Container>
      <Header>
        <TextContainer>
          <Text>{message}</Text>
          <FiFrown size={25} color="#999" />
        </TextContainer>
      </Header>
    </Container>
  );
}

EmptyPage.defaultProps = {
  message: '',
};

EmptyPage.propTypes = {
  message: PropTypes.string,
};
