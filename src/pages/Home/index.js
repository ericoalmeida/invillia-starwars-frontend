import React, { useState, useEffect } from 'react';

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
import Lista from '~/components/Lista';

import api from '~/services/api';

export default function Home() {
  const [people, setPeople] = useState([]);
  const [laoding, setLoading] = useState(false);

  async function loadDataOfPeoples() {
    setLoading(true);

    const response = await api.get('people');

    setPeople(response.data.results);

    setLoading(false);
  }

  useEffect(() => {
    loadDataOfPeoples();
  }, []);

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
            <Lista>
              {people.map((peopleItem) => {
                return (
                  <li>
                    <div className="date">
                      <p>{peopleItem.created}</p>
                    </div>

                    <div className="header">
                      <p>{peopleItem.name}</p>
                    </div>

                    <div className="descripiton">
                      <p>{peopleItem.eye_color}</p>
                      <p>{peopleItem.hair_color}</p>
                      <p>{peopleItem.skin_color}</p>
                    </div>

                    <div className="gender">
                      <p>{peopleItem.gender}</p>
                    </div>
                  </li>
                );
              })}
            </Lista>
          )}
        </>
      )}
    </Container>
  );
}
