import { sizesMaker } from './__utils__';

import { Dark_SpinnerTypes } from './types';

const Dark_Spinner = ({ className, size }: Dark_SpinnerTypes) => {
  const sizes = sizesMaker(size);
  const defaultBorderColor = className?.includes('border-') ? '' : 'border-impo_Primary_OnPrimary';

  return (
    <div
      style={{ ...sizes }}
      className={`rounded-full border-[2px] !border-b-impo_Transparent animate-spin ${defaultBorderColor} ${className}`}
    />
  );
};

export default Dark_Spinner;
