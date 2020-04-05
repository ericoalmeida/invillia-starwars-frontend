import React, { useState, useEffect } from 'react';

import {
  Container,
  Header,
  Logo,
  LogoContainer,
  Title,
  TitleContainer,
  DateContainer,
  HeaderItem,
  HeaderItemDescription,
  HeaderItemGender,
  HeaderItemSpaceship,
} from './styles';

import LogoImg from '~/assets/logo.png';

import EmptyPage from '~/components/EmptyPage';
import Loading from '~/components/Loading';
import Lista from '~/components/Lista';
import ListaItem from '~/components/ListaItem';
import DateText from '~/components/DateText';

import api from '~/services/api';

import temp from './temp';

export default function Home() {
  const [people, setPeople] = useState([]);
  const [laoding, setLoading] = useState(false);

  async function loadDataOfPeoples() {
    setLoading(true);

    // const response = await api.get('people');

    // setPeople(response.data.results);

    setPeople(temp.results);
    setLoading(false);
  }

  function showSpaceShips(spaceships) {
    console.log(spaceships);
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
                  <ListaItem>
                    <DateContainer>
                      <DateText date={peopleItem.created} />
                    </DateContainer>

                    <HeaderItem>
                      <p>{peopleItem.name}</p>
                    </HeaderItem>

                    <HeaderItemDescription>
                      <p>{peopleItem.eye_color}</p>
                      <p>{peopleItem.hair_color}</p>
                      <p>{peopleItem.skin_color}</p>
                    </HeaderItemDescription>

                    <HeaderItemGender>
                      <p>{peopleItem.gender}</p>
                    </HeaderItemGender>

                    <HeaderItemSpaceship>
                      <button
                        type="button"
                        onClick={() => showSpaceShips(peopleItem.starships)}
                      >
                        Naves Espaciais
                      </button>
                    </HeaderItemSpaceship>
                  </ListaItem>
                );
              })}
            </Lista>
          )}
        </>
      )}
    </Container>
  );
}
