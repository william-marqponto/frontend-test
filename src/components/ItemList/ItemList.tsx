import { BoxPokemon } from '../BoxPokemon/BoxPokemon.tsx';
import { BoxColor } from '../BoxColor/BoxColor.tsx';
import { BoxType } from '../BoxType/BoxType.tsx';
import { BoxHabitat } from '../BoxHabitat/BoxHabitat.tsx';

import { Container } from './ItemList.ts';
interface ItemListProps {
  data: [];
  attribute: string;
}

export function ItemList({ data, attribute }: ItemListProps) {
  return (
    <Container>
      {attribute === 'pokemon' &&
        data.map((item: { name: string }) => {
          return <BoxPokemon name={item.name} key={item.name} />;
        })}

      {attribute === 'pokemon-color' &&
        data.map((item: { name: string }) => {
          return (
            <BoxColor name={item.name} color={item.name} key={item.name} />
          );
        })}

      {attribute === 'type' &&
        data.map((item: { name: string }) => {
          return <BoxType name={item.name} key={item.name} />;
        })}

      {attribute === 'pokemon-habitat' &&
        data.map((item: { name: string }) => {
          return <BoxHabitat name={item.name} key={item.name} />;
        })}
    </Container>
  );
}
