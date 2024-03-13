import { useState } from 'react';

import { BoxPokemon } from '../BoxPokemon/BoxPokemon.tsx';

import { Box } from './BoxColor.ts';

interface BoxColorProps {
  data: [];
  showBox: boolean;
  setShowBox: (arg0: boolean) => void;
}

export function BoxColor({ data, showBox, setShowBox }: BoxColorProps) {
  const [pokemonList, setPokemonList] = useState<[]>([]);

  const handleClick = async (urlAttibute: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-color/${urlAttibute}/`
    );
    const result = await response.json();

    setPokemonList(result.pokemon_species);
  };

  return (
    <>
      {showBox
        ? data.map((item: { name: string }) => {
            return (
              <Box
                key={item.name}
                color={item.name}
                onClick={() => {
                  handleClick(item.name);
                  setShowBox(false);
                }}>
                <div>{item.name}</div>
              </Box>
            );
          })
        : pokemonList.map((item: { name: string }) => {
            return <BoxPokemon name={item.name} key={item.name} />;
          })}
    </>
  );
}
