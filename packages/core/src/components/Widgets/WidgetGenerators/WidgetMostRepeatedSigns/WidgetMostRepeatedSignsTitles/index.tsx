import { CustomImage } from '../../../../ui/CustomImage';
import { CustomTypography } from '../../../../ui/CustomTypography';
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
      <CustomTypography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
        {description}
      </CustomTypography>

      {!isPdfDownloading && (
        <div className="w-full flex items-center justify-end pt-[6px]">
          <CustomTypography fontSize="Body_Small" className="w-full text-impo_Neutral_OnBackground">
            {guideString}
          </CustomTypography>

          {guideImage && <CustomImage src={guideImage} width={16} height={16} className="pl-[2px]" />}

          <CustomTypography fontSize="Lable_SmallProminet" className="pl-1 text-impo_Neutral_OnBackground">
            {guidTitle}
          </CustomTypography>
        </div>
      )}
    </>
  );
};

export default WidgetMostRepeatedSignsTitles;
