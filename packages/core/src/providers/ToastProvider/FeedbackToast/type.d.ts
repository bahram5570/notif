export interface FeedbackToastProps {
  visible: boolean;
  toastData: {
    message: string;
    description?: string;
    toastWithDescription?: boolean;
  } | null;
}
