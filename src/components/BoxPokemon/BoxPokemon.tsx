import { Box } from './BoxPokemon.ts';

interface BoxPokemonProps {
  name: string;
}

export function BoxPokemon({ name }: BoxPokemonProps) {
  return (
    <Box key={name}>
      <div>{name.replace(/[-]/g, ' ')}</div>
    </Box>
  );
}
