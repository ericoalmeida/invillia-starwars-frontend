import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  max-width: 1000px;

  background: #fff;
  margin: 30px;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  height: 80px;
  border-radius: 8px;

  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 120px;
  margin-left: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #190404;
  font-family: 'Open Sans';
`;
