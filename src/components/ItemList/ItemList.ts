import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  padding: 0 112px;
`;

export const BoxColor = styled.div`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    min-width: 120px;
    border: 1px solid black;
    border-radius: 16px;

    font-weight: bold;
    font-size: 20px;

    background: rgba(47, 104, 178, 0.2);

    cursor: pointer;
  }

  :hover {
    background: ${props => props.color};
    color: ${props => props.color === 'black' ? 'white' : 'black'};
  }
`;

export const BoxType = styled.div`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    min-width: 120px;
    border: 1px solid black;
    border-radius: 16px;

    font-weight: bold;
    font-size: 20px;

    background: rgba(47, 104, 178, 0.2);

    cursor: pointer;
  }

  :hover {
    background: rgba(47, 104, 178, 0.4);
  }
`;