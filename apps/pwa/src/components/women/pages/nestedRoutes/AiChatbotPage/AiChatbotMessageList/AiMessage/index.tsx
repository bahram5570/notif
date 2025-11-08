import { useEffect, useState } from 'react';

import { parseFormattedText } from './utils';

import { SHOW_SUGGESTED_QUESTION } from '@constants/ai.constants';
import useTheme from '@hooks/useTheme';

import SuggestedQuestions from '../../Suggestedquestions';
import AiMessageActions from './AiMessageActions';
import WordFadeInText from './WordFadeInText';
import { AiMessagePropsType } from './type';

const AiMessage = (props: AiMessagePropsType) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { typography } = useTheme();
  const formattedLine = parseFormattedText(props.text);
  const showSuggestedQuestion = sessionStorage.getItem(SHOW_SUGGESTED_QUESTION);

  const animationEndHandler = (v: boolean) => {
    setIsAnimating(v);
    sessionStorage.setItem(SHOW_SUGGESTED_QUESTION, 'true');

    if (props.messageId) {
      props.disableDeleteBtnHandler(true);
    }
  };

  const animationStartHandler = () => {
    props.disableDeleteBtnHandler(false);
  };

  const onClick = (text: string) => {
    sessionStorage.removeItem(SHOW_SUGGESTED_QUESTION);
    props.defaultQustionHandler(text);
  };

  useEffect(() => {
    if (props.isAnswered) {
      animationEndHandler(true);
    }
  }, [props.isAnswered]);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col w-full gap-4">
        {props.isAnswered ? (
          <WordFadeInText
            text={props.text}
            animationEndHandler={animationEndHandler}
            animationStartHandler={animationStartHandler}
          />
        ) : (
          <p
            className="z-30 rounded-3xl  pt-3"
            style={{
              direction: 'rtl',
              ...typography.Body.Medium,
              whiteSpace: 'pre-wrap',
            }}
            dangerouslySetInnerHTML={{ __html: formattedLine.replace(/\n/g, '<br/>') + '&nbsp;' }}
          />
        )}
        {!isAnimating && <AiMessageActions {...props} />}
      </div>

      {showSuggestedQuestion && props.isLastItem && !isAnimating && (
        <SuggestedQuestions messageId={props.messageId} defaultQustionHandler={onClick} />
      )}
    </div>
  );
};

export default AiMessage;
