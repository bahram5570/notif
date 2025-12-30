export type ExerciseType = {
  title: string;

  description: string;
  image: string;
};

export type ResultItemType = {
  title: string;
  imageHeader: string;
  description: string;
  exercise: ExerciseType[];
};

export type ResultDataType = Record<ResultLevelEnum, ResultItemType>;
