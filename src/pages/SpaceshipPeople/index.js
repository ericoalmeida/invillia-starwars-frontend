import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import crypto from 'crypto';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  PeopleContainer,
  SpaceShipLabel,
  SpaceShipNameLabel,
  HeaderItem,
  HeaderItemDescription,
  SpaceShipDescripLabel,
} from './styles';

import Header from '~/components/Header';
import Loading from '~/components/Loading';
import EmptyPage from '~/components/EmptyPage';
import Lista from '~/components/Lista';
import ListaItem from '~/components/ListaItem';

import api from '~/services/api';

export default function SpaceshipPeople({ location }) {
  const { apeople } = location.state;
  const urlStarships = location.state.starships;

  const [loading, setLoading] = useState(false);
  const [starShips, setStarShips] = useState([]);

  const loadStarshipData = useCallback(async () => {
    urlStarships.forEach(async (url) => {
      setLoading(true);

      await api.get(url).then((response) => {
        setStarShips([...starShips, response.data]);
      });

      setLoading(false);
    });
  }, [urlStarships, starShips]);

  useEffect(() => {
    loadStarshipData();
  }, [loadStarshipData]);

  return (
    <Container>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          <PeopleContainer>
            <h1>{apeople.name}</h1>

            <Link to="/">
              <FiArrowLeft size={22} />
              Voltar
            </Link>
          </PeopleContainer>

          {urlStarships.length === 0 ? (
            <EmptyPage message="Oops! Este personagem não tem nenhuma nave" />
          ) : (
            <Lista>
              {starShips.map((starship) => {
                return (
                  <ListaItem key={crypto.randomBytes(8).toString('HEX')}>
                    <HeaderItem>
                      <SpaceShipNameLabel>{starship.name}</SpaceShipNameLabel>
                    </HeaderItem>

                    <HeaderItemDescription>
                      <SpaceShipLabel>Model:</SpaceShipLabel>
                      <SpaceShipDescripLabel>
                        {starship.model}
                      </SpaceShipDescripLabel>

                      <SpaceShipLabel>Manufacturer:</SpaceShipLabel>
                      <SpaceShipDescripLabel>
                        {starship.manufacturer}
                      </SpaceShipDescripLabel>

                      <SpaceShipLabel>Length:</SpaceShipLabel>
                      <SpaceShipDescripLabel>
                        {starship.length}
                      </SpaceShipDescripLabel>

                      <SpaceShipLabel>Starship class:</SpaceShipLabel>
                      <SpaceShipDescripLabel>
                        {starship.starship_class}
                      </SpaceShipDescripLabel>

                      <SpaceShipLabel>MGLT:</SpaceShipLabel>
                      <SpaceShipDescripLabel>
                        {starship.MGLT}
                      </SpaceShipDescripLabel>
                    </HeaderItemDescription>
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

SpaceshipPeople.defaultProps = {
  apeople: {},
  name: '',
};

SpaceshipPeople.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
  apeople: PropTypes.oneOfType([PropTypes.object]),

  name: PropTypes.string,
};
