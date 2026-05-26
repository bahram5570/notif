import { LinkButtonGroup } from '@repo/core/components/partner/LinkButtonGroup';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import ChallengContext from './ChallengContext';
import { ChallengePropsType } from './type';

const Challenge = ({ card, valid, button }: ChallengePropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    pageNavigationHandler({
      id: 'newPartnerMessage',

      linkTo: '/protected/newPartnerMessage',
    });
  };

  return (
    <div className="pt-28 flex flex-col gap-3 p-4  ">
      {valid && (
        <>
          <LinkButtonGroup button={button} valid={valid} />
          <div className=" mt-2">
            <CustomButton
              fontSize="Lable_Large"
              className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
              onClick={clickHandler}
            >
              گفتگو با همدل
            </CustomButton>
          </div>
        </>
      )}

      {card.btnText || card.text ? <ChallengContext card={card} valid={valid} /> : null}
    </div>
  );
};

export default Challenge;
