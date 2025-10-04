import ReactMarkdown from 'react-markdown';

import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { MarkDownTextPropsType } from './type';

const MarkDownText = ({ markdown }: MarkDownTextPropsType) => {
  const { colors, typography } = useTheme();

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1
            style={{
              ...typography.Body.Small,
              color: colors.Neutral_Background,

              direction: 'rtl',
            }}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p
            style={{
              ...typography.Body.Small,
              color: colors.Neutral_Background,
              direction: 'rtl',
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li
            style={{
              ...typography.Body.Small,
              color: colors.Neutral_Background,
              direction: 'rtl',
              marginBottom: '6px',
            }}
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
        strong: ({ node, ...props }) => <strong style={{ color: colors.Neutral_Background }} {...props} />,
      }}
    >
      {toPersianNumbers(markdown)}
    </ReactMarkdown>
  );
};

export default MarkDownText;
