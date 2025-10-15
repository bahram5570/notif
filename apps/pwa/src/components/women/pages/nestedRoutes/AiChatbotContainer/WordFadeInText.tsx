import { parseFormattedText } from './utils';

import useTheme from '@hooks/useTheme';

const WordFadeInText = ({ text }: { text: string }) => {
  const { typography } = useTheme();
  const lines = text.split(/\\n|\n/);
  let globalWordIndex = 0;

  function decodeUnicode(str: string) {
    return str.replace(/\\u([\dA-F]{4})/gi, (_, g1) => String.fromCharCode(parseInt(g1, 16)));
  }

  return (
    <div dir="rtl" className="text-right mr-3">
      {lines.map((line, lineIndex) => {
        const formattedLine = parseFormattedText(line);

        const parts = formattedLine.split(/(\s+)/).filter((word) => word.trim().length > 0 || word === ' ');

        return (
          <div key={lineIndex} className="flex flex-wrap items-center mb-2">
            {parts.map((part, i) => {
              const delay = globalWordIndex * 0.1;
              globalWordIndex += 1;

              return (
                <p
                  key={`${lineIndex}-${i}`}
                  className="opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${delay}s`,
                    display: 'inline',
                    ...typography.Body.Large,
                  }}
                  dangerouslySetInnerHTML={{ __html: decodeUnicode(part).replace(/\n/g, '<br/>') }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordFadeInText;
