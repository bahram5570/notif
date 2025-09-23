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

export type GeneticTestOnlineResultSectionItem = {
  icon: string;
  title: string;
};

export type GeneticTestOnlineResultSection1 = {
  title: string;
  text: string;
  intro: string;
};

export type GeneticTestOnlineResultSection2 = {
  title: string;
  icon: string;
  text: string;
  btnName: string;
  btnUrl: string;
};

export type GeneticTestOnlineResultTypes = {
  id: number;
  color: string;
  header: {
    title: string;
    description: string;
  };

  section1: GeneticTestOnlineResultSection1;
  section2: GeneticTestOnlineResultSection2[];
  footer: {
    title: string;
    text: string;
  };
};

export type GeneticTestOnlineResultListTypes = {
  result1: GeneticTestOnlineResultTypes;
  result2: GeneticTestOnlineResultTypes;
  result3: GeneticTestOnlineResultTypes;
};
