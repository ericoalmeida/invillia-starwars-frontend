import React from 'react';

import {
  Container,
  LogoContainer,
  Logo,
  Title,
  TitleContainer,
} from './styles';

import LogoImg from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImg} alt="Logo" />
      </LogoContainer>

      <TitleContainer>
        <Title>Guia de personagens</Title>
      </TitleContainer>
    </Container>
  );
}
