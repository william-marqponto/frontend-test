import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Container, ContainerFilter, Title, Form } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { ItemList } from './components/ItemList/ItemList.tsx';

import { Pokemon } from './types.tsx';

// pokemon = 1302

export function App() {
  const [data, setData] = useState<Pokemon[]>(() => {
    const data: Pokemon[] = [];

    if (data.length !== 0) {
      return data;
    }
    return [];
  });
  const [search, setSearch] = useState('');

  const filteredPokemon: Pokemon[] =
    search !== ''
      ? data.filter((item: { name: string }) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : data;

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const result = await response.json();

    setData(result.results);
    setSearch(query);
  };

  const handleList = useCallback(async () => {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=5000&offset=0'
    );
    const result = await response.json();

    setData(result.results);
  }, []);

  useEffect(() => {
    handleList();
  }, [data.length, handleList]);

  return (
    <Container>
      <Header />
      <ContainerFilter>
        <Title>Find your Pokémon</Title>

        <Form>
          <input
            type='text'
            placeholder='I want a specific Pokémon...'
            onChange={handleSearch}
          />
        </Form>
      </ContainerFilter>

      <ItemList data={filteredPokemon} />
    </Container>
  );
}
