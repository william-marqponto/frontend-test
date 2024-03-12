import { imageHabitat } from '../../utils/ImageHabitat.tsx';
import { imageType } from '../../utils/ImageType.tsx';

import { Container, Box, BoxType, BoxHabitat } from './ItemList.ts';
interface ItemListProps {
  data: [];
  attribute: string;
}

export function ItemList({ data, attribute }: ItemListProps) {
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
            <BoxType key={item.name} name={imageType(item.name)}>
              <div>{item.name}</div>
            </BoxType>
          );
        })}

      {attribute === 'habitat' &&
        data.map((item: { name: string }) => {
          return (
            <BoxHabitat key={item.name} name={imageHabitat(item.name)}>
              <div>{item.name}</div>
            </BoxHabitat>
          );
        })}
    </Container>
  );
}
