import { sizesMaker } from './__utils__';

import { SpinnerTypes } from './types';

const Spinner = ({ className, size }: SpinnerTypes) => {
  const sizes = sizesMaker(size);

  return (
    <div
      style={{ ...sizes }}
      className={`rounded-full border-[2px] border-impo_Primary_Primary !border-b-impo_Transparent animate-spin ${className}`}
    />
  );
};

export default Spinner;
