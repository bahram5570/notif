import { colorFormatConverter } from '@repo/core/utils/scripts';

import { CycleResponseTypes } from '@components/pages/mainRoutes/cycle/types';
import { WidgetsEnum } from '@repo/core/providers/WidgetActionsProvider';

export const textColorFinder = (data: undefined | CycleResponseTypes) => {
  let textColor = '#000000';

  if (data) {
    const cycleWidget = data.wigets.find((item) => item.type === WidgetsEnum.CycleCard);

    if (cycleWidget) {
      textColor = colorFormatConverter(cycleWidget.data.textColor);
    }
  }

  return textColor;
};
