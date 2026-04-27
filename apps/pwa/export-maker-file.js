import dotenv from 'dotenv';

import { exportMaker } from '../../packages/copyFilesHandler/index.js';

dotenv.config();

exportMaker({ appName: 'pwa', port: 3001, version: process.env.NEXT_PUBLIC_APP_VERSION || '' });
