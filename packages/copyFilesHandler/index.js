import fse from 'fs-extra';
import fsp from 'fs/promises';
import path from 'path';

/**
 * @param {{ appName: string; port: number }}
 * @returns {Promise<void>}
 */
export const exportMaker = async ({ port, appName }) => {
  const distName = `${appName}-dist-1`;

  const rootDir = process.cwd();
  const distDir = path.join(rootDir, distName);
  const publicSrc = path.join(rootDir, 'public');
  const staticSrc = path.join(rootDir, '.next', 'static');
  const standaloneSrc = path.join(rootDir, '.next', 'standalone');

  const appDir = path.join(distDir, 'apps', appName);
  const nextDir = path.join(appDir, '.next');

  try {
    await fse.remove(distDir);
    await fse.copy(standaloneSrc, distDir);
    await fse.copy(publicSrc, path.join(appDir, 'public'));
    await fse.copy(staticSrc, path.join(nextDir, 'static'));

    const packageJsonContent = {
      name: appName,
      private: true,
      scripts: {
        start: `set PORT=${port} && node apps/${appName}/server.js`,
      },
    };

    await fse.writeJson(path.join(distDir, 'package.json'), packageJsonContent, { spaces: 2 });

    console.log(`✅ Build "${distName}" completed successfully!`);
  } catch (error) {
    console.error(`❌ Build "${distName}" failed: `, error);
    process.exit(1);
  }
};

/**
 * @param {{ source: string; destination: string; packageName: string }}
 * @returns {Promise<void>}
 */
export const filesCopyMaker = async ({ source, destination, packageName }) => {
  try {
    const src = path.resolve(process.cwd(), source);
    let dest = path.resolve(process.cwd(), destination);

    const srcStat = await fsp.stat(src);
    const destStat = await fsp.stat(dest).catch(() => null);

    if (srcStat.isDirectory() || (destStat && destStat.isDirectory())) {
      dest = path.join(dest, path.basename(src));
    }
    await fsp.mkdir(path.dirname(dest), { recursive: true });
    await fsp.cp(src, dest, { recursive: true, force: true });

    console.log(`✅ Copy "${packageName}" completed successfully!`);
  } catch (error) {
    console.error(`❌ Copy "${packageName}" failed: `, error);
    process.exit(1);
  }
};
