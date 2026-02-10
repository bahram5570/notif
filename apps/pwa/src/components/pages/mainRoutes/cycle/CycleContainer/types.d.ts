import { WidgetsTypes } from '@repo/core/providers/WidgetActionsProvider';

import { CycleResponseTypes } from '../types';

export interface ContainerProps {
  children?: React.ReactNode;
  customAppBar?: React.ReactNode;
  data: CycleResponseTypes | undefined;
}
