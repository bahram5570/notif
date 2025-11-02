import { useEffect, useState } from 'react';

import { parseFormattedText } from './utils';

import useTheme from '@hooks/useTheme';

import SuggestedQuestions from '../../Suggestedquestions';
import AiMessageActions from './AiMessageActions';
import WordFadeInText from './WordFadeInText';
import { AiMessagePropsType } from './type';

const AiMessage = (props: AiMessagePropsType) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { typography } = useTheme();
  const formattedLine = parseFormattedText(props.text);
  const showSuggestedQuestion = sessionStorage.getItem('showSuggestedQuestion');

  const animationEndHandler = (v: boolean) => {
    setIsAnimating(v);
    sessionStorage.setItem('showSuggestedQuestion', 'true');
  };

  const onClick = (text: string) => {
    sessionStorage.removeItem('showSuggestedQuestion');
    props.defaultQustionHandler(text);
  };

  useEffect(() => {
    if (props.isAnswered) {
      animationEndHandler(true);
    }
  }, [props.isAnswered]);

  return (
    <div className="flex flex-col w-full gap-4">
      {props.isAnswered ? (
        <WordFadeInText text={props.text} animationEndHandler={animationEndHandler} />
      ) : (
        <p
          className="z-30 rounded-3xl pl-4 py-3"
          style={{
            direction: 'rtl',
            ...typography.Body.Large,
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: formattedLine.replace(/\n/g, '<br/>') + '&nbsp;' }}
        />
      )}
      {!isAnimating && <AiMessageActions {...props} />}

      {showSuggestedQuestion && props.isLastItem && !isAnimating && (
        <SuggestedQuestions messageId={props.messageId} defaultQustionHandler={onClick} />
      )}
    </div>
  );
};

export default AiMessage;
