import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';

const WidgetPeriodReportEmptyStateCardGuides = () => {
  return (
    <div className="-mx-4 pt-1">
      <CustomSlider className="items-baseline" sidePadding={16}>
        <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
          راهنما:
        </Dark_Typography>

        <div className="flex items-center gap-1 min-w-fit">
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            طول پریود هر دوره
          </Dark_Typography>

          <div className="w-2 h-2 rounded-full bg-impo_Primary_Primary" />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            طول سیکل هر دوره
          </Dark_Typography>

          <div className="w-2 h-2 rounded-full bg-impo_Neutral_Surface" />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            طول دوره ثبت‌شده
          </Dark_Typography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md bg-pink-50" />
            <div className="w-3 h-1 rounded-md bg-pink-50" />
          </div>
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            طول پریود ثبت‌شده
          </Dark_Typography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md bg-pink-400" />
            <div className="w-3 h-1 rounded-md bg-pink-400" />
          </div>
        </div>
      </CustomSlider>
    </div>
  );
};

export default WidgetPeriodReportEmptyStateCardGuides;
