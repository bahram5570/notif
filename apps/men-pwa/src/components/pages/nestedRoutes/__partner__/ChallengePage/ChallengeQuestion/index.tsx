import { useRef, useState } from 'react';

import { TextareaInput } from '@repo/core/components/partner/CreateMemoryForm';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ChallengeBtn from '../ChallengeBtn';
import { ChallengeQuestionPropsType } from './type';

const ChallengeQuestion = ({ avatarUrl, helper, question, id, btn }: ChallengeQuestionPropsType) => {
  const [answerValue, setAnswerValue] = useState('');

  const textareaConainerRef = useRef<HTMLDivElement | null>(null);

  const onChangeHandler = (v: string) => {
    setAnswerValue(v);
  };

  return (
    <>
      <div className="flex flex-col justify-end items-end gap-2 mt-4" ref={textareaConainerRef}>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {question}
        </CustomTypography>

        <div className="flex w-full flex-row-reverse gap-1">
          <CustomImage src={avatarUrl} className="w-8 h-8 rounded-full !object-cover" />
          <div className="flex w-full ">
            <TextareaInput
              placeholder={helper}
              name="answerValue"
              rows={2}
              value={answerValue}
              onChangeHandler={onChangeHandler}
              className="outline-impo_PrimaryMan_PrimaryMan"
            />
          </div>
        </div>
      </div>
      <ChallengeBtn question={question} id={id} answerValue={answerValue} btn={btn} />
    </>
  );
};

export default ChallengeQuestion;
