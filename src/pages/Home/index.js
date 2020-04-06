import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
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

  const [page, setPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  async function loadDataOfPeoples() {
    setLoading(true);

    const response = await api.get(`people/?page=${page}`);

    setPeople(response.data.results);
    setPreviousPage(response.data.previous);
    setNextPage(response.data.next);

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

  function loadPreviousPage() {
    if (previousPage === null) return;
    if (page === 1) return;

    setPage(page - 1);
  }

  function loadNextPage() {
    if (nextPage === null) return;

    setPage(page + 1);
  }

  useEffect(() => {
    loadDataOfPeoples();
  }, [page]);

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
                  <button type="button" onClick={loadPreviousPage}>
                    <FiArrowLeft size={16} color="#fff" />
                    Anterior
                  </button>

                  <button type="button" onClick={loadNextPage}>
                    Próxima
                    <FiArrowRight size={16} color="#fff" />
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
