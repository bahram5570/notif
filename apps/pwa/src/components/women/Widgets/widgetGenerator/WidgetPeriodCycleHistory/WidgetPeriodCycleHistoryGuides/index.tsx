import NeedToInvestigateIcon from '@assets/icons/needToInvestigate.svg';

import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';

const WidgetPeriodCycleHistoryGuides = () => {
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
    <div className="w-full rounded-lg py-3 mt-3 bg-impo_Surface_SurfaceVariant">
      <CustomSlider gap={12} sidePadding={8}>
        {list.map((item, index) => (
          <div className="flex items-center gap-1 min-w-fit" key={index}>
            <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {item.title}
            </Dark_Typography>

            <>{item.el}</>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default WidgetPeriodCycleHistoryGuides;
