import { useEffect, useState } from 'react';

import { Container } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { Filter } from './components/Filter/Filter.tsx';
import { ItemList } from './components/ItemList/ItemList.tsx';

export function App() {
  const [data, setData] = useState<[]>([]);
  const [attribute, setAttributey] = useState('');

  const handleSearchName = async () => {
    // 1302 tipos
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0');
    const pokemon = await response.json();

    setData(pokemon.results);
    setAttributey('pokemon');
  };

  const handleSearchColor = async () => {
    // 10 tipos
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-color/');
    const color = await response.json();

    setData(color.results);
    setAttributey('color');
  };

  const handleSearchType = async () => {
    // 20 tipos
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const type = await response.json();

    setData(type.results);
    setAttributey('type');
  };

  const handleSearchHabitat = async () => {
    // 9 tipos
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-habitat/');
    const habitat = await response.json();

    setData(habitat.results);
    setAttributey('habitat');
  };

  useEffect(() => {
    data.length === 0 && handleSearchName();
  });

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
