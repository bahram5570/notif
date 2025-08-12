import fs from 'fs-extra';
import path from 'path';

export const exportMaker = async (props: { appName: string; port: number }) => {
  const distName = `${props.appName}-dist`;

  const rootDir = process.cwd();
  const distDir = path.join(rootDir, distName);
  const publicSrc = path.join(rootDir, 'public');
  const staticSrc = path.join(rootDir, '.next', 'static');
  const standaloneSrc = path.join(rootDir, '.next', 'standalone');

  const appDir = path.join(distDir, 'apps', props.appName);
  const nextDir = path.join(appDir, '.next');

  try {
    await fs.remove(distDir);
    await fs.copy(standaloneSrc, distDir);
    await fs.copy(publicSrc, path.join(appDir, 'public'));
    await fs.copy(staticSrc, path.join(nextDir, 'static'));

    const packageJsonContent = {
      name: props.appName,
      private: true,
      scripts: {
        start: `set PORT=${props.port} && node apps/${props.appName}/server.js`,
      },
    };

    await fs.writeJson(path.join(distDir, 'package.json'), packageJsonContent, { spaces: 2 });

    console.log(`✅ Build "${distName}" completed successfully!`);
  } catch (error) {
    console.error(`❌ Build "${distName}" failed: `, error);
    process.exit(1);
  }
};

export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};
