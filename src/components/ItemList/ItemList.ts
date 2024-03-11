import styled from 'styled-components';
interface HabitatProps {
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
    align-items: center;
    justify-content: center;

    height: 200px;
    min-width: 200px;
    border: 1px solid black;
    border-radius: 16px;

    font-weight: bold;
    font-size: 24px;

    background: rgba(47, 104, 178, 0.2);

    cursor: pointer;
  }

  :hover, :active, :focus {
    background: ${props => props.color || 'rgba(47, 104, 178, 0.4)'};
    color: ${props => props.color === 'black' ? 'white' : 'black'};
  }
`;

export const BoxHabitat = styled.div<HabitatProps>`
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
    background-color: rgba(47, 104, 178, 0.2);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    cursor: pointer;
  }

  :hover, :active, :focus {
    opacity: 0.7;
  }
`;