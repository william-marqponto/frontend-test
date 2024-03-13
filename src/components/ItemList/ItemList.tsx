import { BoxPokemon } from '../BoxPokemon/BoxPokemon.tsx';
import { BoxColor } from '../BoxColor/BoxColor.tsx';
import { BoxType } from '../BoxType/BoxType.tsx';
import { BoxHabitat } from '../BoxHabitat/BoxHabitat.tsx';

import { Container } from './ItemList.ts';
interface ItemListProps {
  data: [];
  attribute: string;
  showBox: boolean;
  setShowBox: (arg0: boolean) => void;
}

export function ItemList({
  data,
  attribute,
  showBox,
  setShowBox,
}: ItemListProps) {
  return (
    <Container>
      {attribute === 'pokemon' &&
        data.map((item: { name: string }) => {
          return <BoxPokemon name={item.name} key={item.name} />;
        })}

      {attribute === 'pokemon-color' && (
        <BoxColor
          data={data}
          showBox={showBox}
          setShowBox={() => setShowBox(false)}
        />
      )}

      {attribute === 'type' && (
        <BoxType
          data={data}
          showBox={showBox}
          setShowBox={() => setShowBox(false)}
        />
      )}

      {attribute === 'pokemon-habitat' && (
        <BoxHabitat
          data={data}
          showBox={showBox}
          setShowBox={() => setShowBox(false)}
        />
      )}
    </Container>
  );
}
