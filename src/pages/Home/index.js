import React, { useState } from 'react';

import {
  Container,
  Header,
  Logo,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles';

import LogoImg from '~/assets/logo.png';

import EmptyPage from '~/components/EmptyPage';
import Loading from '~/components/Loading';

export default function Home() {
  const [people, setPeople] = useState([]);
  const [laoding, setLoading] = useState(true);

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

      {laoding ? (
        <Loading />
      ) : (
        <>
          {people.length === 0 ? (
            <EmptyPage />
          ) : (
            <div>
              <h1>Totods personagens encontrados</h1>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
