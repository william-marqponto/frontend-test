import cave from '../assets/cave.png';
import forest from '../assets/forest.png';
import grassland from '../assets/grassland.png';
import mountain from '../assets/mountain.png';
import rare from '../assets/rare.png';
import roughTerrain from '../assets/rough-terrain.png';
import sea from '../assets/sea.png';
import urban from '../assets/urban.png';
import watersEdge from '../assets/waters-edge.png';

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
