type PositionTypes = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
type NotifTypes = 'warning' | 'success' | 'error';

export type OptionTypes = {
  message: string;
  type?: NotifTypes;
  duration?: number;
  position?: PositionTypes;
  englishNumbers?: boolean;
  // icon?: 'info' | 'success' | 'error';
  style?: React.CSSProperties | undefined;
};

export type ToastTypes = {
  onToast: (v: OptionTypes) => void;
};

export type NotifyOptions = {
  message: string;
  duration?: number;
  type?: NotifTypes;
  englishNumbers?: boolean;
  style?: React.CSSProperties;
  position?: Extract<PositionTypes, 'top-right' | 'top-left' | 'bottom-center'>;
};

export type FeedbackOptions = {
  message: string;
  duration?: number;
  description?: string;
  toastWithDescription?: boolean;
};

export type ToastContextTypes = {
  notifyToastHandler: (options: NotifyOptions) => void;
  feedbackToastHandler: (options: FeedbackOptions) => void;
};
