import { CustomButtonTypes } from '@repo/core/components/ui/CustomButton';

export type ActivationBtnProps = Pick<
  CustomButtonTypes,
  'children' | 'isLoading' | 'navigationLoadingId' | 'onClick'
> & {
  showBtn?: boolean;
  btnTestId?: string;
};
