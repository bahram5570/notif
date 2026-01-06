import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { ReportGeneratorProps } from './types';

const ReportGenerator = ({ icon, text, title, trailing, backgroundColor }: ReportGeneratorProps) => {
  return (
    <div
      className="w-full h-10 flex items-center rounded-lg justify-between px-4"
      style={{ backgroundColor: colorFormatConverter(backgroundColor) }}
    >
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Black">
        {trailing}
      </Dark_Typography>

      <div className="flex items-center gap-2 h-full">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Black">
          {text}
        </Dark_Typography>

        <div className="h-5 w-[1px] block bg-impo_Surface_Outline" />

        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Black">
          {title}
        </Dark_Typography>

        <CustomImage src={icon} width={20} height={20} />
      </div>
    </div>
  );
};

export default ReportGenerator;
