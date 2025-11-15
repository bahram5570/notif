import { ButtonProps } from '@components/ui/Button/types';

export type ActivationBtnProps = Pick<ButtonProps, 'children' | 'isLoading' | 'navigationLoadingId' | 'onClick'> & {
  showBtn?: boolean;
  width?: number | string;
  btnTestId?: string;
};
