export const heicConverter = async (blob: Blob) => {
  const { heicTo } = await import('heic-to');
  const convertedBlob = await heicTo({ blob, type: 'image/jpeg' });
  return convertedBlob;
};
