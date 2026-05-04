export interface ApproveModalsModulepProps {
  applyHandler: () => void;
  cancelButtonText: string;
  applyButtonText: string;
  icon?: React.ReactNode;
  description: string;
  isLoading: boolean;
  isOpen: boolean;
  title: string;
  id?: string;
  zIndex?: number;
}
