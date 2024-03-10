import { Container, Title, FilterContainer, Button } from './Filter.ts';

export function Filter() {
  return (
    <Container>
      <Title>I want to search for:</Title>

      <FilterContainer>
        <Button>Name</Button>
        <Button>Color</Button>
        <Button>Type</Button>
        <Button>Habitat</Button>
      </FilterContainer>
    </Container>
  );
}
