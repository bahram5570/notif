import { CustomTypography } from '../../../ui/CustomTypography';
import WidgetAverageOfcycleLengthsCard from './WidgetAverageOfcycleLengthsCard';
import { WidgetAverageOfcycleLengthsProps } from './types';

export const WidgetAverageOfcycleLengths = ({ data, isPdfDownloading }: WidgetAverageOfcycleLengthsProps) => {
  return (
    <div className="w-full">
      <CustomTypography
        fontSize="Title_Small"
        className={`text-impo_Neutral_OnBackground ml-auto ${isPdfDownloading && '!text-impo_Black'}`}
      >
        {data.title}
      </CustomTypography>

      <div className="w-full flex gap-4 pt-4">
        <WidgetAverageOfcycleLengthsCard {...data.left} isPdfDownloading={isPdfDownloading} />
        <WidgetAverageOfcycleLengthsCard {...data.right} isPdfDownloading={isPdfDownloading} />
      </div>
    </div>
  );
};
