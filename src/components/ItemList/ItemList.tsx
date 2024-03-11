import { Container, Box, BoxHabitat } from './ItemList.ts';

import cave from '../../assets/cave.png';
import forest from '../../assets/forest.png';
import grassland from '../../assets/grassland.png';
import mountain from '../../assets/mountain.png';
import rare from '../../assets/rare.png';
import roughTerrain from '../../assets/rough-terrain.png';
import sea from '../../assets/sea.png';
import urban from '../../assets/urban.png';
import watersEdge from '../../assets/waters-edge.png';

interface ItemListProps {
  data: [];
  attribute: string;
}

export function ItemList({ data, attribute }: ItemListProps) {
  function imageNameProp(name: string) {
    switch (name) {
      case 'cave':
        return cave;
      case 'forest':
        return forest;
      case 'grassland':
        return grassland;
      case 'mountain':
        return mountain;
      case 'rare':
        return rare;
      case 'rough-terrain':
        return roughTerrain;
      case 'sea':
        return sea;
      case 'urban':
        return urban;
      case 'waters-edge':
        return watersEdge;
      default:
        return null;
    }
  }

  return (
    <Container>
      {attribute === 'color' &&
        data.map((item: { name: string }) => {
          return (
            <Box key={item.name} color={item.name}>
              <div>{item.name}</div>
            </Box>
          );
        })}

      {attribute === 'type' &&
        data.map((item: { name: string }) => {
          return (
            <Box key={item.name}>
              <div>{item.name}</div>
            </Box>
          );
        })}

      {attribute === 'habitat' &&
        data.map((item: { name: string }) => {
          return (
            <BoxHabitat key={item.name} name={imageNameProp(item.name)}>
              <div>{item.name}</div>
            </BoxHabitat>
          );
        })}
    </Container>
  );
}
