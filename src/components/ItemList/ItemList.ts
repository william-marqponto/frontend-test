import styled from 'styled-components';
interface BackgroundProps {
  name: string | null;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  padding: 0 112px;
`;

export const Box = styled.div`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 120px;
    min-width: 120px;
    border: 1px solid black;
    border-radius: 16px;
    padding-bottom: 16px;

    font-weight: bold;
    font-size: 24px;

    background: ${props => props.color || 'rgba(47, 104, 178, 0.5)'};
    color: ${props => props.color === 'black' ? '#ffffff' : '#000000'};

    cursor: pointer;
  }

  :hover, :active, :focus {
    opacity: 0.7;
  }
`;

export const BoxType = styled.div<BackgroundProps>`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    height: 200px;
    min-width: 200px;
    border: 1px solid black;
    border-radius: 16px;
    padding-top: 8px;

    font-weight: bold;
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px black;

    background-image: url(${props => props.name});
    background-color: rgba(47, 104, 178, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    cursor: pointer;
  }

  :hover, :active, :focus {
    opacity: 0.7;
  }
`;

export const BoxHabitat = styled.div<BackgroundProps>`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 200px;
    min-width: 200px;
    border: 1px solid black;
    border-radius: 16px;
    padding-bottom: 16px;

    font-weight: bold;
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px black;

    background-image: url(${props => props.name});
    background-color: rgba(47, 104, 178, 0.5);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    cursor: pointer;
  }

  :hover, :active, :focus {
    opacity: 0.7;
  }
`;