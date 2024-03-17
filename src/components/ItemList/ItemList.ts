import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  padding: 0 100px 50px;

  @media (max-width: 1280px) {
    padding: 0 50px 50px;
  }
`;