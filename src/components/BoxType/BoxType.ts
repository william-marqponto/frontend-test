import styled from 'styled-components';

interface BackgroundProps {
  image: string | null;
}

export const Box = styled.div<BackgroundProps>`
  margin: 16px;

  text-transform: capitalize;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    height: 200px;
    min-width: 200px;
    width: 200px;
    border: 1px solid black;
    border-radius: 16px;
    padding: 8px;

    font-weight: bold;
    font-size: 24px;
    color: #fff;
    text-shadow: 2px 2px black;
    text-align: center;
    word-break: break-word;

    background-image: url(${props => props.image});
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