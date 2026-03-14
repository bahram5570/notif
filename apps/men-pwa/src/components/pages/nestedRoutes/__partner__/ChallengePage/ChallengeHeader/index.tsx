import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ChallengeHeaderPropsType } from './type';

const ChallengeHeader = ({ date, status }: ChallengeHeaderPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <CustomTypography fontSize="Title_Medium" className="w-full text-center text-impo_PrimaryMan_PrimaryMan">
        {date}
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="w-full text-center text-impo_Neutral_OnBackground">
        {status}
      </CustomTypography>
    </div>
  );
};

export default ChallengeHeader;
