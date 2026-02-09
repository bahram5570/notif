import { filesCopyMaker } from './src/utils/build/index.ts';

await filesCopyMaker({ source: 'src/theme/theme.css', destination: './dist/theme' });
await filesCopyMaker({ source: 'src/theme/tailwind.config.ts', destination: './dist/theme' });
