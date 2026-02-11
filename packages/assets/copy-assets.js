import { filesCopyMaker } from '../core/copyFilesHandler.js';

await filesCopyMaker({ source: 'src/shared', destination: '../../apps/pwa/public/assets', packageName: 'pwa assets' });
await filesCopyMaker({ source: 'src/shared', destination: '../../apps/web/public/assets', packageName: 'web assets' });
