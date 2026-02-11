import { CustomTypography } from '../../../../ui/CustomTypography';
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
      className={`w-full  rounded-2xl flex items-center p-4 pb-1 bg-impo_Neutral_Background   ${isPdfDownloading && '!bg-impo_White'}`}
      style={{
        flexDirection: isPdfDownloading ? 'row' : 'column',
        justifyContent: isPdfDownloading ? 'flex-end' : 'center',
      }}
    >
      <div className="flex flex-col" style={{ alignItems: isPdfDownloading ? 'flex-end' : 'center' }}>
        <CustomTypography
          fontSize="Lable_Large"
          className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'}`}
        >
          {title}
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Small"
          className={`text-impo_Neutral_OnBackground ${isPdfDownloading && '!text-impo_Black'} text-center pt-1`}
        >
          {description}
        </CustomTypography>
      </div>

      <CircleProgress
        length={length}
        filledLength={filledLength}
        centeralText={centeralText}
        isPdfDownloading={isPdfDownloading}
      />
    </div>
  );
};

export default WidgetAverageOfcycleLengthsCard;
