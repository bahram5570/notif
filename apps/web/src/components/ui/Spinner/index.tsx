import { colorMaker, sizesMaker } from './__utils__';

import { SpinnerTypes } from './types';

const Spinner = ({ className, size, color }: SpinnerTypes) => {
  const sizes = sizesMaker(size);
  const colors = colorMaker(color);

  return (
    <div
      style={{ ...sizes, ...colors }}
      className={`rounded-full border-[2px] !border-b-impo_Transparent animate-spin ${className}`}
    />
  );
};

export default Spinner;
