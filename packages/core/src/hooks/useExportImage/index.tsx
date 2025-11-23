import { getFontEmbedCSS, toBlob, toCanvas, toJpeg, toPixelData, toPng, toSvg } from 'html-to-image';

import { convertHtmlToImagePropsType } from './type';

const useExportImage = () => {
  const convertHtmlToImage = async ({ HTMLElement, type = 'png', width, height }: convertHtmlToImagePropsType) => {
    if (!HTMLElement) return;

    const options = {
      cacheBust: true,
      pixelRatio: Math.min(window.devicePixelRatio, 3),
      width: width || HTMLElement.offsetWidth,
      height: height || HTMLElement.offsetHeight,
    };

    let dataUrl;

    switch (type) {
      case 'png':
        dataUrl = await toPng(HTMLElement, options);
        break;

      case 'jpeg':
        dataUrl = await toJpeg(HTMLElement, options);
        break;

      case 'blob':
        dataUrl = await toBlob(HTMLElement, options);
        break;

      case 'svg':
        dataUrl = await toSvg(HTMLElement, options);
        break;

      case 'canvas':
        dataUrl = await toCanvas(HTMLElement, options);
        break;

      case 'getFontEmbedCSS':
        dataUrl = await getFontEmbedCSS(HTMLElement, options);
        break;

      case 'toPixelData':
        dataUrl = await toPixelData(HTMLElement, options);
        break;
    }

    return dataUrl;
  };

  return { convertHtmlToImage };
};

export default useExportImage;
