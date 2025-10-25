import { useEffect, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import ChallengeBtn from '../ChallengeBtn';
import { ChallengeQuestionPropsType } from './type';

const ChallengeQuestion = ({ avatarUrl, helper, question, id, btn }: ChallengeQuestionPropsType) => {
  const [answerValue, setAnswerValue] = useState('');
  const { colors } = useTheme();
  const [btnTop, setBtnTop] = useState<number>();
  const textareaConainerRef = useRef<HTMLDivElement | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerValue(e.target.value);
  };

  useEffect(() => {
    if (!answerValue) return;
    const el = textareaConainerRef.current;
    if (el) {
      const elTop = el.getBoundingClientRect().top;
      const elHeight = el.offsetHeight;
      const elPaddingTop = 3;

      setBtnTop(elTop + elHeight + elPaddingTop);
    }
  }, [answerValue]);

  return (
    <>
      <div className="flex flex-col justify-end items-end gap-2 mt-4" ref={textareaConainerRef}>
        <Typography scale="Body" size="Medium">
          {question}
        </Typography>
        <div className="flex w-full flex-row-reverse gap-1">
          <CustomImage src={avatarUrl} className="w-8 h-8 rounded-full !object-cover" />
          <div className="flex w-full ">
            <textarea
              placeholder={helper}
              className="w-full  text-end px-4 py-3 rounded-xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm"
              style={{ background: colors.Surface_SurfaceVariant, outlineColor: colors.PrimaryWoman_Primary }}
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
