import ReactMarkdown from 'react-markdown';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import useOperatingSystem from '@repo/core/hooks/useOperatingSystem';

import { MarkDownTextPropsType } from './type';

const MarkDownText = ({ markdown }: MarkDownTextPropsType) => {
  const { operatingSystem } = useOperatingSystem();

  const fontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1
            style={{
              ...fontStyles,

              direction: 'rtl',
            }}
            className="text-impo_White"
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p
            style={{
              ...fontStyles,

              direction: 'rtl',
            }}
            className="text-impo_White"
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li
            style={{
              ...fontStyles,

              direction: 'rtl',
              marginBottom: '6px',
            }}
            className="text-impo_White"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            style={{
              direction: 'rtl', // make list RTL
              paddingRight: '20px', // add spacing for bullet
              listStyleType: 'disc', // normal bullets
            }}
            {...props}
          />
        ),
        strong: ({ node, ...props }) => <strong {...props} className="text-impo_White" />,
      }}
    >
      {toPersianNumbers(markdown)}
    </ReactMarkdown>
  );
};

export default MarkDownText;
