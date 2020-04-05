import React from 'react';

import {
  Container,
  Header,
  Logo,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles';

import LogoImg from '~/assets/logo.png';

export default function Home() {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src={LogoImg} alt="Logo" />
        </LogoContainer>

        <TitleContainer>
          <Title>Guia de personagens</Title>
        </TitleContainer>
      </Header>
    </Container>
  );
}
