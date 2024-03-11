import { Container, BoxColor, BoxType } from './ItemList.ts';

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
            <BoxColor key={item.name} color={item.name}>
              <div>{item.name}</div>
            </BoxColor>
          );
        })}

      {attribute === 'type' &&
        data.map((item: { name: string }) => {
          return (
            <BoxType key={item.name}>
              <div>{item.name}</div>
            </BoxType>
          );
        })}
    </Container>
  );
}
