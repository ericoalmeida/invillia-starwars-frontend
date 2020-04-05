import React from 'react';
import { FiFrown } from 'react-icons/fi';

import { Container, TextContainer, Text, Header } from './styles';

export default function EmptyPage() {
  return (
    <Container>
      <Header>
        <TextContainer>
          <Text>Não foi encontrado nenhum personagem de STAR WARS</Text>
          <FiFrown size={25} color="#999" />
        </TextContainer>
      </Header>
    </Container>
  );
}
