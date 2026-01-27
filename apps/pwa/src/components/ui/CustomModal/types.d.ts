export interface CustomModalProps {
  isOpen?: boolean;
  className?: string;
  isFullScreen?: boolean;
  isSlidingMode?: boolean;
  children: React.ReactNode;
  zIndex?: number;
}
