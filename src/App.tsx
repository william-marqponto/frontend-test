import { Container } from './App.ts';

import { Header } from './components/Header/Header.tsx';
import { Filter } from './components/Filter/Filter.tsx';

export function App() {
  return (
    <Container>
      <Header />
      <Filter />
    </Container>
  );
}
