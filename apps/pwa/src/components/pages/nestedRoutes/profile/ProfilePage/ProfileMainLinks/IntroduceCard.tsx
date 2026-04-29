import IntroduceIcon from '@assets/icons/profile/introduce.svg';

import CardGenerator from './CardGenerator';

const IntroduceCard = () => {
  return (
    <CardGenerator
      backgroundColor="#F5F3FE"
      script="معرفی به دوستان"
      linkTo="/protected/identifictionCode"
      Icon={<IntroduceIcon className="w-9 h-auto" />}
    />
  );
};

export default IntroduceCard;
