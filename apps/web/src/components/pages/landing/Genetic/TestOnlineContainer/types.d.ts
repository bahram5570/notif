type StepsNames = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13';

export type GeneticTestOnlineQuestionTypes = {
  step: number;
  title: string;
  items: {
    [x: string]: any;
    title: string;
    score: number;
  }[];
};

export type GeneticTestOnlineQuestionListTypes = {
  [key in StepsNames]: GeneticTestOnlineQuestionTypes;
};

export type GeneticTestOnlineSessionTypes = {
  [key in keyof GeneticTestOnlineQuestionListTypes]: number;
};

export type GeneticTestOnlineResultTypes = {
  title: string;
  message: string;
};

export type GeneticTestOnlineResultListTypes = {
  result1: GeneticTestOnlineResultTypes;
  result2: GeneticTestOnlineResultTypes;
  result3: GeneticTestOnlineResultTypes;
};
