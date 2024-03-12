import bug from '../assets/bug.svg';
import dark from '../assets/dark.svg';
import dragon from '../assets/dragon.svg';
import electric from '../assets/electric.svg';
import fairy from '../assets/fairy.svg';
import fighting from '../assets/fighting.svg';
import fire from '../assets/fire.svg';
import flying from '../assets/flying.svg';
import ghost from '../assets/ghost.svg';
import grass from '../assets/grass.svg';
import ground from '../assets/ground.svg';
import ice from '../assets/ice.svg';
import normal from '../assets/normal.svg';
import poison from '../assets/poison.svg';
import psychic from '../assets/psychic.svg';
import rock from '../assets/rock.svg';
import steel from '../assets/steel.svg';
import water from '../assets/water.svg';

export function imageType(name: string) {
  switch (name) {
    case 'bug':
      return bug;
    case 'dark':
      return dark;
    case 'dragon':
      return dragon;
    case 'electric':
      return electric;
    case 'fairy':
      return fairy;
    case 'fighting':
      return fighting;
    case 'fire':
      return fire;
    case 'flying':
      return flying;
    case 'ghost':
      return ghost;
    case 'grass':
      return grass;
    case 'ground':
      return ground;
    case 'ice':
      return ice;
    case 'normal':
      return normal;
    case 'poison':
      return poison;
    case 'psychic':
      return psychic;
    case 'rock':
      return rock;
    case 'steel':
      return steel;
    case 'water':
      return water;
    default:
      return null;
  }
}
