import { useEffect, useState } from 'react';

import { parseFormattedText } from './utils';

import { SHOW_SUGGESTED_QUESTION } from '@constants/ai.constants';

import SuggestedQuestions from '../../Suggestedquestions';
import TextBlock from '../TextBlock';
import AiMessageActions from './AiMessageActions';
import WordFadeInText from './WordFadeInText';
import { AiMessagePropsType } from './type';

const AiMessage = (props: AiMessagePropsType) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const formattedLine = parseFormattedText(props.text);
  const showSuggestedQuestion =
    typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(SHOW_SUGGESTED_QUESTION);

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
        {props.isAnswered && props.isLastItem ? (
          <WordFadeInText
            text={formattedLine}
            animationEndHandler={animationEndHandler}
            animationStartHandler={animationStartHandler}
          />
        ) : (
          <TextBlock text={formattedLine} isAnimated={props.isAnswered} style={{ direction: 'rtl' }} />
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
