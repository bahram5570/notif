import { useCallback } from 'react';

import useCustomToast from '@hooks/useCustomToast';
import useExportImage from '@repo/core/hooks/useExportImage/index';

import { DownloadImageOptions } from './types';

const useDownloadImage = () => {
  const { onToast } = useCustomToast();
  const { convertHtmlToImage } = useExportImage();

  const downloadImage = useCallback(
    async ({ element, height = 1080, filename = 'output.jpeg' }: DownloadImageOptions) => {
      if (!element) return;

      const container = document.createElement('div');
      // const impoLogo = document.getElementById('impoLogo');
      container.style.backgroundColor = '#ffffff';
      container.style.width = element.offsetWidth + 'px';
      container.style.height = height + 'px';
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      // impoLogo.style = 'flex';

      container.innerHTML = element.innerHTML;

      document.body.appendChild(container);

      const dataUrl = await convertHtmlToImage({
        HTMLElement: container,
        type: 'jpeg',
      });

      document.body.removeChild(container);

      if (!dataUrl) return;

      const link = document.createElement('a');
      link.href = dataUrl.toString();
      link.download = filename;
      link.click();
      onToast({ type: 'success', message: 'عکس دانلود شد' });
    },
    [convertHtmlToImage],
  );

  return { downloadImage };
};

export default useDownloadImage;
