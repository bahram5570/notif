// components/campaign/SurveyEngine/useSurvey.ts
'use client';

import { useEffect, useState } from 'react';
import { Answers, QuestionConfig, SubAnswers } from '../types';


export function useSurvey(questions: QuestionConfig[]) {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [subAnswers, setSubAnswers] = useState<SubAnswers>({});

  useEffect(() => {
    const a = sessionStorage.getItem('survey_answers');
    const sa = sessionStorage.getItem('survey_subanswers');
    const s = sessionStorage.getItem('survey_step');

    if (a) setAnswers(JSON.parse(a));
    if (sa) setSubAnswers(JSON.parse(sa));
    if (s) setStep(Number(s));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('survey_answers', JSON.stringify(answers));
    sessionStorage.setItem('survey_subanswers', JSON.stringify(subAnswers));
    sessionStorage.setItem('survey_step', String(step));
  }, [answers, subAnswers, step]);

  const setAnswer = (qId: string, v: string) => {
    setAnswers((p) => ({ ...p, [qId]: v }));
  };

  const setSubAnswer = (qId: string, v: string) => {
    setSubAnswers((p) => ({ ...p, [qId]: v }));
  };

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
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
  };
}
