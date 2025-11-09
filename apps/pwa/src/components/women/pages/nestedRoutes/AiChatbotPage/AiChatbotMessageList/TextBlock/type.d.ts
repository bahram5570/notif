export type TextBlockProps = {
  text: string;
  animationDelay?: number;
  isAnimated?: boolean;
  onAnimationEnd?: (v: boolean) => void;
  onAnimationStart?: () => void;
  className?: string;
  style?: React.CSSProperties;
  dir?: 'rtl' | 'ltr';
};
