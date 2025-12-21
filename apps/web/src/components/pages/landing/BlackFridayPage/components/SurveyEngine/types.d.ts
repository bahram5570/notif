export type Option = {
  label: string;
  value: string;
  subOptions?: SubOption[];
};

export type SubOption = {
  label: string;
  value: string;
};

export type QuestionConfig = {
  id: string;
  title: string;
  options: Option[];
};

export type Answers = Record<string, string>;
export type SubAnswers = Record<string, string>;
