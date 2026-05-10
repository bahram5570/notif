import { filesCopyMaker } from '../copyFilesHandler/index.js';

// # assets
await filesCopyMaker({
  source: 'src/assets/shared',
  packageName: 'web assets',
  destination: '../../apps/web/public/assets',
});
await filesCopyMaker({
  source: 'src/assets/shared',
  packageName: 'pwa assets',
  destination: '../../apps/pwa/public/assets',
});
await filesCopyMaker({
  source: 'src/assets/shared',
  packageName: 'men-pwa assets',
  destination: '../../apps/men-pwa/public/assets',
});
