import { Container } from './ItemList.ts';

import { PokemonDialog } from '../PokemonDialog/PokemonDialog.tsx';

import { Pokemon } from '../../types.tsx';
interface ItemListProps {
  data: Pokemon[];
}

export function ItemList({ data }: ItemListProps) {
  return (
    <Container>
      {data.map((item: { name: string }) => {
        return <PokemonDialog key={item.name} name={item.name} />;
      })}
    </Container>
  );
}
