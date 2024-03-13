import { useState } from 'react';

import { BoxPokemon } from '../BoxPokemon/BoxPokemon.tsx';

import { imageHabitat } from '../../utils/ImageHabitat.tsx';

import { Box } from './BoxHabitat.ts';

interface BoxHabitatProps {
  data: [];
  showBox: boolean;
  setShowBox: (arg0: boolean) => void;
}

export function BoxHabitat({ data, showBox, setShowBox }: BoxHabitatProps) {
  const [pokemonList, setPokemonList] = useState<[]>([]);

  const handleClick = async (urlAttibute: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-habitat/${urlAttibute}/`
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
                image={imageHabitat(item.name)}
                onClick={() => {
                  handleClick(item.name);
                  setShowBox(false);
                }}>
                <div>{item.name?.replace(/[-]/g, ' ')}</div>
              </Box>
            );
          })
        : pokemonList.map((item: { name: string }) => {
            return <BoxPokemon name={item.name} key={item.name} />;
          })}
    </>
  );
}
