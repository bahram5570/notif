export const handleHttpImage = async (src: string) => {
  const isHeic = detectHeic(src);

  if (!isHeic) {
    return src;
  }

  const blob = await blobMaker(src);
  const result = await heicConverter(blob);
  return result;
};

export const handleLocalImage = async (src: string) => {
  const isHeic = detectHeic(src);

  if (!isHeic) {
    return src;
  }

  const blob = await blobMaker(src);
  const result = await heicConverter(blob);
  return result;
};

export const handleImageName = async (src: string, imageApi: string | undefined) => {
  const apiSegment = imageApi || 'file';
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${apiSegment}/${src}`;

  const isHeic = detectHeic(src);
  if (!isHeic) {
    return url;
  }

  const blob = await blobMaker(url);
  const result = await heicConverter(blob);
  return result;
};

const blobMaker = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error();
  }

  const blob = await res.blob();
  return blob;
};

const detectHeic = (url: string) => {
  return url.toLowerCase().includes('.heic') || url.toLowerCase().includes('.heif');
};

const heicConverter = async (blob: Blob) => {
  const heic2any = (await import('heic2any')).default;
  const convertedBlob = (await heic2any({ blob, toType: 'image/jpeg' })) as Blob;

  const result = URL.createObjectURL(convertedBlob);
  return result;
};
