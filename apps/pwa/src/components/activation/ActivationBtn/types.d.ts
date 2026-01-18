import { Dark_ButtonTypes } from '@components/ui/Dark_Button/types';

export type ActivationBtnProps = Pick<
  Dark_ButtonTypes,
  'children' | 'isLoading' | 'navigationLoadingId' | 'onClick'
> & {
  showBtn?: boolean;
  btnTestId?: string;
};
