import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 16px 32px;
`;

export const Title = styled.h1`
  color: rgb(47, 104, 178);

  padding: 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;

  :hover {
    background: rgba(47, 104, 178, 0.7);
  }
`;

export const Button = styled.div`
  background: rgba(47, 104, 178, 0.9);
  color: #ffffff;
  border: 1px solid #2f68b2;
  border-radius: 8px;

  padding: 16px;
  margin: 8px;
  min-width: 100px;
  
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-weight: bold;

  transition: background 0.5s;
`;