import { useCallback, useState } from 'react';

import { useCustomToast } from '@repo/core/hooks/useCustomToast';

import { DownloadImageOptions } from './types';

const useDownloadImage = ({ filename = 'story-impo.png' }: DownloadImageOptions = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const { notifyToastHandler } = useCustomToast();

  const downloadImage = useCallback(
    async (imageUrl: string) => {
      try {
        setIsLoading(true);

        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        notifyToastHandler({ type: 'success', message: 'عکس دانلود شد' });
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error('Download failed:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [filename],
  );

  return { downloadImage, isLoading };
};

export default useDownloadImage;
