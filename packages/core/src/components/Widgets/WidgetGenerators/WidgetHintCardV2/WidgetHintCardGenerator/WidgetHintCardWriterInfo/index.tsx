import { CustomImage } from '../../../../../ui/CustomImage';
import { CustomTypography } from '../../../../../ui/CustomTypography';
import { WidgetHintCardWriterInfoProps } from './types';

const WidgetHintCardWriterInfo = ({ writerSpeciality, writerName, writerIcon }: WidgetHintCardWriterInfoProps) => {
  return (
    <div className="w-full flex items-center gap-2" dir="rtl">
      <div className="relative min-w-10 min-h-10 max-w-10 max-h-10">
        <CustomImage src={writerIcon} objectFit="contain" />
      </div>

      <div className="flex flex-col">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </CustomTypography>
      </div>
    </div>
  );
};

export default WidgetHintCardWriterInfo;
