import { filesCopyMaker } from '../copyFilesHandler/index.js';

await filesCopyMaker({ source: 'src/theme/theme.css', destination: './dist/theme', packageName: 'theme.css' });
await filesCopyMaker({
  source: 'src/theme/shared-styles.css',
  packageName: 'shared-styles.css',
  destination: './dist/theme',
});
await filesCopyMaker({
  source: 'src/theme/tailwind.config.ts',
  packageName: 'tailwind.config.ts',
  destination: './dist/theme',
});
