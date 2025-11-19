'use client';

import { FC } from 'react';

import { useRouter } from 'next/navigation';

import SurveyFooter from './SurveyFooter';
import SurveyHeader from './SurveyHeader';
import SurveyOptions from './SurveyOptions';
import { useSurvey } from './useSurvey';

type Props = {
  survey: ReturnType<typeof useSurvey>;
  nextRoute: string;
};

const Survey: FC<Props> = ({ survey, nextRoute }) => {
  const router = useRouter();
  const { isLoaded, step, questions, current, answers, subAnswers, next, back } = survey;

  if (!isLoaded) return null;

  const main = answers[current.id] || null;
  const selectedOption = current.options.find((o) => o.value === main);

  const ready = !!main && (!selectedOption?.subOptions || !!subAnswers[current.id]);
  const isLast = step === questions.length - 1;

  const handleNext = () => {
    if (!ready) return;
    if (isLast) router.push(nextRoute);
    else next();
  };

  return (
    <div className="w-full max-w-[500px] h-[100dvh] relative px-7 py-6">
      <SurveyHeader step={step} back={back} title={current.title} />

      <SurveyOptions current={current} answers={answers} subAnswers={subAnswers} survey={survey} />

      <SurveyFooter ready={ready} onNext={handleNext} />
    </div>
  );
};

export default Survey;
