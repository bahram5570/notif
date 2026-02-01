import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import useAnalytics from '@hooks/useAnalytics';

import CustomLink from '../../CustomLink';
import { ChallengContextPropsType } from './type';
import { buttonLinkHandler } from './utilis';

const ChallengContext = ({ card, valid }: ChallengContextPropsType) => {
  const { callEvent } = useAnalytics();

  return (
    <div className=" flex flex-col gap-4 py-4 px-2 rounded-xl shadow-sm bg-impo_Neutral_Surface">
      <div className="flex justify-center items-center px-2">
        <CustomImage src={card.leftIcon} style={{ scale: !valid ? '2' : 'inherit' }} />
        <div className="px-3">
          <CustomTypography fontSize="Lable_Large" className="text-center p-2 text-impo_Neutral_OnBackground">
            {card.text}
          </CustomTypography>
        </div>

        {card.rightIcon !== '' && <CustomImage src={card.rightIcon} />}
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
