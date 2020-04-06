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
  Avatar,
  LabelDescription,
  LabelTitleDescription,
  LabelTitleGender,
  Paginacao,
} from './styles';

import EmptyPage from '~/components/EmptyPage';
import Loading from '~/components/Loading';
import Lista from '~/components/Lista';
import ListaItem from '~/components/ListaItem';
import DateText from '~/components/DateText';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import api from '~/services/api';

export default function Home() {
  const history = useHistory();
  const [people, setPeople] = useState([]);
  const [laoding, setLoading] = useState(false);

  async function loadDataOfPeoples(page = 1) {
    setLoading(true);

    const response = await api.get(`people/?page=${page}`);

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
            <>
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
                        <div className="avatar">
                          <Avatar
                            src={`https://api.adorable.io/avatars/42/${peopleItem.name}@adorable.png`}
                          />
                        </div>

                        <div className="descrip">
                          <LabelTitleDescription>
                            Eye Color:
                          </LabelTitleDescription>

                          <LabelDescription>
                            {peopleItem.eye_color}
                          </LabelDescription>

                          <LabelTitleDescription>
                            Hair Color:
                          </LabelTitleDescription>

                          <LabelDescription>
                            {peopleItem.hair_color}
                          </LabelDescription>

                          <LabelTitleDescription>
                            Skin Color:
                          </LabelTitleDescription>

                          <LabelDescription>
                            {peopleItem.skin_color}
                          </LabelDescription>
                        </div>
                      </HeaderItemDescription>

                      <HeaderItemGender>
                        <LabelTitleGender>Gender:</LabelTitleGender>
                        <LabelDescription>{peopleItem.gender}</LabelDescription>
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

              <Footer>
                <Paginacao>
                  <button type="button" onClick={() => loadDataOfPeoples(1)}>
                    1
                  </button>

                  <button type="button" onClick={() => loadDataOfPeoples(2)}>
                    2
                  </button>

                  <button type="button" onClick={() => loadDataOfPeoples(3)}>
                    3
                  </button>
                </Paginacao>
              </Footer>
            </>
          )}
        </>
      )}
    </Container>
  );
}
