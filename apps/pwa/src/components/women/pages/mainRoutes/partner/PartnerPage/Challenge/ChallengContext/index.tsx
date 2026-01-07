import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';

import CustomLink from '../../CustomLink';
import { ChallengContextPropsType } from './type';
import { buttonLinkHandler } from './utilis';

const ChallengContext = ({ card, valid }: ChallengContextPropsType) => {
  const { callEvent } = useAnalytics();

  return (
    <div className=" flex flex-col gap-4 p-4 rounded-xl shadow-sm bg-impo_Neutral_Background">
      <div className="flex justify-center items-center px-2">
        <CustomImage src={card.leftIcon} style={{ scale: !valid ? '2' : 'inherit' }} />
        <div className="px-3">
          <Dark_Typography fontSize="Lable_Large" className="text-center p-2 text-impo_Neutral_OnBackground">
            {card.text}
          </Dark_Typography>
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
