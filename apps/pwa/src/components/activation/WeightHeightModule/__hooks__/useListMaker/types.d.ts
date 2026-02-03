import { WheelPickerItemTypes } from '@repo/core/components/ui/WheelPicker';

import { WeightHeightModuleProps } from '../../types';

export interface UseListMakerProps extends Pick<WeightHeightModuleProps, 'type'> {}

export type DataListTypes = { list: WheelPickerItemTypes[]; defaultValue: number } | null;
