import { useState } from 'react';

import { Container } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { Filter } from './components/Filter/Filter.tsx';
import { ItemList } from './components/ItemList/ItemList.tsx';

export function App() {
  const [data, setData] = useState<[]>([]);
  const [attribute, setAttributey] = useState('');

  function handleSearchName() {
    // 1302 tipos
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => setData(data.results));

    setAttributey('pokemon');
  }

  function handleSearchColor() {
    // 10 tipos
    fetch('https://pokeapi.co/api/v2/pokemon-color/')
      .then((response) => response.json())
      .then((data) => setData(data.results));

    setAttributey('color');
  }

  function handleSearchType() {
    // 20 tipos
    fetch('https://pokeapi.co/api/v2/type/')
      .then((response) => response.json())
      .then((data) => setData(data.results));

    setAttributey('type');
  }

  function handleSearchHabitat() {
    // 9 tipos
    fetch('https://pokeapi.co/api/v2/pokemon-habitat/')
      .then((response) => response.json())
      .then((data) => setData(data.results));

    setAttributey('habitat');
  }

  return (
    <Container>
      <Header />

      <Filter
        handleSearchName={handleSearchName}
        handleSearchColor={handleSearchColor}
        handleSearchType={handleSearchType}
        handleSearchHabitat={handleSearchHabitat}
      />

      <ItemList data={data} attribute={attribute} />
    </Container>
  );
}
