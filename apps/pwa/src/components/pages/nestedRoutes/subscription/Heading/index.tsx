import Dark_Typography from '@components/ui/Dark_Typography';

import { HeadingProps } from './types';

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="relative flex flex-col items-center z-0">
      <Dark_Typography fontSize="Title_Large" className="text-center text-impo_Neutral_OnBackground">
        {title || ''}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="text-center text-impo_Neutral_OnBackground">
        {description || ''}
      </Dark_Typography>
    </div>
  );
};

export default Heading;
