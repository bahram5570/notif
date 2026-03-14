import { PartnerCustomLink } from '@repo/core/components/partner/PartnerCustomLink';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { ChallengContextPropsType } from './type';
import { buttonLinkHandler } from './utilis';

const ChallengContext = ({ card, valid }: ChallengContextPropsType) => {
  const { callEvent } = useAnalytics();

  return (
    <div className=" flex flex-col gap-4 py-4 px-2 rounded-xl shadow-sm bg-impo_Neutral_Surface">
      <div className="flex justify-center items-center px-2">
        {/* <CustomImage src={card.leftIcon} style={{ scale: !valid ? '2' : 'inherit' }} /> */}
        <CustomImage src={card.leftIcon} className="w-1/4 " />

        <div className="px-3 w-full">
          <CustomTypography fontSize="Lable_Large" className="text-center p-2 text-impo_Neutral_OnBackground">
            {card.text}
          </CustomTypography>
        </div>

        {card.rightIcon !== '' && <CustomImage src={card.rightIcon} className="w-1/4" />}
      </div>
      {card.btnText && (
        <PartnerCustomLink
          lable={card.btnText}
          link={buttonLinkHandler(card.link)}
          onClick={() => callEvent('Pair_TAB')}
          id={`Challenge-${card.btnText}`}
          className=" !bg-impo_PrimaryMan_PrimaryMan text-impo_White"
        />
      )}
    </div>
  );
};

export default ChallengContext;
