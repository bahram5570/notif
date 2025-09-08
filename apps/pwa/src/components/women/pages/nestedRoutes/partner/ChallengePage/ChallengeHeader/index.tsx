import Typography from '@components/ui/Typography';

import { ChallengeHeaderPropsType } from './type';

const ChallengeHeader = ({ date, status }: ChallengeHeaderPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography scale="Title" size="Medium" color="PrimaryWoman_Primary" className="w-full" textAlign="center">
        {date}
      </Typography>
      <Typography scale="Body" size="Large" color="Black" className="w-full" textAlign="center">
        {status}
      </Typography>
    </div>
  );
};

export default ChallengeHeader;
