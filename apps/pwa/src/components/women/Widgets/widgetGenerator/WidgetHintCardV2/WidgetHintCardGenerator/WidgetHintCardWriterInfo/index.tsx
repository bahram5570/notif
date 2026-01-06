import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetHintCardWriterInfoProps } from './types';

const WidgetHintCardWriterInfo = ({ writerSpeciality, writerName, writerIcon }: WidgetHintCardWriterInfoProps) => {
  return (
    <div className="w-full flex items-center gap-2" dir="rtl">
      <div className="relative min-w-10 min-h-10 max-w-10 max-h-10">
        <CustomImage src={writerIcon} objectFit="contain" />
      </div>

      <div className="flex flex-col">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default WidgetHintCardWriterInfo;
