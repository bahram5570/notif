'use client';

import { useEffect, useState } from 'react';
import { Answers, QuestionConfig, SubAnswers } from '../types';

export function useSurvey(questions: QuestionConfig[]) {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [subAnswers, setSubAnswers] = useState<SubAnswers>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);

  useEffect(() => {
    const a = sessionStorage.getItem('survey_answers');
    const sa = sessionStorage.getItem('survey_subanswers');
    const s = sessionStorage.getItem('survey_step');

    const f = sessionStorage.getItem('survey_first');
    const sc = sessionStorage.getItem('survey_second');

    setAnswers(a ? JSON.parse(a) : {});
    setSubAnswers(sa ? JSON.parse(sa) : {});
    setStep(s ? Number(s) : 0);

    if (f) setFirstNumber(Number(f));
    if (sc) setSecondNumber(Number(sc));

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    sessionStorage.setItem('survey_answers', JSON.stringify(answers));
    sessionStorage.setItem('survey_subanswers', JSON.stringify(subAnswers));
    sessionStorage.setItem('survey_step', String(step));

    if (firstNumber !== null) sessionStorage.setItem('survey_first', String(firstNumber));
    if (secondNumber !== null) sessionStorage.setItem('survey_second', String(secondNumber));
  }, [answers, subAnswers, step, isLoaded, firstNumber, secondNumber]);

  const setAnswer = (qId: string, v: string) => {
    const q = questions.find((q) => q.id === qId);
    const opt = q?.options.find((o) => o.value === v);

    setAnswers((prev) => ({ ...prev, [qId]: v }));

    if (q?.id === 'q1' && opt?.number) {
      setFirstNumber(opt.number);
    }
    if (q?.id === 'q2' && opt?.number) {
      setSecondNumber(opt.number);
    }

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

    if (qId === 'q1') {
      const q = questions.find((q) => q.id === qId);
      const mainVal = answers[qId];
      const opt = q?.options.find((o) => o.value === mainVal);
      const sub = opt?.subOptions?.find((s) => s.value === v);

      if (sub?.number) setFirstNumber(sub.number);
    }
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
    firstNumber,
    secondNumber,
    setAnswer,
    setSubAnswer,
    next,
    back,
    isLoaded,
  };
}
