import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: auto;
  width: 100%;
  max-width: 1000px;

  background: #fff;
  margin: 30px;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const PeopleContainer = styled.div`
  background: #fff;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h1 {
    color: #190404;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #190404;
  }

  a:hover {
    color: #8e151b;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  height: auto;
  width: 100%;
  max-width: 1000px;

  background: #fff;
  margin: 30px;
`;

export const HeaderControls = styled.div`
  display: flex;
  height: 100%;
  width: 400px;

  justify-content: space-between;
  padding: 0 10px;
  background: #fff;
`;

export const SpaceShipLabel = styled.p`
  color: #40194e;
  font-size: 12px;

  margin-top: 5px;
`;

export const SpaceShipNameLabel = styled.p`
  color: #40194e;
  font-size: 15px;
  font-weight: bold;

  margin-top: 5px;
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;
  padding: 5px 0;
`;

export const HeaderItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const SpaceShipDescripLabel = styled.p`
  color: #737373;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  margin-left: 5px;
`;
