import { useCallback, useState } from 'react';

import logo from '@assets/images/blackFriday/logo.jpeg';

import useCustomToast from '@hooks/useCustomToast';
import useExportImage from '@repo/core/hooks/useExportImage/index';

import { DownloadImageOptions } from './types';

const useDownloadImage = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const { onToast } = useCustomToast();
  const { convertHtmlToImage } = useExportImage();

  const downloadImage = useCallback(
    async ({ element, filename = 'story-impo.jpeg' }: DownloadImageOptions) => {
      setIsLoading(true);
      if (!element) return;

      const W = 1080;
      const H = 1920;

      const container = document.createElement('div');
      container.style.width = W + 'px';
      container.style.height = H + 'px';
      container.style.background = '#ffffff';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.zIndex = '-999999999';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'space-between';
      container.style.padding = '80px 16px 120px 16px';

      const wrapper = document.createElement('div');
      wrapper.style.width = '100%';
      wrapper.style.maxWidth = '900px';

      const cloned = element.cloneNode(true) as HTMLElement;
      cloned.style.width = '100%';
      if (window.innerWidth < 500) {
        cloned.style.zoom = '3';
      } else {
        cloned.style.zoom = '1';
      }

      wrapper.appendChild(cloned);
      container.appendChild(wrapper);

      const logoEl: any = document.createElement('img');
      logoEl.src = logo.src || logo;
      logoEl.style.width = '160px';
      logoEl.style.height = '80px';

      container.appendChild(logoEl);

      document.body.appendChild(container);

      const dataUrl = await convertHtmlToImage({
        HTMLElement: container,
        type: 'jpeg',
        width: W,
        height: H,
      });

      document.body.removeChild(container);

      if (!dataUrl) return;

      const link = document.createElement('a');
      link.href = dataUrl.toString();
      link.download = filename;
      link.click();

      onToast({ type: 'success', message: 'عکس دانلود شد' });
      setIsLoading(false);
    },
    [convertHtmlToImage],
  );

  return { downloadImage, isLoading };
};

export default useDownloadImage;
