export type onSubmitType = (params: { rate: number; description?: string }) => void;

export type FeedbackModalPropsType = {
  title: string;
  onSubmit: onSubmitType;
  isLoading: boolean;
  isMan?: boolean;
};
