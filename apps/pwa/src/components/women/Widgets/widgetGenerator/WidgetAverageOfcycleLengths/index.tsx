import Dark_Typography from '@components/ui/Dark_Typography';

import WidgetAverageOfcycleLengthsCard from './WidgetAverageOfcycleLengthsCard';
import { WidgetAverageOfcycleLengthsProps } from './types';

const WidgetAverageOfcycleLengths = ({ data, isPdfDownloading }: WidgetAverageOfcycleLengthsProps) => {
  return (
    <div className="w-full">
      <Dark_Typography
        fontSize="Title_Small"
        className={`text-impo_Neutral_OnBackground ml-auto ${isPdfDownloading && '!text-impo_Black'}`}
      >
        {data.title}
      </Dark_Typography>

      <div className="w-full flex gap-4 pt-4">
        <WidgetAverageOfcycleLengthsCard {...data.left} isPdfDownloading={isPdfDownloading} />
        <WidgetAverageOfcycleLengthsCard {...data.right} isPdfDownloading={isPdfDownloading} />
      </div>
    </div>
  );
};

export default WidgetAverageOfcycleLengths;
