import { useEffect, useState } from 'react';

import { Container } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { Filter } from './components/Filter/Filter.tsx';
import { ItemList } from './components/ItemList/ItemList.tsx';

// pokemon = 1302
// color = 10
// type = 20
// habitat = 9

export function App() {
  const [data, setData] = useState<[]>([]);
  const [attribute, setAttribute] = useState('');

  const urlAttibute = 'pokemon';

  const handleSearch = async (urlAttibute: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${urlAttibute}/`);
    const result = await response.json();

    setData(result.results);
    setAttribute(urlAttibute);
  };

  useEffect(() => {
    data.length === 0 && handleSearch(urlAttibute);
  }, [data.length]);

  return (
    <Container>
      <Header />

      <Filter
        handleSearchName={() => handleSearch('pokemon')}
        handleSearchColor={() => handleSearch('pokemon-color')}
        handleSearchType={() => handleSearch('type')}
        handleSearchHabitat={() => handleSearch('pokemon-habitat')}
      />

      <ItemList data={data} attribute={attribute} />
    </Container>
  );
}
