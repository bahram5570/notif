import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import ChallengeBtn from '../ChallengeBtn';
import { ChallengeQuestionPropsType } from './type';

const ChallengeQuestion = ({ avatarUrl, helper, question, id, btn }: ChallengeQuestionPropsType) => {
  const [answerValue, setAnswerValue] = useState('');

  const [btnTop, setBtnTop] = useState<number>();
  const textareaConainerRef = useRef<HTMLDivElement | null>(null);
  const { operatingSystem } = useOperatingSystem();

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerValue(e.target.value);
  };

  useEffect(() => {
    if (!answerValue) return;
    const el = textareaConainerRef.current;
    if (el) {
      const elTop = el.getBoundingClientRect().top;
      const elHeight = el.offsetHeight;
      const elPaddingTop = operatingSystem === 'ios' ? 120 : 20;

      setBtnTop(elTop + elHeight + elPaddingTop);
    }
  }, [answerValue]);

  return (
    <>
      <div className="flex flex-col justify-end items-end gap-2 mt-4" ref={textareaConainerRef}>
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          {question}
        </Dark_Typography>

        <div className="flex w-full flex-row-reverse gap-1">
          <CustomImage src={avatarUrl} className="w-8 h-8 rounded-full !object-cover" />
          <div className="flex w-full ">
            <textarea
              placeholder={helper}
              className="w-full  text-end px-4 py-3 rounded-xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm  outline-impo_Primary_Primary bg-impo_Neutral_Surface text-impo_Neutral_OnSurface "
              value={answerValue}
              maxLength={500}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <ChallengeBtn question={question} id={id} answerValue={answerValue} btn={btn} btnTop={btnTop} />
    </>
  );
};

export default ChallengeQuestion;
