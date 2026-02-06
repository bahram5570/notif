import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import PragnencyBreastfeedingGenerator from './PragnencyBreastfeedingGenerator';
import { WidgetPragnencyBreastfeedingCardProps } from './types';

const WidgetPragnencyBreastfeedingCard = ({ data }: WidgetPragnencyBreastfeedingCardProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'PregnancyWidgetSeenMoreThan5Sec' });

  // const backgroundColor = colors.Neutral_Background.toLowerCase() + 'b3';

  return (
    <div className="px-4 pt-6">
      <div className="flex flex-col gap-2 w-full py-2 px-3 rounded-xl bg-impo_Neutral_Background" ref={inViewRef}>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex flex-col items-end gap-2 w-full pt-5">
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              {data.title}
            </CustomTypography>

            <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
              {data.description}
            </CustomTypography>

            <div className="w-full h-[1px] block bg-impo_Neutral_Surface" />

            {data.tiles.map((item, index) => (
              <PragnencyBreastfeedingGenerator {...item} key={index} />
            ))}
          </div>

          <CustomImage src={data.image} width={150} objectFit="cover" />
        </div>

        <div className="w-full h-[1px] block bg-impo_Neutral_Surface" />

        <div className="flex items-center justify-end gap-2">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-right">
            {data.trailing}
          </CustomTypography>

          {data.trailingIcon && <CustomImage src={data.trailingIcon} width={56} className="rounded-full " />}
        </div>
      </div>
    </div>
  );
};

export default WidgetPragnencyBreastfeedingCard;
