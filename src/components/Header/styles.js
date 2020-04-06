import styled from 'styled-components';

export const Container = styled.header`
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
