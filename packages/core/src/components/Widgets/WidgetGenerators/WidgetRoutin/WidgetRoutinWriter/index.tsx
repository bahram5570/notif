import { CustomImage } from '../../../../ui/CustomImage';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { WidgetRoutinWriterProps } from './types';

const WidgetRoutinWriter = ({ writerName, writerSpeciality, writerIcon }: WidgetRoutinWriterProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </CustomTypography>
      </div>

      <div className="relative w-10 h-10 min-w-10 min-h-10 rounded-full">
        <CustomImage src={writerIcon} />
      </div>
    </div>
  );
};

export default WidgetRoutinWriter;
