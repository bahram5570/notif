export type OptionTypes = {
  type?: 'warning' | 'success' | 'error';
  englishNumbers?: boolean;
  duration?: number;
  message: string;
  // icon?: 'info' | 'success' | 'error';
  position?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
  style?: React.CSSProperties | undefined;
};

export type ToastTypes = {
  onToast: (v: OptionTypes) => void;
};

export type NotifyOptions = {
  message: string;
  type?: 'success' | 'error' | 'warning';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-center';
  englishNumbers?: boolean;
  style?: React.CSSProperties;
};

export type FeedbackOptions = {
  message: string;
  description?: string;
  toastWithDescription?: boolean;
  duration?: number;
};

type ToastContextType = {
  notifyToastHandler: (options: NotifyOptions) => void;
  feedbackToastHandler: (options: FeedbackOptions) => void;
};
