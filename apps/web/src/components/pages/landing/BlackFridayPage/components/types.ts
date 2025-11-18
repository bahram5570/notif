
export type SubOption = {
  label: string;
  value: string;
};

export type QuestionOption = {
  label: string;
  value: string;
  subOptions?: SubOption[];
};

export type QuestionConfig = {
  id: string;
  title: string;
  options: QuestionOption[];
};

export type Answers = Record<string, string | null>;
export type SubAnswers = Record<string, string | null>;

export type RewardData = {
  image: string;
  description: string;
  title: string;
  discountCode: string;
};
