import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetMostRepeatedSignsTitlesProps } from './types';

const WidgetMostRepeatedSignsTitles = ({
  isPdfDownloading,
  guidDescription,
  description,
  guidTitle,
}: WidgetMostRepeatedSignsTitlesProps) => {
  const guidDescriptionUrl = guidDescription.match(/<(.*?)>/)?.[0];
  const guideImage = guidDescriptionUrl ? guidDescriptionUrl.replace('<[', '').replace(']>', '') : null;
  const guideString = guidDescriptionUrl ? guidDescription.replace(guidDescriptionUrl, '') : guidDescription;

  return (
    <>
      <Dark_Typography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
        {description}
      </Dark_Typography>

      {!isPdfDownloading && (
        <div className="w-full flex items-center justify-end pt-[6px]">
          <Dark_Typography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
            {guideString}
          </Dark_Typography>

          {guideImage && <CustomImage src={guideImage} width={16} height={16} className="pl-[2px]" />}

          <Dark_Typography fontSize="Lable_SmallProminet" className="pl-1 text-impo_Neutral_OnBackground">
            {guidTitle}
          </Dark_Typography>
        </div>
      )}
    </>
  );
};

export default WidgetMostRepeatedSignsTitles;
