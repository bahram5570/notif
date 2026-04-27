import dotenv from 'dotenv';

import { exportMaker } from '../../packages/copyFilesHandler/index.js';

dotenv.config();

exportMaker({ appName: 'men-pwa', port: 3002, version: process.env.NEXT_PUBLIC_APP_VERSION || '' });
