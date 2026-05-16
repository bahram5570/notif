import imageCompression from 'browser-image-compression';

import { heicConverter } from '@repo/core/lib/heicConverter';

export const useOptimizeImageFile = () => {
  const optimizeImageFile = async (file: File) => {
    let fileName = file.name;
    const isHeic = fileName.toLowerCase().includes('.heic') || fileName.toLowerCase().includes('.heif');

    if (isHeic) {
      const convertedBlob = await heicConverter(file);

      fileName = fileName.split('.')[0] + '.jpg';
      const convertedFile = new File([convertedBlob], fileName, { type: 'image/jpeg' });
      file = convertedFile;
    }

    const compressedFile = (await imageCompression(file, {
      useWebWorker: false,
      initialQuality: 0.8,
      maxSizeMB: 300 / 1024,
      maxWidthOrHeight: 1024,
      alwaysKeepResolution: true,
    })) as Blob;

    return new File([compressedFile], fileName, { type: compressedFile.type });
  };

  return { optimizeImageFile };
};
