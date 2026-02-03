import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import CustomImage from '@components/ui/CustomImage';

import { ReportGeneratorProps } from './types';

const ReportGenerator = ({ icon, text, title, trailing, backgroundColor }: ReportGeneratorProps) => {
  return (
    <div
      className="w-full h-10 flex items-center rounded-lg justify-between px-4"
      style={{ backgroundColor: colorFormatConverter(backgroundColor) }}
    >
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Black">
        {trailing}
      </CustomTypography>

      <div className="flex items-center gap-2 h-full">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Black">
          {text}
        </CustomTypography>

        <div className="h-5 w-[1px] block bg-impo_Surface_OutlineVariant dark:bg-impo_Surface_Outline" />

        <CustomTypography fontSize="Lable_Medium" className="text-impo_Black">
          {title}
        </CustomTypography>

        <CustomImage src={icon} width={20} height={20} />
      </div>
    </div>
  );
};

export default ReportGenerator;
