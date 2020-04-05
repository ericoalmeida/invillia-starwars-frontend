import React from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container, TextContainer, Text, Header } from './styles';

export default function Loading() {
  return (
    <Container>
      <Header>
        <TextContainer>
          <Text>Perae! Estamos buscando as informação. </Text>
          <FiLoader size={25} color="#999" />
        </TextContainer>
      </Header>
    </Container>
  );
}
