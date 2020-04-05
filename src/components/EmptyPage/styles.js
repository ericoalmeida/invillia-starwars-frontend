import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  height: 500px;
  margin: 5px;
`;

export const Header = styled.header`
  background: #fff;
  height: 400px;
  display: flex;

  align-items: center;
  justify-content: space-around;
  padding: 30px;
`;

export const TextContainer = styled.div`
  background: #fff;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 14;
  color: #999;
  margin-right: 10px;
`;
