import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;

  background-color: rgba(47, 104, 178, 0.2);
  min-height: 100vh;
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 100px 32px;

  @media (max-width: 1280px) {
    padding: 0 100px 50px;
  }

  @media (max-width: 700px) {
    padding: 0 50px 50px;
  }
`;

export const Title = styled.h1`
  color: rgb(47, 104, 178);

  padding: 16px;
`;

export const Form = styled.div`
  width: 700px;
  padding: 25px 0 0;

  input {
    outline: none;

    height: 40px;
    width: 100%;

    border: 1px solid rgb(47, 104, 178);
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;

  }

  @media (max-width: 1280px) {
    width: 100%;
    padding: 25px 0 0;
  }
`;