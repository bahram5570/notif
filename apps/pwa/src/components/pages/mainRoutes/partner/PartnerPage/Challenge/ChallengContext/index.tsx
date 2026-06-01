import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import CustomLink from '../../CustomLink';
import { ChallengContextPropsType } from './type';
import { buttonLinkHandler } from './utilis';

const ChallengContext = ({ card, valid }: ChallengContextPropsType) => {
  const { callEvent } = useAnalytics();

  return (
    <div className=" flex flex-col gap-4 py-4 px-2 rounded-xl shadow-sm bg-impo_Neutral_Surface">
      <div className="flex justify-center items-center px-2">
        <div className="w-full relative aspect-square">
          <CustomImage_NEW src={card.leftIcon} fill />
        </div>

        <div className="px-3 w-full">
          <CustomTypography fontSize="Lable_Large" className="text-center p-2 text-impo_Neutral_OnBackground">
            {card.text}
          </CustomTypography>
        </div>

        {card.rightIcon !== '' && (
          <div className="w-full relative aspect-square">
            <CustomImage_NEW src={card.rightIcon} fill />
          </div>
        )}
      </div>

      {card.btnText && (
        <CustomLink
          lable={card.btnText}
          link={buttonLinkHandler(card.link)}
          onClick={() => callEvent('Pair_TAB')}
          id={`Challenge-${card.btnText}`}
        />
      )}
    </div>
  );
};

export default ChallengContext;
