import { useState } from 'react';

import { BoxPokemon } from '../BoxPokemon/BoxPokemon.tsx';

import { imageType } from '../../utils/ImageType.tsx';

import { Box } from './BoxType.ts';

interface BoxTypeProps {
  data: [];
  showBox: boolean;
  setShowBox: (arg0: boolean) => void;
}

export function BoxType({ data, showBox, setShowBox }: BoxTypeProps) {
  const [pokemonList, setPokemonList] = useState<[]>([]);

  const handleClick = async (urlAttibute: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${urlAttibute}/`
    );
    const result = await response.json();

    const finalPokemonList = result.pokemon.map(
      (item: { pokemon: { name: string } }) => {
        return item.pokemon;
      }
    );

    setPokemonList(finalPokemonList);
  };

  return (
    <>
      {showBox
        ? data.map((item: { name: string }) => {
            return (
              <Box
                key={item.name}
                image={imageType(item.name)}
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
