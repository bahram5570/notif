import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { WidgetHintCardWriterInfoProps } from './types';

const WidgetHintCardWriterInfo = ({ writerSpeciality, writerName, writerIcon }: WidgetHintCardWriterInfoProps) => {
  return (
    <div className="w-full flex items-center gap-2" dir="rtl">
      <div className="relative w-11 h-11">
        <CustomImage width={44} height={44} src={writerIcon} objectFit="contain" />
      </div>

      <div className="flex flex-col">
        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </CustomTypography>

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </CustomTypography>
      </div>
    </div>
  );
};

export default WidgetHintCardWriterInfo;
