import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { RoutinHeadingProps } from './types';

const RoutinHeading = ({ image, description, title }: RoutinHeadingProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-5 pb-4">
      <CustomImage src={image} width={88} height={88} />

      <div className="flex flex-col items-end gap-2">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {title}
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {description}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default RoutinHeading;
