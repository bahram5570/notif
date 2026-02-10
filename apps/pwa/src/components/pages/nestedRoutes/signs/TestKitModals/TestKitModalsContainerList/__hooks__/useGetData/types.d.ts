import { BabyCheckTypeEnums, KitTestModuleTypeEnums } from '@repo/core/providers/WidgetActionsProvider';

import { TestKitModalsContainerListProps } from '../../types';

export interface UseGetDataProps extends TestKitModalsContainerListProps {}

type KitTestHistoryOvulationType = {
  title: string;
  moduleType: KitTestModuleTypeEnums.Ovulation;
  data: null | { result: number; createTime: string };
};

type KitTestHistoryBabyCheckType = {
  moduleType: KitTestModuleTypeEnums.BabyCheck;
  title: string;
  data: { type: BabyCheckTypeEnums; result: number; createTime: string }[];
};

export type KitTestHistoryTypes = KitTestHistoryOvulationType | KitTestHistoryBabyCheckType | null;
