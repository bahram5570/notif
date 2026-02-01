import { useTypographyMaker } from '../../../hooks/useTypographyMaker';
import { CustomTypographyTypes } from './types';

export const CustomTypography = ({
  direction = 'rtl',
  numbersMode,
  className,
  children,
  fontSize,
  style,
  testId,
}: CustomTypographyTypes) => {
  const { typographyFontStyles, result } = useTypographyMaker({ children, fontSize, numbersMode });

  return (
    <p
      dir={direction}
      data-testid={testId}
      style={{ ...typographyFontStyles, ...style }}
      className={`select-none w-fit h-fit whitespace-pre-line ${className}`}
    >
      {result}
    </p>
  );
};
