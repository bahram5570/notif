import { useEffect, useState } from 'react';

import { CycleThemeEnum } from '@services/loginServices/enum';

import { getUserInfoCookie } from '@actions/userCookies.actions';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { CurrentCycleTypes } from './types';

const useCycleThemeFinder = () => {
  const [currentCycle, setCurrentCycle] = useState<CurrentCycleTypes>(WidgetsEnum.CycleCard);
  const [currentCycleThemeEnum, setCurrentCycleThemeEnum] = useState<CycleThemeEnum | null>(null);

  useEffect(() => {
    const handleCycleTheme = async () => {
      const user = await getUserInfoCookie();
      const cycleTheme = (user?.cycleTheme || CycleThemeEnum.Flat) as CycleThemeEnum;

      switch (cycleTheme) {
        case CycleThemeEnum.None:
          setCurrentCycle(WidgetsEnum.CycleCard);
          break;

        case CycleThemeEnum.Flat:
          setCurrentCycle(WidgetsEnum.CycleCard);
          break;

        case CycleThemeEnum.Circule:
          setCurrentCycle(WidgetsEnum.CirculeCycleCard);
          break;

        default:
          setCurrentCycle(WidgetsEnum.CycleCard);
          break;
      }

      setCurrentCycleThemeEnum(cycleTheme);
    };

    handleCycleTheme();
  }, []);

  return { currentCycle, currentCycleThemeEnum };
};

export default useCycleThemeFinder;
