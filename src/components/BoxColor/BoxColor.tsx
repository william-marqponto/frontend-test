import { Box } from './BoxColor.ts';

interface BoxColorProps {
  name: string;
  color: string;
}

export function BoxColor({ name, color }: BoxColorProps) {
  return (
    <Box key={name} color={color}>
      <div>{name.replace(/[-]/g, ' ')}</div>
    </Box>
  );
}
