Overview:

This is a monorepo project structured using Turborepo, containing multiple applications (web, pwa) and shared packages (components, assets, core).
Each app can be developed, built, and exported independently, while still sharing code through the packages directory.

Folder and File Structure:

root/
│
├── apps/
│ └── ...
│
├── packages/
│ └── ...
│
├── package.json # Monorepo root configuration and scripts
└── turbo.json # Turborepo pipeline configuration

Scripts:

npm run lint → Runs ESLint across all apps and packages.  
npm run format → Applies Prettier formatting to the entire codebase.

npm run packages:build → Builds all shared packages before apps.  
npm run components:build → Builds the `components` package.  
npm run assets:build → Builds the `assets` package.  
npm run core:build → Builds the `core` package.

npm run web:build → Builds packages, installs dependencies in `apps/web`, and builds the Web app.  
npm run web:dev → Starts the Web app in development mode.  
npm run web:start → Starts the Web app in production mode.  
npm run web:install → Installs dependencies for the Web app.  
npm run web:test:unit → Runs unit tests for the Web app.  
npm run web:export → Exports the Web app and processes it with `export-maker-file.js`.

npm run pwa:build → Builds packages, installs dependencies in `apps/pwa`, and builds the PWA app.  
npm run pwa:dev → Starts the PWA app in development mode.  
npm run pwa:start → Starts the PWA app in production mode.  
npm run pwa:install → Installs dependencies for the PWA app.  
npm run pwa:test:unit → Runs unit tests for the PWA app.  
npm run pwa:export → Exports the PWA app and processes it with `export-maker-file.js`.
