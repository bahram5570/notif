export interface CustomModalProps {
  zIndex?: number;
  isOpen?: boolean;
  className?: string;
  isFullScreen?: boolean;
  isSlidingMode?: boolean;
  children: React.ReactNode;
}
