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

// # api
await filesCopyMaker({
  source: 'src/api',
  packageName: 'web api',
  destination: '../../apps/web/src/app',
});
await filesCopyMaker({
  source: 'src/api',
  packageName: 'web api',
  destination: '../../apps/pwa/src/app',
});
await filesCopyMaker({
  source: 'src/api',
  packageName: 'web api',
  destination: '../../apps/men-pwa/src/app',
});
