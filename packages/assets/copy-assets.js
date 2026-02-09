import { filesCopyMaker } from '../core/src/utils/build/index.ts';

await filesCopyMaker({ source: 'src/shared', destination: '../../apps/pwa/public/assets' });
await filesCopyMaker({ source: 'src/shared', destination: '../../apps/web/public/assets' });
