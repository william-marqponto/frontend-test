import { useState } from 'react';

import { Container } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { Filter } from './components/Filter/Filter.tsx';

export function App() {
  const [data, setData] = useState<[]>([]);

  function handleSearchName() {
    console.log('name');
    // 1302 tipos
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  function handleSearchColor() {
    console.log('color');
    // 10 tipos
    fetch('https://pokeapi.co/api/v2/pokemon-color/')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  function handleSearchType() {
    console.log('type');
    // 20 tipos
    fetch('https://pokeapi.co/api/v2/type/')
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  function handleSearchHabitat() {
    console.log('habitat');
    // 9 tipos
    fetch('https://pokeapi.co/api/v2/pokemon-habitat/')
      .then((response) => response.json())
      .then((data) => setData(data.results));
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

      {data.map((item: { name: string }) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </Container>
  );
}
