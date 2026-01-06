import Dark_Typography from '@components/ui/Dark_Typography';

import CircleProgress from './CircleProgress';
import { WidgetAverageOfcycleLengthsCardProps } from './types';

const WidgetAverageOfcycleLengthsCard = ({
  isPdfDownloading,
  centeralText,
  filledLength,
  description,
  length,
  title,
}: WidgetAverageOfcycleLengthsCardProps) => {
  return (
    <div
      className="w-full  rounded-2xl flex items-center p-4 pb-1 bg-impo_Neutral_Background"
      style={{
        flexDirection: isPdfDownloading ? 'row' : 'column',
        justifyContent: isPdfDownloading ? 'flex-end' : 'center',
      }}
    >
      <div className="flex flex-col" style={{ alignItems: isPdfDownloading ? 'flex-end' : 'center' }}>
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {title}
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center pt-1">
          {description}
        </Dark_Typography>
      </div>

      <CircleProgress length={length} filledLength={filledLength} centeralText={centeralText} />
    </div>
  );
};

export default WidgetAverageOfcycleLengthsCard;
