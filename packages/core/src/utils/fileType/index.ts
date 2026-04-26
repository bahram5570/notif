import imageCompression from 'browser-image-compression';

import heic2any from 'heic2any';

export const chatFileTypeDetector = (fileName: string) => {
  const imageTypes = ['png', 'jpg', 'jpeg', 'webp'];
  const voiceTypes = ['mp3', 'wav', 'ogg', 'flac', 'aac'];
  const fileTypes = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt'];

  const stringList = fileName.split('.');
  const typeName = stringList[stringList.length - 1].toLocaleLowerCase();
  const isImageType = imageTypes.includes(typeName);
  const isVoiceType = voiceTypes.includes(typeName);
  const isFileType = fileTypes.includes(typeName);

  return { isImageType, isVoiceType, isFileType };
};

export const imageFormatHandler = async (file: File) => {
  const isHeicFile = file.name.toLowerCase().includes('.heic');

  if (!isHeicFile) {
    return file;
  }

  const conversionResult = await heic2any({ blob: file, toType: 'image/jpeg', quality: 1 });
  const jpegBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
  const filename = file.name.split('.')[0] + '.jpeg';

  const convertedImage = new File([jpegBlob], filename, { type: jpegBlob.type });
  return convertedImage;
};

export const compressImageHandler = async (file: File, maxSizeKB: number) => {
  const maxSizeMB = maxSizeKB / 1024; // # According to MB;
  const maxWidthOrHeight = 1024;

  const compressedFile = await imageCompression(file, { maxWidthOrHeight, maxSizeMB });
  return compressedFile;
};
