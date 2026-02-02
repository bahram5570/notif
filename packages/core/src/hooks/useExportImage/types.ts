export type ConvertHtmlToImageType = {
  type?: 'blob' | 'png' | 'getFontEmbedCSS' | 'canvas' | 'jpeg' | 'toPixelData' | 'svg';
  HTMLElement: HTMLDivElement | null;
  height?: number;
  width?: number;
};
