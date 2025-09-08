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
