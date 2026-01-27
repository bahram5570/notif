import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

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
        <Dark_Typography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
          {title}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {description}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default PregnancySettingsLinkGenerator;
