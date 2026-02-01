import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomSlider from '@components/ui/CustomSlider';

import { WidgetPeriodReportCardGuidesPropsType } from './type';

const WidgetPeriodReportCardGuides = ({ isPdfDownloading }: WidgetPeriodReportCardGuidesPropsType) => {
  return (
    <div className="w-full pt-1">
      <CustomSlider className="items-baseline">
        <CustomTypography
          fontSize="Lable_SmallProminet"
          className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
        >
          راهنما:
        </CustomTypography>

        <div className="flex items-center gap-1 min-w-fit">
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
          >
            طول پریود هر دوره
          </CustomTypography>

          <div className="w-2 h-2 rounded-full bg-impo_Primary_Primary" />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
          >
            طول سیکل هر دوره
          </CustomTypography>

          <div className="w-2 h-2 rounded-full bg-impo_Neutral_Surface" />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
          >
            طول دوره ثبت‌شده
          </CustomTypography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md bg-impo_Pink_200" />
            <div className="w-3 h-1 rounded-md bg-impo_Pink_200" />
          </div>
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <CustomTypography
            fontSize="Body_Small"
            className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
          >
            طول پریود ثبت‌شده
          </CustomTypography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md bg-impo_Pink_400" />
            <div className="w-3 h-1 rounded-md bg-impo_Pink_400" />
          </div>
        </div>
      </CustomSlider>
    </div>
  );
};

export default WidgetPeriodReportCardGuides;
