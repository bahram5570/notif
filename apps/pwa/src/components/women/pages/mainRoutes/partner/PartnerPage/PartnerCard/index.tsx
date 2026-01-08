import { generateLinearGradient } from './utils';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { PartnerCardPropsType } from './type';

const PartnerCard = ({ partner, valid }: PartnerCardPropsType) => {
  const backgroundColor = partner.cycleCard?.gradient.length > 0 && generateLinearGradient(partner.cycleCard?.gradient);

  return (
    <div
      className="flex flex-col gap-4 py-6 px-10 rounded-xl  items-end border-impo_Neutral_Surface"
      style={{ border: `1px solid  ` }}
    >
      {partner.cycleTitle && (
        <div className="flex justify-between items-end ">
          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {partner.cycleTitle}
          </Dark_Typography>
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
              <Dark_Typography fontSize="Body_Medium" className="text-impo_White text-center">
                {partner.cycleCard.title}
              </Dark_Typography>
              <Dark_Typography fontSize="Headline_Small" className="text-impo_White text-center">
                {partner.cycleCard.subTitle}
              </Dark_Typography>
            </div>
            {/* {valid && (
              <CustomLink
                labelColor="PrimaryWoman_OnPrimary"
                backgroundColor={colors.Pink_500}
                color=""
                lable={partner.cycleCard.buttonText}
                style={{ width: 'fit-content', padding: '1em' }}
                labelSize="Medium"
                link={valid ? '/protected/calendar' : '/protected/partnerStart'}
              />
            )} */}
          </div>
          {partner.cycleCard.image && <CustomImage src={partner.cycleCard.image} className="min-w-[60px] " />}
        </div>

        {partner.cycleCard.trailing && (
          <Dark_Typography fontSize="Title_Medium" className="text-impo_White text-center w-full pt-3">
            {partner.cycleCard.trailing}
          </Dark_Typography>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
