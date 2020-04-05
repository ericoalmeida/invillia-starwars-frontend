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
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
  padding: 30px;
`;

export const TextContainer = styled.div`
  background: #fff;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  p {
    margin-right: 10px;
    margin-top: 20px;
    color: #999;
    font-size: 30px;
  }
`;

export const Text = styled.p`
  margin-right: 10px;
  margin-top: 20px;
`;
