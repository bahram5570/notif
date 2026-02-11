import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { PregnancySettingsLinkGeneratorProps } from './types';

const PregnancySettingsLinkGenerator = ({
  selectHandler,
  description,
  phaseType,
  title,
}: PregnancySettingsLinkGeneratorProps) => {
  return (
    <div
      className="w-full rounded-xl flex items-center justify-between p-4 cursor-pointer bg-impo_Neutral_Background"
      onClick={() => selectHandler(phaseType)}
    >
      <ArrowIcon className="w-4 h-auto stroke-impo_Surface_Outline" />

      <div className="flex flex-col gap-1" dir="rtl">
        <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default PregnancySettingsLinkGenerator;
