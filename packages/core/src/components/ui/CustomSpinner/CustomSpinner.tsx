import { CustomSpinnerTypes } from './types';

export const CustomSpinner = ({ className, size }: CustomSpinnerTypes) => {
  const selectedSize = size || '24px';
  const sizes = { width: selectedSize, minWidth: selectedSize, height: selectedSize, minHeight: selectedSize };

  const defaultBorderColor = className?.includes('border-') ? '' : 'border-impo_Primary_OnPrimary';

  return (
    <div
      style={{ ...sizes }}
      className={`rounded-full border-[2px] !border-b-impo_Transparent animate-spin ${defaultBorderColor} ${className}`}
    />
  );
};
