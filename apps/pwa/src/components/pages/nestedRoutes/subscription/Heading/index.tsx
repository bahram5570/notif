import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HeadingProps } from './types';

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="relative flex flex-col items-center z-0">
      <CustomTypography fontSize="Title_Large" className="text-center text-impo_Neutral_OnBackground">
        {title || ''}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="text-center text-impo_Neutral_OnBackground">
        {description || ''}
      </CustomTypography>
    </div>
  );
};

export default Heading;
