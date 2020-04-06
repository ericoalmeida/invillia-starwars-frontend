import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import crypto from 'crypto';

import {
  Container,
  DateContainer,
  HeaderItem,
  HeaderItemDescription,
  HeaderItemGender,
  HeaderItemSpaceship,
} from './styles';

import EmptyPage from '~/components/EmptyPage';
import Loading from '~/components/Loading';
import Lista from '~/components/Lista';
import ListaItem from '~/components/ListaItem';
import DateText from '~/components/DateText';
import Header from '~/components/Header';

import api from '~/services/api';

export default function Home() {
  const history = useHistory();
  const [people, setPeople] = useState([]);
  const [laoding, setLoading] = useState(false);

  async function loadDataOfPeoples() {
    setLoading(true);

    const response = await api.get('people');

    setPeople(response.data.results);

    setLoading(false);
  }

  function showSpaceShips(apeople) {
    history.push('/spaceshippeople', {
      apeople,
      starships: apeople.starships.map((url) => {
        const [, newUrl] = url.split('api/');
        return newUrl;
      }),
    });
  }

  useEffect(() => {
    loadDataOfPeoples();
  }, []);

  return (
    <Container>
      <Header />

      {laoding ? (
        <Loading />
      ) : (
        <>
          {people.length === 0 ? (
            <EmptyPage message="Oops! Não encontramos nenhum personagem de STAR WARS" />
          ) : (
            <Lista>
              {people.map((peopleItem) => {
                return (
                  <ListaItem key={crypto.randomBytes(8).toString('HEX')}>
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
                        onClick={() => showSpaceShips(peopleItem)}
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
