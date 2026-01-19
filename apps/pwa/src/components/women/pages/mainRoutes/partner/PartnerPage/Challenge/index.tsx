import ChallengContext from './ChallengContext';
import LinkButtonGroup from './LinkButtonGroup';
import { ChallengePropsType } from './type';

const Challenge = ({ card, valid, button }: ChallengePropsType) => {
  return (
    <div className="mt-20 flex flex-col gap-3 py-4 ">
      {valid && <LinkButtonGroup button={button} valid={valid} />}

      {card.btnText || card.text ? <ChallengContext card={card} valid={valid} /> : null}
    </div>
  );
};

export default Challenge;
