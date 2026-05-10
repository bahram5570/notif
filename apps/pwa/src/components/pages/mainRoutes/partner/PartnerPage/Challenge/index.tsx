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
      showProgressBar: false,
      linkTo: '/protected/newPartnerMessage',
    });
  };

  return (
    <div className="mt-20 flex flex-col gap-3 py-4 ">
      {valid && (
        <>
          <LinkButtonGroup button={button} valid={valid} />
          <div className=" mt-2">
            <CustomButton fontSize="Lable_Large" onClick={clickHandler}>
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
