import { Dark_SpinnerTypes } from './types';

export const sizesMaker = (size: Pick<Dark_SpinnerTypes, 'size'>['size']) => {
  const selectedSize = size || 24;
  return { width: selectedSize, minWidth: selectedSize, height: selectedSize, minHeight: selectedSize };
};
