import Dark_Typography from '@components/ui/Dark_Typography';

import { ChallengeHeaderPropsType } from './type';

const ChallengeHeader = ({ date, status }: ChallengeHeaderPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <Dark_Typography fontSize="Title_Medium" className="w-full text-center text-impo_Primary_Primary">
        {date}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Large" className="w-full text-center text-impo_Neutral_OnBackground">
        {status}
      </Dark_Typography>
    </div>
  );
};

export default ChallengeHeader;
