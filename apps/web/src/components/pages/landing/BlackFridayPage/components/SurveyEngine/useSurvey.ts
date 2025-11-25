'use client';

import { useEffect, useState } from 'react';

import { Answers, QuestionConfig, SubAnswers } from '../types';

export function useSurvey(questions: QuestionConfig[]) {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [subAnswers, setSubAnswers] = useState<SubAnswers>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const a = sessionStorage.getItem('survey_answers');
    const sa = sessionStorage.getItem('survey_subanswers');
    const s = sessionStorage.getItem('survey_step');

    setAnswers(a ? JSON.parse(a) : {});
    setSubAnswers(sa ? JSON.parse(sa) : {});
    setStep(s ? Number(s) : 0);

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    sessionStorage.setItem('survey_answers', JSON.stringify(answers));
    sessionStorage.setItem('survey_subanswers', JSON.stringify(subAnswers));
    sessionStorage.setItem('survey_step', String(step));
  }, [answers, subAnswers, step, isLoaded]);

  const setAnswer = (qId: string, v: string) => {
    const q = questions.find((q) => q.id === qId);
    const opt = q?.options.find((o) => o.value === v);

    setAnswers((prev) => ({ ...prev, [qId]: v }));

    if (!opt?.subOptions) {
      setSubAnswers((prev) => {
        const updated = { ...prev };
        delete updated[qId];
        return updated;
      });
    }
  };

  const setSubAnswer = (qId: string, v: string) => {
    setSubAnswers((prev) => ({ ...prev, [qId]: v }));
  };

  const next = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return {
    step,
    questions,
    current: questions[step],
    answers,
    subAnswers,
    setAnswer,
    setSubAnswer,
    next,
    back,
    isLoaded,
  };
}
