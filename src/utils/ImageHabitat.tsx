import cave from '../assets/pokemonHabitats/cave.png';
import forest from '../assets/pokemonHabitats/forest.png';
import grassland from '../assets/pokemonHabitats/grassland.png';
import mountain from '../assets/pokemonHabitats/mountain.png';
import rare from '../assets/pokemonHabitats/rare.png';
import roughTerrain from '../assets/pokemonHabitats/rough-terrain.png';
import sea from '../assets/pokemonHabitats/sea.png';
import urban from '../assets/pokemonHabitats/urban.png';
import watersEdge from '../assets/pokemonHabitats/waters-edge.png';

export function imageHabitat(name: string) {
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
