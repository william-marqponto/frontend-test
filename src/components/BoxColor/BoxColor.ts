import styled from 'styled-components';

export const Box = styled.div`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 120px;
    min-width: 200px;
    width: 200px;
    border: 1px solid black;
    border-radius: 16px;
    padding: 16px;

    font-weight: bold;
    font-size: 24px;
    text-align: center;
    word-break: break-word;

    background: ${props => props.color || 'rgba(47, 104, 178, 0.5)'};
    color: ${props => props.color === 'black' ? '#ffffff' : '#000000'};

    cursor: pointer;
  }

  :hover, :active, :focus {
    opacity: 0.7;
  }
`;