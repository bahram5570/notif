import { parseFormattedText } from '../utils';

import TextBlock from '../../TextBlock';
import { WordFadeInTextPropsType } from './type';

const WordFadeInText = ({ animationEndHandler, text, animationStartHandler }: WordFadeInTextPropsType) => {
  const lines = text.split(/\\n|\n/);
  let globalWordIndex = 0;

  return (
    <div dir="rtl" className="text-right ">
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
                <TextBlock
                  text={part}
                  isAnimated={true}
                  key={`${lineIndex}-${i}`}
                  onAnimationEnd={isLast ? () => animationEndHandler(false) : undefined}
                  onAnimationStart={animationStartHandler}
                  animationDelay={delay}
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
