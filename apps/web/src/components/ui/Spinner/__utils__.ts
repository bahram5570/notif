import { SpinnerTypes } from './types';

export const sizesMaker = (size: Pick<SpinnerTypes, 'size'>['size']) => {
  const selectedSize = size || 24;
  return { width: selectedSize, minWidth: selectedSize, height: selectedSize, minHeight: selectedSize };
};
