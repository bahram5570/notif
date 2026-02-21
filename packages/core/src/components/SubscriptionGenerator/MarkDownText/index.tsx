import ReactMarkdown from 'react-markdown';

import { toPersianNumbers } from '../../../utils/numbers';
import { typographyFontStylesMaker } from '../../../utils/system';

import { useSystem } from '../../../hooks/useSystem';
import { MarkDownTextPropsType } from './types';

const MarkDownText = ({ markdown }: MarkDownTextPropsType) => {
  const { operatingSystem } = useSystem();

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
