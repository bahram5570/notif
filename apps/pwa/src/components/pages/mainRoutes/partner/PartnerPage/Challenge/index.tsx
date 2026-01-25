import Dark_Button from '@components/ui/Dark_Button';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import ChallengContext from './ChallengContext';
import LinkButtonGroup from './LinkButtonGroup';
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
            <Dark_Button fontSize="Lable_Large" onClick={clickHandler}>
              گفتگو با همدل
            </Dark_Button>
          </div>
        </>
      )}

      {card.btnText || card.text ? <ChallengContext card={card} valid={valid} /> : null}
    </div>
  );
};

export default Challenge;
