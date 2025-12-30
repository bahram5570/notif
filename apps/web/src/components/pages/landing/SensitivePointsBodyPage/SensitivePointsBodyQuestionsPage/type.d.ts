export type AnswersType = {
  answer: string;
  score: number;
};

export type SensitiveQuestionDataType = {
  question: string;
  image: string;
  answers: AnswersType[];
};
