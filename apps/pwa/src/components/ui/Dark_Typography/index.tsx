import useTypographyMaker from '@hooks/useTypographyMaker';

import { Dark_TypographyTypes } from './types';

const Dark_Typography = ({
  children,
  fontSize,
  numbersMode,
  className,
  style,
  testId,
  direction = 'rtl',
}: Dark_TypographyTypes) => {
  const { typographyFontStyles, result } = useTypographyMaker({ children, fontSize, numbersMode });

  return (
    <p
      data-testid={testId}
      dir={direction}
      style={{ ...typographyFontStyles, ...style }}
      className={`select-none w-fit h-fit whitespace-pre-line r  ${className}`}
    >
      {result}
    </p>
  );
};

export default Dark_Typography;
