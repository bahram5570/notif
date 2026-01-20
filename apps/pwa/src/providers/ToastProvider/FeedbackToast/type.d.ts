export interface FeedbackToastProps {
  visible: boolean;
  shouldRender: boolean;
  toastData: {
    message: string;
    description?: string;
    toastWithDescription?: boolean;
  } | null;
}
