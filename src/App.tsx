import { useCallback, useEffect, useState } from 'react';

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
  const [showBox, setShowBox] = useState(false);
  // const [pokemon, setPokemon] = useState<[]>([]);

  const urlAttibute = 'pokemon';

  // const toogleShowBox = () => {
  //   setShowBox(!showBox);
  // };

  const handleSearch = useCallback(async (urlAttibute: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${urlAttibute}/`);
    const result = await response.json();

    setData(result.results);
    setAttribute(urlAttibute);
    setShowBox(true);
  }, []);

  // const handleListPokemon = useCallback(() => {
  //   data.forEach(async (item: { name: string }) => {
  //     const response = await fetch(
  //       `https://pokeapi.co/api/v2/pokemon/${item.name}/`
  //     );
  //     const result = await response.json();
  //     setPokemon(result);
  //     console.log(pokemon);
  //     return pokemon;
  //   });
  // }, [data, pokemon]);

  useEffect(() => {
    data.length === 0 && handleSearch(urlAttibute);
    // handleListPokemon;
  }, [data.length, handleSearch]);

  return (
    <Container>
      <Header />

      <Filter
        handleSearchName={() => {
          handleSearch('pokemon'), setShowBox(true);
        }}
        handleSearchColor={() => {
          handleSearch('pokemon-color'), setShowBox(true);
        }}
        handleSearchType={() => {
          handleSearch('type'), setShowBox(true);
        }}
        handleSearchHabitat={() => {
          handleSearch('pokemon-habitat');
          setShowBox(true);
        }}
      />

      <ItemList
        data={data}
        attribute={attribute}
        showBox={showBox}
        setShowBox={() => setShowBox(false)}
      />
    </Container>
  );
}
