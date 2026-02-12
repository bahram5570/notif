import NeedToInvestigateIcon from '@assets/shared/icons/needToInvestigate.svg';

import { CustomSlider } from '../../../../ui/CustomSlider';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { WidgetPeriodCycleHistoryGuidesPropsType } from './types';

export const WidgetPeriodCycleHistoryGuides = ({ isPdfDownloading }: WidgetPeriodCycleHistoryGuidesPropsType) => {
  const list = [
    {
      title: 'پریود',
      el: <div className="w-2 h-2 rounded-full bg-impo_Primary_Primary" />,
    },
    {
      title: 'روز عادی',
      el: <div className="w-2 h-2 rounded-full bg-impo_Surface_OutlineVariant" />,
    },
    {
      title: 'روز تخمک‌گذاری',
      el: <div className="w-2 h-2 rounded-full bg-impo_Calendar_Fertility_Ovulation" />,
    },
    {
      title: 'دوره نیاز به بررسی',
      el: <NeedToInvestigateIcon className="w-5 h-auto" />,
    },
  ];

  return (
    <div
      className={`w-full rounded-lg py-3 mt-3 bg-impo_Neutral_Surface ${isPdfDownloading && '!bg-impo_Neutral_Surface dark:!bg-impo_Neutral_OnSurface'}`}
    >
      <CustomSlider gap={12} sidePadding={8}>
        {list.map((item, index) => (
          <div className="flex items-center gap-1 min-w-fit" key={index}>
            <CustomTypography
              fontSize="Body_Small"
              className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
            >
              {item.title}
            </CustomTypography>

            <>{item.el}</>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};
