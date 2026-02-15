import { useTypographyMaker } from '../../../hooks/useTypographyMaker';
import { CustomTypographyTypes } from './types';

export const CustomTypography = ({
  direction = 'rtl',
  numbersMode,
  className,
  children,
  fontSize,
  tagType,
  testId,
  style,
}: CustomTypographyTypes) => {
  const { typographyFontStyles, result } = useTypographyMaker({ children, fontSize, numbersMode });

  const Tag = tagType || 'p';

  return (
    <Tag
      dir={direction}
      data-testid={testId}
      style={{ ...typographyFontStyles, ...style }}
      className={`select-none w-fit h-fit whitespace-pre-line ${className}`}
    >
      {result}
    </Tag>
  );
};
