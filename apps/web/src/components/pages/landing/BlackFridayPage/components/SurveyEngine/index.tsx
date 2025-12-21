'use client';

import { FC, useEffect } from 'react';

import step1 from '@assets/images/blackFriday/step1.webp';
import step2 from '@assets/images/blackFriday/step2.webp';
import step3 from '@assets/images/blackFriday/step3.webp';

import CustomImage from '@components/ui/CustomImage';

import SurveyFooter from './SurveyFooter';
import SurveyHeader from './SurveyHeader';
import SurveyOptions from './SurveyOptions';
import useSubmit from './useSubmit';
import { useSurvey } from './useSurvey';

type Props = {
  survey: ReturnType<typeof useSurvey>;
  nextRoute: string;
};

const Survey: FC<Props> = ({ survey, nextRoute }) => {
  const { handleSubmit, isLoading } = useSubmit(nextRoute);

  const { isLoaded, step, questions, current, answers, subAnswers, next, back, firstNumber, secondNumber } = survey;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!isLoaded) return null;

  const main = answers[current.id] || null;
  const selectedOption = current.options.find((o) => o.value === main);

  const ready = !!main && (!selectedOption?.subOptions || !!subAnswers[current.id]);
  const isLast = step === questions.length - 1;

  const handleNext = () => {
    if (!ready) return;

    if (isLast) {
      const payload = {
        phone: String(sessionStorage.getItem('phone')),
        firstQuestion: firstNumber || 0,
        secondQuestion: secondNumber || 0,
        lastQuestion: selectedOption?.number || 0,
      };

      handleSubmit(payload);
    } else {
      next();
    }
  };

  return (
    <div className="w-full max-w-[500px] h-[100dvh] relative py-6">
      <div className="px-4">
        <SurveyHeader step={step} back={back} title={current.title} />

        <SurveyOptions current={current} answers={answers} subAnswers={subAnswers} survey={survey} />

        <SurveyFooter ready={ready} onNext={handleNext} isLoading={isLoading} />
      </div>

      {step === 0 && <CustomImage alt="step0" src={step1} />}
      {step === 1 && <CustomImage alt="step1" src={step2} />}
      {step === 2 && <CustomImage alt="step2" src={step3} />}
    </div>
  );
};

export default Survey;
