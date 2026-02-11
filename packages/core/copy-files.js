import { filesCopyMaker } from './copyFilesHandler.js';

await filesCopyMaker({ source: 'src/theme/theme.css', destination: './dist/theme', packageName: 'theme.css' });
await filesCopyMaker({
  source: 'src/theme/tailwind.config.ts',
  packageName: 'tailwind.config.ts',
  destination: './dist/theme',
});
