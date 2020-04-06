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

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;
  padding: 5px 0;

  p {
    color: #40194e;
    font-weight: bold;
  }

  .descripiton {
    color: #40194e;
    font-weight: normal;
  }
`;

export const HeaderItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;

  p {
    color: #737373;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
  }

  .avatar {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-left: 5px;
  }

  .descrip {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
`;

export const HeaderItemGender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 5px;

  p {
    color: #737373;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
  }
`;

export const HeaderItemSpaceship = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  height: 50px;

  button {
    height: 44px;
    width: 100%;
    border: 0;
    background: #7a1ea3;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
  }
`;

export const Avatar = styled.img`
  border-radius: 21px;
`;
