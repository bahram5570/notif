import { parseFormattedText } from './utils';

import useTheme from '@hooks/useTheme';

import AiMessageActions from './AiMessageActions';
import WordFadeInText from './WordFadeInText';
import { AiMessagePropsType } from './type';

const AiMessage = (props: AiMessagePropsType) => {
  const { typography } = useTheme();
  const formattedLine = parseFormattedText(props.text);
  return (
    <div className="flex flex-col w-full gap-4">
      {props.isAnswered ? (
        <WordFadeInText text={props.text} />
      ) : (
        <p
          className="z-30 rounded-3xl px-5 py-3"
          style={{
            direction: 'rtl',
            ...typography.Body.Large,
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: formattedLine.replace(/\n/g, '<br/>') + '&nbsp;' }}
        />
      )}

      <AiMessageActions {...props} />
    </div>
  );
};

export default AiMessage;
