import { heicConverter } from '../../../../../lib/heicConverter';

export const handleHttpImage = async (src: string) => {
  const isHeic = detectHeic(src);

  if (isHeic) {
    return await jpegMaker(src);
  }

  return src;
};

export const handleLocalImage = async (src: string) => {
  const isHeic = detectHeic(src);

  if (isHeic) {
    return await jpegMaker(src);
  }

  return src;
};

export const handleImageName = async (src: string, imageApi: string | undefined) => {
  const apiSegment = imageApi || 'file';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${apiSegment}/${src}`;
  const isHeic = detectHeic(src);

  if (isHeic) {
    return await jpegMaker(url);
  }

  return url;
};

const jpegMaker = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error();
  }

  let blob = await res.blob();
  blob = await heicConverter(blob);
  return URL.createObjectURL(blob);
};

const detectHeic = (url: string) => {
  return url.toLowerCase().includes('.heic') || url.toLowerCase().includes('.heif');
};
