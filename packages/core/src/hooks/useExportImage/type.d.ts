import type { getFontEmbedCSS, toBlob, toCanvas, toJpeg, toPixelData, toPng, toSvg } from 'html-to-image';

type ExportType = 'blob' | 'png' | 'getFontEmbedCSS' | 'canvas' | 'jpeg' | 'toPixelData' | 'svg';

export type convertHtmlToImagePropsType = {
  HTMLElement: HTMLDivElement | null;
  type?: ExportType;
  width?: number;
  height?: number;
};
