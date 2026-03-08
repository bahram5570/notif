import { generateLinearGradient } from './utils';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { PartnerCardPropsType } from './type';

const PartnerCard = ({ partner, valid }: PartnerCardPropsType) => {
  const backgroundColor = partner.cycleCard?.gradient.length > 0 && generateLinearGradient(partner.cycleCard?.gradient);

  return (
    <div className="flex flex-col gap-4 py-6  items-end ">
      {partner.cycleTitle && (
        <div className="flex justify-between items-end ">
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {partner.cycleTitle}
          </CustomTypography>
        </div>
      )}

      <div
        className={`divide-y-[1px] divide-opacity-20 flex flex-col ${!valid ? 'py-5' : 'py-4'} px-4  items-center rounded-[18px]  w-full ${!backgroundColor && 'bg-impo_White'}`}
        style={{
          background: backgroundColor || '',
        }}
      >
        <div className=" flex flex-row gap-2  sm:px-4 py-3  items-center rounded-xl  w-full mb-2">
          <div className="w-full flex flex-col gap-2 items-end">
            <div className="flex flex-col gap-2 items-end">
              <CustomTypography
                fontSize="Body_Medium"
                className={` text-center ${valid ? 'text-impo_White' : 'text-impo_Black'}`}
              >
                {partner.cycleCard.title}
              </CustomTypography>
              <CustomTypography
                fontSize="Headline_Small"
                className={` text-center ${valid ? 'text-impo_White' : 'text-impo_Black'}`}
              >
                {partner.cycleCard.subTitle}
              </CustomTypography>
            </div>
          </div>
          {partner.cycleCard.image && <CustomImage src={partner.cycleCard.image} className="min-w-[60px] " />}
        </div>

        {partner.cycleCard.trailing && (
          <CustomTypography fontSize="Title_Medium" className="text-impo_White text-center w-full pt-3">
            {partner.cycleCard.trailing}
          </CustomTypography>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
