interface FilterProps {
  handleSearchName: () => void;
  handleSearchColor: () => void;
  handleSearchType: () => void;
  handleSearchHabitat: () => void;
}

import { Container, Title, FilterContainer, Button } from './Filter.ts';

export function Filter({
  handleSearchName,
  handleSearchColor,
  handleSearchType,
  handleSearchHabitat,
}: FilterProps) {
  return (
    <Container>
      <Title>I want to search for:</Title>

      <FilterContainer>
        <Button onClick={handleSearchName}>Name</Button>
        <Button onClick={handleSearchColor}>Color</Button>
        <Button onClick={handleSearchType}>Type</Button>
        <Button onClick={handleSearchHabitat}>Habitat</Button>
      </FilterContainer>
    </Container>
  );
}
