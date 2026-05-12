import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { CustomTypography } from '../../ui/CustomTypography';
import { WidgetRoutinWriterProps } from './types';

export const RoutinWriter = ({ writerIcon, writerName, writerSpeciality }: WidgetRoutinWriterProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {writerName}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </CustomTypography>
      </div>

      <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
        <CustomImage_NEW fill src={writerIcon} />
      </div>
    </div>
  );
};
