import { parseFormattedText } from '../utils';

import useTheme from '@hooks/useTheme';

import { WordFadeInTextPropsType } from './type';

const WordFadeInText = ({ animationEndHandler, text }: WordFadeInTextPropsType) => {
  const { typography } = useTheme();
  const lines = text.split(/\\n|\n/);
  let globalWordIndex = 0;

  function decodeUnicode(str: string) {
    return str.replace(/\\u([\dA-F]{4})/gi, (_, g1) => String.fromCharCode(parseInt(g1, 16))).replace(/\\"/g, '"');
  }

  const fullPlainText = decodeUnicode(text).replace(/\r\n/g, '\n');

  function handleCopy(e: React.ClipboardEvent) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', fullPlainText);
  }

  return (
    <div dir="rtl" className="text-right mr-3" onCopy={handleCopy}>
      {lines.map((line, lineIndex) => {
        const formattedLine = parseFormattedText(line);

        let parts;
        if (/<\/?[a-z][\s\S]*>/i.test(formattedLine)) {
          parts = [formattedLine];
        } else {
          parts = formattedLine.split(/(\s+)/).filter((word) => word.trim().length > 0 || word === ' ');
        }

        return (
          <div key={lineIndex} className="flex flex-wrap items-center mb-2">
            {parts.map((part, i) => {
              const isLast = i === parts.length - 1;
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
                  onAnimationEnd={isLast ? () => animationEndHandler(false) : undefined}
                >
                  {decodeUnicode(part).replace(/\n/g, '<br/>')}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WordFadeInText;
