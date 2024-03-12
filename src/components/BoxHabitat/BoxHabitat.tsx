import { imageHabitat } from '../../utils/ImageHabitat.tsx';

import { Box } from './BoxHabitat.ts';

interface BoxHabitatProps {
  name: string;
}

export function BoxHabitat({ name }: BoxHabitatProps) {
  return (
    <Box key={name} image={imageHabitat(name)}>
      <div>{name?.replace(/[-]/g, ' ')}</div>
    </Box>
  );
}
