import { imageType } from '../../utils/ImageType.tsx';

import { Box } from './BoxType.ts';

interface BoxTypeProps {
  name: string;
}

export function BoxType({ name }: BoxTypeProps) {
  return (
    <Box key={name} image={imageType(name)}>
      <div>{name?.replace(/[-]/g, ' ')}</div>
    </Box>
  );
}
