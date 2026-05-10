import dotenv from 'dotenv';

import { exportMaker } from '../../packages/copyFilesHandler/index.js';

dotenv.config();

exportMaker({ appName: 'web', port: 3000, version: process.env.NEXT_PUBLIC_APP_VERSION || '' });
