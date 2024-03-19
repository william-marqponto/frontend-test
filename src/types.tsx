export interface Pokemon {
  name: string;
}

export interface PokemonInfo {
  id: number;
  name: string;
  sprites: { other: { ['official-artwork']: { front_default: string } } };
  height: number;
  weight: number;
  abilities: [{ ability: { name: string } }];
  types: [{ type: { name: string } }];
  stats: [
    {
      base_stat: number;
      stat: { name: string };
    }
  ];
}
