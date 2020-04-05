import React from 'react';
import { FiClock } from 'react-icons/fi';

import { Container, TextContainer, Header } from './styles';

export default function EmptyPage() {
  return (
    <Container>
      <Header>
        <FiClock size={40} color="#999" />

        <TextContainer>
          <p>CARREGANDO...</p>
        </TextContainer>
      </Header>
    </Container>
  );
}
